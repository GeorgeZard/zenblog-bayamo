import React, { useState } from 'react';
import { BlogPostCard } from './BlogPostCard';
import { ChevronRightIcon, FilterIcon } from 'lucide-react';
export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Events', 'Cocktails', 'Experiences', 'News'];
  const blogPosts = [
    {
      id: 1,
      title: 'Summer Solstice Celebration at Bayamo',
      excerpt:
        'Experience the magic of our annual Summer Solstice event featuring live music, signature cocktails, and unforgettable sunset views.',
      image: 'https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?ixlib=rb-4.0.3',
      date: 'June 18, 2023',
      category: 'Events',
      slug: 'summer-solstice-celebration',
    },
    {
      id: 2,
      title: 'Signature Cocktail Series: Mediterranean Sunset',
      excerpt:
        'Discover the story behind our most popular signature cocktail, inspired by the breathtaking sunsets of the Mediterranean coast.',
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3',
      date: 'May 25, 2023',
      category: 'Cocktails',
      slug: 'signature-cocktail-mediterranean-sunset',
    },
    {
      id: 3,
      title: 'A Perfect Day at Bayamo Beach Bar',
      excerpt:
        'From morning coffee to evening cocktails, explore our guide to spending the perfect day at Bayamo Beach Bar.',
      image: 'https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixlib=rb-4.0.3',
      date: 'May 10, 2023',
      category: 'Experiences',
      slug: 'perfect-day-at-bayamo',
    },
    {
      id: 4,
      title: 'Planning Your Dream Wedding at Bayamo',
      excerpt: 'Everything you need to know about hosting your wedding celebration at our stunning beachside venue.',
      image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3',
      date: 'April 28, 2023',
      category: 'Events',
      slug: 'planning-your-dream-wedding',
    },
    {
      id: 5,
      title: 'The Hidden Gems of Gythio: Local Exploration Guide',
      excerpt: "Discover the beauty and charm of Gythio with our curated guide to the area's best-kept secrets.",
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3',
      date: 'April 15, 2023',
      category: 'Experiences',
      slug: 'hidden-gems-of-gythio',
    },
    {
      id: 6,
      title: 'New Summer Menu Launch',
      excerpt:
        'Introducing our refreshed summer menu featuring locally-sourced ingredients and creative new offerings.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3',
      date: 'April 3, 2023',
      category: 'News',
      slug: 'new-summer-menu-launch',
    },
  ];
  const filteredPosts =
    activeCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.category === activeCategory);
  return (
    <section id="blog" className="py-24 bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-6">
            <h5 className="text-sm tracking-widest text-gray-500 mb-6">OUR JOURNAL</h5>
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8">
              BAYAMO
              <br />
              STORIES
            </h2>
            <div className="w-24 h-1 bg-blue-900 mb-8" />
            <p className="text-xl text-gray-700 mb-6 max-w-lg">
              Explore our collection of stories, insights and updates from Bayamo Beach Bar. Discover the experiences
              that make our venue truly special.
            </p>
          </div>
          {/* Category Filter */}
          <div className="lg:col-span-6 flex items-end">
            <div className="w-full">
              <div className="flex items-center mb-4">
                <FilterIcon className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-sm text-gray-500 tracking-widest">FILTER BY</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-6 py-2 text-sm tracking-wider transition-colors ${activeCategory === category ? 'bg-blue-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center border-t border-b border-gray-300 py-3 px-4">
            <span className="text-sm tracking-widest text-gray-700 mr-4">01 / 02</span>
            <a href="#" className="flex items-center text-blue-900 hover:text-blue-700 transition-colors">
              <span className="text-sm tracking-widest mr-1">NEXT</span>
              <ChevronRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
