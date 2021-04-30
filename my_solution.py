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
    prev = None
    curr = head
    next = None
    while curr:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    return prev

# Test Cases
LL1 = ListNode(13, ListNode(1, ListNode(5, ListNode(3, ListNode(7, ListNode(10))))))
print(arrayify(reverseLL(ListNode(1)))) # [1]
print(arrayify(reverseLL(ListNode(1, ListNode(2))))) # [2, 1]
print(arrayify(reverseLL(LL1))) # [10, 7, 3, 5, 1, 13]
