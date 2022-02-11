import Task from "../Task/Task";

const Tasks = [
    {
        taskData: 'Hekllo',
        checked: false
    },
    {
        taskData: 'Hekllo  yupppppiiii',
        checked: false
    },
    {
        taskData: 'Hekllo mannnnn',
        checked: true
    },
]
const TaskList = ({tasks}) => {
    return (
        <fieldset className="space-y-6">
            <legend className="text-xl font-bold text-indigo-500">Todo Tasks</legend>
            {
                tasks.map((task, index) => {
                    if(task.completed == true){
                        return (
                            <div key={index} className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                                <Task taskContent={task.content} taskNumber={index+1} completed={task.completed}/>
                            </div>
                        )
                    }
                })
            }
            <hr/>
            <legend className="text-xl font-bold text-indigo-500">Completed Tasks</legend>
            {
                tasks.map((task, index) => {
                    if(task.completed == false){
                        return (
                            <div key={index} className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                                <Task taskContent={task.content} taskNumber={index+1} completed={task.completed}/>
                            </div>

                        )
                    }
                })
            }
        </fieldset>

    )
}

export default TaskList;