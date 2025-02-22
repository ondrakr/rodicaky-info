<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Získání dat z formuláře
    $data = json_decode(file_get_contents("php://input"), true);
    
    $school = htmlspecialchars($data['school']);
    $email = htmlspecialchars($data['email']);
    $message = htmlspecialchars($data['message']);
    
    // E-mailová adresa příjemce
    $to = "vas@email.cz"; // Změňte na váš e-mail
    
    // Předmět e-mailu
    $subject = "Nová zpráva z kontaktního formuláře - " . $school;
    
    // Obsah e-mailu
    $email_content = "Název školy: " . $school . "\n";
    $email_content .= "E-mail: " . $email . "\n";
    $email_content .= "Zpráva: " . $message . "\n";
    
    // Hlavičky
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Odeslání e-mailu
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(["status" => "success", "message" => "E-mail byl úspěšně odeslán"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Došlo k chybě při odesílání e-mailu"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Neplatná metoda požadavku"]);
}
?> 