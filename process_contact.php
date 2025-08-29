<?php
// Verifică dacă cererea este de tip POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Adresa de email a destinatarului
    $to_email = "contact@simonaistrate.com"; // <-- Schimbă cu adresa ta de email!
    
    // Extrage și curăță datele din formular
    $first_name = trim(htmlspecialchars($_POST["first-name"]));
    $last_name = trim(htmlspecialchars($_POST["last-name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $topic = trim(htmlspecialchars($_POST["topic"]));
    $message = trim(htmlspecialchars($_POST["message"]));

    // Subiectul email-ului
    $subject = "Mesaj nou de pe site: " . $topic;

    // Conținutul email-ului
    $email_body = "Ai primit un mesaj nou de la " . $first_name . " " . $last_name . ".\n\n" .
                  "Subiect: " . $topic . "\n" .
                  "Email: " . $email . "\n" .
                  "Mesaj:\n" . $message;

    // Header-ele email-ului
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Verifică dacă adresa de email este validă și trimite email-ul
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        if (mail($to_email, $subject, $email_body, $headers)) {
            // Trimite utilizatorul înapoi la o pagină de succes sau afișează un mesaj
            header("Location: https://www.simonaistrate.com/success.html");
            exit();
        } else {
            // Trimite utilizatorul înapoi la o pagină de eroare
            header("Location: https://www.simonaistrate.com/error.html");
            exit();
        }
    } else {
        echo "Invalid email address.";
    }

} else {
    // Dacă formularul nu a fost trimis cu metoda POST, afișează un mesaj de eroare
    echo "Metodă de trimitere a formularului incorectă.";
}
?>