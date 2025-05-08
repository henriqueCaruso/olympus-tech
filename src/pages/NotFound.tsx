
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center animate-fade-in">
        <div className="text-center">
          <h1 className="font-cinzel text-5xl font-bold mb-4 text-olympus-accent">404</h1>
          <p className="text-xl text-olympus-text-secondary mb-8">
            Esta página está em desenvolvimento
          </p>
          <Button 
            asChild
            className="bg-olympus-accent text-black hover:bg-olympus-accent/90 hover:text-black"
          >
            <a href="/">Voltar para Dashboard</a>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
