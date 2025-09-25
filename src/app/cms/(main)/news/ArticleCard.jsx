'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, UserIcon, EyeIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import DeleteButton from './DeleteButton';
import { stripHtml, stripHtmlBrowser, formatTimeAgo } from '@/lib/text-utils';

export default function ArticleCard({ article, author, onDelete }) {
  const [imageError, setImageError] = useState(false);

  const getImageSrc = () => {
    if (article.images && article.images.length > 0 && article.images[0] && article.images[0].trim() !== '') {
      const imageUrl = article.images[0].trim();
      
      // Skip blob URLs as they are invalid after page refresh (legacy data)
      if (imageUrl.startsWith('blob:')) {
        console.log('Skipping invalid blob URL:', imageUrl);
        return null; // Return null to trigger the "No Image" fallback
      }
      
      // Return valid URLs (including our uploaded images from /uploads/)
      if (imageUrl.startsWith('http') || imageUrl.startsWith('/') || imageUrl.startsWith('data:')) {
        return imageUrl;
      }
    }
    return null; // Return null to trigger the "No Image" fallback
  };

  return (
    <div className="bg-white rounded-lg lg:rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 group">
      {/* Article Image */}
      <div className="relative h-40 lg:h-48 bg-gray-100">
        {!imageError && getImageSrc() ? (
          <Image
            src={getImageSrc()}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-sm">No Image</div>
          </div>
        )}
        
        {/* Top Story Badge */}
        {article.isTopStory && (
          <div className="absolute top-2 lg:top-3 left-2 lg:left-3 bg-primary text-white px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <StarIconSolid className="size-2.5 lg:size-3" />
            <span className="hidden sm:inline">Top Story</span>
          </div>
        )}
        
        {/* Actions Overlay */}
        <div className="absolute top-2 lg:top-3 right-2 lg:right-3 flex gap-1 lg:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Link
            href={`/cms/news/${article.id}/edit`}
            className="bg-white/90 backdrop-blur-sm text-primary px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium hover:bg-white transition-colors">
            Edit
          </Link>
          <div className="bg-white/90 backdrop-blur-sm rounded-full">
            <DeleteButton 
              articleId={article.id} 
              onDelete={onDelete}
              className="text-red-600 px-2 lg:px-3 py-1 text-xs lg:text-sm font-medium hover:bg-red-50 rounded-full transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-4 lg:p-6">
        <div className="mb-3">
          <h3 className="font-bold text-base lg:text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 text-xs lg:text-sm line-clamp-3 leading-relaxed">
            {stripHtmlBrowser(article.description, 120)}
          </p>
        </div>

        {/* Article Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 lg:pt-4 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs lg:text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <UserIcon className="size-3 lg:size-4 flex-shrink-0" />
              <span className="font-medium truncate">{author || 'Unknown Author'}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="size-3 lg:size-4 flex-shrink-0" />
              <span>{formatTimeAgo(article.date)}</span>
            </div>
          </div>

          {/* View Article Link */}
          <Link
            href={`/article/${article.id}`}
            target="_blank"
            className="flex items-center gap-1 text-primary hover:text-primary-dark font-medium text-xs lg:text-sm self-start sm:self-auto">
            <EyeIcon className="size-3 lg:size-4" />
            View
          </Link>
        </div>
      </div>
    </div>
  );
}