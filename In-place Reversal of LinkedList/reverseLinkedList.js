/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Iterative Method
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let listNode = head;
    let previous = null;
    
    while(listNode) {
        let saved = listNode.next;
        listNode.next = previous;
        previous = listNode;
        listNode = saved;
    }
    
    return previous;
};

/**
 * Recursive Method
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    if (head === null || head.next === null) return head;
    
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};