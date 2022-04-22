class ListNode {
    constructor(val) {
        this.val = (val===undefined ? 0 : val)
        this.next = null;
    }
}
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
var reverseList = function(head) {
    let current = head;
    let prev  = null;
    while (current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}


console.log(reverseList(a))
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
