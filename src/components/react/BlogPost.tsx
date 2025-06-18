import React from 'react';
import { ArrowLeftIcon, CalendarIcon, TagIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
export const BlogPost = () => {
  // Example post data - in a real implementation, this would be fetched based on the route/slug
  const post = {
    title: 'Summer Solstice Celebration at Bayamo',
    image: 'https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?ixlib=rb-4.0.3',
    date: 'June 18, 2023',
    category: 'Events',
    author: 'Maria Papadopoulos',
    content: `
      <p>Each year as the summer solstice approaches, Bayamo Beach Bar transforms into a magical celebration of the season's longest day. This annual tradition has become one of our most anticipated events, drawing visitors from across Mani and beyond.</p>
      <h2>A Celebration of Summer</h2>
      <p>The Summer Solstice celebration at Bayamo is more than just a party—it's a tribute to the Mediterranean summer that defines our identity. As the sun lingers longer in the sky, we honor this natural phenomenon with an experience designed to engage all the senses.</p>
      <p>This year's celebration featured a carefully curated selection of our signature cocktails, including the popular Mediterranean Sunset and our special Solstice Spritz, created specifically for the occasion. Our culinary team prepared a menu of locally-sourced delicacies that perfectly complemented the evening's festivities.</p>
      <h2>Music and Atmosphere</h2>
      <p>As twilight descended, the atmosphere was enhanced by the soulful melodies of local musician Nikos Dimitriou, whose acoustic performance provided the perfect soundtrack to the sunset. Later in the evening, DJ Elena took over, transforming the beach into an energetic dance floor under the stars.</p>
      <blockquote>"The Summer Solstice at Bayamo captures everything I love about Greek summer nights—the music, the sea breeze, the incredible cocktails, and the feeling that the night might never end." — Andreas K., guest</blockquote>
      <h2>Looking Forward</h2>
      <p>If you missed this year's Summer Solstice celebration, don't worry—our calendar is filled with special events throughout the season. From full moon parties to themed cocktail nights, there's always something happening at Bayamo.</p>
      <p>For those planning a special celebration of their own, remember that Bayamo offers custom event packages for birthdays, business gatherings, and wedding celebrations. Our team can help you create your own unforgettable summer experience.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: 'Signature Cocktail Series: Mediterranean Sunset',
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3',
        slug: 'signature-cocktail-mediterranean-sunset',
      },
      {
        id: 3,
        title: 'A Perfect Day at Bayamo Beach Bar',
        image: 'https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixlib=rb-4.0.3',
        slug: 'perfect-day-at-bayamo',
      },
    ],
  };
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Back to blog */}
        <div className="mb-12">
          <a href="/blog" className="inline-flex items-center text-gray-700 hover:text-blue-900 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            <span className="text-sm tracking-widest">BACK TO BLOG</span>
          </a>
        </div>
        {/* Post header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center text-gray-500">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <TagIcon className="w-4 h-4 mr-2" />
              <span className="text-sm">{post.category}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-8">{post.title}</h1>
          <div className="flex items-center mb-12">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
            <span className="text-gray-700">By {post.author}</span>
          </div>
          <div className="aspect-[16/9] mb-12">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Post content */}
        <div className="max-w-3xl mx-auto mb-16">
          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          ></div>
        </div>
        {/* Share and tags */}
        <div className="max-w-3xl mx-auto mb-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-sm text-gray-500 tracking-widest mr-4">TAGGED IN</span>
              <a href="#" className="inline-block bg-[#f5f3ee] px-4 py-2 text-sm text-gray-700 mr-2">
                Events
              </a>
              <a href="#" className="inline-block bg-[#f5f3ee] px-4 py-2 text-sm text-gray-700">
                Summer
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 tracking-widest mr-4">SHARE</span>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-500 hover:text-blue-900">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-900">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-900">
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Related posts */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-light text-gray-900 mb-8">Related Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {post.relatedPosts.map((relatedPost) => (
              <a key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                <div className="relative aspect-[16/9] mb-4 overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-xl text-gray-900 group-hover:text-blue-900 transition-colors">
                  {relatedPost.title}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
