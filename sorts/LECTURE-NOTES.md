## Brief description

Merge sort is one of the commonly used sorting algorithms in computer science. It is used by Firefox and Safari in their implementation of Array.prototype.sort() (remember how JavaScript behaves differently in different browsers?). It has good performance, it’s easy to implement and understand.

## How does it work?

It all revolves around the idea that it’s easier to sort two sorted arrays rather than one unsorted one. Once we have our two sorted arrays we start comparing their items one by one and adding the smaller item in our result list. Imagine that you’ve got two lists A and B. You compare A[0] to B[0]. Let’s say that A[0] is smaller — we add it to the result list and continue. Then we compare A[1] to B[0]. This time B[0] is the smaller one so we add it and continue comparing A[1] to B[1] and so on…

At the end of the sorting any left variables are concatenated at the end of our results list — since the A and B arrays are already sorted this will not cause reordering.

Learning Objectives
What
Will
The
Students
Learn
Today
Lecture Flow
Main Point
Supporting Points
Another main point
More details
Go here
Diagram
Include your "Visual" here

Algorithm
Describe in detail how the algorithm works. Include small code snippets to possibly support the points

Pseudocode
Readings and References
Watch

Video
Read

Article 1
Article 2
Bookmark

Website