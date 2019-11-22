<?php
//@jmrc92 2018-05-14
//applies a regular expression to find valid smiles in the array
function count_smileys($arr): int {
    //just accepts ;~) ;-) ;) ;D ;-D ;~D
    $regEx = '/^[:;][-~]{0,1}[D)]$/';
    //ask for valid smiles and returns the elements that match with the regex
    $matches = preg_grep($regEx, $arr);
    return sizeOf($matches);
}

?>