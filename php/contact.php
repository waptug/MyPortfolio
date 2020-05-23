<?php

$data=json_decode(file_get_contents("php://input"),true);
$task=$data['text'];

print 'First Name: '.$data['fname'];
print 'Last Name:'.$data['lname'];
print 'email:'.$data['email'];


print $task;
print $data;
print_r($task);
print_r($data);
print var_dump($task);
print var_dump($data);

$jsonInArray=$_POST;
echo '<pre>'; print_r($_POST); echo '</pre>';
echo '<pre>'; var_dump($_POST);echo '</pre>';
echo ('The Users First Name is'.$_POST[0]);
echo '<pre>'; print_r($jsonInArray); echo '</pre>';
echo '<pre>'; print var_dump($jsonInArray);echo '</pre>';
echo ('The Users First Name is'.$jsonInArray);
$encodedJSON=json_encode($jsonInArray,JSON_PRETTY_PRINT);


print "<PRE>";
print_r($encodedJSON);
print($encodedJSON);
print "</pre>";
?>
