import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Allegiance Locksmith LLC",
  description: "Read the Privacy Policy for Allegiance Locksmith LLC to understand how we collect, process, and protect your personal information.",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Last updated January 03, 2025"
      />

      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
