pragma solidity >=0.5.0;

contract TodoList {
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    //Task counter
    uint public taskCount = 0;

    //Task mapping
    mapping(uint => Task) public tasks;

    constructor() public {
        createTask("Hi, I'm Gurpreet and this is my website: gurpreetsingh.me");
    }

    //Creating a task
    function createTask (string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }
}