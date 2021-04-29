# reverse_LL

### Problem:
Javascript
```
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
    // Write your code here.
    return new ListNode()
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(arrayify(reverseLL(new ListNode(1)))) // [1]
console.log(arrayify(reverseLL(new ListNode(1, new ListNode(2))))) // [2, 1]
console.log(arrayify(reverseLL(LL1))) // [10, 7, 3, 5, 1, 13]
```

Python
```
class ListNode:
    def __init__(self, value = 0, next = None): 
        self.value = value
        self.next = next
        
def arrayify(head) -> [int]:
    array = []
    ptr = head
    while ptr != None:
        array.append(ptr.value)
        ptr = ptr.next
    return array

def reverseLL(head: ListNode) -> ListNode:
    # Write your code here.
    pass

# Test Cases
LL1 = ListNode(13, ListNode(1, ListNode(5, ListNode(3, ListNode(7, ListNode(10))))))
print(arrayify(reverseLL(ListNode(1)))) # [1]
print(arrayify(reverseLL(ListNode(1, ListNode(2))))) # [2, 1]
print(arrayify(reverseLL(LL1))) # [10, 7, 3, 5, 1, 13]
```
