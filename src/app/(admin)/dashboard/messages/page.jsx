"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/messages`
        );
        const data = await res.json();
        setMessages(data?.result);
        setLoading(false);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-10 flex flex-col space-y-10">
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
  }
  if (messages.length == 0 && status === "authenticated") {
    return (
      <div className="md:p-10 p-2 ">
        <div className="mockup-code">
          <pre data-prefix="1">
            <code>loading all messages</code>
          </pre>
          <pre data-prefix="2">
            <code>searching...</code>
          </pre>
          <pre data-prefix="3" className="bg-warning text-warning-content">
            <code>Not Found any Messages!</code>
          </pre>
        </div>
      </div>
    );
  }
  return (
    <div className="md:p-10 p-2">
      {session?.user?.email === `${process.env.NEXT_PUBLIC_DEFAULT_MAIL}` &&
      status === "authenticated"
        ? messages.map((message, index) => {
            return (
              <div
                key={index}
                className="chat chat-start dark:text-white text-black mb-5"
              >
                <div className="chat-header">
                  {message?.name}
                  <time className="text-xs opacity-80 ml-2">
                    {message?.time}
                  </time>
                </div>
                <div className="whitespace-pre-wrap chat-bubble bg-slate-600 dark:bg-slate-300  dark:text-black text-white">
                  {message?.message}
                </div>
                <div className="chat-footer opacity-80">{message?.email}</div>
              </div>
            );
          })
        : demoMessages.map((message, index) => {
            return (
              <div
                key={index}
                className="chat chat-start dark:text-white text-black mb-5"
              >
                <div className="chat-header">
                  {message?.name}
                  <time className="text-xs opacity-80 ml-2">
                    {message?.time}
                  </time>
                </div>
                <div className="chat-bubble bg-slate-600 dark:bg-slate-300  dark:text-black text-white whitespace-pre-wrap">
                  {message?.message}
                </div>
                <div className="chat-footer opacity-80">{message?.email}</div>
              </div>
            );
          })}
    </div>
  );
}

const demoMessages = [
  {
    name: "Tazbiul",
    email: "tazbiul@gmail.com",
    message: `Subject: Interested in Collaborating on a Web Development Project
Dear Md Tajbiul,

I came across your portfolio and was really impressed with your skills and the quality of your work, particularly in the MERN stack. I am currently looking for a web developer to help me with a project that involves building a custom e-commerce platform. The platform will require a user-friendly design, seamless integration with a payment gateway, and a robust backend for handling orders, inventory, and customer accounts.

Given your expertise in MongoDB, Express.js, React, and Node.js, I believe you would be a great fit for this project. We are looking for someone who can not only build the technical infrastructure but also advise on best practices for scaling and optimizing performance. If possible, I'd love to schedule a call to discuss the details further, including timelines, budget, and your availability.

Please let me know if you're available for a quick chat sometime this week. I look forward to the possibility of working together!

Best regards,
[Client Name]
[Client's Company or Project]
[Client's Contact Information]`,
    time: "20 October 2024 at 1:00:39 am",
  },
  {
    name: "Tazbiul2002",
    email: "tazbiul2002@gmail.com",
    message: `Subject: Interested in Collaborating on a Web Development Project
Dear Md Tajbiul,

I came across your portfolio and was really impressed with your skills and the quality of your work, particularly in the MERN stack. I am currently looking for a web developer to help me with a project that involves building a custom e-commerce platform. The platform will require a user-friendly design, seamless integration with a payment gateway, and a robust backend for handling orders, inventory, and customer accounts.

Given your expertise in MongoDB, Express.js, React, and Node.js

Please let me know if you're available for a quick chat sometime this week. I look forward to the possibility of working together!

Best regards,
[Client Name]
[Client's Company or Project]
[Client's Contact Information]`,
    time: "20 October 2024 at 1:00:39 am",
  },
  {
    name: "Tazbiul3554",
    email: "tazbiul3554@gmail.com",
    message: `Subject: Interested in Collaborating on a Web Development Project
Dear Md Tajbiul,

I came across your portfolio and was really impressed with your skills and the quality of your work, particularly in the MERN stack. I am currently looking for a web developer to help me with a project that involves building a custom e-commerce platform. The platform will require a user-friendly design, seamless integration with a payment gateway, and a robust backend for handling orders, inventory, and customer accounts.

Given your expertise in MongoDB, Express.js, React, and Node.js, I believe you would be a great fit for this project. We are looking for someone who can not only build the technical infrastructure but also advise on best practices for scaling and optimizing performance. If possible, I'd love to schedule a call to discuss the details further, including timelines, budget, and your availability.

Please let me know if you're available for a quick chat sometime this week. I look forward to the possibility of working together!

Best regards,
[Client Name]
[Client's Company or Project]
[Client's Contact Information]`,
    time: "20 October 2024 at 1:00:39 am",
  },
  {
    name: "Tazbiul6542",
    email: "tazbiul6542@gmail.com",
    message: `Subject: Interested in Collaborating on a Web Development Project
Dear Md Tajbiul,

I came across your portfolio and was really impressed with your skills and the quality of your work, particularly in the MERN stack. I am currently looking for a web developer to help me with a project that involves building a custom e-commerce platform. The platform will require a user-friendly design, seamless integration with a payment gateway.
 I believe you would be a great fit for this project. We are looking for someone who can not only build the technical infrastructure but also advise on best practices for scaling and optimizing performance. If possible, I'd love to schedule a call to discuss the details further, including timelines, budget, and your availability.

Please let me know if you're available for a quick chat sometime this week. I look forward to the possibility of working together!

Best regards,
[Client Name]
[Client's Company or Project]
[Client's Contact Information]`,
    time: "20 October 2024 at 1:00:39 am",
  },
  {
    name: "Tazbiul87562",
    email: "tazbiul87562@gmail.com",
    message:
      "lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip",
    time: "20 October 2024 at 1:00:39 am",
  },
];
