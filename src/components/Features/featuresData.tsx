import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // Wrench and screwdriver icon for "Expert Locksmith Services"
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path
          d="M21.7 13.35l-2.65-2.65-1.4 1.4 2.65 2.65a1 1 0 0 1 0 1.4l-2.1 2.1a8 8 0 1 1-1.4-1.4l2.1-2.1a1 1 0 0 1 1.4 0zM7.5 14a5 5 0 1 0 7.07-7.07L14 4.41 11.59 6.83A5 5 0 0 0 7.5 14z"
        />
      </svg>
    ),
    title: "Expert Locksmith Services",
    paragraph:
      "Professionally crafted to meet your needs with precision and care. Trust the expertise of Allegiance Locksmith.",
    cta: "Book now",
  },
  {
    id: 2,
    icon: (
      // Shield icon for "Masterful Security Solutions"
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path
          d="M12 1L3 5v6c0 5.25 3.84 10.74 9 12 5.16-1.26 9-6.75 9-12V5l-9-4zM12 19c-4.33-1.25-7-6.15-7-10V6.15l7-3.11 7 3.11V9c0 3.85-2.67 8.75-7 10z"
        />
      </svg>
    ),
    title: "Masterful Security Solutions",
    paragraph:
      "Ensuring the safety of your property is our top priority. Experience the dedicated service of Allegiance Locksmith.",
    cta: "Book now",
  },
  {
    id: 3,
    icon: (
      // Key icon for "Premium Locksmith Expertise"
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path
          d="M21 2a3 3 0 0 0-4.24 0l-1.07 1.07-7.08 7.08A5 5 0 1 0 9 16l.09-.09 7.08-7.08L21 6.24A3 3 0 0 0 21 2zm-8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        />
      </svg>
    ),
    title: "Premium Locksmith Expertise",
    paragraph:
      "Unlock the convenience of seamless solutions. Count on the reliability of Allegiance Locksmith.",
    cta: "Book now",
  },
];

export default featuresData;
