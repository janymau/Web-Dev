from itertools import product

K, M = map(int, input().split())
print(max(sum(item**2 for item in combination) % M for combination in product(*[list(map(int, input().split()[1:])) for _ in range(K)]) ))