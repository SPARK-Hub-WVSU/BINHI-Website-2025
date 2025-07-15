/**
 * Toast Component
 * 
 * A reusable toast notification component that displays temporary messages to users.
 * Supports different types (success, error, warning, info) with appropriate icons and colors.
 * Automatically positioned at the bottom center of the screen with responsive design.
 * 
 * @author BINHI Development Team | Kirk
 * @version 1.0.0
 * @since 2025-07-13
 */

import React from 'react';

/**
 * Toast notification component for displaying temporary user feedback
 * 
 * Features:
 * - Multiple toast types with different colors and icons
 * - Responsive design that adapts to different screen sizes
 * - Smooth fade-in animation
 * - Automatic positioning at bottom center of viewport
 * - Prevents text overflow on mobile devices
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.show - Whether to show the toast notification
 * @param {string} props.message - Message text to display in the toast
 * @param {('success'|'error'|'warning'|'info')} [props.type='success'] - Toast type affecting color and icon
 * 
 * @returns {JSX.Element|null} Toast component or null if not shown
 * 
 * @example
 * // Success toast (default)
 * <Toast show={true} message="Operation completed successfully!" />
 * 
 * @example
 * // Error toast
 * <Toast show={true} message="Something went wrong!" type="error" />
 * 
 * @example
 * // With state management
 * const [showToast, setShowToast] = useState(false);
 * const [message, setMessage] = useState('');
 * 
 * const handleSuccess = () => {
 *   setMessage('Link copied to clipboard!');
 *   setShowToast(true);
 *   setTimeout(() => setShowToast(false), 3000);
 * };
 * 
 * return <Toast show={showToast} message={message} type="success" />;
 */
const Toast = ({ show, message, type = 'success' }) => {
    // Early return if toast should not be shown
    if (!show) return null;
    
    /**
     * Get the appropriate icon based on toast type
     * @returns {JSX.Element} SVG icon element
     */
    const getIcon = () => {
        switch (type) {
            case 'success':
                return (
                    <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                );
            case 'error':
                return (
                    <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                );
            case 'warning':
                return (
                    <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                );
            case 'info':
                return (
                    <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            default:
                // Fallback to success icon
                return (
                    <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                );
        }
    };

    /**
     * Get the appropriate background color class based on toast type
     * @returns {string} Tailwind CSS background color class
     */
    const getBgColor = () => {
        switch (type) {
            case 'error':
                return 'bg-red-600';
            case 'warning':
                return 'bg-yellow-600';
            case 'info':
                return 'bg-blue-600';
            case 'success':
            default:
                return 'bg-primary'; // Uses the primary color from design system
        }
    };
    
    return (
        <div 
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 ${getBgColor()} text-white px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 rounded-lg shadow-lg flex items-center justify-center sm:justify-start gap-2 sm:gap-3 animate-fadeIn max-w-[calc(100vw-2rem)] sm:max-w-none`}
            role="alert"
            aria-live="polite"
            aria-atomic="true"
        >
            {getIcon()}
            <span className="text-sm sm:text-base font-medium text-left">
                {message}
            </span>
        </div>
    );
};

export default Toast;
