/*
  Given a valid (IPv4) IP address, return a defanged version of that IP address.

  A defanged IP address replaces every period "." with "[.]".
*/

// Super easy .split().join() pattern
var defangIPaddr = function(address) {
    return address.split('.').join('[.]')
};

// Now with regex
var defangIPaddr = function(address) {
    return address.replace(/\./g, "[.]")
};

/*
  There's a way to iterate through the string and push to a return array instead
  of the above solutions, but I think doing it that way masks what the function
  is doing compared to an obvious string mutating regex or the classic
  .split().join()
*/