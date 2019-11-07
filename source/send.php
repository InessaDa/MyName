<?php

ini_set('displasy_errors', 'On');
error_reporting('E_ALL');

$phone = $_POST['phone'];
$comment = $_POST['comment'];

$phone = htmlspecialchars('phone');
$comment = htmlspecialchars('comment');
$phone = urldecode('phone');
$comment = urldecode('comment');
$phone = trim('phone');
$comment = trim('comment');

echo $phone;
echo "<br>";
echo $comment;

if(mail("ztrekosa@gmail.com", "заявка с сайта," "Телефон:" .$phone.". Comment: ".$comment, "From: http://localhost:3000/send.php\r\n"))
{ echo "сообщение успешно отправлено" ;
} else {
    echo "при отправке возникли ошибки";
}>?
