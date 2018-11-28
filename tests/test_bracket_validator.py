import unittest
from questions import bracket_validator

solution = bracket_validator.solution

class Test(unittest.TestCase):
  def test(self):
    self.assertEqual(solution('{[]()}'), True)
    self.assertEqual(solution('{[(}'), False)
    self.assertEqual(solution('{[}'), False)
    

if __name__ == '__main__':
    unittest.main()