/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        
        if (slow === fast) {
            let current = fast;
            let initial = head;
            
            while (current !== initial) {
                current = current.next;
                initial = initial.next;
            }
            return current;
        }  
    }
    return null;
};