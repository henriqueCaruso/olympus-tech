
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

interface CostBreakdownChartProps {
  timeframe: "day" | "week" | "month" | "year";
}

export const CostBreakdownChart = ({ timeframe }: CostBreakdownChartProps) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const COLORS = ["#D4AF37", "#4F6294", "#28A745", "#6C757D", "#495057"];

  useEffect(() => {
    // Simulate API call with different data based on timeframe
    setIsLoading(true);
    
    // Generate sample data with slightly different values based on timeframe
    const generateData = () => {
      return [
        { name: "Geração de Texto", value: 35 + (timeframe === "month" ? 5 : 0) },
        { name: "Análise de Código", value: 25 + (timeframe === "week" ? 5 : 0) },
        { name: "Pesquisa de Dados", value: 20 - (timeframe === "year" ? 5 : 0) },
        { name: "Design de UI", value: 15 },
        { name: "Outros", value: 5 }
      ];
    };
    
    setTimeout(() => {
      setData(generateData());
      setIsLoading(false);
    }, 800);
  }, [timeframe]);

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-pulse text-olympus-text-secondary">Carregando dados...</div>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value) => `${value}%`}
          contentStyle={{ 
            backgroundColor: "#0A0E1B", 
            borderColor: "#333",
            color: "#E5E5E5" 
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
