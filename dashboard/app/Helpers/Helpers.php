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
    // If we follow standard REST API conventions then there should always be an ID in the route if we are on pages with edit forms.
    // If so, we concatenate the segments and return the correct route
    if(is_numeric(Request::segment(2)))
    {
        // PUT / UPDATE Route
        return Request::segment(1) . '/' . Request::segment(2);
    }
    else
    {
        // POST Route
        return Request::segment(1);
    }
}
