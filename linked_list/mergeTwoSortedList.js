// review on leetcode mergeTwoLists
const mergeTwoLists = (l1, l2) => {
    let dummy = new NodeList(null);
    let head = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val){
            dummy.next = l1;
            l1 = li.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
    }
    if (l1 === null) dummy.next = l2;
    if (l2 === null) dummy.next = l1;
    return head.next;
}