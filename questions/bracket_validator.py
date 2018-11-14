# Write an efficient function that tells us whether or not 
# an input string's openers and closers are properly nested.
# Examples:
# "{ [ ] ( ) }" should return True
# "{ [ ( ] ) }" should return False
# "{ [ }" should return False

def solution(input):
  stack = []
  maps = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  openers = set(maps.keys())
  closers = set(maps.values())

  for i in input:
    if i in openers:
      stack.append(i)
    elif i in closers:
      if not stack:
        return false
      else:
        last = stack.pop()
        if not stack[last] == i:
          return False

  return stack == [] 