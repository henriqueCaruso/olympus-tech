
import React from 'react';
import { cn } from "@/lib/utils";

export interface MessageBubbleProps {
  sender: "user" | "agent";
  content: string;
  timestamp: string;
  agentRole?: string;
  agentGods?: string;
}

export function MessageBubble({ sender, content, timestamp, agentRole, agentGods }: MessageBubbleProps) {
  const isAgent = sender === "agent";
  
  return (
    <div className={cn(
      "flex w-full max-w-3xl mb-4",
      isAgent ? "justify-start" : "justify-end"
    )}>
      <div className={cn(
        "relative rounded-lg p-4 shadow-md max-w-[85%] animate-fade-in",
        isAgent ? "bg-olympus-card-bg text-olympus-text-primary" : "bg-slate-800 text-olympus-text-primary ml-auto"
      )}>
        {isAgent && agentRole && (
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 rounded-full bg-slate-700 mr-2"></div>
            <div>
              <div className="text-sm font-medium">{agentRole}</div>
              {agentGods && (
                <div className="font-cinzel text-xs text-olympus-accent">{agentGods}</div>
              )}
            </div>
          </div>
        )}
        
        <div className="whitespace-pre-wrap text-sm">
          {content.split('\n\n').map((paragraph, index) => {
            // Handle bullet points
            if (paragraph.includes('\n- ')) {
              const [intro, ...listItems] = paragraph.split('\n- ');
              return (
                <div key={index} className="mb-3">
                  {intro && <p>{intro}</p>}
                  <ul className="list-disc pl-5 mt-1">
                    {listItems.map((item, i) => (
                      <li key={i} className="mb-1">{item}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            return <p key={index} className="mb-3 last:mb-0">{paragraph}</p>;
          })}
        </div>
        
        <div className={cn(
          "text-xs text-slate-400 mt-1",
          isAgent ? "text-right" : "text-left"
        )}>
          {timestamp}
        </div>
      </div>
    </div>
  );
}
