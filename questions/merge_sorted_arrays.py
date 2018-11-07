# Write a function to merge lists of orders into one sorted list

def merge_lists(a, b):
  merge_list_size = len(a) + len(b)
  merge_list = [None] * merge_list_size

  a_index = 0
  b_index = 0
  merge_index = 0
  while merge_index < merge_list_size:
    a_exhausted = a_index >= len(a)
    b_exhausted = b_index >= len(b)
    if (not a_exhausted and (b_exhausted or a[a_index] < b[b_index])):
      merge_list[merge_index] = a[a_index]
      a_index += 1
    else:
      merge_list[merge_index] = b[b_index]
      b_index += 1
    merge_index += 1
  
  return merge_list

