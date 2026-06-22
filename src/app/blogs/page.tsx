import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs / News",
  description: "Sample real estate blog and news content for the Cebu Premier prototype."
};

export default function BlogsPage() {
  return (
    <main className="page-shell py-14">
      <SectionHeading
        eyebrow="Blogs / News"
        title="Useful property guidance without pretending to be a full editorial platform yet."
        body="MDX files are already reserved under src/content/blogs so future posts can move from static summaries to full article pages."
        as="h1"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
            <BookOpen size={24} className="text-pine" />
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-pine">
              {post.category}
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-ocean">{post.title}</h2>
            <p className="mt-3 text-sm text-slate-500">
              {post.date} / {post.readTime}
            </p>
            <p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 font-bold text-pine hover:text-ocean">
              Ask about this topic <ArrowRight size={17} />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
