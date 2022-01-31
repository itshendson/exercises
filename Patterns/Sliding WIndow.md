```
###SLIDING WINDOW PSEUDOCODE
def sliding_window(nums):
    # Iterate over elements in our input
        # Expand the window
        # Meet the condition to stop expansion
            # Process the current window   
            # Contract the window
```

```
###EXAMPLE OF SLIDERING WINDOW PROBLEM:
def sliding_window(nums):
    left, right = 0, 0        # Our window bounds
    count_of_zeroes = 0       # Track how many 0’s are in the window
    global_max = 0            # Track the maximum, overall
    # Iterate over elements in our input
    while right < len(nums):
        # Expand the window 
        if nums[right] == 0:        
            count_of_zeroes += 1
        # Meet the condition to stop expansion
        while count_of_zeroes == 2:
        # Process the current window
            global_max = max(global_max, right - left)
        # Contract the window
            if nums[left] == 0:
                count_of_zeroes -= 1
            left += 1
        right += 1
    if count_of_zeroes < 2:
        global_max = max(global_max, right-left)
    return global_max
```

All Sliding Window problems have 3 variables:
1. Left and Right bounds
2. Track Condition such as count of zeroes
3. Return value such as global_max or max_sum

Guides:
https://medium.com/@timpark0807/leetcode-is-easy-sliding-window-c44c11cc33e1
Walkthrough of Pseudocode