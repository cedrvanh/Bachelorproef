<?php

/*
* Formats text and replaces dashes (-) with whitespace
*/
function replaceDash($string)
{
    $arr = explode('-', $string);
    return implode(" ", $arr);
}

/*
* Returns correct current URL route with the Request helper class.
*/
function getRoute()
{
    $route = '';
    // If we follow standard REST API conventions then there should always be an ID in the route if we are pages with edit forms. 
    // If so, we concatenate the segments and return the correct route
    if(is_numeric(Request::segment(2))) 
    {
        // Route for PUT
        $route = Request::segment(1) . '/' . Request::segment(2);
    }
    else 
    {
        // Route for POST
        $route = Request::segment(1);
    }
    return $route;
}