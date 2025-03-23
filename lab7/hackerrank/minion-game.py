def minion_game(string):
    # your code goes here
    stuart_score = 0
    kevin_score = 0
    
    for i in range(len(string)):
        if string[i] in 'AEIOU':
            kevin_score += len(string) - i
        else:
            stuart_score += len(string) - i
    
    print('Kevin {}'.format(kevin_score) if kevin_score > stuart_score else 'Stuart {}'.format(stuart_score) if stuart_score > kevin_score else 'Draw') 
    
if __name__ == '__main__':
    s = input()
    minion_game(s)