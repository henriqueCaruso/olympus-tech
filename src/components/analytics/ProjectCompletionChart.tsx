
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from "recharts";

interface ProjectCompletionChartProps {
  timeframe: "day" | "week" | "month" | "year";
}

export const ProjectCompletionChart = ({ timeframe }: ProjectCompletionChartProps) => {
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
          // No meaningful completion data for a single day
          dataPoints = [
            { name: "Atual", completed: 0, expected: 0 }
          ];
          break;
        case "week":
          // Weekly completion data
          dataPoints = [
            { name: "Semana Passada", completed: 3, expected: 2 },
            { name: "Semana Atual", completed: 1, expected: 2 }
          ];
          break;
        case "month":
          // Monthly completion data by week
          dataPoints = [
            { name: "Semana 1", completed: 3, expected: 2 },
            { name: "Semana 2", completed: 2, expected: 2 },
            { name: "Semana 3", completed: 1, expected: 3 },
            { name: "Semana 4", completed: 0, expected: 2 }
          ];
          break;
        case "year":
          // Yearly completion data by quarter
          dataPoints = [
            { name: "Q1", completed: 8, expected: 7 },
            { name: "Q2", completed: 6, expected: 8 },
            { name: "Q3", completed: 3, expected: 6 },
            { name: "Q4", completed: 0, expected: 9 }
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
      <BarChart
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
          tick={{ fill: "#E5E5E5" }}
          tickLine={{ stroke: "#555" }}
          axisLine={{ stroke: "#555" }}
          allowDecimals={false}
          label={{ 
            value: 'Projetos', 
            angle: -90, 
            position: 'insideLeft',
            style: { fill: '#E5E5E5' }
          }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: "#0A0E1B", 
            borderColor: "#333",
            color: "#E5E5E5" 
          }}
          formatter={(value) => [`${value} projetos`]}
        />
        <ReferenceLine y={0} stroke="#555" />
        <Bar dataKey="completed" name="Concluídos" fill="#28A745" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expected" name="Esperados" fill="#D4AF37" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
