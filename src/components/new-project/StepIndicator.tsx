
import React from 'react';
import { cn } from '@/lib/utils';

export interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="relative flex justify-between w-full">
        {/* Line connecting steps */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 -translate-y-1/2" />
        
        {/* Steps */}
        {steps.map((step, index) => (
          <Step 
            key={index}
            label={step}
            status={
              index < currentStep ? "completed" :
              index === currentStep ? "current" :
              "pending"
            }
            onClick={() => onStepClick && onStepClick(index)}
            clickable={!!onStepClick}
          />
        ))}
      </div>
    </div>
  );
}

type StepStatus = "completed" | "current" | "pending";

interface StepProps {
  label: string;
  status: StepStatus;
  onClick?: () => void;
  clickable?: boolean;
}

function Step({ label, status, onClick, clickable }: StepProps) {
  // Determine step styling based on status
  const circleClasses = cn(
    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium z-10",
    status === "completed" ? "bg-olympus-accent text-black border-2 border-olympus-accent" : 
    status === "current" ? "bg-olympus-card-bg text-olympus-accent border-2 border-olympus-accent" : 
    "bg-olympus-card-bg text-slate-500 border-2 border-slate-700"
  );
  
  const labelClasses = cn(
    "mt-2 text-xs font-medium whitespace-nowrap",
    status === "completed" ? "text-olympus-accent" : 
    status === "current" ? "text-olympus-accent" : 
    "text-slate-500"
  );
  
  const containerClasses = cn(
    "flex flex-col items-center relative",
    clickable && status !== "pending" ? "cursor-pointer" : "cursor-default"
  );

  return (
    <div className={containerClasses} onClick={clickable ? onClick : undefined}>
      <div className={circleClasses}>
        {status === "completed" ? "✓" : (status === "current" ? "•" : "")}
      </div>
      <div className={labelClasses}>{label}</div>
    </div>
  );
}
