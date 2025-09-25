'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function CleanAllButton({ articlesCount, onCleanAll }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCleanAll = async (e) => {
    e.preventDefault();
    
    const confirmed = confirm(
      `⚠️ DANGER: Clean All Trash\n\n` +
      `This will permanently delete all ${articlesCount} articles in the trash.\n\n` +
      `This action CANNOT be undone and all articles will be lost forever.\n\n` +
      `Are you absolutely sure you want to continue?`
    );
    
    if (!confirmed) return;
    
    // Second confirmation for extra safety
    const doubleConfirmed = confirm(
      `Last chance!\n\n` +
      `You are about to permanently delete ${articlesCount} articles.\n\n` +
      `Click OK to confirm, or Cancel to abort.`
    );
    
    if (!doubleConfirmed) return;
    
    setIsProcessing(true);
    try {
      const formData = new FormData();
      await onCleanAll(formData);
    } catch (error) {
      console.error('Clean all error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button 
      type="button"
      onClick={handleCleanAll}
      disabled={isProcessing || articlesCount === 0}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
      {isProcessing ? (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-700"></div>
      ) : (
        <TrashIcon className="size-4" />
      )}
      <span>{isProcessing ? 'Cleaning...' : 'Clean All Trash'}</span>
    </button>
  );
}