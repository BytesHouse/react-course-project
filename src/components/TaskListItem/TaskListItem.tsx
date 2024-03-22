import React from 'react';
import {getStatusStyle} from "../utils/helpers/getStatusStyle";
import {useDeleteTaskMutation} from "../features/auth/authApiSlice";
import {Task} from "../types/Task.types";

const TaskListItem = ({id, title, status, createdAt}: Task) => {
    const [deleteTask] = useDeleteTaskMutation();
    const handleClickDelete = async (id: number) => {
        // eslint-disable-next-line no-restricted-globals
        const conf = confirm('Are you sure delete this task');
        if (conf) {
            await deleteTask(id)
        }
    }
    return (
        <li key={id} className="flex justify-between items-center gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                    <p className="text-md font-semibold leading-6 text-gray-900">{title}</p>
                    <p className={`${getStatusStyle(status)} text-sm leading-6 text-gray-900`}>{status}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex gap-[10px] sm:items-end">
                <p>
                    {createdAt}
                </p>
                <button onClick={() => handleClickDelete(id)} className="text-red-500">Delete</button>
            </div>
        </li>
    )
}


export default TaskListItem;