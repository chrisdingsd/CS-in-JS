import unittest
from questions import linked_list_cycle
from data_structure import linked_list

solution = linked_list_cycle.solution

list1 = linked_list.SingleLinkedList()
list1.initCycle([1,2,3,4,5,6,7,8])

list2 = linked_list.SingleLinkedList()
list2.init([1,2,3,4,5,6,7])

class Test(unittest.TestCase):
  def test_solution(self):
    self.assertEqual(solution(list1.head), True)
    self.assertEqual(solution(list2.head), False)

if __name__ == '__main__':
    unittest.main()