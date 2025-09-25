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
        <div className="flex flex-col items-center gap-6 p-7 md:px-8 sm:px-10 lg:px-12 mt-5">
            {/* Toast Notification System */}
            <Toast show={showToast} message={toastMessage} type={toastType} />

            <div className="flex flex-col gap-4 items-center max-w-[900px]">
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
                <div className="max-w-[750px] w-full">
                    <Image
                        src={data.images && data.images[0] ? data.images[0] : placeholderPhoto}
                        alt={data.title}
                        width={750}
                        height={422}
                        className="relative aspect-video object-center object-cover w-full h-full rounded-lg my-8 sm:my-10 md:my-12 lg:my-15"
                    />
                    <div className="flex flex-col">
                        <div
                            className="[&>p]:text-sm [&>p]:sm:text-base [&>p]:md:text-lg [&>p]:lg:text-xl [&>p]:mb-7 [&>p]:sm:mb-8 [&>p]:md:mb-9 [&>p]:lg:mb-10"
                            dangerouslySetInnerHTML={{ __html: data.description }}
                        />
                    </div>
                </div>

                {/* Navigation Button */}
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