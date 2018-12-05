import unittest
from questions import reverse_words

solution = reverse_words.solution

class Test(unittest.TestCase):
  def test(self):
    self.assertEqual(''.join(solution(['m', 'a', ' ', 'I'])), 'I am')

if __name__ == '__main__':
    unittest.main()