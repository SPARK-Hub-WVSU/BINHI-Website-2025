import { notFound } from 'next/navigation';/**/**/**

import ArticleContent from './ArticleContent';

import * as articles from '@/actions/fetch-articles'; * Article Detail Page Component



export default async function ArticleDetailPage({ params }) { *  * Article Detail Page Component * Article Detail Page Component

    try {

        const data = await articles.getData(parseInt(params.id)); * Server-side rendered article detail page that:

        

        if (!data) { * - Fetches article data on the server for SEO optimization *  * 

            notFound();

        } * - Handles 404 cases for non-existent articles



        const writerName = data.author || 'BINHI Editorial Team'; * - Delegates interactive functionality to client component * Server-side rendered article detail page that: * Server-side rendered article detail page that:

        return <ArticleContent data={data} writerName={writerName} />;

    } catch (error) { * - Provides loading states and error handling

        console.error('Error fetching article:', error);

        notFound(); *  * - Fetches article data on the server for SEO optimization * - Fetches article data on the server for SEO optimization

    }

} * @param {Object} params - Route parameters containing article ID

 * @returns {JSX.Element} Article detail page * - Handles 404 cases for non-existent articles * - Handles 404 cases for non-existent articles

 */

 * - Delegates interactive functionality to client component * - Delegates interactive functionality to client component

import { notFound } from 'next/navigation';

 * - Provides loading states and error handling * - Provides loading states and error handling

// --- Component Imports ---

import ArticleContent from './ArticleContent'; *  * 



// --- Data Imports --- * @param {Object} params - Route parameters containing article ID * @param {Object} params - Route parameters containing article ID

import * as articles from '@/actions/fetch-articles';

 * @returns {JSX.Element} Article detail page * @returns {JSX.Element} Article detail page

export default async function ArticleDetailPage({ params }) {

    // --- Server-side Data Fetching --- */ */

    try {

        const data = await articles.getData(parseInt(params.id));

        

        if (!data) {import { notFound } from 'next/navigation';import { notFound } from 'next/navigation';

            notFound();

        }



        const writerName = data.author || 'BINHI Editorial Team';// --- Component Imports ---// --- Component Imports ---



        return <ArticleContent data={data} writerName={writerName} />;import ArticleContent from './ArticleContent';import ArticleContent from './ArticleContent';

    } catch (error) {

        console.error('Error fetching article:', error);

        notFound();

    }// --- Data Imports ---// --- Data Imports ---

}
import * as articles from '@/actions/fetch-articles';import * as articles from '@/actions/fetch-articles';



export default async function ArticleDetailPage({ params }) {export default async function ArticleDetailPage({ params }) {

    // --- Server-side Data Fetching ---    // --- Server-side Data Fetching ---

    try {    try {

        const data = await articles.getData(parseInt(params.id));        const data = await articles.getData(parseInt(params.id));

                

        if (!data) {        if (!data) {

            notFound();            notFound();

        }        }



        const writerName = data.author || 'BINHI Editorial Team';        const writerName = data.author || 'BINHI Editorial Team';



        return <ArticleContent data={data} writerName={writerName} />;        return <ArticleContent data={data} writerName={writerName} />;

    } catch (error) {    } catch (error) {

        console.error('Error fetching article:', error);        console.error('Error fetching article:', error);

        notFound();        notFound();

    }    }

}}

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

// --- Data Imports ---
import articles from "@/actions/fetch-articles";

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
 * @param {Object} props - Component props
 * @param {Object} props.params - Next.js route parameters
 * @param {string} props.params.id - Article ID from URL parameter (/article/[id])
 * 
 * @returns {JSX.Element} Complete article page with social sharing and responsive design
 */
export default async function Article({ params }) {
    // --- Data Fetching ---
    const articleData = await articles.getData(params.id);
    const data = articleData[0];
    
    // Handle article not found
    if (!data) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] p-7">
                <h1 className="text-2xl font-bold text-gray-600 mb-4">Article Not Found</h1>
                <p className="text-gray-500 mb-6">The article you're looking for doesn't exist or has been removed.</p>
                <a 
                    href="/news"
                    className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                >
                    Back to News
                </a>
            </div>
        );
    }
    
    // Use the author name from CMS data
    const writerName = data.author || "Unknown Author";

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