print(' '.join(map(str,(lambda a: [(1 << i) for i in range(a.bit_length()) if (1 << i) <= a])(int(input())) )) )
