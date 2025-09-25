"use client";

/**
 * Client-side Article Content Component
 * 
 * Handles the interactive parts of the article page including:
 * - Social sharing functionality
 * - Toast notifications
 * - Copy to clipboard functionality
 * - URL state management for SSR compatibility
 */

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

export default function ArticleContent({ data, writerName }) {
    // --- State Management ---
    const [currentUrl, setCurrentUrl] = useState(`https://binhi.wvsu.edu.ph/article/${data.id}`);
    const { copyToClipboard, showToast, toastMessage, toastType } = useCopyToClipboard();

    // --- Effects ---
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    // --- Event Handlers ---
    const handleCopyLink = () => {
        copyToClipboard(currentUrl);
    };

    // --- Component Render ---
    return (
        <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20 p-7 md:px-8 sm:px-10 lg:px-12 mt-5">
            {/* Toast Notification System */}
            <Toast show={showToast} message={toastMessage} type={toastType} />

            <div className="flex flex-col gap-4 items-center max-w-[1000px]">
                {/* Section Label */}
                <p className="w-full text-muted text-base sm:text-lg md:text-xl lg:text-2xl p-2 sm:p-3 md:p-4 lg:p-5 border-b-dark-accent border-b-1">
                    News
                </p>

                {/* Article Headline */}
                <h1 className="font-semibold text-left leading-normal text-2xl sm:text-3xl md:text-4xl lg:text-[54px] text-foreground">
                    {data.title}
                </h1>

                {/* Article Meta */}
                <div className="flex flex-col w-full items-left gap-2 text-muted text-base sm:text-lg md:text-xl lg:text-2xl">
                    <time dateTime={data.date}>
                        {new Date(data.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
                    </time>
                    <div className="flex w-full flex-col sm:flex-row justify-between gap-4">
                        <span>{writerName}</span>
                        <SocialShareButtons 
                            title={data.title}
                            url={currentUrl}
                            onCopyLink={handleCopyLink}
                        />
                    </div>
                </div>

                {/* Article Image and Content */}
                <div className="max-w-[1000px] w-full">
                    <Image
                        src={data.images && data.images[0] ? data.images[0] : placeholderPhoto}
                        alt={data.title}
                        width={750}
                        height={422}
                        className="relative aspect-video object-center object-cover w-full h-full rounded-lg my-8 sm:my-10 md:my-12 lg:my-15"
                    />
                    <div className="flex flex-col">
                        <div
                            className="article-content text-gray-800 word-wrap break-word overflow-wrap-anywhere
                                [&>p]:text-base [&>p]:sm:text-lg [&>p]:md:text-xl [&>p]:lg:text-2xl 
                                [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:word-wrap [&>p]:break-word
                                [&>h1]:text-2xl [&>h1]:sm:text-3xl [&>h1]:md:text-4xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:word-wrap [&>h1]:break-word
                                [&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:md:text-3xl [&>h2]:font-semibold [&>h2]:text-gray-900 [&>h2]:word-wrap [&>h2]:break-word
                                [&>h3]:text-lg [&>h3]:sm:text-xl [&>h3]:md:text-2xl [&>h3]:font-medium [&>h3]:text-gray-900 [&>h3]:word-wrap [&>h3]:break-word
                                [&>li]:text-base [&>li]:sm:text-lg [&>li]:md:text-xl [&>li]:leading-relaxed [&>li]:word-wrap [&>li]:break-word
                                [&>strong]:font-semibold [&>em]:italic"
                            dangerouslySetInnerHTML={{ __html: data.description }}
                        />
                    </div>
                </div>

                {/* Navigation Button */}
                <a
                    href="/news"
                    className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-primary rounded-full text-light-accent font-semibold transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24"
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