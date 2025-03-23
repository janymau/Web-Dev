print( (lambda a,b: ' '.join(([b[a-1-i] for i in range(a)]))) ( int(input()), input().split() )  )  


# a = int(input())
# arr = input().split()
# for i in range(a // 2):
#     arr[i], arr[-i-1] = arr[-i-1], arr[i]
# print(arr)