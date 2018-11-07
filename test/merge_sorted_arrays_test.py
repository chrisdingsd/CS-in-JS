import unittest
from questions import merge_sorted_arrays

solution = merge_sorted_arrays.merge_lists

class Test(unittest.TestCase):
  def test(self):
    a = [1,3,5,7,9]
    b = [2,4,6,8,10]
    self.assertSequenceEqual(solution(a, b), [1,2,3,4,5,6,7,8,9,10])

if __name__ == '__main__':
    unittest.main()