import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/TaskSlice";
import Modal from "./Modal";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      dispatch(addTask({ title: taskTitle, priority: taskPriority }));
      setTaskTitle("");
      setTaskPriority("Medium");
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add Task</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleAddTask} className="flex flex-col space-y-4">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task title"
            className="border rounded p-2"
            required
          />
          <select
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
            className="border rounded p-2"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default TaskInput;
