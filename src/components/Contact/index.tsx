"use client";

import { useRef, useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setMessage(null);

    const form = formRef.current;
    if (!form) {
      setLoading(false);
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage("Contact submitted successfully!");
        setIsError(false);
        form.reset();
      } else {
        setMessage("Failed to submit contact. Please try again.");
        setIsError(true);
      }
    } catch (err) {
      console.error("Error submitting contact:", err);
      setMessage("An error occurred while submitting your contact.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-12/12 xl:w-12/12">
            <div className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                Get in Touch
              </h2>
              <p className="text-body-color mb-6 text-base font-medium">
                Inform visitors about the services we offer and how we can
                assist them. Remember to select a preferred method for
                inquiries.
              </p>

              <p className="text-body-color mb-6 text-base">
                <strong>Email:</strong> allegiancelocksmith.llc@gmail.com <br />
                <strong>Phone:</strong> (713) 271-4444 <br />
                Serving Houston since 2021
              </p>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  {/* First Name */}
                  <div className="mb-8 w-full px-4 md:w-1/2">
                    <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      required
                      className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="mb-8 w-full px-4 md:w-1/2">
                    <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-8 w-full px-4 md:w-1/2">
                    <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      required
                      className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-8 w-full px-4 md:w-1/2">
                    <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>

                  {/* Address */}
                  <div className="mb-8 w-full px-4">
                    <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address1"
                      placeholder="Address Line 1"
                      required
                      className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary mb-3 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B]"
                    />
                    <input
                      type="text"
                      name="address2"
                      placeholder="Address Line 2"
                      className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary mb-3 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>

                  {/* City */}
                  <div className="mb-8 w-full px-4 md:w-1/2">
                    <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>

                  {/* State */}
                  <div className="mb-8 w-full px-4 md:w-1/2">
                    <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      required
                      className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>

                  {/* ZIP */}
                  <div className="mb-8 w-full px-4 md:w-1/2">
                    <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="zip"
                      placeholder="ZIP Code"
                      required
                      className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>

                  {/* Agree Checkbox */}
                  <div className="mb-8 w-full px-4">
                    <label className="text-body-color dark:text-body-color-dark flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="agree"
                        value="true"
                        className="border-stroke dark:bg-gray-dark h-5 w-5 rounded border bg-white"
                      />
                      <span>
                        I agree to receive communications by text message about
                        my inquiry.
                        <a
                          href="/privacy-policy"
                          className="text-primary px-3 underline"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-primary hover:bg-primary/90 rounded px-6 py-2 text-white transition"
                    >
                      {loading ? "Sending..." : "Submit Ticket"}
                    </button>
                  </div>

                  {/* Display success or error message */}
                  {message && (
                    <div
                      className={`mt-4 w-full px-4 text-sm font-medium ${
                        isError ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
