import React from 'react';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import type { Pluggable } from 'unified';
import { type Locale } from '@/i18n/config';

import remarkGfm from 'remark-gfm';
import remarkPanguSpacing from '@/content/transforms/mdx-plugins/remark-pangu-spacing.mjs';
import remarkCustomImagesAndLinks from '@/content/transforms/mdx-plugins/remark-custom-images-and-links.mjs';
import remarkCustomLineBreaks from '@/content/transforms/mdx-plugins/remark-custom-line-breaks.mjs';
import CenteredImage from './CenteredImage';

interface MDXContentProps {
    content: string;
    postIdMap: Record<string, string>;
    lang?: Locale;
}

export default async function MDXContent({ content, postIdMap, lang }: MDXContentProps) {
    const remarkPlugins: Pluggable[] = [
        remarkGfm,
        remarkPanguSpacing,
        [remarkCustomImagesAndLinks, { postIdMap, lang }],
        remarkCustomLineBreaks,
    ];
    const rehypePlugins: Pluggable[] = [];

    const options: MDXRemoteProps['options'] = {
        mdxOptions: {
            remarkPlugins,
            rehypePlugins,
        },
    };

    const components: MDXRemoteProps['components'] = {
        CenteredImage,
    };

    return (
        <div className="prose prose-base max-w-none
            /* 移除标题相关的 prose-hX:* 类，样式由 typography 插件处理 */
            prose-p:leading-relaxed 
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 hover:prose-a:underline
            prose-a:transition-colors
            prose-img:rounded-lg prose-img:shadow-sm prose-img:my-8
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:my-6 prose-ol:my-6 prose-li:my-2
            prose-blockquote:text-muted-foreground prose-blockquote:border-l-2 
            prose-blockquote:border-muted prose-blockquote:pl-6 prose-blockquote:italic
            prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm
            prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-muted/70 prose-pre:rounded-md prose-pre:shadow-sm prose-pre:p-4 prose-pre:overflow-x-auto
            prose-pre:text-sm
            prose-pre code:bg-transparent prose-pre code:p-0 prose-pre code:text-foreground/90
            prose-table:table-auto prose-th:min-w-[100px] prose-td:min-w-[100px]
            [&_a]:before:content-['[['] [&_a]:after:content-[']]']
            [&_a:not([href^='/']):not([href^='#'])]:after:content-[']]↗']">
            <MDXRemote
                source={content}
                options={options}
                components={components}
            />
        </div>
    );
} 
