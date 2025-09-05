
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CollapsibleSidebar } from "@/components/layout/CollapsibleSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectChat from "./pages/ProjectChat";
import ProjectAnalytics from "./pages/ProjectAnalytics";
import ProjectArtifacts from "./pages/ProjectArtifacts";
import NewProject from "./pages/NewProject";
import Analytics from "./pages/Analytics";
import Tutorials from "./pages/Tutorials";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import Templates from "./pages/Templates";
import TaskManagement from "./pages/TaskManagement";
import Gods from "./pages/Gods";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen={false}>
          <div className="min-h-screen flex w-full">
            <CollapsibleSidebar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/tarefas" element={<TaskManagement />} />
                <Route path="/meus-projetos" element={<Projects />} />
                <Route path="/novo-projeto" element={<NewProject />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/deuses" element={<Gods />} />
                <Route path="/tutoriais" element={<Tutorials />} />
                <Route path="/ajuda" element={<Help />} />
                <Route path="/configuracoes" element={<Settings />} />
                <Route path="/projeto/:id" element={<ProjectDetail />} />
                <Route path="/projeto/:id/chat" element={<ProjectChat />} />
                <Route path="/projeto/:id/analytics" element={<ProjectAnalytics />} />
                <Route path="/projeto/:id/artifacts" element={<ProjectArtifacts />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
