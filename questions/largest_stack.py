from data_structure import stack

class MaxStack:
  def __init__(self):
    self.stack = stack.Stack()
    self.maxes = stack.Stack()

  def push(self, item):
    self.stack.push(item)

    if self.maxes.peek() is None or item >= self.maxes.peek():
      self.maxes.push(item)
  
  def pop(self):
    item = self.stack.pop()

    if item == self.stack.peek():
      self.maxes.pop()

    return item

  def max(self):
    return self.maxes.peek()