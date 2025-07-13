"use client";

// Article Page Component
// This page displays a single article, including its headline, date, author, image, content, and social sharing icons.

// --- Imports ---
import Image from "next/image";
import placeholderPhoto from '@/assets/placeholder-photo.png';
import { useState, useEffect } from 'react';
// import articles from "@/actions/fetch-articles";
// import users from "@/actions/fetch-users";

// Social media icon imports (keep from react-icons)
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

// HeroIcons imports
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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

// Helper function to generate social sharing URLs
const generateSocialUrls = (title, url) => {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    
    return {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=BINHI,WVSU,Innovation,Startup`,
        copyLink: url
    };
};

/**
 * Article Page Component
 * @param {Object} params - Route parameters (expects article id)
 */
export default function Article({ params }) {
    // Toast notification state
    const [showToast, setShowToast] = useState(false);
    // URL state to prevent hydration mismatch
    const [currentUrl, setCurrentUrl] = useState(`https://binhi.wvsu.edu.ph/article/${dummyArticle.id}`);

    // Set the actual URL on client side only
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    // --- Data Fetching (Replace with real API calls in production) ---
    // const { id } = params;
    // const data = (await articles.getData(id))[0];
    // const writerName = (await users.getData(data.writer))[0].name;

    // Using dummy data for demonstration
    const data = dummyArticle;
    const writerName = dummyUsers.find(u => u.id === data.author)?.name || "Unknown Author";

    // Generate social sharing URLs
    const socialUrls = generateSocialUrls(data.title, currentUrl);

    // Handle copy link with toast notification
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setShowToast(true);
            // Auto-hide toast after 3 seconds
            setTimeout(() => setShowToast(false), 3000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    // Social sharing icons configuration with functional URLs
    const socialIcons = [
        { icon: FaFacebook, alt: "Share on Facebook", href: socialUrls.facebook },
        { icon: FaXTwitter, alt: "Share on X (Twitter)", href: socialUrls.twitter },
        { 
            icon: LinkIcon, 
            alt: "Copy link", 
            href: "#",
            onClick: handleCopyLink
        },
    ];

    return (
        <div className="flex flex-col items-center gap-6 p-7 md:px-8 sm:px-10 lg:px-12 mt-5">
            {/* Toast Notification */}
            {showToast && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-primary text-white px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 rounded-lg shadow-lg flex items-center justify-center sm:justify-start gap-2 sm:gap-3 animate-fadeIn max-w-[calc(100vw-2rem)] sm:max-w-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base font-medium text-left">Link copied to clipboard!</span>
                </div>
            )}

            <div className="flex flex-col gap-4 items-center max-w-[900px]">
                {/* Section Label */}
                <p className="w-full text-muted text-base sm:text-lg md:text-xl lg:text-2xl p-2 sm:p-3 md:p-4 lg:p-5 border-b-dark-accent border-b-1">
                    News
                </p>

                {/* Article Headline */}
                <h1 className="font-semibold text-left leading-normal text-2xl sm:text-3xl md:text-4xl lg:text-[54px] text-foreground">
                    {data.title}
                </h1>

                {/* Article Meta: Date, Author, Social Icons */}
                <div className="flex flex-col w-full items-left gap-2 text-muted text-base sm:text-lg md:text-xl lg:text-2xl">
                    {/* Publication Date */}
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
                        {/* Social Sharing Icons */}
                        <div className="flex items-center gap-3">
                            {socialIcons.map((icon, index) => {
                                const IconComponent = icon.icon;
                                const isHeroIcon = [LinkIcon].includes(IconComponent);
                                const isCopyLink = icon.alt === "Copy link";
                                
                                if (isCopyLink) {
                                    return (
                                        <button
                                            key={index}
                                            onClick={icon.onClick}
                                            aria-label={icon.alt}
                                            className="text-muted hover:text-primary transition-colors"
                                        >
                                            <IconComponent className="w-6 h-6" />
                                        </button>
                                    );
                                }
                                
                                return (
                                    <Link
                                        key={index}
                                        href={icon.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={icon.alt}
                                        className="text-muted hover:text-primary transition-colors"
                                    >
                                        {isHeroIcon ? (
                                            <IconComponent className="w-6 h-6" />
                                        ) : (
                                            <IconComponent className="w-6 h-6" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Article Image and Content */}
                <div className="max-w-[750px] w-full">
                    {/* Article Image */}
                    <Image
                        src={data.images[0] || placeholderPhoto}
                        alt={data.title}
                        className="relative aspect-video object-center object-cover w-full h-full rounded-lg my-8 sm:my-10 md:my-12 lg:my-15"
                    />
                    {/* Article Content */}
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