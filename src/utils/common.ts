import React from 'react';
import { TaskContext } from "../pages";

export const useTaskContext = () => {
    const context = React.useContext(TaskContext);
    if (!context) {
      throw new Error("useTaskContext must be used within a TaskProvider");
    }
    return context;
  };