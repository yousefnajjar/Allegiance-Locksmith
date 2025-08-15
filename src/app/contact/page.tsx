import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Inform visitors about the services we offer and how we can assist them. Remember to select a preferred method for inquiries."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
