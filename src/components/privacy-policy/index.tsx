import Link from "next/link";
import DownloadButton from "../shared/privacy-policy-pdf";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="pt-6">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    This Privacy Notice for Allegiance Locksmith LLC ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Visit our website at{" "}
                      <a
                        href="https://allegiancelocksmith.llc/"
                        className="text-primary underline dark:text-white"
                      >
                        https://allegiancelocksmith.llc/
                      </a>, or any website of ours that links to this Privacy Notice
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Engage with us in other related ways, including any sales, marketing, or events
                    </li>
                  </ul>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{" "}
                    <a
                      href="mailto:allegiancelocksmith.llc@gmail.com"
                      className="text-primary underline dark:text-white"
                    >
                      allegiancelocksmith.llc@gmail.com
                    </a>.
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    Summary of Key Points
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                    </li>
                  </ul>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    Table of Contents
                  </h3>
                  <ul className="text-body-color mb-10 list-inside list-decimal">
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      What Information Do We Collect?
                    </li>
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      How Do We Process Your Information?
                    </li>
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      When and With Whom Do We Share Your Personal Information?
                    </li>
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Do We Use Cookies and Other Tracking Technologies?
                    </li>
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      How Long Do We Keep Your Information?
                    </li>
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Do We Collect Information from Minors?
                    </li>
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      What Are Your Privacy Rights?
                    </li>
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Controls for Do-Not-Track Features
                    </li>
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Do United States Residents Have Specific Privacy Rights?
                    </li>
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Do We Make Updates to This Notice?
                    </li>
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      How Can You Contact Us About This Notice?
                    </li>
                    <li className="text-body-Color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      How Can You Review, Update, or Delete the Data We Collect from You?
                    </li>
                  </ul>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    1. What Information Do We Collect?
                  </h3>
                  <h4 className="font-xl mb-5 leading-tight font-semibold text-black sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight dark:text-white">
                    Personal Information You Disclose to Us
                  </h4>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>In Short:</strong> We collect personal information that you provide to us.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>Personal Information Provided by You.</strong> The personal information we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Names</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Phone numbers</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Email addresses</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Mailing addresses</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Billing addresses</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Debit/credit card numbers</li>
                  </ul>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>Sensitive Information.</strong> We do not process sensitive information.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    2. How Do We Process Your Information?
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      To enable user-to-user communications. We may process your information if you choose to use any of our offerings that allow for communication with another user.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      To comply with our legal obligations. We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
                    </li>
                  </ul>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    3. When and With Whom Do We Share Your Personal Information?
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We may need to share your personal information in the following situations:
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      <strong>When we use Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise.
                    </li>
                  </ul>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    4. Do We Use Cookies and Other Tracking Technologies?
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    5. How Long Do We Keep Your Information?
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    6. Do We Collect Information from Minors?
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at{" "}
                    <a
                      href="mailto:allegiancelocksmith.llc@gmail.com"
                      className="text-primary underline dark:text-white"
                    >
                      allegiancelocksmith.llc@gmail.com
                    </a>.
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    7. What Are Your Privacy Rights?
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    If you have questions or comments about your privacy rights, you may email us at{" "}
                    <a
                      href="mailto:allegiancelocksmith.llc@gmail.com"
                      className="text-primary underline dark:text-white"
                    >
                      allegiancelocksmith.llc@gmail.com
                    </a>.
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    8. Controls for Do-Not-Track Features
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    9. Do United States Residents Have Specific Privacy Rights?
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law.
                  </p>
                  <h4 className="font-xl mb-5 leading-tight font-semibold text-black sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight dark:text-white">
                    Categories of Personal Information We Collect
                  </h4>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We have collected the following categories of personal information in the past twelve (12) months:
                  </p>
                  <table className="w-full mb-10 border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Category</th>
                        <th className="border border-gray-300 p-2 text-left">Examples</th>
                        <th className="border border-gray-300 p-2 text-left">Collected</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">A. Identifiers</td>
                        <td className="border border-gray-300 p-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                        <td className="border border-gray-300 p-2">YES</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">B. Personal information as defined in the California Customer Records statute</td>
                        <td className="border border-gray-300 p-2">Name, contact information, education, employment, employment history, and financial information</td>
                        <td className="border border-gray-300 p-2">YES</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">C. Protected classification characteristics under state or federal law</td>
                        <td className="border border-gray-300 p-2">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                        <td className="border border-gray-300 p-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">D. Commercial information</td>
                        <td className="border border-gray-300 p-2">Transaction information, purchase history, financial details, and payment information</td>
                        <td className="border border-gray-300 p-2">YES</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">E. Biometric information</td>
                        <td className="border border-gray-300 p-2">Fingerprints and voiceprints</td>
                        <td className="border border-gray-300 p-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">F. Internet or other similar network activity</td>
                        <td className="border border-gray-300 p-2">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                        <td className="border border-gray-300 p-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">G. Geolocation data</td>
                        <td className="border border-gray-300 p-2">Device location</td>
                        <td className="border border-gray-300 p-2">YES</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">H. Audio, electronic, sensory, or similar information</td>
                        <td className="border border-gray-300 p-2">Images and audio, video or call recordings created in connection with our business activities</td>
                        <td className="border border-gray-300 p-2">YES</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">I. Professional or employment-related information</td>
                        <td className="border border-gray-300 p-2">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                        <td className="border border-gray-300 p-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">J. Education Information</td>
                        <td className="border border-gray-300 p-2">Student records and directory information</td>
                        <td className="border border-gray-300 p-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">K. Inferences drawn from collected personal information</td>
                        <td className="border border-gray-300 p-2">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                        <td className="border border-gray-300 p-2">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">L. Sensitive personal Information</td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2">NO</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Receiving help through our customer support channels;
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Participation in customer surveys or contests; and
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Facilitation in the delivery of our Services and to respond to your inquiries.
                    </li>
                  </ul>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We will use and retain the collected personal information as needed to provide the Services or for:
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Category A - 1 year</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Category B - 2 years</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Category D - 2 years</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Category G - 2 years</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Category H - 2 years</li>
                  </ul>
                  <h4 className="font-xl mb-5 leading-tight font-semibold text-black sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight dark:text-white">
                    Sources of Personal Information
                  </h4>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Learn more about the sources of personal information we collect in "WHAT INFORMATION DO WE COLLECT?"
                  </p>
                  <h4 className="font-xl mb-5 leading-tight font-semibold text-black sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight dark:text-white">
                    How We Use and Share Personal Information
                  </h4>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Learn more about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>Will your information be shared with anyone else?</strong>
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
                  </p>
                  <h4 className="font-xl mb-5 leading-tight font-semibold text-black sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight dark:text-white">
                    Your Rights
                  </h4>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to know whether or not we are processing your personal data</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to access your personal data</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to correct inaccuracies in your personal data</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to request the deletion of your personal data</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to obtain a copy of the personal data you previously shared with us</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to non-discrimination for exercising your rights</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                  </ul>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Depending upon the state where you live, you may also have the following rights:
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to access the categories of personal data being processed (as permitted by applicable law, including Minnesota’s privacy law)</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including California's and Delaware's privacy law)</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including Minnesota's and Oregon's privacy law)</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to review, understand, question, and correct how personal data has been profiled (as permitted by applicable law, including Minnesota’s privacy law)</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including California’s privacy law)</li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including Florida’s privacy law)</li>
                  </ul>
                  <h4 className="font-xl mb-5 leading-tight font-semibold text-black sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight dark:text-white">
                    How to Exercise Your Rights
                  </h4>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    To exercise these rights, you can contact us by submitting a data subject access request, by emailing us at{" "}
                    <a
                      href="mailto:allegiancelocksmith.llc@gmail.com"
                      className="text-primary underline dark:text-white"
                    >
                      allegiancelocksmith.llc@gmail.com
                    </a>, by calling{" "}
                    <a
                      href="tel:7132714444"
                      className="text-primary underline dark:text-white"
                    >
                      (713) 271-4444
                    </a>, or by referring to the contact details at the bottom of this document.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We will honor your opt-out preferences if you enact the Global Privacy Control (GPC) opt-out signal on your browser.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
                  </p>
                  <h4 className="font-xl mb-5 leading-tight font-semibold text-black sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight dark:text-white">
                    Request Verification
                  </h4>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
                  </p>
                  <h4 className="font-xl mb-5 leading-tight font-semibold text-black sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight dark:text-white">
                    Appeals
                  </h4>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at{" "}
                    <a
                      href="mailto:allegiancelocksmith.llc@gmail.com"
                      className="text-primary underline dark:text-white"
                    >
                      allegiancelocksmith.llc@gmail.com
                    </a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
                  </p>
                  <h4 className="font-xl mb-5 leading-tight font-semibold text-black sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight dark:text-white">
                    California "Shine The Light" Law
                  </h4>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    10. Do We Make Updates to This Notice?
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    11. How Can You Contact Us About This Notice?
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO) by email at{" "}
                    <a
                      href="mailto:allegiancelocksmith.llc@gmail.com"
                      className="text-primary underline dark:text-white"
                    >
                      allegiancelocksmith.llc@gmail.com
                    </a>, by phone at{" "}
                    <a
                      href="tel:7132714444"
                      className="text-primary underline dark:text-white"
                    >
                      713-271-4444
                    </a>, or contact us by post at:
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Allegiance Locksmith LLC<br />
                    Data Protection Officer<br />
                    9403 Stella Link Rd<br />
                    Houston, TX 77025<br />
                    United States
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    12. How Can You Review, Update, or Delete the Data We Collect from You?
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. Upon messaging opt-in, the end user agrees to receiving messages regarding their inquiry/claim updates/job application updates/internal employee communication. End users can opt-out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply.
                  </p>
                 
                 <DownloadButton />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default PrivacyPolicy;
