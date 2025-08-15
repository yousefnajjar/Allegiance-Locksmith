import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Contact Form */}
          <div className="w-full px-4 lg:w-12/12 xl:w-12/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Get in Touch
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Inform visitors about the services we offer and how we can assist them. 
                Remember to select a preferred method for inquiries.
              </p>

              <p className="mb-6 text-base text-body-color">
                <strong>Email:</strong> allegiancelocksmith.llc@gmail.com <br />
                <strong>Phone:</strong> (713) 271-4444 <br />
                Serving Houston since 2021
              </p>

              <form>
                <div className="-mx-4 flex flex-wrap">
                  {/* Name Fields */}
                  <div className="w-full px-4 md:w-1/2 mb-8">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
                      required
                    />
                  </div>
                  <div className="w-full px-4 md:w-1/2 mb-8">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
                    />
                  </div>

                  {/* Phone */}
                  <div className="w-full px-4 md:w-1/2 mb-8">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2 mb-8">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
                      required
                    />
                  </div>

                  {/* Address Fields */}
                  <div className="w-full px-4 mb-8">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address Line 1"
                      className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 mb-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Address Line 2"
                      className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 mb-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full px-4 md:w-1/2 mb-8">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="City"
                      className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
                      required
                    />
                  </div>

                  <div className="w-full px-4 md:w-1/2 mb-8">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="State"
                      className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
                      required
                    />
                  </div>

                  <div className="w-full px-4 md:w-1/2 mb-8">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
                      required
                    />
                  </div>

                  <div className="w-full px-4 mb-8">
                    <label className="flex items-center space-x-3 text-body-color dark:text-body-color-dark">
                      <input type="checkbox" className="h-5 w-5 rounded border border-stroke bg-white dark:bg-gray-dark" />
                      <span>
                        I agree to receive communications by text message about my inquiry. You may opt-out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply. You may review our <a href="#" className="text-primary underline">Privacy Policy</a>.
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Newsletter Box */}
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
