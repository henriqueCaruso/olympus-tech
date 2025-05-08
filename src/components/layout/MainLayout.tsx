
import { cn } from "@/lib/utils";
import { Sidebar } from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-olympus-background flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className={cn("flex-1 ml-60 p-6", className)}>
        {children}
      </main>
    </div>
  );
}
