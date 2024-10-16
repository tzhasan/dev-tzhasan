import React from 'react'
import Underline from '../shared-component/underline';
import SocialConnect from '../shared-component/socialConnect';
import Button from '../shared-component/button';


export default function Contact({profile,social_links}) {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log("🚀 ~ handleSubmit ~ name:", name,email,message)
  }
  return (
    <div id="contact" className="bg-white dark:bg-darkmode py-5 md:py-10">
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
              <p className="dark">{profile.address}</p>
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
              <SocialConnect social_links={ social_links} />
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
                    text={"Send Message"}
                    loading={true}
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
