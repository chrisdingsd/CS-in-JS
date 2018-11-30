# Write a function to find the 2nd largest element in a binary search tree.

def solution(root):
  if root is None or (root.left is None and root.right is None):
    raise ValueError('tree must have 2 nodes')

  current = root
  while current:
    # Current is largest and has a left substree, then 2nd largest is the largest in left substree
    if current.left and current.right is None:
      return find_largest(current.left)
     # Current is parent of largest, and largest has no children, then current is 2nd largest 
    if current.right and current.right.left is None and current.right.right is None:
      return current.value
    current = current.right
  
def find_largest(root):
  current = root
  while current:
    if not current.right:
      return current
    current = current.right
