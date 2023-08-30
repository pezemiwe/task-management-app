import { useTaskContext } from "../utils/common";
import Button from "./common/button";

interface CardProps {
  title: string;
  dueDate: string;
  id: number;
}

export const Card: React.FC<CardProps> = ({ title, dueDate, id }) => {
  const { removeTask } = useTaskContext();
  return (
    <div className="flex flex-col p-4 cursor-pointer bg-gray20  rounded active:scale-95 mb-4">
      <div className="flex items-center justify-between">
        <p className="text-white text-md font-bold mb-2">{title}</p>
        <Button onClick={() => removeTask(id)}>Delete</Button>
      </div>
      <p>0 of 1 subtasks</p>
      <div className="flex items-center justify-end w-full text-gray40 text-xs">
        <p>Due: {dueDate}</p>
      </div>
    </div>
  );
};
