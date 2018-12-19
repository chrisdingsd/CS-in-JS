class LinkedListNode:
  def __init__(self, value):
    self.value = value
    self.next = None

class SingleLinkedList:
  def __init__(self):
    self.head = None
    self.tail = None
    self.length = 0

  def __len__(self):
    return self.length

  def __repr__(self):
    output = ''
    cur = self.head
    while cur is not None:
      output += str(cur.value)
      cur = cur.next
      if cur is not None:
        output += '->'
    return output
  
  def add(self, value):
    node = LinkedListNode(value)
    if self.head is None:
      self.head = node
      self.tail = node
    else:
      self.tail.next = node
      self.tail = node
    self.length += 1

  def init(self, values):
    for value in values:
      self.add(value)

  def initCycle(self, values):
    self.init(values)
    self.tail.next = self.head