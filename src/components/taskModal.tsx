/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Input from "./common/input";
import Button from "./common/button";
import Select from "./common/select";
import { useTaskContext } from "../utils/common";

export const TaskModal: React.FC = () => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState<any>();
  const [status, setStatus] = useState<any>("Todo");

  const handleAddTask = () => {
    addTask({
      id: Math.floor(Math.random() * 100),
      title,
      dueDate,
      status,
    });
    setTitle("");
    setDueDate("");
    setStatus("Todo");
    window.my_modal_1.close();
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <form method="dialog" className="modal-box">
        <Input
          label="Title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="Due Date"
          type="date"
          onChange={(e) =>
            setDueDate(new Date(e.target.value).toLocaleDateString())
          }
        />
        <Select
          label="Status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as "Todo" | "Doing" | "Done")
          }
        >
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </Select>
        <Button onClick={handleAddTask}>Add Task</Button>
      </form>
    </dialog>
  );
};
