
import React, { useRef, useEffect } from 'react';
import { ChatMessage } from '@/data/messages';
import { Agent } from '@/data/agents';
import { MessageBubble } from './MessageBubble';

interface ChatThreadProps {
  messages: ChatMessage[];
  agents: Agent[];
  isTyping?: boolean;
}

export function ChatThread({ messages, agents, isTyping = false }: ChatThreadProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Find agent details for a message
  const getAgentDetails = (agentId: string | null) => {
    if (!agentId) return null;
    return agents.find(agent => agent.id === agentId);
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {messages.map((message) => {
          const agent = message.agentId ? getAgentDetails(message.agentId) : null;
          
          return (
            <MessageBubble
              key={message.id}
              sender={message.sender}
              content={message.content}
              timestamp={message.timestamp}
              agentRole={agent?.role}
              agentGods={agent?.gods}
            />
          );
        })}
        
        {isTyping && (
          <div className="flex items-center text-sm text-slate-400 mb-4">
            <div className="w-6 h-6 rounded-full bg-slate-700 mr-2"></div>
            <div className="flex space-x-1">
              <span className="animate-bounce">•</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>•</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>•</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
