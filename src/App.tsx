
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

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
          <Route path="/novo-projeto" element={<NotFound />} />
          <Route path="/analytics" element={<NotFound />} />
          <Route path="/tutoriais" element={<NotFound />} />
          <Route path="/ajuda" element={<NotFound />} />
          <Route path="/configuracoes" element={<NotFound />} />
          <Route path="/projeto/:id" element={<NotFound />} />
          <Route path="/projeto/:id/chat" element={<NotFound />} />
          <Route path="/templates" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
