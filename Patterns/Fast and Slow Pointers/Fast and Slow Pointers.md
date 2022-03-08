## Fast and Slow Pointers Pattern
Two pointers that move at different rates or nodes.

## Recognizing Problem
- Typically used with Linked List, but can be used in graphs and arrays too
- Detecting a loop
- Finding middle node of linked list
- Flattening a linked list

## Example

```
boolean hasCycle (Node head) {
    if (head == null) return false;

    Node fast = head.next;
    Node slow = head;

    while (fast != null && fast.next != null && slow != null) {
        if (fast == slow) {
            return true;
        }
        fast = fast.next.next;
        slow = slow.next;
    }

    return false;
}

```
