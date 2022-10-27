/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};

//To solve this problem, we can use recursion, calling it until one of the sheets is null, and while it is not null, we do an equality check, if list1 is less than or equal to list2, we call recursion with list1.next = mergeTwoLists (list1.next, list2), else if the value is greater than list2.next = mergeTwoLists(list1, list2.next). If one of the sheets is null, we simply return the opposite list (we don't care if it's null or not). Thus, when the recursion ends, the stack will begin to collapse in reverse order, which will allow us to get a new merged sorted list.