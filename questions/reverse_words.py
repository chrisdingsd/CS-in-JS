# Write a function reverse_words() that takes a message as a list of characters and reverses the order of the words in place.

def solution(message):
  reverse(message, 0, len(message) - 1)
  cur = 0
  for i in range(len(message)):
    if (i == len(message)) or (message[i] == ' '):
      reverse(message, cur, i - 1)
      cur = i + 1
  return message

def reverse(message, left, right):
  while left < right:
    message[left], message[right] = message[right], message[left]
    left += 1
    right -= 1
