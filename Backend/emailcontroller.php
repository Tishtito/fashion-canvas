<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (preg_match('#^https?://(localhost|127\.0\.0\.1)(:\d+)?$#', $origin) === 1) {
    header("Access-Control-Allow-Origin: {$origin}");
    header('Vary: Origin');
}

header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Only POST requests are allowed.']);
}

$autoload = __DIR__ . '/vendor/autoload.php';
if (!is_file($autoload)) {
    respond(500, ['ok' => false, 'message' => 'Mailer dependency is not installed.']);
}

require $autoload;

$rawBody = file_get_contents('php://input') ?: '';
$data = json_decode($rawBody, true);

if (!is_array($data)) {
    $data = $_POST;
}

$fields = [
    'name' => trim((string)($data['name'] ?? '')),
    'email' => trim((string)($data['email'] ?? '')),
    'phone' => trim((string)($data['phone'] ?? '')),
    'service' => trim((string)($data['service'] ?? '')),
    'date' => trim((string)($data['date'] ?? '')),
    'budget' => trim((string)($data['budget'] ?? '')),
    'message' => trim((string)($data['message'] ?? '')),
];

foreach (['name', 'email', 'service', 'message'] as $requiredField) {
    if ($fields[$requiredField] === '') {
        respond(422, ['ok' => false, 'message' => 'Please fill in all required fields.']);
    }
}

if (filter_var($fields['email'], FILTER_VALIDATE_EMAIL) === false) {
    respond(422, ['ok' => false, 'message' => 'Please enter a valid email address.']);
}

$smtpUsername = getenv('SMTP_USERNAME') ?: '';
$smtpPassword = getenv('SMTP_PASSWORD') ?: '';
$fromName = getenv('MAIL_FROM_NAME') ?: 'Jeannete Hope Wangara Portfolio';

if ($smtpUsername === '' || $smtpPassword === '') {
    respond(500, ['ok' => false, 'message' => 'Mailer credentials are not configured.']);
}

$recipient = 'hopejeannete@gmail.com';
$subject = 'New booking request from ' . $fields['name'];
$submittedAt = date('Y-m-d H:i:s T');

$escape = static fn(string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$display = static fn(string $value): string => $value === '' ? 'Not provided' : $value;

$htmlBody = sprintf(<<<HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New booking request</title>
  </head>
  <body style="margin:0;padding:0;background:#f4efe7;font-family:Arial,Helvetica,sans-serif;color:#23140c;">
    <table role="presentation" width="100%%" cellspacing="0" cellpadding="0" style="background:#f4efe7;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#fffaf2;border:1px solid #dfcfb5;">
            <tr>
              <td style="background:#23140c;padding:28px 32px;color:#d0ba98;">
                <p style="margin:0 0 10px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c94a50;">Jeannete Hope Wangara Portfolio</p>
                <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.15;font-weight:500;color:#fff4df;">New booking request</h1>
                <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:#d0ba98;">%s is interested in %s.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <table role="presentation" width="100%%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:0 0 16px;width:50%%;vertical-align:top;">
                      <p style="margin:0 0 5px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#91040c;">Full name</p>
                      <p style="margin:0;font-size:16px;line-height:1.45;color:#23140c;">%s</p>
                    </td>
                    <td style="padding:0 0 16px;width:50%%;vertical-align:top;">
                      <p style="margin:0 0 5px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#91040c;">Email</p>
                      <p style="margin:0;font-size:16px;line-height:1.45;color:#23140c;"><a href="mailto:%s" style="color:#23140c;text-decoration:underline;">%s</a></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 16px;width:50%%;vertical-align:top;">
                      <p style="margin:0 0 5px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#91040c;">Phone</p>
                      <p style="margin:0;font-size:16px;line-height:1.45;color:#23140c;">%s</p>
                    </td>
                    <td style="padding:0 0 16px;width:50%%;vertical-align:top;">
                      <p style="margin:0 0 5px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#91040c;">Preferred date</p>
                      <p style="margin:0;font-size:16px;line-height:1.45;color:#23140c;">%s</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 16px;width:50%%;vertical-align:top;">
                      <p style="margin:0 0 5px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#91040c;">Service</p>
                      <p style="margin:0;font-size:16px;line-height:1.45;color:#23140c;">%s</p>
                    </td>
                    <td style="padding:0 0 16px;width:50%%;vertical-align:top;">
                      <p style="margin:0 0 5px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#91040c;">Budget</p>
                      <p style="margin:0;font-size:16px;line-height:1.45;color:#23140c;">%s</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:4px 32px 28px;">
                <div style="background:#f2e7d7;border-left:4px solid #91040c;padding:20px 22px;">
                  <p style="margin:0 0 8px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#91040c;">Message</p>
                  <p style="margin:0;font-size:15px;line-height:1.7;color:#23140c;">%s</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 32px;">
                <a href="mailto:%s" style="display:inline-block;background:#91040c;color:#fff4df;text-decoration:none;padding:13px 20px;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Reply to client</a>
                <p style="margin:18px 0 0;font-size:12px;line-height:1.6;color:#735f4b;">Submitted on %s from the website contact form.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
HTML,
    $escape($fields['name']),
    $escape($fields['service']),
    $escape($fields['name']),
    $escape($fields['email']),
    $escape($fields['email']),
    $escape($display($fields['phone'])),
    $escape($display($fields['date'])),
    $escape($fields['service']),
    $escape($display($fields['budget'])),
    nl2br($escape($fields['message'])),
    $escape($fields['email']),
    $escape($submittedAt),
);

$textBody = <<<TEXT
New booking request

Name: {$fields['name']}
Email: {$fields['email']}
Phone: {$fields['phone']}
Service: {$fields['service']}
Preferred date: {$fields['date']}
Budget: {$fields['budget']}

Message:
{$fields['message']}

Submitted: {$submittedAt}
TEXT;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom($smtpUsername, $fromName);
    $mail->addAddress($recipient);
    $mail->addReplyTo($fields['email'], $fields['name']);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $htmlBody;
    $mail->AltBody = $textBody;

    $mail->send();

    respond(200, ['ok' => true]);
} catch (Exception) {
    respond(500, ['ok' => false, 'message' => 'Unable to send request right now.']);
}
