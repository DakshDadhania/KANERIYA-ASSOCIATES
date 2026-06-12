import profileImage from "./profileimage.png";
import notaryImage from "./image1.png";

export const siteConfig = {
  name: "K. A. KANERIYA & ASSOCIATES",
  tagline: "Best Legal Services in Town",
  founded: "2006",
  description:
    "We take pride in helping people from all walks of life achieve the justice and peace they deserve.",
};

export const contactInfo = {
  address: {
    line1: "Office No.320, Anmol Complex,",
    line2: "Sadhu Vasvani Rd, near Raj Palace,",
    city: "Rajkot, Gujarat 360005",
  },
  phones: [
    { label: "Office", number: "+91 9898510980", href: "tel:+919898510980" },
    { label: "Direct", number: "+91 9429096910", href: "tel:+919429096910" },
  ],
  email: "kaneriyakaushik@gmail.com",
  hours: {
    weekdays: "Monday to Saturday — 10:00 AM to 7:00 PM",
    closed: "Closed on Sundays",
  },
  social: {
    instagram: "https://instagram.com/kaneriya.kaushik",
    facebook: "https://facebook.com/kaneriya.kaushik",
    linkedin: "https://linkedin.com/in/kaushik-kaneriya-04245a342",
  },
};

export const images = {
  hero: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80",
  trusted: profileImage,
  matters: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  family: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
  revenue: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  notary: notaryImage,
  section138: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
};

export const aboutSections = [
  {
    id: "trusted",
    title: "Trusted by clients since 2006",
    description:
      "We have had the privilege of working with a diverse range of clients, including individuals, small businesses, and large corporations across various industries. We ensure we are always available to meet our clients' needs and concerns, reinforcing their confidence in our expertise and dedication.",
    image: images.trusted,
    imageAlt: "Adv. Kaushik Kaneriya at the firm office",
  },
  {
    id: "matters",
    title: "Here when it matters most",
    description:
      "We approach every case with care, clarity, and a sharp focus on your best interests. Our team is here to guide, support, and deliver results—every step of the way.",
    image: images.matters,
    imageAlt: "Legal documents and consultation representing dedicated support",
    reverse: true,
  },
];

export const testimonials = [
  {
    quote:
      "Adv Kaushik Kaneriya's clarity and expertise on financial implications helped me a lot. He makes compliance much easier and he gives very practical advice.",
    author: "CA Kamlesh Viradiya",
    role: "Chartered Accountant",
  },
  {
    quote:
      "Adv Kaushik Kaneriya is very reliable and knowledgeable in revenue matters. He has an excellent understanding of government procedures.",
    author: "Industrialist Harshad Kanani",
    role: "Industrialist",
  },
  {
    quote:
      "Kaushikbhai is very detail oriented, responsive and professional. He is an ideal advocate for builders who want any kind of documentation services in revenue field.",
    author: "Builder Kantibhai Dava",
    role: "Builder",
  },
];

export const practices = [
  {
    title: "Family Matter",
    description:
      "We provide legal assistance in a wide range of family-related matters with sensitivity, confidentiality, and professionalism, focusing on the rights and interests of our clients.",
    image: images.family,
    imageAlt: "Family legal matters handled with care and confidentiality",
  },
  {
    title: "Revenue",
    description:
      "Our firm has strong experience in revenue and property-related legal work, ensuring compliance with applicable laws and smooth completion of procedural requirements.",
    image: images.revenue,
    imageAlt: "Property and revenue legal documentation",
  },
  {
    title: "Notary",
    description:
      "We offer reliable notarial and documentation services to individuals and businesses, ensuring legal validity and accuracy in every document.",
    image: images.notary,
    imageAlt: "Professional notarial and documentation services",
  },
];

export const featuredService = {
  title: "Section 138",
  description:
    "We provide legal representation and advisory services in matters related to cheque dishonour under Section 138 of the Negotiable Instruments Act.",
  image: images.section138,
  imageAlt: "Cheque dishonour legal representation under Section 138",
};

export const services = [
  "Sale Deed",
  "Marriage Registration",
  "Non-Agriculture",
  "Will, Trust, Probate",
  "Cheque Return Cases",
  "Gazette",
  "Rent Agreement",
  "Litigation and Dispute Resolution",
  "Affidavit",
  "All Types of Agreement",
  "Partnership Deed",
  "Power of Attorney",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Practices", href: "#practices" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
