// Article Page Component
// This page displays a single article, including its headline, date, author, image, content, and social sharing icons.

// --- Imports ---
import Image from "next/image";
import placeholderPhoto from '@/assets/placeholder-photo.png';
// import articles from "@/actions/fetch-articles";
// import users from "@/actions/fetch-users";

// Social media icon imports (keep from react-icons)
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

// HeroIcons imports
import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";
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

// Social sharing icons configuration
const socialIcons = [
    { icon: FaFacebook, alt: "Facebook", href: "#" },
    { icon: FaInstagram, alt: "Instagram", href: "#" },
    { icon: FaXTwitter, alt: "X", href: "#" },
    { icon: EnvelopeIcon, alt: "Email", href: "#" }, // HeroIcon
    { icon: LinkIcon, alt: "Link", href: "#" },      // HeroIcon
];

/**
 * Article Page Component
 * @param {Object} params - Route parameters (expects article id)
 */
export default async function Article({ params }) {
    // --- Data Fetching (Replace with real API calls in production) ---
    // const { id } = params;
    // const data = (await articles.getData(id))[0];
    // const writerName = (await users.getData(data.writer))[0].name;

    // Using dummy data for demonstration
    const data = dummyArticle;
    const writerName = dummyUsers.find(u => u.id === data.author)?.name || "Unknown Author";

    return (
        <div className="flex flex-col items-center gap-6 p-7 md:px-8 sm:px-10 lg:px-12 mt-5">
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
                                const isHeroIcon = [EnvelopeIcon, LinkIcon].includes(IconComponent);
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