# Given a sorted list that has a rotation point, find it.
# example: [3,4,5,1,2], rotation point is 3.

def solution(list):
 first = list[0]
 lower = 0
 upper = len(list) - 1

 while lower < upper:
   mid = lower + ((upper - lower) // 2)
   if list[mid] >= first:
     lower = mid
   else:
     upper = mid

   if lower + 1 == upper:
     return upper