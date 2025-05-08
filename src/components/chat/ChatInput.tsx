
import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, placeholder = "Digite sua mensagem...", disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-slate-800">
      <div className="flex items-end bg-slate-800 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-olympus-accent">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          className="flex-1 bg-transparent border-none resize-none p-3 text-sm text-olympus-text-primary focus:outline-none min-h-[60px]"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        
        <button 
          type="submit" 
          disabled={!message.trim() || disabled}
          className="flex items-center justify-center p-3 h-[60px] text-olympus-accent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
        </button>
      </div>
      <div className="text-xs text-slate-500 mt-2">
        Pressione Enter para enviar, Shift + Enter para nova linha
      </div>
    </form>
  );
}
