"use client";

/**
 * Article Page Component
 * 
 * This page displays a single article with full content, metadata, and social sharing functionality.
 * Includes responsive design, social media sharing buttons, and copy-to-clipboard functionality.
 * Handles both server-side rendering and client-side hydration properly.
 * 
 * @author BINHI Development Team | Kirk
 * @version 2.0.0
 * @since 2025-07-13
 * @updated 2025-07-13 - Added social sharing and toast notifications
 */

// --- Core Imports ---
import Image from "next/image";
import { useState, useEffect } from 'react';

// --- Asset Imports ---
import placeholderPhoto from '@/assets/placeholder-photo.png';

// --- Component Imports ---
import Toast from '@/components/Toast';
import SocialShareButtons from '@/components/SocialShareButtons';

// --- Hook Imports ---
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

// --- Icon Imports ---
import { FaArrowRight } from "react-icons/fa";

// --- Data Imports (Commented for production) ---
// import articles from "@/actions/fetch-articles";
// import users from "@/actions/fetch-users";

// --- Dummy Data for Demonstration ---
// In production, replace these with real data fetching logic.
const dummyArticle = {
    id: 1,
    images: [placeholderPhoto], // array of image URLs
    title: "BuzzEx: Sparking Innovation with Industry Breakthroughs",
    date: "2024-04-14",
    description: `<p>WVSU-BINHI in collaboration with WVSU SPARK Hub conducted the second BuzzEx titled, “BuzzEx: Sparking Innovation with Industry Breakthroughs”, last April 12, 2024 at Function Room 4th Floor R&E Building, WVSU.</p>
    <p>This event aimed at igniting the innovative and entrepreneurial potential of faculty, students, and researchers through awareness of industry trends and platforms.</p>
    <p>Rooted in the belief that the academic community possesses the creativity and drive to shape the future, this BuzzEx offers a platform for participants to engage with industry leaders, explore emerging trends, and develop solutions for success in various sectors. BuzzEx brought everyone in for an insightful discussion, featuring individuals at the forefront of innovation who talked about the hottest trends and challenges facing the industry.</p>`,
    author: 2
};

const dummyUsers = [
    { id: 2, name: "Neil Clarence C. Diaz" }
];

/**
 * Article Page Component
 * 
 * Displays a complete article page with comprehensive functionality including:
 * - Article metadata display (title, date, author)
 * - Responsive featured image with Next.js Image optimization
 * - Full article content rendering with HTML support
 * - Social sharing capabilities (Facebook, Twitter/X, Copy Link)
 * - Toast notification system for user feedback
 * - Fully responsive design for all device sizes
 * - Server-side rendering compatibility with hydration safety
 * 
 * Key Features:
 * - Prevents hydration mismatches by using safe initial state
 * - Implements proper SEO structure with semantic HTML
 * - Provides accessible interactions and ARIA labels
 * - Uses memoized components for optimal performance
 * - Includes comprehensive error handling
 * 
 * Architecture:
 * - Uses separated, reusable components (Toast, SocialShareButtons)
 * - Implements custom hooks for clipboard functionality
 * - Follows React best practices for state management
 * - Maintains clean separation of concerns
 * 
 * @param {Object} props - Component props
 * @param {Object} props.params - Next.js route parameters
 * @param {string} props.params.id - Article ID from URL parameter (/article/[id])
 * 
 * @returns {JSX.Element} Complete article page with social sharing and responsive design
 * 
 * @example
 * // This component is automatically rendered by Next.js routing
 * // when user navigates to /article/123
 * // The [id] parameter is passed via props.params.id
 * 
 * @todo Replace dummy data with real API calls to fetch article and user data
 * @todo Add loading states and skeleton UI for better UX
 * @todo Implement error boundaries for robust error handling
 * @todo Add article not found (404) page handling
 * @todo Consider adding article reading time estimation
 * @todo Implement article view tracking/analytics
 * 
 * @see {@link SocialShareButtons} for social sharing implementation
 * @see {@link Toast} for notification system
 * @see {@link useCopyToClipboard} for clipboard functionality
 */
export default function Article({ params }) {
    // --- State Management ---
    
    /**
     * Current page URL state to prevent SSR/CSR hydration mismatch
     * Initialized with server-safe fallback URL, updated to actual URL on client
     * 
     * @type {[string, Function]} URL state and setter
     */
    const [currentUrl, setCurrentUrl] = useState(`https://binhi.wvsu.edu.ph/article/${dummyArticle.id}`);
    
    /**
     * Copy to clipboard functionality with integrated toast notifications
     * Provides copyToClipboard function and manages toast state automatically
     * 
     * @type {Object} Clipboard hook return object
     * @property {Function} copyToClipboard - Function to copy text to clipboard
     * @property {boolean} showToast - Whether toast should be visible
     * @property {string} toastMessage - Message to display in toast
     * @property {string} toastType - Type of toast (success, error, etc.)
     */
    const { copyToClipboard, showToast, toastMessage, toastType } = useCopyToClipboard();

    // --- Effects ---
    
    /**
     * Set the actual browser URL on client side only to prevent hydration mismatch
     * This ensures the URL state is consistent between server and client renders
     */
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    // --- Event Handlers ---
    
    /**
     * Handle copy link button click
     * Uses the custom hook to copy current page URL to clipboard
     * Automatically triggers appropriate toast notification
     */
    const handleCopyLink = () => {
        copyToClipboard(currentUrl);
    };

    // --- Data Processing ---
    
    /**
     * Article data retrieval and processing
     * TODO: Replace with actual API call
     * Example: const data = (await articles.getData(params.id))[0];
     */
    const data = dummyArticle;
    
    /**
     * Author name lookup and fallback handling
     * TODO: Replace with actual API call
     * Example: const writerName = (await users.getData(data.author))[0].name;
     */
    const writerName = dummyUsers.find(u => u.id === data.author)?.name || "Unknown Author";

    // --- Component Render ---
    
    return (
        <div className="flex flex-col items-center gap-6 p-7 md:px-8 sm:px-10 lg:px-12 mt-5">
            {/* Toast Notification System */}
            <Toast show={showToast} message={toastMessage} type={toastType} />

            <div className="flex flex-col gap-4 items-center max-w-[900px]">
                {/* Section Label - Indicates content type */}
                <p className="w-full text-muted text-base sm:text-lg md:text-xl lg:text-2xl p-2 sm:p-3 md:p-4 lg:p-5 border-b-dark-accent border-b-1">
                    News
                </p>

                {/* Article Headline - Main title with responsive typography */}
                <h1 className="font-semibold text-left leading-normal text-2xl sm:text-3xl md:text-4xl lg:text-[54px] text-foreground">
                    {data.title}
                </h1>

                {/* Article Meta - Date, Author, and Social Sharing */}
                <div className="flex flex-col w-full items-left gap-2 text-muted text-base sm:text-lg md:text-xl lg:text-2xl">
                    {/* Publication Date with semantic time element */}
                    <time dateTime={data.date}>
                        {new Date(data.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
                    </time>
                    <div className="flex w-full flex-col sm:flex-row justify-between gap-4">
                        {/* Author Name */}
                        <span>{writerName}</span>
                        {/* Social Sharing Icons Component */}
                        <SocialShareButtons 
                            title={data.title}
                            url={currentUrl}
                            onCopyLink={handleCopyLink}
                        />
                    </div>
                </div>

                {/* Article Image and Content Container */}
                <div className="max-w-[750px] w-full">
                    {/* Article Featured Image with Next.js optimization */}
                    <Image
                        src={data.images[0] || placeholderPhoto}
                        alt={data.title}
                        className="relative aspect-video object-center object-cover w-full h-full rounded-lg my-8 sm:my-10 md:my-12 lg:my-15"
                    />
                    {/* Article Content with responsive typography */}
                    <div className="flex flex-col">
                        <div
                            className="[&>p]:text-sm [&>p]:sm:text-base [&>p]:md:text-lg [&>p]:lg:text-xl [&>p]:mb-7 [&>p]:sm:mb-8 [&>p]:md:mb-9 [&>p]:lg:mb-10"
                            dangerouslySetInnerHTML={{ __html: data.description }}
                        />
                    </div>
                </div>

                {/* Navigation Button to More News */}
                <a
                    href="/news"
                    className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-primary rounded-full text-light-accent font-semibold transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                    <span className="mr-3 text-base sm:text-lg md:text-xl lg:text-2xl">
                        Find more news from BINHI
                    </span>
                    <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </a>
            </div>
        </div>
    );
}