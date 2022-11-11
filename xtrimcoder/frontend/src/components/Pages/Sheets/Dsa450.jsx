import React from 'react'
import Question from './Question'
export default function Dsa450() {
  let items=["Reverse the array"
  ,"Find the maximum and minimum element in an array"
  ,"Find the Kth max and min element of an array"
  ,"Given an array which consists of only 0 1 and 2. Sort the array without using any sorting algo"
  ,"Move all the negative elements to one side of the array "
  ,"Find the Union and Intersection of the two sorted arrays."
  ,"Write a program to cyclically rotate an array by one."
  ,"find Largest sum contiguous Subarray [V. IMP]"
  ,"Minimise the maximum difference between heights [V.IMP]"
  ,"Minimum no. of Jumps to reach end of an array"
  ,"find duplicate in an array of N+1 Integers"
  ,"Merge 2 sorted arrays without using Extra space."
  ,"Kadane's Algo [V.V.V.V.V IMP]"
  ,"Merge Intervals"
  ,"Next Permutation"
  ,"Count Inversion"
  ,"Best time to buy and Sell stock"
  ,"find all pairs on integer array whose sum is equal to given number"
  ,"find common elements In 3 sorted arrays"
  ,"Rearrange the array in alternating positive and negative items with O(1) extra space"
  ,"Find if there is any subarray with sum equal to 0"
  ,"Find factorial of a large number"
  ,"find maximum product subarray "
  ,"Find longest coinsecutive subsequence"
  ,"Given an array of size n and a number k fin all elements that appear more than  n/k  times."
  ,"Maximum profit by buying and selling a share atmost twice"
  ,"Find whether an array is a subset of another array"
  ,"Find the triplet that sum to a given value"
  ,"Trapping Rain water problem"
  ,"Chocolate Distribution problem"
  ,"Smallest Subarray with sum greater than a given value"
  ,"Three way partitioning of an array around a given value"
  ,"Minimum swaps required bring elements less equal K together"
  ,"Minimum no. of operations required to make an array palindrome"
  ,"Median of 2 sorted arrays of equal size"
  ,"Median of 2 sorted arrays of different size"
  ,"Spiral traversal on a Matrix"
  ,"Search an element in a matriix"
  ,"Find median in a row wise sorted matrix"
  ,"Find row with maximum no. of 1's"
  ,"Print elements in sorted order using row-column wise sorted matrix"
  ,"Maximum size rectangle"
  ,"Find a specific pair in matrix"
  ,"Rotate matrix by 90 degrees"
  ,"Kth smallest element in a row-cpumn wise sorted matrix"
  ,"Common elements in all rows of a given matrix"
  ,"Reverse a String"
  ,"Check whether a String is Palindrome or not"
  ,"Find Duplicate characters in a string"
  ,"Why strings are immutable in Java?"
  ,"Write a Code to check whether one string is a rotation of another"
  ,"Write a Program to check whether a string is a valid shuffle of two strings or not"
  ,"Count and Say problem"
  ,"Write a program to find the longest Palindrome in a string.[ Longest palindromic Substring]"
  ,"Find Longest Recurring Subsequence in String"
  ,"Print all Subsequences of a string."
  ,"Print all the permutations of the given string"
  ,"Split the Binary string into two substring with equal 0’s and 1’s"
  ,"Word Wrap Problem [VERY IMP]."
  ,"EDIT Distance [Very Imp]"
  ,"Find next greater number with same set of digits. [Very Very IMP]"
  ,"Balanced Parenthesis problem.[Imp]"
  ,"Word break Problem[ Very Imp]"
  ,"Rabin Karp Algo"
  ,"KMP Algo"
  ,"Convert a Sentence into its equivalent mobile numeric keypad sequence."
  ,"Minimum number of bracket reversals needed to make an expression balanced."
  ,"Count All Palindromic Subsequence in a given String."
  ,"Count of number of given string in 2D character array"
  ,"Search a Word in a 2D Grid of characters."
  ,"Boyer Moore Algorithm for Pattern Searching."
  ,"Converting Roman Numerals to Decimal"
  ,"Longest Common Prefix"
  ,"Number of flips to make binary string alternate"
  ,"Find the first repeated word in string."
  ,"Minimum number of swaps for bracket balancing."
  ,"Find the longest common subsequence between two strings."
  ,"Program to generate all possible valid IP addresses from given  string."
  ,"Write a program tofind the smallest window that contains all characters of string itself."
  ,"Rearrange characters in a string such that no two adjacent are same"
  ,"Minimum characters to be added at front to make string palindrome"
  ,"Given a sequence of words print all anagrams together"
  ,"Find the smallest window in a string containing all characters of another string"
  ,"Recursively remove all adjacent duplicates"
  ,"String matching where one string contains wildcard characters"
  ,"Function to find Number of customers who could not get a computer"
  ,"Transform One String to Another using Minimum Number of Given Operation"
  ,"Check if two given strings are isomorphic to each other"
  ,"Recursively print all sentences that can be formed from list of word lists"
  ,"Find first and last positions of an element in a sorted array"
  ,"Find a Fixed Point (Value equal to index) in a given array"
  ,"Search in a rotated sorted array"
  ,"square root of an integer"
  ,"Maximum and minimum of an array using minimum number of comparisons"
  ,"Optimum location of point to minimize total distance"
  ,"Find the repeating and the missing"
  ,"find majority element"
  ,"Searching in an array where adjacent differ by at most k"
  ,"find a pair with a given difference"
  ,"find four elements that sum to a given value"
  ,"maximum sum such that no 2 elements are adjacent"
  ,"Count triplet with sum smaller than a given value"
  ,"merge 2 sorted arrays"
  ,"print all subarrays with 0 sum"
  ,"Product array Puzzle"
  ,"Sort array according to count of set bits"
  ,"minimum no. of swaps required to sort the array"
  ,"Bishu and Soldiers"
  ,"Rasta and Kheshtak"
  ,"Kth smallest number again"
  ,"Find pivot element in a sorted array"
  ,"K-th Element of Two Sorted Arrays"
  ,"Aggressive cows"
  ,"Book Allocation Problem"
  ,"EKOSPOJ:"
  ,"Job Scheduling Algo"
  ,"Missing Number in AP"
  ,"Smallest number with atleastn trailing zeroes infactorial"
  ,"Painters Partition Problem:"
  ,"ROTI-Prata SPOJ"
  ,"DoubleHelix SPOJ"
  ,"Subset Sums"
  ,"Findthe inversion count"
  ,"Implement Merge-sort in-place"
  ,"Partitioning and Sorting Arrays with Many Repeated Entries"
  ,"Write a Program to reverse the Linked List. (Both Iterative and recursive)"
  ,"Reverse a Linked List in group of Given Size. [Very Imp]"
  ,"Write a program to Detect loop in a linked list."
  ,"Write a program to Delete loop in a linked list."
  ,"Find the starting point of the loop. "
  ,"Remove Duplicates in a sorted Linked List."
  ,"Remove Duplicates in a Un-sorted Linked List."
  ,"Write a Program to Move the last element to Front in a Linked List."
  ,"Add “1” to a number represented as a Linked List."
  ,"Add two numbers represented by linked lists."
  ,"Intersection of two Sorted Linked List."
  ,"Intersection Point of two Linked Lists."
  ,"Merge Sort For Linked lists.[Very Important]"
  ,"Quicksort for Linked Lists.[Very Important]"
  ,"Find the middle Element of a linked list."
  ,"Check if a linked list is a circular linked list."
  ,"Split a Circular linked list into two halves."
  ,"Write a Program to check whether the Singly Linked list is a palindrome or not."
  ,"Deletion from a Circular Linked List."
  ,"Reverse a Doubly Linked list."
  ,"Find pairs with a given sum in a DLL."
  ,"Count triplets in a sorted DLL whose sum is equal to given value “X”."
  ,"Sort a “k”sorted Doubly Linked list.[Very IMP]"
  ,"Rotate DoublyLinked list by N nodes."
  ,"Rotate a Doubly Linked list in group of Given Size.[Very IMP]"
  ,"Can we reverse a linked list in less than O(n) ?"
  ,"Why Quicksort is preferred for. Arrays and Merge Sort for LinkedLists ?"
  ,"Flatten a Linked List"
  ,"Sort a LL of 0's, 1's and 2's"
  ,"Clone a linked list with next and random pointer"
  ,"Merge K sorted Linked list"
  ,"Multiply 2 no. represented by LL"
  ,"Delete nodes which have a greater value on right side"
  ,"Segregate even and odd nodes in a Linked List"
  ,"Program for n’th node from the end of a Linked List"
  ,"Find the first non-repeating character from a stream of characters"
  ,"level order traversal"
  ,"Reverse Level Order traversal"
  ,"Height of a tree"
  ,"Diameter of a tree"
  ,"Mirror of a tree"
  ,"Inorder Traversal of a tree both using recursion and Iteration"
  ,"Preorder Traversal of a tree both using recursion and Iteration"
  ,"Postorder Traversal of a tree both using recursion and Iteration"
  ,"Left View of a tree"
  ,"Right View of Tree"
  ,"Top View of a tree"
  ,"Bottom View of a tree"
  ,"Zig-Zag traversal of a binary tree"
  ,"Check if a tree is balanced or not"
  ,"Diagnol Traversal of a Binary tree"
  ,"Boundary traversal of a Binary tree"
  ,"Construct Binary Tree from String with Bracket Representation"
  ,"Convert Binary tree into Doubly Linked List"
  ,"Convert Binary tree into Sum tree"
  ,"Construct Binary tree from Inorder and preorder traversal"
  ,"Find minimum swaps required to convert a Binary tree into BST"
  ,"Check if Binary tree is Sum tree or not"
  ,"Check if all leaf nodes are at same level or not"
  ,"Check if a Binary Tree contains duplicate subtrees of size 2 or more [ IMP ]"
  ,"Check if 2 trees are mirror or not"
  ,"Sum of Nodes on the Longest path from root to leaf node "
  ,"Check if given graph is tree or not.  [ IMP ]"
  ,"Find Largest subtree sum in a tree"
  ,"Maximum Sum of nodes in Binary tree such that no two are adjacent "
  ,"Print all K Sum paths in a Binary tree"
  ,"Find LCA in a Binary tree"
  ,"Find distance between 2 nodes in a Binary tree"
  ,"Kth Ancestor of node in a Binary tree"
  ,"Find all Duplicate subtrees in a Binary tree [ IMP ]"
  ,"Tree Isomorphism Problem"
  ,"Fina a value in a BST"
  ,"Deletion of a node in a BST"
  ,"Find min and max value in a BST"
  ,"Find inorder successor and inorder predecessor in a BST"
  ,"Check if a tree is a BST or not "
  ,"Populate Inorder successor of all nodes"
  ,"Find LCA  of 2 nodes in a BST"
  ,"Construct BST from preorder traversal"
  ,"Convert Binary tree into BST"
  ,"Convert a normal BST into a Balanced BST"
  ,"Merge two BST [ V.V.V>IMP ]"
  ,"Find Kth largest element in a BST"
  ,"Find Kth smallest element in a BST"
  ,"Count pairs from 2 BST whose sum is equal to given value X"
  ,"Find the median of BST in O(n) time and O(1) space"
  ,"Count BST ndoes that lie in a given range"
  ,"Replace every element with the least greater element on its right"
  ,"Given n appointments, find the conflicting appointments"
  ,"Check preorder is valid or not"
  ,"Check whether BST contains Dead end"
  ,"Largest BST in a Binary Tree [ V.V.V.V.V IMP ]"
  ,"Flatten BST to sorted list"
  ,"Activity Selection Problem"
  ,"Job SequencingProblem"
  ,"Huffman Coding"
  ,"Water Connection Problem"
  ,"Fractional Knapsack Problem"
  ,"Greedy Algorithm to find Minimum number of Coins"
  ,"Maximum trains for which stoppage can be provided"
  ,"Minimum Platforms Problem"
  ,"Buy Maximum Stocks if i stocks can be bought on i-th day"
  ,"Find the minimum and maximum amount to buy all N candies"
  ,"Minimize Cash Flow among a given set of friends who have borrowed money from each other"
  ,"Minimum Cost to cut a board into squares"
  ,"Check if it is possible to survive on Island"
  ,"Find maximum meetings in one room"
  ,"Maximum product subset of an array"
  ,"Maximize array sum after K negations"
  ,"Maximize the sum of arr[i]*i"
  ,"Maximum sum of absolute difference of an array"
  ,"Maximize sum of consecutive differences in a circular array"
  ,"Minimum sum of absolute difference of pairs of two arrays"
  ,"Program for Shortest Job First (or SJF) CPU Scheduling"
  ,"Program for Least Recently Used (LRU) Page Replacement algorithm"
  ,"Smallest subset with sum greater than all other elements"
  ,"Chocolate Distribution Problem"
  ,"DEFKIN -Defense of a Kingdom"
  ,"DIEHARD -DIE HARD"
  ,"GERGOVIA -Wine trading in Gergovia"
  ,"Picking Up Chicks"
  ,"CHOCOLA –Chocolate"
  ,"ARRANGE -Arranging Amplifiers"
  ,"K Centers Problem"
  ,"Minimum Cost of ropes"
  ,"Find smallest number with given number of digits and sum of digits"
  ,"Rearrange characters in a string such that no two adjacent are same"
  ,"Find maximum sum possible equal sum of three stacks"
  ,"Rat in a maze Problem"
  ,"Printing all solutions in N-Queen Problem"
  ,"Word Break Problem using Backtracking"
  ,"Remove Invalid Parentheses"
  ,"Sudoku Solver"
  ,"m Coloring Problem"
  ,"Print all palindromic partitions of a string"
  ,"Subset Sum Problem"
  ,"The Knight’s tour problem"
  ,"Tug of War"
  ,"Find shortest safe route in a path with landmines"
  ,"Combinational Sum"
  ,"Find Maximum number possible by doing at-most K swaps"
  ,"Print all permutations of a string "
  ,"Find if there is a path of more than k length from a source"
  ,"Longest Possible Route in a Matrix with Hurdles"
  ,"Print all possible paths from top left to bottom right of a mXn matrix"
  ,"Partition of a set intoK subsets with equal sum"
  ,"Find the K-th Permutation Sequence of first N natural numbers"
  ," Implement Stack from Scratch"
  ," Implement Queue from Scratch"
  ,"Implement 2 stack in an array"
  ,"find the middle element of a stack"
  ,"Implement N stacks in an Array"
  ,"Check the expression has valid or Balanced parenthesis or not."
  ,"Reverse a String using Stack"
  ,"Design a Stack that supports getMin() in O(1) time and O(1) extra space."
  ,"Find the next Greater element"
  ,"The celebrity Problem"
  ,"Arithmetic Expression evaluation"
  ,"Evaluation of Postfix expression"
  ,"Implement a method to insert an element at its bottom without using any other data structure."
  ,"Reverse a stack using recursion"
  ,"Sort a Stack using recursion"
  ,"Merge Overlapping Intervals"
  ,"Largest rectangular Area in Histogram"
  ,"Length of the Longest Valid Substring"
  ,"Expression contains redundant bracket or not"
  ,"Implement Stack using Queue"
  ,"Implement Stack using Deque"
  ,"Stack Permutations (Check if an array is stack permutation of other)"
  ,"Implement Queue using Stack  "
  ,"Implement n queue in an array"
  ,"Implement a Circular queue"
  ,"LRU Cache Implementationa"
  ,"Reverse a Queue using recursion"
  ,"Reverse the first K elements of a queue"
  ,"Interleave the first half of the queue with second half"
  ,"Find the first circular tour that visits all Petrol Pumps"
  ,"Minimum time required to rot all oranges"
  ,"Distance of nearest cell having 1 in a binary matrix"
  ,"First negative integer in every window of size k"
  ,"Check if all levels of two trees are anagrams or not."
  ,"Sum of minimum and maximum elements of all subarrays of size “k”."
  ,"Minimum sum of squares of character counts in a given string after removing “k” characters."
  ,"Queue based approach or first non-repeating character in a stream."
  ,"Next Smaller Element"
  ,"Implement a Maxheap/MinHeap using arrays and recursion."
  ,"Sort an Array using heap. (HeapSort)"
  ,"Maximum of all subarrays of size k."
  ,"“k” largest element in an array"
  ,"Kth smallest and largest element in an unsorted array"
  ,"Merge “K” sorted arrays. [ IMP ]"
  ,"Merge 2 Binary Max Heaps"
  ,"Kth largest sum continuous subarrays"
  ,"Leetcode- reorganize strings"
  ,"Merge “K” Sorted Linked Lists [V.IMP]"
  ,"Smallest range in “K” Lists"
  ,"Median in a stream of Integers"
  ,"Check if a Binary Tree is Heap"
  ,"Connect “n” ropes with minimum cost"
  ,"Convert BST to Min Heap"
  ,"Convert min heap to max heap"
  ,"Rearrange characters in a string such that no two adjacent are same."
  ,"Minimum sum of two numbers formed from digits of an array"
  ,"Create a Graph,print it"
  ,"Implement BFS algorithm "
  ,"Implement DFS Algo "
  ,"Detect Cycle in Directed Graph using BFS/DFS Algo "
  ,"Detect Cycle in UnDirected Graph using BFS/DFS Algo "
  ,"Search in a Maze"
  ,"Minimum Step by Knight"
  ,"flood fill algo"
  ,"Clone a graph"
  ,"Making wired Connections"
  ,"word Ladder "
  ,"Dijkstra algo"
  ,"Implement Topological Sort "
  ,"Minimum time taken by each job to be completed given by a Directed Acyclic Graph"
  ,"Find whether it is possible to finish all tasks or not from given dependencies"
  ,"Find the no. of Isalnds"
  ,"Given a sorted Dictionary of an Alien Language, find order of characters"
  ,"Implement Kruksal’sAlgorithm"
  ,"Implement Prim’s Algorithm"
  ,"Total no. of Spanning tree in a graph"
  ,"Implement Bellman Ford Algorithm"
  ,"Implement Floyd warshallAlgorithm"
  ,"Travelling Salesman Problem"
  ,"Graph ColouringProblem"
  ,"Snake and Ladders Problem"
  ,"Find bridge in a graph"
  ,"Count Strongly connected Components(Kosaraju Algo)"
  ,"Check whether a graph is Bipartite or Not"
  ,"Detect Negative cycle in a graph"
  ,"Longest path in a Directed Acyclic Graph"
  ,"Journey to the Moon"
  ,"Cheapest Flights Within K Stops"
  ,"Oliver and the Game"
  ,"Water Jug problem using BFS"
  ,"Water Jug problem using BFS"
  ,"Find if there is a path of more thank length from a source"
  ,"M-ColouringProblem"
  ,"Minimum edges to reverse o make path from source to destination"
  ,"Paths to travel each nodes using each edge(Seven Bridges)"
  ,"Vertex Cover Problem"
  ,"Chinese Postman or Route Inspection"
  ,"Number of Triangles in a Directed and Undirected Graph"
  ,"Minimise the cashflow among a given set of friends who have borrowed money from each other"
  ,"Two Clique Problem"
  ,"Construct a trie from scratch"
  ,"Find shortest unique prefix for every word in a given list"
  ,"Word Break Problem | (Trie solution)"
  ,"Given a sequence of words, print all anagrams together"
  ,"Implement a Phone Directory"
  ,"Print unique rows in a given boolean matrix"
  ,"Coin ChangeProblem"
  ,"Knapsack Problem"
  ,"Binomial CoefficientProblem"
  ,"Permutation CoefficientProblem"
  ,"Program for nth Catalan Number"
  ,"Matrix Chain Multiplication "
  ,"Edit Distance"
  ,"Subset Sum Problem"
  ,"Friends Pairing Problem"
  ,"Gold Mine Problem"
  ,"Assembly Line SchedulingProblem"
  ,"Painting the Fenceproblem"
  ,"Maximize The Cut Segments"
  ,"Longest Common Subsequence"
  ,"Longest Repeated Subsequence"
  ,"Longest Increasing Subsequence"
  ,"Space Optimized Solution of LCS"
  ,"LCS (Longest Common Subsequence) of three strings"
  ,"Maximum Sum Increasing Subsequence"
  ,"Count all subsequences having product less than K"
  ,"Longest subsequence such that difference between adjacent is one"
  ,"Maximum subsequence sum such that no three are consecutive"
  ,"Egg Dropping Problem"
  ,"Maximum Length Chain of Pairs"
  ,"Maximum size square sub-matrix with all 1s"
  ,"Maximum sum of pairs with specific difference"
  ,"Min Cost PathProblem"
  ,"Maximum difference of zeros and ones in binary string"
  ,"Minimum number of jumps to reach end"
  ,"Minimum cost to fill given weight in a bag"
  ,"Minimum removals from array to make max –minK"
  ,"Longest Common Substring"
  ,"Count number of ways to reacha given score in a game"
  ,"Count Balanced Binary Trees of Height h"
  ,"LargestSum Contiguous Subarray [V>V>V>V IMP ]"
  ,"Smallest sum contiguous subarray"
  ,"Unbounded Knapsack (Repetition of items allowed)"
  ,"Word Break Problem"
  ,"Largest Independent Set Problem"
  ,"Partition problem"
  ,"Longest Palindromic Subsequence"
  ,"Count All Palindromic Subsequence in a given String"
  ,"Longest Palindromic Substring"
  ,"Longest alternating subsequence"
  ,"Weighted Job Scheduling"
  ,"Coin game winner where every player has three choices"
  ,"Count Derangements (Permutation such that no element appears in its original position) [ IMPORTANT ]"
  ,"Maximum profit by buying and selling a share at most twice [ IMP ]"
  ,"Optimal Strategy for a Game"
  ,"Optimal Binary Search Tree"
  ,"Palindrome PartitioningProblem"
  ,"Word Wrap Problem"
  ,"Mobile Numeric Keypad Problem [ IMP ]"
  ,"Boolean Parenthesization Problem"
  ,"Largest rectangular sub-matrix whose sum is 0"
  ,"Largest area rectangular sub-matrix with equal number of 1’s and 0’s [ IMP ]"
  ,"Maximum sum rectangle in a 2D matrix"
  ,"Maximum profit by buying and selling a share at most k times"
  ,"Find if a string is interleaved of two other strings"
  ,"Maximum Length of Pair Chain"
  ,"Count set bits in an integer"
  ,"Find the two non-repeating elements in an array of repeating elements"
  ,"Count number of bits to be flipped to convert A to B"
  ,"Count total set bits in all numbers from 1 to n"
  ,"Program to find whether a no is power of two"
  ,"Find position of the only set bit"
  ,"Copy set bits in a range"
  ,"Divide two integers without using multiplication, division and mod operator"
  ,"Calculate square of a number without using *, / and pow()"
  ,"Power Set"
];
let Tags=["Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Array",
"Matrix",
"Matrix",
"Matrix",
"Matrix",
"Matrix",
"Matrix",
"Matrix",
"Matrix",
"Matrix",
"Matrix",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"String",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",
"Searching & Sorting",

"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",
"LinkedList",

"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",
"Binary Trees",

"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",
"Binary Search Trees",

"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",
"Greedy",

"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",
"BackTracking",

"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",
"Stacks & Queues",

"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",
"Heap",

"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",
"Graph",

"Trie",
"Trie",
"Trie",
"Trie",
"Trie",
"Trie",

"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",
"Dynamic Programming",

"Bit Manipulation",
"Bit Manipulation",
"Bit Manipulation",
"Bit Manipulation",
"Bit Manipulation",
"Bit Manipulation",
"Bit Manipulation",
"Bit Manipulation",
"Bit Manipulation",
"Bit Manipulation"]

let idx=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447]
let Link=["https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/","https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/"];
let Logos=["https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png","https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png","https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3029920.png","https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAaVBMVEX//PwvjUb///8qi0JUm2MIhDD5+PYlij8fiDvr8utRnmOItZAaiDk3kk35+vefxqaBtYxEmFhZoGl5soZyrn/D2cY9lFJLml2207vk7uTX5tm82MFqqHdjp3Ly9vGszrKUvpzN4dGPv5lNxO84AAAF6ElEQVR4nO1aaZerKBDVoiOYuEXFhbjm///I0WwWuGHPvO4353C/dCchN5cCawPLMjAwMDAwMDAwMDAwMDAwMDAwMDD4HwA++D2GiScQN96GYcFvpXWc8fGN8saLMGz5TQTf1wSWK8LapghZcisbfT6AprwlGWaw61C41nFFEPDu6jFiYxDq0boVeoIARFsPX1AomHfteHBMEATFl61o+UjKUrE/P7BEmtFlBmZ/FQcEgcOv3iLT20ax2OMQsWoXicK7ckdTEJQpWWd6gPrR1vQgiHy6zUBIWmrpcUK6QzWC+cU6xc1m+wyUtsG+aYJIQ8xjevdlAwHc94z7ntKmiR9cZaUxsRdb4i6wDUutz1DtLFgZa3MNbPFcD7jHGMpN40Sn2VcIIaMDW1oAljaKHmiWbPNmmFOcuk3zQKR6LXqN6ySK0vqcsdmuGuwjf3/BNpRl5zqNoqSOr1T1q9HO5nEixEe9c8eF24yBpikFj3zVHbFE4oNEUUM8P+KibMbg1biCd2cPzYlFzraakfE9nvqpcKwpIgz/OYOzlgXRFumBVrYfGdyvyiDSj0uiiYbncV5POqv6eXACi+eSAYjfT7/W+5JWlvN5NAHo6ycD3bfNQ89ocUJDdZu+6NxI2gD0PMk5Y+MQFi05gnG7h2P8YImWmsd+ple+aki4ZViPF75GQuhhNdltnYFnZHcXT3Ciq9gKSRwvCsmfvgzKHL/rr89nXNar3kq9sGzmiQ27ENY93+3QpiKk32Zwtz49CmixIewHt4ufOdLq5zP/BS7YfYy7B0LssC4/KsayGrSdST6+g3YOyZoflgMtfowGD9Xjh+2Hl2pAU0/WYB0A2sik/mnjyAGBVk1ToZc/bxwLxPVjHuKXpT8ZZ9Np/TE91bRaXt9PW4lUv6BGerJZ26IX4a/I4ZNBaIQSfm8rPOiSH4czJbKkQit3cr5BpqgJ86/DWClfyHGmXFlfSBk5jGU1j2T/IFiqyDnrVWp/COSsyMl+V04my2n8X5Yjl+vIqf4KfLkaDf4u6/xle+dvkxNPcuhJC1J97Ek1jafHMMUVEitypnSFJo2jAxd5ZSIEevHlahE0yfSbShIA909EHhJdnRAIHJkjdl1kXlsrhgJKt9ldkVNM1va0sicHxfCxcEClhV7xDQL9pDoBF2ULqYYcTGaTAqBA1tGaEKTTBJhaBTY5TjX32aBGG3GsY3ClQ2sNgnJydSSf5fqoEqDbHbIHGe7k0LH6B9xx1UjeoUPG6WafcvRo+HvGxnn7a23k1dvN3kGgOEDme99FKQaNt8nAwZ0cmj48fJDi9847PX6I0WKf5w0EuEtNu62GOLgx7iu9+l/Q4zBMF5q8CIHUgrwvDC1xD5d066dEUNZYDU3eHyTS2/X6AzE25tHQ01JzGbBgm6UrswOLS8cfhLwHgivlq9Rf6Ay+BkrNZ7bYB5O352Dt25KBwL3IvVNUVcnduGHYZfGUAG7SWq9tewipzJYKR1I0dpc7uXEqe2AnkRu5LO8aS6XoU3k+dK1KhFpmo15diOZTCgUlj4jaNs+xAcDNlY8ZiXgZfCgaUdSe8iOrLlPyBc+x9FolXXsbEEZVPjvoIkqwGSpTNW+iNK+icGRou6S6qhRbPk5uiT6HE8qeWDgkIZnakIR+nsdtUew0WIvTgayQePP2KPDlE90VhlOx7S0L/RyeZEszG1vY2gxbJ5hr67UCdl55QMVZ84Bte6VebH2uw0a8ZM3rjsePOlNi+XYr/MUW3O3d01maFxtRBIp8n8FeOdqdg9cbp/qjNzl12xkalN1p00LEq7melpHNKmKydklg8EX3cu/WA1jlfeZjPlqoHReH7oVAUETZwrUFwryqLXXuhACUbaXeKXlo8bLodvBOyCjILdL3ZZfnUe/wtw6F9o2ZMSaENZEZaJYW7mExLz4oedtdLklVRZdLWPTWwdtA4/C+CB8MyeXStbz8d3ecnsGzaayFhuIxhuDbDAYGBgYGBgYGBgYGBgYGBgYGBgYGP4t/AKEOWXXZHz+LAAAAAElFTkSuQmCC"]
  return (
    <div>
        <div className="card my-4">
  <div className="card-header" style={{color:"black"}}>
    Compititive Programming sheet by "450 Data Structure and Algorithm"
  </div>
<ul class="list-group">
{idx.map(i=>(
       <Question tag={Tags[i]} link={Link[i%2]} title={items[i]} logo={Logos[i%5]} />
))}
 </ul>
    </div>
    </div>
  )
}
