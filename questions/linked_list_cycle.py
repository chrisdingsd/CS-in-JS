# Write a function contains_cycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle

def solution(head):
  fast = head
  slow = head

  while fast is not None and fast.next is not None:
    slow = slow.next
    fast = fast.next.next

    if fast is slow:
      return True
  
  return False