print((lambda x: sum(1 for i in range(1, int(x**0.5) + 1) if x % i == 0) * 2 - (x**0.5).is_integer())(int(input())))
