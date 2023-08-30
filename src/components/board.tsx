/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Todo from "../assets/svgs/Oval.svg";
import Doing from "../assets/svgs/Oval (1).svg";
import Done from "../assets/svgs/Oval (2).svg";
import { TaskContext } from "../pages/homepage";
import { Card } from ".";

interface Task {
  id: number;
  title: string;
  dueDate: any;
  status: "Todo" | "Doing" | "Done";
}

export const Board: React.FC = () => {
  const { tasks } = React.useContext(TaskContext)!;
  const taskTodo = tasks.filter((task: Task) => task.status === "Todo");
  const taskDoing = tasks.filter((task: Task) => task.status === "Doing");
  const taskDone = tasks.filter((task: Task) => task?.status === "Done");

  return (
    <div className="flex bg-gray10 h-full w-full p-6">
      <div className="flex flex-col w-72 mr-6">
        <div className="flex items-center mb-6">
          <img src={Todo} alt="Todo" className="mr-2" />
          <p className="text-gray40 text-sm font-bold">
            TODO ({taskTodo.length})
          </p>
        </div>
        {taskTodo.map((task: Task) => (
          <Card
            key={task.id}
            title={task.title}
            dueDate={task.dueDate}
            id={task.id}
          />
        ))}
      </div>
      <div className="flex flex-col w-72 mr-6">
        <div className="flex items-center mb-6 ">
          <img src={Doing} alt="Doing" className="mr-2" />
          <p className="text-gray40 text-sm font-bold">
            DOING ({taskDoing.length})
          </p>
        </div>
        {taskDoing.map((task: Task) => (
          <Card
            key={task.id}
            title={task.title}
            dueDate={task.dueDate}
            id={task.id}
          />
        ))}
      </div>
      <div className="flex flex-col w-72 mr-6">
        <div className="flex items-center mb-6">
          <img src={Done} alt="Done" className="mr-2" />
          <p className="text-gray40 text-sm font-bold">
            DONE ({taskDone.length})
          </p>
        </div>
        {taskDone.map((task: Task) => (
          <Card
            key={task.id}
            title={task.title}
            dueDate={task.dueDate}
            id={task.id}
          />
        ))}
      </div>
    </div>
  );
};
