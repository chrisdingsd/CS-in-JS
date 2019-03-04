import unittest
from questions import matching_parenthesis

solution = matching_parenthesis.solution

class Test(unittest.TestCase):
  def test(self):
    input = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

    self.assertEqual(solution(input, 10), 79)

if __name__ == '__main__':
    unittest.main()