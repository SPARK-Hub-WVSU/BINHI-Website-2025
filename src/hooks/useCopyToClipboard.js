/**
 * Copy to Clipboard Hook
 * 
 * A custom React hook that provides clipboard functionality with built-in toast notifications.
 * Handles success and error states automatically and manages toast timing.
 * Includes proper cleanup to prevent memory leaks.
 * 
 * @author BINHI Development Team | Kirk
 * @version 1.0.0
 * @since 2025-07-13
 */

import { useState, useCallback, useEffect } from 'react';

/**
 * Custom hook for copy to clipboard functionality with toast notifications
 * 
 * This hook provides an easy way to copy text to the clipboard with automatic
 * user feedback through toast notifications. It handles both success and error
 * states and automatically cleans up timeouts to prevent memory leaks.
 * 
 * Features:
 * - Automatic success/error toast notifications
 * - Configurable toast duration
 * - Proper cleanup of timeouts
 * - Error handling with user-friendly messages
 * - TypeScript-friendly return values
 * 
 * @param {number} [toastDuration=3000] - Duration to show toast in milliseconds
 * @returns {Object} Hook return object
 * @returns {Function} returns.copyToClipboard - Function to copy text to clipboard
 * @returns {boolean} returns.showToast - Whether toast is currently visible
 * @returns {string} returns.toastMessage - Current toast message text
 * @returns {string} returns.toastType - Current toast type ('success' | 'error')
 * 
 * @example
 * // Basic usage
 * function MyComponent() {
 *   const { copyToClipboard, showToast, toastMessage, toastType } = useCopyToClipboard();
 *   
 *   const handleCopy = () => {
 *     copyToClipboard('https://example.com');
 *   };
 *   
 *   return (
 *     <div>
 *       <button onClick={handleCopy}>Copy Link</button>
 *       <Toast show={showToast} message={toastMessage} type={toastType} />
 *     </div>
 *   );
 * }
 * 
 * @example
 * // With custom toast duration and message
 * function ShareComponent() {
 *   const { copyToClipboard, showToast, toastMessage, toastType } = useCopyToClipboard(5000);
 *   
 *   const handleShareLink = () => {
 *     copyToClipboard(
 *       window.location.href, 
 *       'Share link copied! Send it to your friends.'
 *     );
 *   };
 *   
 *   return (
 *     <div>
 *       <button onClick={handleShareLink}>Share This Page</button>
 *       <Toast show={showToast} message={toastMessage} type={toastType} />
 *     </div>
 *   );
 * }
 * 
 * @example
 * // Error handling demonstration
 * function DocumentComponent() {
 *   const { copyToClipboard } = useCopyToClipboard();
 *   
 *   const handleCopyContent = async () => {
 *     const content = document.getElementById('content').innerText;
 *     // Hook will automatically show error toast if clipboard access fails
 *     await copyToClipboard(content, 'Document content copied!');
 *   };
 *   
 *   return <button onClick={handleCopyContent}>Copy Document</button>;
 * }
 */
const useCopyToClipboard = (toastDuration = 3000) => {
    // Toast visibility state
    const [showToast, setShowToast] = useState(false);
    
    // Toast message content
    const [toastMessage, setToastMessage] = useState('');
    
    // Toast type for styling (success, error, warning, info)
    const [toastType, setToastType] = useState('success');

    // Clean up toast when component unmounts or when showToast changes
    // This prevents memory leaks from lingering timeouts
    useEffect(() => {
        if (showToast) {
            const timeoutId = setTimeout(() => setShowToast(false), toastDuration);
            
            // Cleanup function to clear timeout if component unmounts
            // or if showToast changes before timeout completes
            return () => clearTimeout(timeoutId);
        }
    }, [showToast, toastDuration]);

    /**
     * Copy text to clipboard with automatic toast notification
     * 
     * Attempts to copy the provided text to the user's clipboard using the
     * modern Clipboard API. Shows success or error toast based on the result.
     * 
     * @param {string} text - The text to copy to clipboard
     * @param {string} [successMessage='Link copied to clipboard!'] - Message to show on success
     * @returns {Promise<void>} Promise that resolves when copy operation completes
     * 
     * @throws {Error} Will catch and handle clipboard API errors automatically
     */
    const copyToClipboard = useCallback(async (text, successMessage = 'Link copied to clipboard!') => {
        try {
            // Use the modern Clipboard API
            // This requires HTTPS in production environments
            await navigator.clipboard.writeText(text);
            
            // Set success state and message
            setToastMessage(successMessage);
            setToastType('success');
            setShowToast(true);
            
        } catch (err) {
            // Log error for debugging purposes
            console.error('Failed to copy to clipboard:', err);
            
            // Set error state and user-friendly message
            setToastMessage('Failed to copy link. Please try again.');
            setToastType('error');
            setShowToast(true);
            
            // Optionally, you could implement a fallback using document.execCommand
            // for older browsers, but it's deprecated and not recommended
        }
    }, []); // Empty dependency array since function doesn't depend on external variables

    // Return hook interface
    return {
        copyToClipboard,
        showToast,
        toastMessage,
        toastType,
    };
};

export default useCopyToClipboard;
