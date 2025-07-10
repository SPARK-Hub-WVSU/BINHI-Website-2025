// Article Page Component
// This page displays a single article, including its headline, date, author, image, content, and social sharing icons.

// --- Imports ---
import Image from "next/image";
import placeholderPhoto from '@/assets/placeholder-photo.png';
// import articles from "@/actions/fetch-articles";
// import users from "@/actions/fetch-users";

// Social icon imports
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";

// --- Dummy Data for Demonstration ---
// In production, replace these with real data fetching logic.
const dummyArticle = {
    id: "1",
    headline: "BuzzEx: Sparking Innovation with Industry Breakthroughs",
    date: "2024-04-14T12:00:00Z",
    writer: "neil_diaz",
    image: placeholderPhoto,
    content: [
        "WVSU-BINHI in collaboration with WVSU SPARK Hub conducted the second BuzzEx titled, “BuzzEx: Sparking Innovation with Industry Breakthroughs”, last April 12, 2024 at Function Room 4th Floor R&E Building, WVSU.",
        "This event aimed at igniting the innovative and entrepreneurial potential of faculty, students, and researchers through awareness of industry trends and platforms.",
        "Rooted in the belief that the academic community possesses the creativity and drive to shape the future, this BuzzEx offers a platform for participants to engage with industry leaders, explore emerging trends, and develop solutions for success in various sectors. BuzzEx brought everyone in for an insightful discussion, featuring individuals at the forefront of innovation who talked about the hottest trends and challenges facing the industry."
    ]
};

const dummyUsers = [
    { id: "neil_diaz", name: "Neil Clarence C. Diaz" }
];

// Social sharing icons configuration
const socialIcons = [
    { icon: FaFacebook, alt: "Facebook", href: "#" },
    { icon: FaInstagram, alt: "Instagram", href: "#" },
    { icon: FaXTwitter, alt: "X", href: "#" },
    { icon: MdOutlineMail, alt: "Email", href: "#" },
    { icon: PiLinkSimpleBold, alt: "Link", href: "#" },
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
    const writerName = dummyUsers.find(u => u.id === data.writer)?.name || "Unknown Author";

    return (
        <div className="flex flex-col items-center gap-6 p-7 md:px-8 sm:px-10 lg:px-12 mt-5">
            <div className="flex flex-col gap-4 items-center max-w-[900px]">
                {/* Section Label */}
                <p className="w-full text-muted text-base sm:text-lg md:text-xl lg:text-2xl p-2 sm:p-3 md:p-4 lg:p-5 border-b-dark-accent border-b-1">
                    News
                </p>

                {/* Article Headline */}
                <h1 className="font-semibold text-left leading-normal text-2xl sm:text-3xl md:text-4xl lg:text-[54px] text-foreground">
                    {data.headline}
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
                                return (
                                    <a
                                        key={index}
                                        href={icon.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={icon.alt}
                                        className="text-muted hover:text-primary transition-colors"
                                    >
                                        <IconComponent className="w-6 h-6" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Article Image and Content */}
                <div className="max-w-[750px] w-full">
                    {/* Article Image */}
                    <Image
                        src={data.image || placeholderPhoto}
                        alt={data.headline}
                        className="relative aspect-video object-center object-cover w-full h-full rounded-lg my-8 sm:my-10 md:my-12 lg:my-15"
                    />
                    {/* Article Content */}
                    <div className="flex flex-col gap-7 sm:gap-8 md:gap-9 lg:gap-10 mb-10">
                        {Array.isArray(data.content) ? (
                            data.content.map((paragraph, idx) => (
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl" key={idx}>
                                    {paragraph}
                                </p>
                            ))
                        ) : (
                            <p>{data.content}</p>
                        )}
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