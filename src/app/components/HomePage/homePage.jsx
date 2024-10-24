"use client";
import React, { useContext } from "react";
import Banner from "./banner";
import AboutMe from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "../shared-component/footer";
import Loading from "@/app/loading";
import Button from "../shared-component/button";
import { profileContext } from "@/app/provider/profileProvider";

export default function HomePage() {
  const { profile, setProfile, loading, setLoading } =
  useContext(profileContext);
  
  console.log("🚀 ~ HomePage ~ profile:", profile)

  if (loading) {
    return <Loading />;
  }

  // If no data is available (e.g., failed to fetch), show an error or placeholder
  if (!profile) {
    return <div>No profile data available</div>;
  }

  return (
    <div>
      <Banner profile={profile?.profile} />
      <AboutMe
        about_me={profile?.about_me}
        skills={profile?.skills}
        social_links={profile?.profile?.social_links}
      />
      <Projects projects={profile?.projects} />
      <Contact
        profile={profile?.profile}
        social_links={profile?.profile?.social_links}
      />
      <Footer profile={profile?.profile} />
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white text-black rounded-sm">
          <h3 className="font-bold text-lg">Some instructions!</h3>
          <p className="py-4">
            1. To sign in,{" "}
            <a
              href={`https://tzhasan.vercel.app/signin`}
              className="text-blue-500 font-bold"
            >
              click here!
            </a>{" "}
            <br />
            2. After signing in, you will get a dashboard with a default
            profile.
            <br /> 3. You can set your information and images to personalize and
            experience the website. Don&#39;t worry, your profile will be saved
            in the database.
            <br /> 4. In the dashboard, messages are only a demo version. The
            admin can see the actual messages sent by users from the contact
            form.
            <br /> 5. You can&#39;t share your profile with others. Only the
            admin&#39;s profile will be visible to all, and if you sign out, you
            will see the admin&#39;s profile.
          </p>

          <p className="py-4">
            ১. সাইন ইন করতে{" "}
            <a
              href={`https://tzhasan.vercel.app/signin`}
              className="text-blue-500 font-bold"
            >
              এখানে ক্লিক করুন!
            </a>{" "}
            <br />
            ২. সাইন ইন করার পরে আপনি একটি ডিফল্ট প্রোফাইল সহ ড্যাশবোর্ড পাবেন।
            <br /> ৩. আপনি আপনার তথ্য এবং ছবি সেট করতে পারেন যাতে ওয়েবসাইটটি
            দেখতে এবং অভিজ্ঞতা নিতে পারেন। চিন্তা করবেন না, আপনার প্রোফাইল
            ডাটাবেসে সংরক্ষিত থাকবে।
            <br /> ৪. ড্যাশবোর্ডে মেসেজ শুধুমাত্র ডেমো ভার্সন। অ্যাডমিন
            কন্ট্যাক্ট আস ফর্ম থেকে ব্যবহারকারীদের পাঠানো আসল বার্তা দেখতে
            পারবেন।
            <br /> ৫. আপনি আপনার প্রোফাইল অন্যদের সাথে শেয়ার করতে পারবেন না,
            শুধুমাত্র অ্যাডমিনের প্রোফাইল সকলের কাছে দৃশ্যমান হবে এবং যদি আপনি
            সাইন আউট করেন, আপনি অ্যাডমিনের প্রোফাইল দেখতে পাবেন।
          </p>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Button text={"Close"} />
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
