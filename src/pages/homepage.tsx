/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Board, Layout } from "../components";

interface Task {
  id: number;
  title: string;
  dueDate: any;
  status: "Todo" | "Doing" | "Done";
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  updateTask: (id: number, status: "Todo" | "Doing" | "Done") => void;
}

export const TaskContext = React.createContext<TaskContextType | undefined>(
  undefined
);

export const Homepage: React.FC = () => {
  const [theme, setTheme] = React.useState("dark");
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: number, status: "Todo" | "Doing" | "Done") => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  return (
    <main data-theme={theme}>
      <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
        <Layout children={<Board />} setTheme={setTheme} />
      </TaskContext.Provider>
    </main>
  );
};
