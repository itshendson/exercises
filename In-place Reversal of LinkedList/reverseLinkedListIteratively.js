/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
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