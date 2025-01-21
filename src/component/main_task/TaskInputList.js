import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../api/apitasks/TaskSlice";
import Modal from "./Modal";

const TaskInputList = () => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");
  // This is a toggle to open and close the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      // Dispatches the action to add a new task with the specified title and priority
      dispatch(addTask({ title: taskTitle, priority: taskPriority }));
      // Resets the form fields and closes the modal after adding the task
      setTaskTitle("");
      setTaskPriority("Medium");
      setIsModalOpen(false);
    }
  };
  
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add List</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleAddTask} className="flex flex-col sm:my-10 my-4 sm:space-y-4">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task title"
            className="border rounded p-2 text-black"
            required
          />
          <select
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
            className="border rounded p-2 text-black cursor-pointer"
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

export default TaskInputList;
