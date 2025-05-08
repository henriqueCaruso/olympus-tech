
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ReferenceLine
} from "recharts";

// Sample data for progress metrics
const generateProgressData = (projectId: string) => {
  const data = [];
  const now = new Date();
  
  // Initial progress value
  let progress = 5;
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date();
    date.setDate(now.getDate() - i);
    
    // Simulate progress increment (with some randomness)
    progress += Math.floor(Math.random() * 4) + 1;
    if (progress > 100) progress = 100;
    
    // Add projected progress (slightly ahead of actual)
    const projectedProgress = Math.min(100, progress + Math.floor(Math.random() * 10) + 5);
    
    data.push({
      date: date.toLocaleDateString('pt-BR'),
      actual: progress,
      projected: projectedProgress,
    });
  }
  
  return data;
};

interface ProgressMetricsProps {
  projectId: string;
}

export const ProgressMetrics = ({ projectId }: ProgressMetricsProps) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      setData(generateProgressData(projectId));
      setIsLoading(false);
    }, 1000);
  }, [projectId]);

  return (
    <Card className="bg-olympus-card-bg border-slate-800">
      <CardHeader>
        <CardTitle>Métricas de Progresso</CardTitle>
        <CardDescription>Acompanhe o progresso atual vs. projeções</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-80 flex items-center justify-center">
            <div className="animate-pulse text-olympus-text-secondary">Carregando dados...</div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis 
                dataKey="date" 
                tick={{ fill: "#E5E5E5" }}
                tickLine={{ stroke: "#555" }}
                axisLine={{ stroke: "#555" }}
              />
              <YAxis 
                tick={{ fill: "#E5E5E5" }}
                tickLine={{ stroke: "#555" }}
                axisLine={{ stroke: "#555" }}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#0A0E1B", 
                  borderColor: "#333",
                  color: "#E5E5E5" 
                }}
                labelStyle={{ color: "#E5E5E5" }}
              />
              <Legend />
              <ReferenceLine y={100} label="Completo" stroke="#28A745" strokeDasharray="3 3" />
              <Line 
                type="monotone" 
                dataKey="actual" 
                name="Progresso Real" 
                stroke="#D4AF37" 
                strokeWidth={2}
                dot={{ r: 3, fill: "#D4AF37" }}
                activeDot={{ r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="projected" 
                name="Projeção" 
                stroke="#4F6294" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 3, fill: "#4F6294" }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};
