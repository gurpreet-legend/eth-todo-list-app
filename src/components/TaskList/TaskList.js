import Task from "../Task/Task";

const TaskList = ({tasks, account, methods}) => {

    const toggleCompleted = async (taskId) => {
        const result = await methods.toggleCompleted(parseInt(taskId)).send({from: account});
        console.log(result);
    }
    return (
        <fieldset className="space-y-6">
            <legend className="text-xl font-bold text-indigo-500">Todo Tasks</legend>
            {
                tasks.map((task, index) => {
                    if(task.completed == false){
                        return (
                            <div key={index} className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                                <Task toggleCompleted={toggleCompleted} methods={methods} account={account} taskContent={task.content} taskNumber={task.id} completed={task.completed}/>
                            </div>
                        )
                    }
                })
            }
            <hr/>
            <legend className="text-xl font-bold text-indigo-500">Completed Tasks</legend>
            {
                tasks.map((task, index) => {
                    if(task.completed == true){
                        return (
                            <div key={index} className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                                <Task toggleCompleted={toggleCompleted} methods={methods} aacount={account} taskContent={task.content} taskNumber={task.id} completed={task.completed}/>
                            </div>

                        )
                    }
                })
            }
        </fieldset>

    )
}

export default TaskList;