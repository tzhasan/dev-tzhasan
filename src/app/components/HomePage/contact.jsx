import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import Underline from '../shared-component/underline';
import SocialConnect from '../shared-component/socialConnect';
import Button from '../shared-component/button';
import toast, { Toaster } from 'react-hot-toast';


export default function Contact({profile,social_links}) {
  const [loading, setLoading] = useState(false)
  const [buttonText, setButtonText] = useState('Send Message')
  const handleSubmit = (event) => {
    event.preventDefault();
    var templateParams = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };
setLoading(true);
    toast.promise(
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ),
      {
        loading: "Sending...",
        success: () => {
          setLoading(false);
          setButtonText('Sended')
          event.target.reset();
          return <b>Email sent successfully!</b>;
        },
        error: () => {
          setLoading(false);
          setButtonText("Try Again");
          return <b>Could not send email. Please try again.</b>;
        },
      }
    );
  }
  return (
    <div id="contact" className="bg-white dark:bg-darkmode py-5 md:py-10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="primary-width  ">
        <div className="mb-5 pb-10">
          <h1 className="md:text-4xl text-3xl dark" style={{ fontWeight: 900 }}>
            Get In Touch
          </h1>
          <Underline />
        </div>
        <div className="flex flex-col-reverse md:flex-row  gap-5">
          <div className="w-full md:w-2/6 ">
            <div className="space-y-4">
              <p className="dark">{profile?.address}</p>
              <div className="flex gap-2">
                {profile &&
                  profile?.email.map((e, index) => (
                    <p className="dark" key={index}>
                      {e}
                    </p>
                  ))}
              </div>
              <div className="flex gap-2">
                {profile &&
                  profile?.phone?.map((p, index) => (
                    <p className="dark" key={index}>
                      {p}
                    </p>
                  ))}
              </div>
              <SocialConnect social_links={social_links} />
            </div>
          </div>
          <div className="w-full md:w-4/6 ">
            {" "}
            <div className="relative  pb-14">
              <form onSubmit={handleSubmit} action="">
                <div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <input
                      name="name"
                      type="text"
                      className="text-black dark:text-white bg-white dark:bg-darkmode w-full focus:border-b-[0.5px]  border-b-[0.5px] border-gray-300 focus:border-black focus:outline-none transition duration-500 pb-2 text-sm"
                      placeholder="Name here*"
                    />
                    <input
                      name="email"
                      type="email"
                      className="text-black dark:text-white bg-white dark:bg-darkmode w-full focus:border-b-[0.5px]  border-b-[0.5px] border-gray-300 focus:border-black focus:outline-none transition duration-500 pb-2 text-sm"
                      placeholder="Email here*"
                    />
                  </div>
                  <textarea
                    name="message"
                    type="text"
                    className="text-black dark:text-white bg-white dark:bg-darkmode w-full h-32 pt-10 focus:border-b-[0.5px]  border-b-[0.5px] border-gray-300 focus:border-black focus:outline-none transition duration-500 pb-2 text-sm"
                    placeholder="Message here*"
                  />
                </div>
                <div className="absolute bottom-0 right-0">
                  <Button
                    type={"submit"}
                    onSubmit={handleSubmit}
                    text={buttonText}
                    loading={loading}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
