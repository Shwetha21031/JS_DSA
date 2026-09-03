
Arrays are fast for index access, 

but slow for inserting/deleting at the beginning or middle because elements need to be shifted.

## Time complexities
- Accessing by index = O(1)
- Traversing through array = O(n)
- Inserting element
    - beginning = O(n) - insert + rearranging the index 
    - end - O(1)
- Removing element
    - beginning = O(n) - insert + rearranging the index 
    - end - O(1)
- slice: depends k-length of string = O(k)
- search sorted = Binary O(logn)
- search unsorted = linear O(n)
- Copy entire array = O(n)
- Concatenate arrays = concat() = O(n + m)
- Search with includes() = O(n)
- Search with indexOf() = O(n)
- Reverse — reverse() = O(n)
- Sort — sort() = O(n log n) average for typical comparison sorting
- Map/Fileter/Reduce = O(n)
