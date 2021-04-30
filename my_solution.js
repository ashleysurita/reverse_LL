class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

function reverseLL(head) {
    if(!head.next) return head
    
    let prev
    let next
    let curr = head
    
    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(arrayify(reverseLL(new ListNode(1)))) // [1]
console.log(arrayify(reverseLL(new ListNode(1, new ListNode(2))))) // [2, 1]
console.log(arrayify(reverseLL(LL1))) // [10, 7, 3, 5, 1, 13]
