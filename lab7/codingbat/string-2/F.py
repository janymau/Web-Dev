def xyz_there(str):
  for i in range(len(str) - 2):
    if str[i:i+3] == 'xyz' and (i == 0 or str[i-1] != '.'):
        return True
  return False
