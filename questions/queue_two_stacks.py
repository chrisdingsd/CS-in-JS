from data_structure import stack

class QueueByTwoStacks:
  def __init__(self):
    self.in_stack = stack.Stack()
    self.out_stack = stack.Stack()

  def enqueue(self, item):
    self.in_stack.push(item)

  def dequeue(self):
    if self.out_stack.peek() is None:
      while self.in_stack.peek() is not None:
        item = self.in_stack.pop()
        self.out_stack.push(item)

      if self.out_stack.peek() is None:
        raise IndexError('Can\'t dequeue from empty queue')
    return self.out_stack.pop()

