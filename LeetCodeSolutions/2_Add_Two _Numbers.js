/*
  You are given two non-empty linked lists representing two non-negative integers. The digits
  are stored in reverse order, and each of their nodes contains a single digit. Add the two
  numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

// I did this recursively as a way to become more comfortable with recurssion
addLists = (l1, l2, carry = 0) => {
    // Default case of l1, l2 === null and carry === 0
    if(!l1 && !l2 && !carry) return null;

    let result = new ListNode;
    let value = carry;

    if(l1) value += l1.val;
    if(l2) value += l2.val;

    result.val = value % 10;

    if(l1 || l2){
        let l1next = l1 ? l1.next : null;
        let l2next = l2 ? l2.next : null;
        value = value > 9 ? 1 : 0;

        result.next = addLists(l1next, l2next, value);
    }

    return result;
}

var addTwoNumbers = function(l1, l2) {
    return addLists(l1, l2)
};