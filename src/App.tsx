
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectChat from "./pages/ProjectChat";
import NewProject from "./pages/NewProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/meus-projetos" element={<NotFound />} />
          <Route path="/novo-projeto" element={<NewProject />} />
          <Route path="/analytics" element={<NotFound />} />
          <Route path="/tutoriais" element={<NotFound />} />
          <Route path="/ajuda" element={<NotFound />} />
          <Route path="/configuracoes" element={<NotFound />} />
          <Route path="/projeto/:id" element={<ProjectDetail />} />
          <Route path="/projeto/:id/chat" element={<ProjectChat />} />
          <Route path="/templates" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
