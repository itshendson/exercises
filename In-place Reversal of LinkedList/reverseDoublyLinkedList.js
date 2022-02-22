/**
 * Iterative Method on Doubly Linked List
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverse(head) {
    if (head === null) return head;
    
    let node = head;
    let newHead = head;
    
    while (node) {
        let temp = node.prev;
        node.prev = node.next;
        node.next = temp;
        newHead = node;
        node = node.next;
    }
    
    return newHead;
}