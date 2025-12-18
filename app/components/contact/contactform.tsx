"use client"
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    subject: '',
    messageTitle: '',
    message: '',
    services: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          title: '',
          firstName: '',
          lastName: '',
          email: '',
          country: '',
          subject: '',
          messageTitle: '',
          message: '',
          services: [],
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#031347] text-white pb-16 pt-0 px-5 md:px-10 font-sans flex justify-center items-start min-h-screen relative">
      <div className="2xl:max-w-[1440px] w-full lg:w-[85%] mx-auto flex flex-col lg:flex-row gap-14">
        {/* Left Column: Form */}
        <div className="flex-3 flex flex-col gap-5">
          {submitSuccess && (
            <div className="p-4 bg-green-500 text-white rounded-md">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {errorMessage && (
            <div className="p-4 bg-red-500 text-white rounded-md">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Row 1: Title, First name, Last name */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-2">
                <label className="block mb-2 text-[16px] relative left-1 tracking-wide font-bold">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full p-3 text-white text-base placeholder:text-[#D5D5D5] opacity-60 md:h-18 bg-white/5 rounded-[10px] md:rounded-4xl border-2 border-white/10 backdrop-blur-xl"
                />
              </div>

              <div className="flex-2">
                <label className="block mb-2 text-[16px] relative left-1 tracking-wide font-bold ">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@mail.com"
                  className="w-full p-3 text-white text-base placeholder:text-[#D5D5D5] opacity-60 md:h-18 bg-white/5 rounded-[10px] md:rounded-4xl border-2 border-white/10 backdrop-blur-xl"
                />
              </div>
            </div>


            {/* Message */}
            <div>
              <label className="block mb-2 text-[16px] relative left-1 tracking-wide font-bold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I would like to know..."
                className="w-full p-3  border-none rounded-lg text-white text-base min-h-[150px]  placeholder:text-[#D5D5D5] opacity-60 h-18 bg-white/5 border-2 border-white/10 backdrop-blur-xl"
              ></textarea>
            </div>

            {/* Footer: Mandatory and Button */}
            <div className="flex-col md:flex-row flex md:items-center gap-5 md:gap-20 mt-5 ">
              <span className="text-md tracking-wide font-bold">All fields are mandatory</span>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white w-full md:w-fit`}
              >
                {isSubmitting ? 'SENDING...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Company Info */}
        <div className="flex-1 flex flex-col items-start gap-5">
          <h2 className="text-white text-4xl  font-fks font-bold md:text-5xl uppercase tracking-wider">
            Our Corporate Headquarters
          </h2>
          <p className="m-0 text-base  ">
            <span className="font-helvetica font-bold tracking-wide text-xl whitespace-nowrap ">
              Spawn Point Creative Labs ↗
            </span>

            <br />
            Level 14, Marina Plaza, Dubai Marina
            <br />
            Dubai, United Arab Emirates
          </p>

          <a href="tel:+971523456789" className="m-0 text-base">+971 52 345 6789</a>
          <a href="mailto:play@spawnpointstudio.com" className="m-0 text-base tracking-[1px]">play@spawnpointstudio.com</a>

          <svg xmlns="http://www.w3.org/2000/svg" width="224" height="1" viewBox="0 0 442 1" fill="none" className="w-full md:w-56">
            <path d="M0 0.5H441.5" stroke="#273561" />
          </svg>

        </div>
      </div>

    </div>
  );
};

export default ContactForm;