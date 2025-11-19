export const PROBLEMS = {
    "two-sum": {
      id: "two-sum",
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array • Hash Table",
      description: {
        text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
        notes: [
          "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
          "You can return the answer in any order.",
        ],
      },
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
          input: "nums = [3,2,4], target = 6",
          output: "[1,2]",
        },
        {
          input: "nums = [3,3], target = 6",
          output: "[0,1]",
        },
      ],
      constraints: [
        "2 ≤ nums.length ≤ 10⁴",
        "-10⁹ ≤ nums[i] ≤ 10⁹",
        "-10⁹ ≤ target ≤ 10⁹",
        "Only one valid answer exists",
      ],
      starterCode: {
        javascript: `function twoSum(nums, target) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
  console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
        python: `def twoSum(nums, target):
      # Write your solution here
      pass
  
  # Test cases
  print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
  print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
  print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
        java: `import java.util.*;
  
  class Solution {
      public static int[] twoSum(int[] nums, int target) {
          // Write your solution here
          
          return new int[0];
      }
      
      public static void main(String[] args) {
          System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
          System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
          System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
      }
  }`,
      },
      expectedOutput: {
        javascript: "[0,1]\n[1,2]\n[0,1]",
        python: "[0, 1]\n[1, 2]\n[0, 1]",
        java: "[0, 1]\n[1, 2]\n[0, 1]",
      },
    },
  
    "reverse-string": {
      id: "reverse-string",
      title: "Reverse String",
      difficulty: "Easy",
      category: "String • Two Pointers",
      description: {
        text: "Write a function that reverses a string. The input string is given as an array of characters s.",
        notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
      },
      examples: [
        {
          input: 's = ["h","e","l","l","o"]',
          output: '["o","l","l","e","h"]',
        },
        {
          input: 's = ["H","a","n","n","a","h"]',
          output: '["h","a","n","n","a","H"]',
        },
      ],
      constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
      starterCode: {
        javascript: `function reverseString(s) {
    // Write your solution here
    
  }
  
  // Test cases
  let test1 = ["h","e","l","l","o"];
  reverseString(test1);
  console.log(test1); // Expected: ["o","l","l","e","h"]
  
  let test2 = ["H","a","n","n","a","h"];
  reverseString(test2);
  console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
        python: `def reverseString(s):
      # Write your solution here
      pass
  
  # Test cases
  test1 = ["h","e","l","l","o"]
  reverseString(test1)
  print(test1)  # Expected: ["o","l","l","e","h"]
  
  test2 = ["H","a","n","n","a","h"]
  reverseString(test2)
  print(test2)  # Expected: ["h","a","n","n","a","H"]`,
        java: `import java.util.*;
  
  class Solution {
      public static void reverseString(char[] s) {
          // Write your solution here
          
      }
      
      public static void main(String[] args) {
          char[] test1 = {'h','e','l','l','o'};
          reverseString(test1);
          System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
          
          char[] test2 = {'H','a','n','n','a','h'};
          reverseString(test2);
          System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
      }
  }`,
      },
      expectedOutput: {
        javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
        python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
        java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      },
    },
  
    "valid-palindrome": {
      id: "valid-palindrome",
      title: "Valid Palindrome",
      difficulty: "Easy",
      category: "String • Two Pointers",
      description: {
        text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
        notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
      },
      examples: [
        {
          input: 's = "A man, a plan, a canal: Panama"',
          output: "true",
          explanation: '"amanaplanacanalpanama" is a palindrome.',
        },
        {
          input: 's = "race a car"',
          output: "false",
          explanation: '"raceacar" is not a palindrome.',
        },
        {
          input: 's = " "',
          output: "true",
          explanation:
            's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
        },
      ],
      constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
      starterCode: {
        javascript: `function isPalindrome(s) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
  console.log(isPalindrome("race a car")); // Expected: false
  console.log(isPalindrome(" ")); // Expected: true`,
        python: `def isPalindrome(s):
      # Write your solution here
      pass
  
  # Test cases
  print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
  print(isPalindrome("race a car"))  # Expected: False
  print(isPalindrome(" "))  # Expected: True`,
        java: `class Solution {
      public static boolean isPalindrome(String s) {
          // Write your solution here
          
          return false;
      }
      
      public static void main(String[] args) {
          System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
          System.out.println(isPalindrome("race a car")); // Expected: false
          System.out.println(isPalindrome(" ")); // Expected: true
      }
  }`,
      },
      expectedOutput: {
        javascript: "true\nfalse\ntrue",
        python: "True\nFalse\nTrue",
        java: "true\nfalse\ntrue",
      },
    },
  
    "maximum-subarray": {
      id: "maximum-subarray",
      title: "Maximum Subarray",
      difficulty: "Medium",
      category: "Array • Dynamic Programming",
      description: {
        text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
        notes: [],
      },
      examples: [
        {
          input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
          output: "6",
          explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
        },
        {
          input: "nums = [1]",
          output: "1",
          explanation: "The subarray [1] has the largest sum 1.",
        },
        {
          input: "nums = [5,4,-1,7,8]",
          output: "23",
          explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
        },
      ],
      constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
      starterCode: {
        javascript: `function maxSubArray(nums) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
  console.log(maxSubArray([1])); // Expected: 1
  console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
        python: `def maxSubArray(nums):
      # Write your solution here
      pass
  
  # Test cases
  print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
  print(maxSubArray([1]))  # Expected: 1
  print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
        java: `class Solution {
      public static int maxSubArray(int[] nums) {
          // Write your solution here
          
          return 0;
      }
      
      public static void main(String[] args) {
          System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
          System.out.println(maxSubArray(new int[]{1})); // Expected: 1
          System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
      }
  }`,
      },
      expectedOutput: {
        javascript: "6\n1\n23",
        python: "6\n1\n23",
        java: "6\n1\n23",
      },
    },
  
    "container-with-most-water": {
      id: "container-with-most-water",
      title: "Container With Most Water",
      difficulty: "Medium",
      category: "Array • Two Pointers",
      description: {
        text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
        notes: [
          "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
          "Return the maximum amount of water a container can store.",
          "Notice that you may not slant the container.",
        ],
      },
      examples: [
        {
          input: "height = [1,8,6,2,5,4,8,3,7]",
          output: "49",
          explanation:
            "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
        },
        {
          input: "height = [1,1]",
          output: "1",
        },
      ],
      constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
      starterCode: {
        javascript: `function maxArea(height) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
  console.log(maxArea([1,1])); // Expected: 1`,
        python: `def maxArea(height):
      # Write your solution here
      pass
  
  # Test cases
  print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
  print(maxArea([1,1]))  # Expected: 1`,
        java: `class Solution {
      public static int maxArea(int[] height) {
          // Write your solution here
          
          return 0;
      }
      
      public static void main(String[] args) {
          System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
          System.out.println(maxArea(new int[]{1,1})); // Expected: 1
      }
  }`,
      },
      expectedOutput: {
        javascript: "49\n1",
        python: "49\n1",
        java: "49\n1",
      },
    },
    "best-time-to-buy-and-sell-stock": {
  id: "best-time-to-buy-and-sell-stock",
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Easy",
  category: "Array • Greedy",
  description: {
    text: "You're given an array prices where prices[i] is the price of a stock on day i. Return the maximum profit you can achieve from a single buy and a single sell.",
    notes: [
      "You must buy before selling.",
      "If no profit is possible, return 0."
    ]
  },
  examples: [
    {
      input: "prices = [7,1,5,3,6,4]",
      output: "5",
      explanation: "Buy at 1 and sell at 6"
    },
    {
      input: "prices = [7,6,4,3,1]",
      output: "0",
      explanation: "No profitable trade possible"
    },
    {
      input: "prices = [2,4,1]",
      output: "2"
    }
  ],
  constraints: [
    "1 ≤ prices.length ≤ 10⁵",
    "0 ≤ prices[i] ≤ 10⁴"
  ],
  starterCode: {
    javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

console.log(maxProfit([7,1,5,3,6,4])); 
console.log(maxProfit([7,6,4,3,1])); 
console.log(maxProfit([2,4,1]));`,
    python: `def maxProfit(prices):
    # Write your solution here
    pass

print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([7,6,4,3,1]))
print(maxProfit([2,4,1]))`,
    java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));
        System.out.println(maxProfit(new int[]{2,4,1}));
    }
}`
  },
  expectedOutput: {
    javascript: "5\n0\n2",
    python: "5\n0\n2",
    java: "5\n0\n2"
  }
    },
    "valid-parentheses": {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "Stack • String",
  description: {
    text: "Given a string s containing only parentheses characters, determine if it is valid.",
    notes: [
      "Open brackets must be closed by the same type.",
      "Brackets must close in the correct order."
    ]
  },
  examples: [
    { input: 's = "()"', output: "true" },
    { input: 's = "()[]{}"', output: "true" },
    { input: 's = "(]"', output: "false" }
  ],
  constraints: [
    "1 ≤ s.length ≤ 10⁴",
    "s consists of parentheses only"
  ],
  starterCode: {
    javascript: `function isValid(s) {
  // Write your solution here
  
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));`,
    python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()"))
print(isValid("()[]{}"))
print(isValid("(]"))`,
    java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()"));
        System.out.println(isValid("()[]{}"));
        System.out.println(isValid("(]"));
    }
}`
  },
  expectedOutput: {
    javascript: "true\ntrue\nfalse",
    python: "True\nTrue\nFalse",
    java: "true\ntrue\nfalse"
  }
    },
    "merge-two-sorted-lists": {
  id: "merge-two-sorted-lists",
  title: "Merge Two Sorted Lists",
  difficulty: "Easy",
  category: "Linked List",
  description: {
    text: "Merge two sorted linked lists and return it as a sorted list.",
    notes: [
      "Both lists should be merged by creating a new sorted linked list."
    ]
  },
  examples: [
    {
      input: "l1 = [1,2,4], l2 = [1,3,4]",
      output: "[1,1,2,3,4,4]"
    },
    {
      input: "l1 = [], l2 = []",
      output: "[]"
    },
    {
      input: "l1 = [], l2 = [0]",
      output: "[0]"
    }
  ],
  constraints: [
    "0 ≤ length ≤ 50",
    "-100 ≤ Node.val ≤ 100"
  ],
  starterCode: {
    javascript: `function mergeTwoLists(l1, l2) {
  // Write your solution here
  
}

// Test cases (lists will be provided by platform)`,
    python: `def mergeTwoLists(l1, l2):
    # Write your solution here
    pass`,
    java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

class Solution {
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        // Write your solution here
        
        return null;
    }
}`
  },
  expectedOutput: {
    javascript: "[1,1,2,3,4,4]",
    python: "[1,1,2,3,4,4]",
    java: "[1,1,2,3,4,4]"
  }
    },
    "longest-substring-without-repeating-characters": {
  id: "longest-substring-without-repeating-characters",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window",
  description: {
    text: "Given a string s, find the length of the longest substring without repeating characters.",
    notes: [
      "Use sliding window or hashing to track characters."
    ]
  },
  examples: [
    {
      input: 's = "abcabcbb"',
      output: "3",
      explanation: '"abc" is the longest substring.'
    },
    {
      input: 's = "bbbbb"',
      output: "1"
    },
    {
      input: 's = "pwwkew"',
      output: "3"
    }
  ],
  constraints: [
    "0 ≤ s.length ≤ 5 * 10⁴",
    "s consists of ASCII characters"
  ],
  starterCode: {
    javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));`,
    python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

print(lengthOfLongestSubstring("abcabcbb"))
print(lengthOfLongestSubstring("bbbbb"))
print(lengthOfLongestSubstring("pwwkew"))`,
    java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb"));
        System.out.println(lengthOfLongestSubstring("bbbbb"));
        System.out.println(lengthOfLongestSubstring("pwwkew"));
    }
}`
  },
  expectedOutput: {
    javascript: "3\n1\n3",
    python: "3\n1\n3",
    java: "3\n1\n3"
  }
    }


   

  };
  
  export const LANGUAGE_CONFIG = {
    javascript: {
      name: "JavaScript",
      icon: "/javascript.png",
      monacoLang: "javascript",
    },
    python: {
      name: "Python",
      icon: "/python.png",
      monacoLang: "python",
    },
    java: {
      name: "Java",
      icon: "/java.png",
      monacoLang: "java",
    },
  };