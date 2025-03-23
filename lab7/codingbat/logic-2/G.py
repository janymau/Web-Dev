def make_chocolate(small, big, goal):
  big_needed = min(big, goal // 5)
  remaining_goal = goal - big_needed * 5
    
  if remaining_goal <= small:
      return remaining_goal
  else:
      return -1
