import { TaskModal } from ".";
import Button from "./common/button";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar bg-gray20 text-white h-20 px-8 w-full">
        <div
          className="container-fluid items-center justify-between flex w-full"
        >
          <p className="lg font-bold">Smart Save Mobile App</p>
          <Button onClick={() => window.my_modal_1.showModal()}>
            + Add New Task
          </Button>
        </div>
      </nav>
      <TaskModal />
    </>
  );
};
