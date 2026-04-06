import { getDailyPostsData } from "@/lib/posts"
import { PostList } from "@/components/blog"
import { getDictionary } from "@/lib/i18n";
import { type Locale } from "@/lib/i18n.config";
import { getLocalePath } from '@/lib/utils';

export const revalidate = 300;

export default async function DailyPage({ params }: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(params.lang);
    const allPostsData = await getDailyPostsData();

    const pageTitle = dictionary['daily.title'] || "Daily";
    const pageDescription = dictionary['daily.description'] || "Short-form notes and daily entries.";

    const header = (
        <div className="mb-16">
            <h1 className="text-3xl font-semibold mb-4">{pageTitle}</h1>
            <p className="text-muted-foreground">{pageDescription}</p>
        </div>
    );
    return <PostList posts={allPostsData} baseUrl={getLocalePath(params.lang, 'daily')} header={header} lang={params.lang} />;
}
