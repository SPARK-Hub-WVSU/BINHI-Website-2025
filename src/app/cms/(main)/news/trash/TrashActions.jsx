'use client';

import { ArrowUturnLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function TrashActions({ articleId, onRestore, onPermanentDelete }) {
  const [isRestoring, setIsRestoring] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRestore = async (e) => {
    e.preventDefault();
    setIsRestoring(true);
    try {
      const formData = new FormData();
      formData.append('articleId', articleId);
      await onRestore(formData);
    } catch (error) {
      console.error('Restore error:', error);
    } finally {
      setIsRestoring(false);
    }
  };

  const handlePermanentDelete = async (e) => {
    e.preventDefault();
    
    const confirmed = confirm(
      'Are you sure you want to permanently delete this article?\n\n' +
      'This action cannot be undone and the article will be lost forever.'
    );
    
    if (!confirmed) return;
    
    setIsDeleting(true);
    try {
      const formData = new FormData();
      formData.append('articleId', articleId);
      await onPermanentDelete(formData);
    } catch (error) {
      console.error('Delete error:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
      <button 
        onClick={handleRestore}
        disabled={isRestoring || isDeleting}
        className="flex items-center justify-center gap-2 px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] sm:min-h-0">
        {isRestoring ? (
          <div className="animate-spin rounded-full h-3 lg:h-4 w-3 lg:w-4 border-b-2 border-green-700"></div>
        ) : (
          <ArrowUturnLeftIcon className="size-3 lg:size-4 flex-shrink-0" />
        )}
        <span className="truncate">{isRestoring ? 'Restoring...' : 'Restore'}</span>
      </button>
      
      <button 
        onClick={handlePermanentDelete}
        disabled={isRestoring || isDeleting}
        className="flex items-center justify-center gap-2 px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] sm:min-h-0">
        {isDeleting ? (
          <div className="animate-spin rounded-full h-3 lg:h-4 w-3 lg:w-4 border-b-2 border-red-700"></div>
        ) : (
          <TrashIcon className="size-3 lg:size-4 flex-shrink-0" />
        )}
        <span className="truncate">{isDeleting ? 'Deleting...' : 'Delete Forever'}</span>
      </button>
    </div>
  );
}