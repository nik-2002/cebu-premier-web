export type Agent = {
  id: string;
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  listings: number;
  replyTime: string;
  specialties: string[];
  image: string;
};

export const agents: Agent[] = [
  {
    id: "nina-reyes",
    name: "Nina Reyes",
    role: "Broker Associate",
    location: "Cebu City, Cebu",
    phone: "+63 917 000 0121",
    email: "nina@realsupreme.example",
    listings: 18,
    replyTime: "same day",
    specialties: ["Residential lots", "House and lot", "Seller assistance"],
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "marco-santos",
    name: "Marco Santos",
    role: "Property Specialist",
    location: "Talisay City, Cebu",
    phone: "+63 917 000 0144",
    email: "marco@realsupreme.example",
    listings: 11,
    replyTime: "within 4 hr",
    specialties: ["South Cebu", "Lots", "Subdivision projects"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bea-lim",
    name: "Bea Lim",
    role: "Client Services Lead",
    location: "Mandaue City, Cebu",
    phone: "+63 917 000 0188",
    email: "bea@realsupreme.example",
    listings: 9,
    replyTime: "within 6 hr",
    specialties: ["Documentation", "Buyer support", "After-sales coordination"],
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "jon-mercado",
    name: "Jon Mercado",
    role: "Investment Consultant",
    location: "Lapu-Lapu City, Cebu",
    phone: "+63 917 000 0199",
    email: "jon@realsupreme.example",
    listings: 14,
    replyTime: "same day",
    specialties: ["Commercial lots", "Project matching", "Investor shortlist"],
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
  }
];
