# Singly Linked List
1. Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
2. Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
3. This object should be aware of a default empty value assigned to head when the linked list is instantiated.
4. Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
5. Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
6. Define a method called print which takes in no arguments and returns a collection all of the current Node values in the Linked List.
7. Append(value) which adds a new node with the given value to the end of the list
8. InsertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
9. InsertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node
10. Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Challenge
### add, insert, print
1. Can successfully instantiate an empty linked list
2. Can properly insert into the linked list
3. The head property will properly point to the first node in the linked list
4. Can properly insert multiple nodes into the linked list
5. Will return true when finding a value within the linked list that exists
6. Will return false when searching for a value in the linked list that does not exist
7. Can properly return a collection of all the values that exist in the linked list

### append, insertBefore, insertAfter
8. Can successfully add a node to the end of the linked list
9. Can successfully add multiple nodes to the end of a linked list
10. Can successfully insert a node before a node located i the middle of a linked list
11. Can successfully insert a node before the first node of a linked list
12. Can successfully insert after a node in the middle of the linked list
13. Can successfully insert a node after the last node of the linked list

### valueFromEnd
14. Where k is greater than the length of the linked list
15. Where k and the length of the list are the same
16. Where k is not a positive integer
17. Where the linked list is of a size 1
18. where k is not at the end, but somewhere in the middle of the linked list


## Approach & Efficiency
Followed the instruction of reading documents

## White board
![white board for [append, insertBefore, insertAfter](### append, insertBefore, insertAfter)](https://photos.google.com/album/AF1QipPAkDb2gLOVkNcS9DY4xq6Zkarlhm0VamPW77j6/photo/AF1QipNQ7Flvff6T1xKK6gF00ia4oO-NNtJJ1EJeuhUr)

![white board for [valueFromEnd](### valueFromEnd)](https://photos.google.com/album/AF1QipPAkDb2gLOVkNcS9DY4xq6Zkarlhm0VamPW77j6/photo/AF1QipOhhsppJvf0B98xo85NLb2dkwbDziXoJQADpvcn)

# Code Challenge: Class 08

Challenge adds a methods to the LinkedList class:
* `mergeLists` - takes two linked lists as arguments. Zips the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Keeps additional space down to O(1). 
## Whiteboard
![Class 8 whiteboard](https://photos.google.com/album/AF1QipPAkDb2gLOVkNcS9DY4xq6Zkarlhm0VamPW77j6/photo/AF1QipP_8tYayUpQDZYNWpGeMBnHsxWTGSorzNDNPOps)
