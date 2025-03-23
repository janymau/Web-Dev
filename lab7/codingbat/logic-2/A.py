def make_bricks(small, big, goal): return goal % 5 <= small and goal - (big * 5 if big * 5 <= goal else goal // 5 * 5) <= small
