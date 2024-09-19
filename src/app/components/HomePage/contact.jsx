import React from 'react'
import Underline from '../shared-component/underline';
import SocialConnect from '../shared-component/socialConnect';

export default function Contact() {
  return (
    <div className="bg-white dark:bg-darkmode py-5 md:py-10">
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
              <p className="dark">100 Main St, Blacktown NSW 2148, Australia</p>
              <p className="dark">support@bold.com, info@youremail.com</p>
              <p className="dark">+256-4516-556, +(257) 56812749</p>
              <SocialConnect/>
            </div>
          </div>
          <div className="w-full md:w-4/6 ">
            {" "}
            <div>
              <form action="">
                <div>
                  <div className=''>
                  <input type="name" className='bg-white dark:bg-darkmode focus:border-b-1 focus:border-yellow-300 border-b-2 border-yellow-400 focus:outline-none' placeholder='Name here*'/>
                  </div>
                </div>
                {/* <textarea name="message"></textarea> */}
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
