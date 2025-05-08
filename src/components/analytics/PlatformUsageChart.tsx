
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

interface PlatformUsageChartProps {
  timeframe: "day" | "week" | "month" | "year";
}

export const PlatformUsageChart = ({ timeframe }: PlatformUsageChartProps) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with different data based on timeframe
    setIsLoading(true);
    
    // Generate sample data
    const generateData = () => {
      let dataPoints: any[] = [];
      let labelFormat: string;
      
      switch(timeframe) {
        case "day":
          // 24 hours data
          dataPoints = Array.from({ length: 24 }, (_, i) => ({
            time: `${i}:00`,
            usage: Math.floor(Math.random() * 500) + 100
          }));
          break;
        case "week":
          // 7 days data
          const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
          dataPoints = days.map(day => ({
            time: day,
            usage: Math.floor(Math.random() * 3000) + 500
          }));
          break;
        case "month":
          // 30 days data
          dataPoints = Array.from({ length: 30 }, (_, i) => ({
            time: `${i + 1}`,
            usage: Math.floor(Math.random() * 5000) + 1000
          }));
          break;
        case "year":
          // 12 months data
          const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
          dataPoints = months.map(month => ({
            time: month,
            usage: Math.floor(Math.random() * 30000) + 10000
          }));
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
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis 
          dataKey="time" 
          tick={{ fill: "#E5E5E5" }}
          tickLine={{ stroke: "#555" }}
          axisLine={{ stroke: "#555" }}
        />
        <YAxis 
          tick={{ fill: "#E5E5E5" }}
          tickLine={{ stroke: "#555" }}
          axisLine={{ stroke: "#555" }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: "#0A0E1B", 
            borderColor: "#333",
            color: "#E5E5E5" 
          }}
          formatter={(value) => [`${value} tokens`, "Uso"]}
        />
        <Area 
          type="monotone" 
          dataKey="usage" 
          stroke="#D4AF37" 
          fillOpacity={1}
          fill="url(#colorUsage)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
