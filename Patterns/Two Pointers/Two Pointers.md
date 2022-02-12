## Two Pointers Pattern
- Only works on sorted arrays or linked list
- O(n)
- One pointer on the leftmost element, one pointer on the rightmost element

## Recognizing Problem
- There is usually a Target value to sum, match, or duplicate to remove

## Types of Two Pointers
- Collision - One array, move from two sides to middle.
- Forward - One array, both move forward.
- Parallel - Two arrays, each array has been assigned with a pointer.

```
def twoSum(self, nums: List[int], target: int) -> List[int]:
    left, right = 0, len(nums) - 1
    while left < right:
        current_sum = nums[left] + nums[right]
        if current_sum == target:
            return [left, right]

        if target > current_sum:
            left += 1  # we need a pair with a bigger sum
        else:
            right -= 1  # we need a pair with a smaller sum
    return [-1, -1]
```
