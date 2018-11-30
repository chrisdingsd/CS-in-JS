class BinaryTreeNode:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None
  
  def insert_left(self, value):
    self.left = BinaryTreeNode(value)
    return self.left
  
  def insert_right(self, right):
    self.right = BinaryTreeNode(value)
    return self.right

    
class BinaryTree:
  def __init__(self):
    self.root = None

  def sorted_to_bst(self, nums):
    if nums == []:
      return None
    length = len(nums)
    root = BinaryTreeNode(nums[length//2])
    root.left = self.sorted_to_bst(nums[:length//2])
    root.right = self.sorted_to_bst(nums[length//2 + 1:])
    return root
