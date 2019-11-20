<?php

function find_missing_letter(array $array) {
    $letters = range($array[0], $array[sizeof($array)-1]);
    $diff = array_diff($letters, $array);
    return $diff[array_keys($diff)[0]];
}

?>