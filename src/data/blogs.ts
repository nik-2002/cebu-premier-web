export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-check-before-buying-a-lot",
    title: "What to Check Before Buying a Lot in Cebu",
    category: "Buyer Guide",
    date: "2026-06-01",
    readTime: "5 min read",
    excerpt:
      "A practical checklist for title, access, tax declaration, neighborhood context, and payment terms before viewing a lot."
  },
  {
    slug: "seller-document-readiness",
    title: "Seller Document Readiness: A Simple First Pass",
    category: "Seller Guide",
    date: "2026-05-18",
    readTime: "4 min read",
    excerpt:
      "How owners can prepare title, IDs, tax declarations, and property notes before marketing a property."
  },
  {
    slug: "preselling-versus-ready-for-occupancy",
    title: "Preselling vs RFO: Which Fits Your Timeline?",
    category: "Projects",
    date: "2026-04-27",
    readTime: "6 min read",
    excerpt:
      "A plain-language comparison of payment runway, waiting time, turnover risk, and inspection readiness."
  }
];
