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
    message: ''
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
          message: ''
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
    <div className="bg-[#031347] text-white pb-16 pt-10 px-5 md:px-10 font-sans flex justify-center items-start min-h-screen relative">
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
              <div className="flex-1 relative">
                <label className="block mb-2 text-[16px] relative left-1tracking-wide font-bold">Title</label>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-3 pr-10 text-base placeholder:text-[#D5D5D5] opacity-60 md:h-18 bg-white/5  text-[#D5D5D5] appearance-none rounded-[10px] md:rounded-4xl border-2  border-[#FFFFFF1A] backdrop-blur-xl cursor-pointer"
                >
                  <option value="" className='bg-[#031347]'>Select Title</option>
                  <option value="Mr" className='bg-[#031347]'>Mr</option>
                  <option value="Mrs" className='bg-[#031347]'>Mrs</option>
                  <option value="Ms" className='bg-[#031347]'>Ms</option>
                </select>
                <div className="pointer-events-none absolute top-[55%] right-3 flex items-center">
                  <svg
                    className="w-4 h-4 text-[#D5D5D5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                      d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="flex-2">
                <label className="block mb-2 text-[16px] relative left-1tracking-wide font-bold">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full p-3 text-white text-base placeholder:text-[#D5D5D5] opacity-60 md:h-18 bg-white/5 rounded-[10px] md:rounded-4xl border-2 border-white/10 backdrop-blur-xl"
                />
              </div>

              <div className="flex-2">
                <label className="block mb-2 text-[16px] relative left-1tracking-wide font-bold">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full p-3 text-white text-base placeholder:text-[#D5D5D5] opacity-60 md:h-18 bg-white/5 rounded-[10px] md:rounded-4xl border-2 border-white/10 backdrop-blur-xl"
                />
              </div>
            </div>

            {/* Row 2: Email, Country */}
            <div className="md:flex flex-col gap-5">
              <div className="flex-2">
                <label className="block mb-2 text-[16px] relative left-1tracking-wide font-bold ">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@mail.com"
                  className="w-full p-3 text-white text-base placeholder:text-[#D5D5D5] opacity-60 md:h-18 bg-white/5 rounded-[10px] md:rounded-4xl border-2 border-white/10 backdrop-blur-xl"
                />
              </div>
              <div className="flex-2 relative md:mt-0 mt-5">
                <label className="block mb-2 text-[16px] relative left-1tracking-wide font-bold">Country of residence</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-3 pr-10 text-base placeholder:text-[#D5D5D5] opacity-60 md:h-18 bg-white/5 text-[#D5D5D5] appearance-none rounded-[10px] md:rounded-4xl border-2 border-white/10 backdrop-blur-xl cursor-pointer"
                >
                  <option value="" className='bg-[#031347]'>Select your country</option>
                  <option value="United Arab Emirates" className='bg-[#031347]'>United Arab Emirates</option>
                  <option value="Other" className='bg-[#031347]'>Other</option>
                </select>
                <div className="pointer-events-none absolute top-[55%] right-4 flex items-center">
                  <svg
                    className="w-4 h-4 text-[#D5D5D5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                      d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* I want to... */}
            <div className="flex-2 relative">
              <label className="block mb-2 text-[16px] relative left-1tracking-wide font-bold">I want to..</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 pr-10 text-base placeholder:text-[#D5D5D5] opacity-60 md:h-18 bg-white/5 text-[#D5D5D5] appearance-none rounded-[10px] md:rounded-4xl border-2 border-white/10 backdrop-blur-xl cursor-pointer"
              >
                <option value="" className='bg-[#031347]'>Select your Subject</option>
                <option value="Partnership" className='bg-[#031347]'>Partnership</option>
                <option value="Inquiry" className='bg-[#031347]'>Inquiry</option>
                <option value="Support" className='bg-[#031347]'>Support</option>
              </select>
              <div className="pointer-events-none absolute top-[55%] right-4 flex items-center">
                <svg
                  className="w-4 h-4 text-[#D5D5D5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Message title */}
            <div>
              <label className="block mb-2 text-[16px] relative left-1tracking-wide font-bold">Message title</label>
              <input
                type="text"
                name="messageTitle"
                value={formData.messageTitle}
                onChange={handleChange}
                placeholder="Message title"
                className="w-full p-3 text-white text-base placeholder:text-[#D5D5D5] opacity-60 md:h-18 bg-white/5 rounded-[10px] md:rounded-4xl border-2 border-white/10 backdrop-blur-xl"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-[16px] relative left-1tracking-wide font-bold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I would like to know..."
                className="w-full p-3  border-none rounded-lg text-white text-base min-h-[150px]  placeholder:text-[#D5D5D5] opacity-60 h-18 bg-white/5 border-2 border-white/10 backdrop-blur-xl"
              ></textarea>
            </div>

            {/* Footer: Mandatory and Button */}
            <div className="flex-col md:flex-row flex md:items-center  gap-5 md:gap-20 mt-5 ">
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

          <svg xmlns="http://www.w3.org/2000/svg" width="224" height="1" viewBox="0 0 442 1" fill="none" className= "w-full md:w-56">
            <path d="M0 0.5H441.5" stroke="#273561" />
          </svg>

          {/* Social Icons */}
          {/* <div className="flex items-center gap-5 md:mt-5 mt-2">
            <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 25 25" fill="none">
              <path d="M12.4673 0C5.58187 0 0 5.58187 0 12.4673C0 18.314 4.02545 23.2202 9.45572 24.5676V16.2773H6.88496V12.4673H9.45572V10.8256C9.45572 6.58225 11.3762 4.61541 15.5423 4.61541C16.3322 4.61541 17.6951 4.7705 18.2527 4.92509V8.37854C17.9584 8.34763 17.4473 8.33217 16.8124 8.33217C14.7683 8.33217 13.9784 9.10664 13.9784 11.1199V12.4673H18.0507L17.351 16.2773H13.9784V24.8434C20.1517 24.0979 24.9352 18.8416 24.9352 12.4673C24.9347 5.58187 19.3528 0 12.4673 0Z" fill="white" />
            </svg></span>
            <span className="text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M23.0889 0H1.84088C0.823039 0 0 0.803558 0 1.79705V23.1327C0 24.1262 0.823039 24.9347 1.84088 24.9347H23.0889C24.1068 24.9347 24.9347 24.1262 24.9347 23.1376V1.79705C24.9347 0.803558 24.1068 0 23.0889 0ZM7.39761 21.248H3.69637V9.34563H7.39761V21.248ZM5.54699 7.7239C4.3587 7.7239 3.3993 6.7645 3.3993 5.58108C3.3993 4.39766 4.3587 3.43826 5.54699 3.43826C6.73041 3.43826 7.68981 4.39766 7.68981 5.58108C7.68981 6.75963 6.73041 7.7239 5.54699 7.7239ZM21.248 21.248H17.5517V15.4624C17.5517 14.0842 17.5273 12.3066 15.628 12.3066C13.7043 12.3066 13.4121 13.8115 13.4121 15.365V21.248H9.72062V9.34563H13.266V10.9722H13.3147C13.8066 10.0372 15.0144 9.04855 16.8114 9.04855C20.5565 9.04855 21.248 11.5128 21.248 14.7173V21.248Z" fill="white" />
              </svg></span>
            <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 19" fill="none">
              <path d="M21.1082 1.57547C19.519 0.846253 17.8148 0.308999 16.0329 0.00129079C16.0004 -0.00464787 15.968 0.0101932 15.9513 0.039876C15.7321 0.429703 15.4893 0.938265 15.3193 1.33799C13.4028 1.05107 11.4961 1.05107 9.61888 1.33799C9.44883 0.92938 9.19724 0.429703 8.97707 0.039876C8.96036 0.0111835 8.92794 -0.00365751 8.89549 0.00129079C7.1146 0.308015 5.41036 0.845269 3.82013 1.57547C3.80636 1.5814 3.79456 1.59131 3.78673 1.60416C0.554164 6.43355 -0.331371 11.1442 0.103043 15.7965C0.105008 15.8193 0.117785 15.841 0.135476 15.8549C2.26823 17.4211 4.33417 18.372 6.36174 19.0022C6.3942 19.0121 6.42858 19.0003 6.44923 18.9735C6.92885 18.3186 7.35639 17.6279 7.72297 16.9017C7.7446 16.8591 7.72395 16.8087 7.67973 16.7919C7.00158 16.5346 6.35584 16.221 5.73469 15.8648C5.68556 15.8361 5.68163 15.7658 5.72682 15.7322C5.85754 15.6342 5.98829 15.5323 6.1131 15.4294C6.13568 15.4106 6.16715 15.4067 6.1937 15.4185C10.2744 17.2816 14.6923 17.2816 18.7248 15.4185C18.7514 15.4057 18.7829 15.4096 18.8064 15.4284C18.9313 15.5313 19.062 15.6342 19.1937 15.7322C19.2389 15.7658 19.2359 15.8361 19.1868 15.8648C18.5656 16.2279 17.9199 16.5346 17.2408 16.7909C17.1966 16.8077 17.1769 16.8591 17.1985 16.9017C17.573 17.6269 18.0005 18.3175 18.4713 18.9726C18.4909 19.0003 18.5263 19.0121 18.5588 19.0022C20.5962 18.372 22.6621 17.4211 24.7948 15.8549C24.8135 15.841 24.8253 15.8203 24.8273 15.7975C25.3472 10.419 23.9565 5.7469 21.1407 1.60514C21.1338 1.59131 21.122 1.5814 21.1082 1.57547ZM8.33236 12.9638C7.10378 12.9638 6.09147 11.8358 6.09147 10.4506C6.09147 9.06542 7.08415 7.93749 8.33236 7.93749C9.59036 7.93749 10.5929 9.07532 10.5732 10.4506C10.5732 11.8358 9.58053 12.9638 8.33236 12.9638ZM16.6177 12.9638C15.3891 12.9638 14.3768 11.8358 14.3768 10.4506C14.3768 9.06542 15.3694 7.93749 16.6177 7.93749C17.8757 7.93749 18.8782 9.07532 18.8585 10.4506C18.8585 11.8358 17.8757 12.9638 16.6177 12.9638Z" fill="white" />
            </svg></span>
            <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 23 21" fill="none">
              <path d="M18.001 0H21.5059L13.8488 8.75154L22.8568 20.6604H15.8036L10.2794 13.4377L3.95832 20.6604H0.451351L8.64135 11.2997L0 0H7.2322L12.2257 6.6018L18.001 0ZM16.771 18.5626H18.713L6.17693 1.98764H4.09288L16.771 18.5626Z" fill="white" />
            </svg></span>
            <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 27 21" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4339 0C14.5825 0 15.7606 0.0279874 16.9025 0.0737848L18.2513 0.134848L19.5423 0.20736L20.7513 0.284961L21.8556 0.366379C23.0542 0.452747 24.1821 0.936854 25.0407 1.73343C25.8994 2.53001 26.4336 3.58796 26.5494 4.72094L26.6031 5.26161L26.7039 6.41926C26.7979 7.6189 26.8678 8.92667 26.8678 10.1772C26.8678 11.4277 26.7979 12.7355 26.7039 13.9351L26.6031 15.0928L26.5494 15.6334C26.4336 16.7666 25.8991 17.8247 25.0402 18.6213C24.1813 19.4179 23.053 19.9019 21.8543 19.988L20.7527 20.0681L19.5436 20.147L18.2513 20.2195L16.9025 20.2806C15.747 20.328 14.5905 20.3526 13.4339 20.3544C12.2773 20.3526 11.1208 20.328 9.96526 20.2806L8.6165 20.2195L7.3255 20.147L6.11645 20.0681L5.01219 19.988C3.81363 19.9016 2.6857 19.4175 1.82707 18.621C0.968434 17.8244 0.434171 16.7664 0.318383 15.6334L0.264648 15.0928L0.163893 13.9351C0.0615712 12.6848 0.00690454 11.4313 0 10.1772C0 8.92667 0.0698562 7.6189 0.163893 6.41926L0.264648 5.26161L0.318383 4.72094C0.434126 3.58816 0.968196 2.53037 1.82656 1.73382C2.68492 0.937267 3.81253 0.453033 5.01084 0.366379L6.11376 0.284961L7.32282 0.20736L8.61516 0.134848L9.96392 0.0737848C11.1199 0.0263681 12.2768 0.00176775 13.4339 0ZM10.7471 7.09223V13.2622C10.7471 13.8499 11.4188 14.2163 11.9562 13.9237L17.5984 10.8387C17.7212 10.7718 17.8232 10.6754 17.8941 10.5593C17.965 10.4431 18.0023 10.3113 18.0023 10.1772C18.0023 10.043 17.965 9.91126 17.8941 9.79512C17.8232 9.67899 17.7212 9.5826 17.5984 9.51567L11.9562 6.43198C11.8336 6.36497 11.6946 6.3297 11.553 6.32972C11.4115 6.32975 11.2725 6.36506 11.1499 6.43211C11.0274 6.49916 10.9256 6.59558 10.8549 6.71169C10.7842 6.82779 10.747 6.95948 10.7471 7.0935V7.09223Z" fill="white" />
            </svg></span>
            <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 25 25" fill="none">
              <path d="M12.4673 2.24509C15.7984 2.24509 16.1929 2.2597 17.503 2.31814C18.7205 2.37171 19.3779 2.57626 19.8162 2.74671C20.3958 2.97073 20.8146 3.24345 21.248 3.67689C21.6863 4.11519 21.9542 4.52915 22.1782 5.10868C22.3487 5.54699 22.5532 6.20931 22.6068 7.42196C22.6652 8.73687 22.6798 9.13134 22.6798 12.4576C22.6798 15.7887 22.6652 16.1832 22.6068 17.4932C22.5532 18.7107 22.3487 19.3682 22.1782 19.8065C21.9542 20.386 21.6815 20.8049 21.248 21.2383C20.8097 21.6766 20.3958 21.9445 19.8162 22.1685C19.3779 22.3389 18.7156 22.5435 17.503 22.597C16.188 22.6555 15.7936 22.6701 12.4673 22.6701C9.13622 22.6701 8.74174 22.6555 7.4317 22.597C6.21419 22.5435 5.55673 22.3389 5.11842 22.1685C4.53889 21.9445 4.12006 21.6717 3.68663 21.2383C3.24832 20.8 2.98047 20.386 2.75645 19.8065C2.586 19.3682 2.38145 18.7059 2.32788 17.4932C2.26944 16.1783 2.25483 15.7838 2.25483 12.4576C2.25483 9.12648 2.26944 8.732 2.32788 7.42196C2.38145 6.20444 2.586 5.54699 2.75645 5.10868C2.98047 4.52915 3.25319 4.11032 3.68663 3.67689C4.12493 3.23858 4.53889 2.97073 5.11842 2.74671C5.55673 2.57626 6.21906 2.37171 7.4317 2.31814C8.74174 2.2597 9.13622 2.24509 12.4673 2.24509ZM12.4673 0C9.08265 0 8.65895 0.0146101 7.32943 0.0730508C6.00477 0.131491 5.09407 0.345774 4.30512 0.652587C3.48209 0.97401 2.78567 1.3977 2.09412 2.09412C1.3977 2.78567 0.97401 3.48209 0.652587 4.30026C0.345774 5.09407 0.131491 5.9999 0.0730508 7.32456C0.0146102 8.65895 0 9.08264 0 12.4673C0 15.852 0.0146102 16.2757 0.0730508 17.6052C0.131491 18.9299 0.345774 19.8406 0.652587 20.6295C0.97401 21.4526 1.3977 22.149 2.09412 22.8405C2.78567 23.5321 3.48209 23.9606 4.30026 24.2772C5.09407 24.584 5.9999 24.7983 7.32456 24.8567C8.65408 24.9152 9.07777 24.9298 12.4625 24.9298C15.8471 24.9298 16.2708 24.9152 17.6004 24.8567C18.925 24.7983 19.8357 24.584 20.6247 24.2772C21.4428 23.9606 22.1392 23.5321 22.8308 22.8405C23.5223 22.149 23.9509 21.4526 24.2675 20.6344C24.5743 19.8406 24.7886 18.9348 24.847 17.6101C24.9054 16.2806 24.92 15.8569 24.92 12.4722C24.92 9.08751 24.9054 8.66382 24.847 7.3343C24.7886 6.00964 24.5743 5.09894 24.2675 4.30999C23.9606 3.48209 23.537 2.78567 22.8405 2.09412C22.149 1.40257 21.4526 0.97401 20.6344 0.657457C19.8406 0.350644 18.9348 0.136361 17.6101 0.0779208C16.2757 0.0146102 15.852 0 12.4673 0Z" fill="white" />
              <path d="M12.4671 6.06268C8.93145 6.06268 6.06299 8.93114 6.06299 12.4668C6.06299 16.0025 8.93145 18.8709 12.4671 18.8709C16.0028 18.8709 18.8712 16.0025 18.8712 12.4668C18.8712 8.93114 16.0028 6.06268 12.4671 6.06268ZM12.4671 16.621C10.1733 16.621 8.31295 14.7606 8.31295 12.4668C8.31295 10.173 10.1733 8.31265 12.4671 8.31265C14.7609 8.31265 16.6213 10.173 16.6213 12.4668C16.6213 14.7606 14.7609 16.621 12.4671 16.621Z" fill="white" />
              <path d="M20.6196 5.8098C20.6196 6.63771 19.9475 7.30491 19.1245 7.30491C18.2966 7.30491 17.6294 6.63284 17.6294 5.8098C17.6294 4.9819 18.3015 4.3147 19.1245 4.3147C19.9475 4.3147 20.6196 4.98677 20.6196 5.8098Z" fill="white" />
            </svg></span>
          </div> */}
        </div>
      </div>


    </div>
  );
};

export default ContactForm;