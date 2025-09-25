'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Toast from '@/components/Toast';

export default function ToastHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success'
  });

  useEffect(() => {
    const success = searchParams.get('success');
    const error = searchParams.get('error');

    if (success) {
      let message = '';
      switch (success) {
        case 'created':
          message = 'Article created successfully!';
          break;
        case 'updated':
          message = 'Article updated successfully!';
          break;
        case 'deleted':
          message = 'Article moved to trash successfully!';
          break;
        case 'restored':
          message = 'Article restored successfully!';
          break;
        case 'permanently_deleted':
          message = 'Article permanently deleted!';
          break;
        case 'all_cleaned':
          message = 'All trash cleaned successfully! All articles permanently deleted.';
          break;
        default:
          message = 'Operation completed successfully!';
      }
      
      setToast({
        show: true,
        message,
        type: 'success'
      });

      // Clear the URL parameters
      const url = new URL(window.location.href);
      url.searchParams.delete('success');
      router.replace(url.pathname, { scroll: false });
      
      // Hide toast after 4 seconds
      setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 4000);
    }

    if (error) {
      let message = '';
      switch (error) {
        case 'create_failed':
          message = 'Failed to create article. Please try again.';
          break;
        case 'update_failed':
          message = 'Failed to update article. Please try again.';
          break;
        case 'delete_failed':
          message = 'Failed to delete article. Please try again.';
          break;
        case 'restore_failed':
          message = 'Failed to restore article. Please try again.';
          break;
        case 'permanent_delete_failed':
          message = 'Failed to permanently delete article. Please try again.';
          break;
        case 'clean_all_failed':
          message = 'Failed to clean all trash. Please try again.';
          break;
        case 'no_articles_to_delete':
          message = 'No articles found in trash to delete.';
          break;
        case 'missing_fields':
          message = 'Please fill in all required fields (Title and Author).';
          break;
        default:
          message = 'An error occurred. Please try again.';
      }
      
      setToast({
        show: true,
        message,
        type: 'error'
      });

      // Clear the URL parameters
      const url = new URL(window.location.href);
      url.searchParams.delete('error');
      router.replace(url.pathname, { scroll: false });
      
      // Hide toast after 5 seconds for errors
      setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 5000);
    }
  }, [searchParams, router]);

  return (
    <Toast 
      show={toast.show}
      message={toast.message}
      type={toast.type}
    />
  );
}