<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
    $input = strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $input)); 
    $len =  strlen($input);
 
    for ($i = 0; $i < $len / 2; $i++) {
        if ($input[$i] !== $input[$len - $i - 1]) {
            return false; 
        }
    }
    return true; 
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input)); //Return false

$input2 = "Anita lava la tina"; 
var_dump(is_palindrome($input2)); //Return true