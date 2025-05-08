
import { MainLayout } from "@/components/layout/MainLayout";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlatformUsageChart } from "@/components/analytics/PlatformUsageChart";
import { ProjectCompletionChart } from "@/components/analytics/ProjectCompletionChart";
import { CostBreakdownChart } from "@/components/analytics/CostBreakdownChart";
import { TokenAllocationChart } from "@/components/analytics/TokenAllocationChart";

const Analytics = () => {
  const [timeframe, setTimeframe] = useState<"day" | "week" | "month" | "year">("month");
  
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-playfair text-2xl font-semibold">Analytics da Plataforma</h1>
          
          <div className="bg-olympus-card-bg rounded-md flex">
            <button 
              onClick={() => setTimeframe("day")}
              className={`px-3 py-1 text-sm ${timeframe === "day" ? "text-olympus-accent" : "text-olympus-text-secondary"}`}
            >
              Dia
            </button>
            <button 
              onClick={() => setTimeframe("week")}
              className={`px-3 py-1 text-sm ${timeframe === "week" ? "text-olympus-accent" : "text-olympus-text-secondary"}`}
            >
              Semana
            </button>
            <button 
              onClick={() => setTimeframe("month")}
              className={`px-3 py-1 text-sm ${timeframe === "month" ? "text-olympus-accent" : "text-olympus-text-secondary"}`}
            >
              Mês
            </button>
            <button 
              onClick={() => setTimeframe("year")}
              className={`px-3 py-1 text-sm ${timeframe === "year" ? "text-olympus-accent" : "text-olympus-text-secondary"}`}
            >
              Ano
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-olympus-card-bg border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Uso da Plataforma</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <PlatformUsageChart timeframe={timeframe} />
            </CardContent>
          </Card>
          
          <Card className="bg-olympus-card-bg border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Conclusão de Projetos</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ProjectCompletionChart timeframe={timeframe} />
            </CardContent>
          </Card>
          
          <Card className="bg-olympus-card-bg border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Distribuição de Custos</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CostBreakdownChart timeframe={timeframe} />
            </CardContent>
          </Card>
          
          <Card className="bg-olympus-card-bg border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Alocação de Tokens</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <TokenAllocationChart timeframe={timeframe} />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Analytics;
