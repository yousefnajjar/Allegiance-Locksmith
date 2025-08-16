import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "",
  // other metadata
  keywords: [

  ],
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Allegiance Locksmith is committed to providing unparalleled security solutions for your vehicle, home, or business. Trust us for lockouts, key cutting, and advanced security programming."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
