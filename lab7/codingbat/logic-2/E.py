def round_sum(a, b, c):return round10(a) + round10(b) + round10(c)
  
def round10(num): return (num // 10) * 10 if num % 10 < 5 else ((num // 10) + 1) * 10
    
    