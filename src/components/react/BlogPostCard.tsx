import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export const BlogPostCard = ({ post }) => {
  return (
    <article className="bg-white">
      <div className="relative aspect-[4/3]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 bg-blue-900 text-white text-xs tracking-wider py-2 px-4">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-3">{post.date}</div>
        <h3 className="text-2xl font-light text-gray-900 mb-4">{post.title}</h3>
        <p className="text-gray-700 mb-6">{post.excerpt}</p>
        <a
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-900 hover:text-blue-700 transition-colors"
        >
          <span className="text-sm tracking-widest mr-2">READ MORE</span>
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};
