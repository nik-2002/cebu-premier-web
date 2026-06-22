export type MagazineIssue = {
  title: string;
  issue: string;
  theme: string;
  image: string;
};

export const magazineIssues: MagazineIssue[] = [
  {
    title: "Real Supreme Property Preview",
    issue: "Pilot Issue 2026",
    theme: "South Cebu lots, buyer checklists, and documentation basics",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Cebu Land Guide",
    issue: "Concept Issue",
    theme: "How families compare lot cuts, access, utilities, and neighborhood fit",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Seller Preparation Notes",
    issue: "Concept Issue",
    theme: "Practical document readiness for owners preparing to sell property",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  }
];
