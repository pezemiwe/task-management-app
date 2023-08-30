import { Navbar, Sidebox } from ".";

interface LayoutProps {
  children: React.ReactNode;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}

export const Layout: React.FC<LayoutProps> = ({ children, setTheme }) => {
  return (
    <div className="max-w-screen-2xl mx-auto flex md:flex-row h-screen">
      <div className="hidden md:block">
        <Sidebox setTheme={setTheme} />
      </div>
      <div className="flex-1 h-full">
        <Navbar />
        <div
          className="h-full w-full overflow-y-scroll"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
