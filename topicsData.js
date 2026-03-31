const topicsData = {
    Arrays: {
        definition: "An array is a collection of items stored at contiguous memory locations. It is a data structure that stores a fixed-size sequential collection of elements of the same type.",
        operations: [
            "Insertion",
            "Deletion",
            "Traversal",
            "Searching"
        ],
        practiceProblems: ["Two Sum Problem", "Maximum Subarray", "Rotate Array", "Product of Array Except Self"]
    },
    Strings: {
        definition: "A string is a sequence of characters, and it can be thought of as an array of characters. It is used to store and manipulate a text data.",
        operations: [
            "Concatenation",
            "Substring",
            "Character Replacement"
        ],
        practiceProblems: ["Longest Substring Without Repeating Characters", "Valid Anagram", "Palindrome Check"]
    },
    LinkedList: {
        definition: "A linked list is a linear data structure where elements are not stored at contiguous memory locations. Instead, each element (node) has a reference (link) to the next node in the sequence.",
        types: ["Singly Linked List", "Doubly Linked List", "Circular Linked List"],
        operations: ["Insertion", "Deletion", "Traversal"],
        practiceProblems: ["Reverse Linked List", "Detect Cycle in Linked List", "Merge Two Sorted Lists"]
    },
    Stacks: {
        definition: "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. It allows operations such as push (add an item) and pop (remove an item).",
        operations: ["Push", "Pop", "Peek"],
        applications: ["Expression Evaluation", "Backtracking"],
        practiceProblems: ["Valid Parentheses", "Min Stack", "Evaluate Reverse Polish Notation"]
    },
    Queues: {
        definition: "A queue is a linear data structure that follows the First In First Out (FIFO) principle. It allows operations such as enqueue (add an item) and dequeue (remove an item).",
        types: ["Simple Queue", "Circular Queue", "Double-ended Queue"],
        operations: ["Enqueue", "Dequeue", "Front"],
        applications: ["Scheduling", "Breadth-first search"],
        practiceProblems: ["Implement Queue using Stacks", "Design Circular Queue"]
    },
    Trees: {
        definition: "A tree is a hierarchical data structure consisting of nodes, where each node has a value and links to other nodes (children).",
        types: ["Binary Tree", "Binary Search Tree", "AVL Tree", "Segment Tree"],
        traversalMethods: ["Inorder", "Preorder", "Postorder", "Level Order"],
        practiceProblems: ["Maximum Depth of Binary Tree", "Invert Binary Tree", "Lowest Common Ancestor"]
    },
    Graphs: {
        definition: "A graph is a non-linear data structure that consists of a set of vertices (nodes) and edges (connections between nodes).",
        representation: ["Adjacency List", "Adjacency Matrix"],
        algorithms: ["Depth First Search", "Breadth First Search", "Dijkstra's Algorithm"],
        practiceProblems: ["Clone Graph", "Course Schedule", "Number of Islands"]
    },
    Hashing: {
        definition: "Hashing is a process that transforms input data of any size into a fixed-size value. It helps in fast data retrieval, often using a hash table.",
        techniques: ["Chaining", "Open Addressing"],
        applications: ["Database Indexing", "Password Verification"],
        practiceProblems: ["Two Sum", "Group Anagrams"]
    },
    DynamicProgramming: {
        definition: "Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable when the subproblems overlap.",
        techniques: ["Memoization", "Tabulation"],
        practiceProblems: ["Climbing Stairs", "Coin Change Problem", "Longest Increasing Subsequence"]
    }
};

module.exports = topicsData;