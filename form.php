<?php

if($_POST["submit"]) {
    $recipient="amankr1619@gmail.com";
    $subject="Healthsy";
    $name=$_POST["name"];
    $email=$_POST["email"];
    $message=$_POST["message"];
    $gender=$_POST["gender"];
    $phone=$_POST["phone"];

    $mailBody="Name: $name\nEmail: $email\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $name <$email>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>