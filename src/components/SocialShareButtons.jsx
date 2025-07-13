/**
 * Social Share Buttons Component
 * 
 * A reusable component that provides social media sharing functionality.
 * Supports Facebook, Twitter/X sharing and copy-to-clipboard functionality.
 * Uses proper URL encoding and follows social media sharing best practices.
 * 
 * @author BINHI Development Team | Kirk
 * @version 1.0.0
 * @since 2025-07-13
 */

import React, { useMemo } from 'react';
import Link from 'next/link';
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { LinkIcon } from "@heroicons/react/24/outline";

/**
 * Generates social media sharing URLs with proper encoding
 * 
 * This function creates properly formatted URLs for sharing content on social media platforms.
 * All parameters are URL-encoded to ensure special characters are handled correctly.
 * 
 * @param {string} title - The title/text to share (will be URL encoded)
 * @param {string} url - The URL to share (will be URL encoded)
 * @returns {Object} Object containing social media sharing URLs
 * @returns {string} returns.facebook - Facebook share URL
 * @returns {string} returns.twitter - Twitter/X share URL with hashtags
 * 
 * @example
 * const urls = generateSocialUrls(
 *   "Amazing Article Title", 
 *   "https://example.com/article/1"
 * );
 * // Returns:
 * // {
 * //   facebook: "https://www.facebook.com/sharer/sharer.php?u=...",
 * //   twitter: "https://twitter.com/intent/tweet?text=...&url=...&hashtags=..."
 * // }
 */
const generateSocialUrls = (title, url) => {
    // Encode parameters to handle special characters and spaces
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    
    return {
        // Facebook Sharer - simple URL sharing
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        
        // Twitter/X Intent - includes title, URL, and relevant hashtags
        twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=BINHI,WVSU,Innovation,Startup`,
    };
};

/**
 * Social sharing buttons component for content sharing
 * 
 * Provides a set of social media sharing buttons including:
 * - Facebook sharing (opens Facebook share dialog)
 * - Twitter/X sharing (opens Twitter compose dialog with hashtags)
 * - Copy link functionality (copies URL to clipboard)
 * 
 * Features:
 * - Memoized URL generation for performance optimization
 * - Accessible button design with proper ARIA labels
 * - Hover effects and transitions
 * - External links open in new tabs with security attributes
 * - Responsive icon sizing
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the content to share
 * @param {string} props.url - The URL of the content to share
 * @param {Function} props.onCopyLink - Callback function when copy link button is clicked
 * 
 * @returns {JSX.Element} Social sharing buttons component
 * 
 * @example
 * // Basic usage
 * <SocialShareButtons 
 *   title="My Amazing Article"
 *   url="https://example.com/article/1"
 *   onCopyLink={() => copyToClipboard(url)}
 * />
 * 
 * @example
 * // With custom copy handler
 * const handleCopyLink = () => {
 *   navigator.clipboard.writeText(url);
 *   showToast('Link copied!');
 * };
 * 
 * <SocialShareButtons 
 *   title={article.title}
 *   url={window.location.href}
 *   onCopyLink={handleCopyLink}
 * />
 */
const SocialShareButtons = ({ title, url, onCopyLink }) => {
    // Memoize social sharing URLs to prevent unnecessary recalculations
    // Only recalculates when title or url changes
    const socialUrls = useMemo(() => generateSocialUrls(title, url), [title, url]);

    // Memoize social sharing icons configuration
    // Only recalculates when URLs or onCopyLink function changes
    const socialIcons = useMemo(() => [
        { 
            icon: FaFacebook, 
            alt: "Share on Facebook", 
            href: socialUrls.facebook, 
            type: 'link',
            platform: 'facebook'
        },
        { 
            icon: FaXTwitter, 
            alt: "Share on X (Twitter)", 
            href: socialUrls.twitter, 
            type: 'link',
            platform: 'twitter'
        },
        { 
            icon: LinkIcon, 
            alt: "Copy link to clipboard", 
            onClick: onCopyLink, 
            type: 'button',
            platform: 'copy'
        },
    ], [socialUrls.facebook, socialUrls.twitter, onCopyLink]);

    return (
        <div className="flex items-center gap-3" role="group" aria-label="Share this content">
            {socialIcons.map((icon, index) => {
                const IconComponent = icon.icon;
                
                // Render button for copy link functionality
                if (icon.type === 'button') {
                    return (
                        <button
                            key={index}
                            onClick={icon.onClick}
                            aria-label={icon.alt}
                            className="text-muted hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                            type="button"
                        >
                            <IconComponent className="w-6 h-6" aria-hidden="true" />
                        </button>
                    );
                }
                
                // Render link for social media sharing
                return (
                    <Link
                        key={index}
                        href={icon.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={icon.alt}
                        className="text-muted hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                    >
                        <IconComponent className="w-6 h-6" aria-hidden="true" />
                    </Link>
                );
            })}
        </div>
    );
};

export default SocialShareButtons;
