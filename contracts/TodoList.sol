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

    //Events
    event TaskCreated(
        uint id,
        string content,
        bool completed
    );

    event TaskCompleted(
        uint id,
        bool completed
    );

    constructor() public {
        createTask("Hi, I'm Gurpreet and this is my website: gurpreetsingh.me");
    }

    //Creating a task
    function createTask (string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false);
        emit TaskCreated(taskCount, _content, false);
    }

    function toggleCompleted(uint _id) public {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;

        emit TaskCompleted(_id, _task.completed);
    }
}