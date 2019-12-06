import unittest
from questions import find_rotation_point

solution = find_rotation_point.solution

class Test(unittest.TestCase):
  def test(self):
    self.assertEqual(solution([2,3,4,5,1]), 4)
    self.assertEqual(solution([3,4,5,0,1,2]), 3)
    self.assertEqual(solution([1,2,3,4,5]), 4)

if __name__ == '__main__':
    unittest.main()