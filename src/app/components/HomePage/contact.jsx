import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Underline from "../shared-component/underline";
import SocialConnect from "../shared-component/socialConnect";
import Button from "../shared-component/button";
import toast, { Toaster } from "react-hot-toast";
import { motion, Variants, delay } from "framer-motion";
const aboutMeVariant = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2.5,
    },
  },
};
const aboutMeVariant2 = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
      delay:1
    },
  },
};
const aboutMeVariant3 = {
  offscreen: {
    opacity: 0,
    x: 50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
      delay:1
    },
  },
};
export default function Contact({ profile, social_links }) {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send Now");
  const [localTime, setLocalTime] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format both date and time
      const formattedTime = new Intl.DateTimeFormat(navigator.language, {
        year: "numeric",
        month: "long", 
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }).format(now);

      setLocalTime(formattedTime);
    };

    // Update time every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    var templateParams = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
      time: localTime,
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
          setButtonText("Message Sent");
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
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(templateParams),
        }
      );
      if (res.status === 200) {
        toast.success("Added as a Message Successfully!");
        console.log(res);
      } else {
        const errorData = await res.json();
        console.error("Message adding failed:", errorData);
        toast.success("Adding on Message list failed:", errorData);
      }
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };
  return (
    <div id="contact" className="bg-white dark:bg-darkmode py-5 md:py-10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="primary-width  ">
        <motion.div
          className="pb-0 md:pb-5"
          variants={aboutMeVariant}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h1
            className="md:text-4xl text-3xl  dark"
            style={{ fontWeight: 900 }}
          >
            Get intouch
          </h1>
          <Underline />
        </motion.div>
        <div className="flex flex-col-reverse md:flex-row  gap-10 md:gap-5 mt-5 md:mt-0">
          {/*  */}
          <motion.div
            className="w-full md:w-2/6 "
            variants={aboutMeVariant2}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
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
              <SocialConnect social_links={social_links} className={'flex'}/>
            </div>
          </motion.div>
          <div className="w-full md:w-4/6 ">
            <motion.div
              className="relative  pb-14"
              variants={aboutMeVariant3}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
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
                    className="text-black dark:text-white bg-white dark:bg-darkmode w-full h-32 pt-10 focus:border-b-[0.5px]  border-b-[0.5px] border-gray-300 focus:border-black focus:outline-none transition duration-500 pb-2 text-sm mt-2"
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
