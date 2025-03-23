def last2(str): return sum(1 for i in range(len(str)-2) if str[i:i+2] == str[len(str)-2:])
