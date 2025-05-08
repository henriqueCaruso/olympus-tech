
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

interface TokenAllocationChartProps {
  timeframe: "day" | "week" | "month" | "year";
}

export const TokenAllocationChart = ({ timeframe }: TokenAllocationChartProps) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with different data based on timeframe
    setIsLoading(true);
    
    // Generate sample data
    const generateData = () => {
      let dataPoints: any[] = [];
      
      switch(timeframe) {
        case "day":
          // Daily data by hour
          dataPoints = [
            { name: "00:00", tokens: 1200, utilization: 60 },
            { name: "06:00", tokens: 800, utilization: 40 },
            { name: "12:00", tokens: 2500, utilization: 85 },
            { name: "18:00", tokens: 1800, utilization: 70 }
          ];
          break;
        case "week":
          // Weekly data by day
          dataPoints = [
            { name: "Dom", tokens: 5200, utilization: 65 },
            { name: "Seg", tokens: 8500, utilization: 78 },
            { name: "Ter", tokens: 9100, utilization: 82 },
            { name: "Qua", tokens: 7800, utilization: 75 },
            { name: "Qui", tokens: 8900, utilization: 80 },
            { name: "Sex", tokens: 7300, utilization: 73 },
            { name: "Sáb", tokens: 4200, utilization: 55 }
          ];
          break;
        case "month":
          // Monthly data by week
          dataPoints = [
            { name: "Semana 1", tokens: 32000, utilization: 70 },
            { name: "Semana 2", tokens: 38000, utilization: 75 },
            { name: "Semana 3", tokens: 30000, utilization: 68 },
            { name: "Semana 4", tokens: 35000, utilization: 72 }
          ];
          break;
        case "year":
          // Yearly data by month
          dataPoints = [
            { name: "Jan", tokens: 120000, utilization: 65 },
            { name: "Fev", tokens: 135000, utilization: 70 },
            { name: "Mar", tokens: 142000, utilization: 72 },
            { name: "Abr", tokens: 130000, utilization: 68 },
            { name: "Mai", tokens: 145000, utilization: 73 },
            { name: "Jun", tokens: 138000, utilization: 71 },
            { name: "Jul", tokens: 150000, utilization: 75 },
            { name: "Ago", tokens: 148000, utilization: 74 },
            { name: "Set", tokens: 152000, utilization: 76 },
            { name: "Out", tokens: 158000, utilization: 78 },
            { name: "Nov", tokens: 142000, utilization: 72 },
            { name: "Dez", tokens: 135000, utilization: 70 }
          ];
          break;
      }
      
      return dataPoints;
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
      <ComposedChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis 
          dataKey="name" 
          tick={{ fill: "#E5E5E5" }}
          tickLine={{ stroke: "#555" }}
          axisLine={{ stroke: "#555" }}
        />
        <YAxis 
          yAxisId="left"
          tick={{ fill: "#E5E5E5" }}
          tickLine={{ stroke: "#555" }}
          axisLine={{ stroke: "#555" }}
        />
        <YAxis 
          yAxisId="right"
          orientation="right"
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
          formatter={(value, name) => [
            name === "tokens" ? `${value} tokens` : `${value}%`,
            name === "tokens" ? "Tokens" : "Utilização"
          ]}
        />
        <Legend />
        <Bar 
          yAxisId="left" 
          dataKey="tokens" 
          name="Tokens" 
          fill="#D4AF37" 
          barSize={20} 
          radius={[4, 4, 0, 0]}
        />
        <Line 
          yAxisId="right" 
          type="monotone" 
          dataKey="utilization" 
          name="Utilização" 
          stroke="#28A745" 
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
