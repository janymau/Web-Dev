def close_far(a, b, c):
    return (is_close(b, a) and is_far(c, a, b)) or (is_close(c, a) and is_far(b, a, c))
    
def is_close(x, y):
    return abs(x - y) <= 1
    
def is_far(x, y, z):
    return abs(x - y) >= 2 and abs(x - z) >= 2    