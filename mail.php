<?php

echo "<pre>";

print_r($_POST);

echo '</pre>';


if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['contact']))
$contact = $_POST['contact'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];
if(isset( $_POST['message'])) 
$message = $_POST['message'];


// $content="From: $name \n Email: $email \n Contact: $contact \n Message: $message";
$to = "josephochieng812@gmail.com";
$content="";
$content.="From: ".$name. "\r\n";
$content.="Email: ".$email. "\r\n";
$content.="Contact: ".$contact. "\r\n";
$content.="Message: ".$message. "\r\n";
// $mailheader = "From: $email \r\n";
mail('josephochieng812@gmail.com', $subject, $content);
echo "Email sent!";

?>