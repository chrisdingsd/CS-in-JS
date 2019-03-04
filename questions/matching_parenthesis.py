# Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

def solution(input, start):
  open_parens = 0

  for i in range(start, len(input)):
    char = input[i]

    if char == '(':
      open_parens += 1
    elif char == ')':
      open_parens -= 1
      if open_parens == 0:
        return i
  
  raise Exception('no results')