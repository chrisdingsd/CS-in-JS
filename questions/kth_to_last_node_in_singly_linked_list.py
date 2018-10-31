# Write a function kth_to_last_node() that takes an integer kk and the head_node of a singly-linked list, and returns the kth to last node in the list.
# Assume k will not always be valid

import data_structure.linked_list

def kth_to_last_node(k, head):
  if k < 1:
    raise ValueError('Can not find node less than first to last')

  list_length = 1
  cur = head

  while cur.next:
    cur = cur.next
    list_length += 1
  
  if k > list_length:
    raise ValueError('k is larger than length of list')

  index = list_length - k
  cur = head
  for i in range(index):
    cur = cur.next
  
  return cur