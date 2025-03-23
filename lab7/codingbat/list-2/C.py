def centered_average(nums):
  nums.remove(min(nums))
  nums.remove(max(nums))
  return sum(nums) // len(nums)
