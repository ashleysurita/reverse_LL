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

/*
    1    2
          n
     c
  p
  
  >  1 13 null
*/

function reverseLL(head) {
    let res
    let prev = null 
    let curr = head 
    let next = head.next
   //  1 > null
    
    while(curr){
        curr.next = prev
        // if curr is set to null, we'd return null if we just returned curr
        res = curr
        prev = curr
        curr = next
        next = next ? next.next : null
    }
    return res
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(arrayify(reverseLL(new ListNode(1)))) // [1]
console.log(arrayify(reverseLL(new ListNode(1, new ListNode(2))))) // [2, 1]
console.log(arrayify(reverseLL(LL1))) // [10, 7, 3, 5, 1, 13]
