import Task from "../Task/Task";

const Tasks = [
    {

    },
    {

    }
]
const TaskList = () => {
    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
        <fieldset className="space-y-6">
            <legend class="text-xl font-bold text-indigo-500">Todo Tasks</legend>

            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                {

                }
                <Task />
            </div><hr/>
            <legend class="text-xl font-bold text-indigo-500">Completed Tasks</legend>

            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                {

                }
                <Task />
            </div>
        </fieldset>

    )
}

export default TaskList;