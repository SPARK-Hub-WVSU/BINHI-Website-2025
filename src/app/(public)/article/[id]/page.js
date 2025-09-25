import { notFound } from 'next/navigation';
import ArticleContent from './ArticleContent';
import articles from '@/actions/fetch-articles';

export default async function ArticleDetailPage({ params }) {
    try {
        const data = await articles.getData(parseInt(params.id));
        
        if (!data || data.length === 0) {
            notFound();
        }

        const article = data[0]; // getData returns an array
        const writerName = article.author || 'BINHI Editorial Team';
        return <ArticleContent data={article} writerName={writerName} />;
    } catch (error) {
        console.error('Error fetching article:', error);
        notFound();
    }
}