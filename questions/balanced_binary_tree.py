# Write a function to see if a binary tree matches the difference between the depths of any two leaf nodes is no greater than one.

# TODO missing test

def solution(root):
  return check(root) != -1

def check(node):
  if node is None:
    return 0
  
  left = check(node.left)
  right = check(node.right)

  if left == -1 or right == -1:
    return -1
  elif abs(left - right) > 1:
    return -1
  else:
    return max(left, right) + 1