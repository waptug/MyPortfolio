<?php

$data=json_decode(file_get_contents("php://input"),true);
$task=$data['text'];

print 'First Name: '.$data['fname'];
print 'Last Name:'.$data['lname'];
print 'email:'.$data['email'];
print 'message:'.$data['message'];

ini_set('display_errors',1);
error_reporting( E_ALL );
$from = "michael.scott.mcginn@gmail.com";
$to="michael.scott.mcginn@gmail.com";
$subject = "New contact from profile form.";
$message = $data['fname'].",".$data['lname'].",".$data['email'].",".$data['message'];
$headers ="From:".$from;
mail($to,$subject,$message,$headers);
print "Mail Sent";

?>
