
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Separator } from '@/components/ui/separator';
import BlogCard from '@/components/BlogCard';

const Blog = () => {
  // Sample blog data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Loans Against Mutual Funds",
      excerpt: "Learn how you can leverage your mutual fund investments without selling them and the benefits this approach offers.",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      category: "Finance",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "5 Common Myths About Mutual Fund Loans",
      excerpt: "We debunk the most common misconceptions about taking loans against your mutual fund investments.",
      date: "July 22, 2023",
      author: "Michael Chen",
      category: "Investment",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "How to Optimize Your Mutual Fund Portfolio",
      excerpt: "Expert tips on building and managing a mutual fund portfolio that aligns with your financial goals.",
      date: "August 10, 2023",
      author: "Priya Sharma",
      category: "Investment",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Tax Implications of Loans Against Mutual Funds",
      excerpt: "A comprehensive guide to understanding the tax aspects of taking loans against your mutual fund investments.",
      date: "September 5, 2023",
      author: "David Wilson",
      category: "Tax",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Market Volatility and Your Mutual Fund Loans",
      excerpt: "How market fluctuations impact loans against mutual funds and strategies to mitigate risks.",
      date: "October 18, 2023",
      author: "Anjali Patel",
      category: "Market Analysis",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 6,
      title: "The Future of Digital Lending Against Assets",
      excerpt: "Exploring how technology is transforming the landscape of asset-based lending, particularly for mutual funds.",
      date: "November 30, 2023",
      author: "James Roberts",
      category: "Technology",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fluidpe-teal mb-4">
              Fluidpe Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights, guides, and news about mutual funds, loans, and personal finance to help you make informed financial decisions.
            </p>
            <Separator className="w-24 mx-auto mt-6 bg-fluidpe-teal/30" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                category={post.category}
                imageUrl={post.imageUrl}
                delay={0}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
