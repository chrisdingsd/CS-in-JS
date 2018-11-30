import unittest
from questions import second_largest_in_bst
from data_structure import binary_tree

solution = second_largest_in_bst.solution
bst = binary_tree.BinaryTree().sorted_to_bst([1,2,3,4,5,6,7,8])

class Test(unittest.TestCase):
  def test(self):
    self.assertEqual(solution(bst), 7)

if __name__ == '__main__':
    unittest.main()