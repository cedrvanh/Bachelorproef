<?php

/*
* Formats text and replaces dashes (-) with whitespace
*/
function replaceDash($string)
{
    $arr = explode('-', $string);
    return implode(" ", $arr);
}