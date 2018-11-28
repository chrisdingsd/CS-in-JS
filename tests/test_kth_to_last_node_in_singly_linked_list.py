import unittest
from questions import kth_to_last_node_in_singly_linked_list
from data_structure import linked_list

solution = kth_to_last_node_in_singly_linked_list.solution
list = linked_list.SingleLinkedList()
list.init([1,2,3,4,5,6,7,8])

class Test(unittest.TestCase):
  def test_solution(self):
    self.assertEqual(solution(1, list.head).value, 8)
    self.assertEqual(solution(5, list.head).value, 4)


if __name__ == '__main__':
    unittest.main()