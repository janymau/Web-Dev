print((lambda a: next(k for k in range(a) if (1 << k) >= a))(int(input())))
