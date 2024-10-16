"use client";
import React, { useEffect, useState } from "react";
import { data } from "../../../../../public/data";
import Image from "next/image";
import ProjectAdd from "./component/projectAdd";
import Button from "@/app/components/shared-component/button";
import { getFullProfile } from "@/app/utils/dataFetch";
import { useSession } from "next-auth/react";
export default function Profile() {
const currentSession = useSession()
  const [fullProfile, setFullProfile] = useState(null);
  const [profileId, setProfileId] = useState('')
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [skills, setSkills] = useState([{ title: "", details: "" }]);
  const [projects, setProjects] = useState([{ title: '', link: '', details: '', img: '' }]);
  
   useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (currentSession?.status === "authenticated" && currentSession?.data?.user?.email) {
          const data = await getFullProfile(currentSession?.data?.user?.email);
          setFullProfile(data.result); 
          setImage1(data?.result?.profile?.img || "");
          setImage2(data?.result?.about_me?.img || "");
          setSkills(data?.result?.skills || []);
          setProjects(data?.result?.projects || []);
          setProfileId(data?.result?._id); 
          
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
   }, [currentSession?.status,currentSession?.data?.user?.email]); 

  useEffect(() => {
    console.log("🚀 ~ Profile ~ profile:", fullProfile);
    console.log("🚀 ~ Profile ~ profileId: str-", profileId?.toString());
    console.log("🚀 ~ Profile ~ profileId:", profileId);
  }, [fullProfile]);

  
  // Skills
  useEffect(() => {
    const skills = data.skills;
    setSkills(skills);
  }, []);
  // Handle input change for each skill
  const handleChange = (index, event) => {
    const updatedSkills = [...skills];
    updatedSkills[index][event.target.name] = event.target.value;
    setSkills(updatedSkills);
  };
  
  // Add a new skill
  const addSkill = () => {
    setSkills([...skills, { title: "", details: "" }]);
  };
  
  // Delete a skill
  const deleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };
  // skill end ⬆️

  // handle image 🖼️ Upload ⬇️
  const handleImageChange1 = async (e) => {
    var file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file); // Create a preview URL
      setImage1(previewUrl); // Set the preview URL to the state
    }

    const formData = new FormData();
    formData.append("image", file); // 'image' is the expected key for imgbb

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setImage1(result?.data?.display_url);
      console.log("🚀 ~ handleImageChange1 ~ result:", result);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageChange2 = async (e) => {
    var file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file); // Create a preview URL
      setImage2(previewUrl); // Set the preview URL to the state
    }

    const formData = new FormData();
    formData.append("image", file); // 'image' is the expected key for imgbb

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setImage2(result?.data?.display_url);
      console.log("🚀 ~ handleImageChange1 ~ result:", result);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  // handle image 🖼️ Upload ⬆️

   const handleSubmit = async (event) => {
  event.preventDefault();
  
  // Creating the profile object to update
  const newProfile = {
    profile: {
      logo: event.target.logo.value,
      name: event.target.name.value,
      profession: event.target.profession.value,
      img: image1,  // From state
      address: event.target.address.value,
      email: event.target.email.value.split(/[;,]/).map((e) => e.trim()),
      phone: event.target.phone.value.split(/[;,]/).map((p) => p.trim()),
      social_links: [
        event.target.facebook.value,
        event.target.linkedin.value,
        event.target.x.value,
        event.target.github.value,
        event.target.youtube.value,
        event.target.instagram.value,
      ],
      copyright: event.target.copyright.value,
    },
    about_me: {
      img: image2,  // From state
      description: event.target.description.value,
    },
    skills,  // Should come from state or handle these values separately
    projects  // Should come from state or handle these values separately
  };

  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/profile/${profileId}`,  // Pass the profile ID
      {
        method: "PATCH",
        body: JSON.stringify(newProfile),
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("🚀 ~ handleSubmit ~ resp:", resp);
    
    if (resp.status === 200) {
      alert("Successfully Updated");
    } else {
      const errorData = await resp.json();
      console.error("Update failed:", errorData);
    }
  } catch (error) {
    console.error("Error during the update:", error);
  }

};

  return (
    <div className="bg-white">
      <form action="" onSubmit={handleSubmit} className="">
        <div className="flex flex-col md:flex-row w-full p-5">
          <div className="w-full md:w-1/2 p-2 md:p-5 space-y-5">
            <label className=" dashboard-input flex items-center gap-2">
              Logo-
              <input defaultValue={fullProfile?.profile?.logo} name="logo" type="text" placeholder="Logo text" />
            </label>
            <label className=" dashboard-input flex items-center gap-2">
              Name-
              <input
                defaultValue={fullProfile?.profile?.name}
                name="name"
                type="text"
                placeholder="Write your name"
                className="w-full"
              />
            </label>
            <label className=" dashboard-input flex items-center gap-2">
              Profession-
              <input
                defaultValue={fullProfile?.profile?.profession}
                name="profession"
                type="text"
                placeholder="Write your name"
                className="w-full"
              />
            </label>

            <label
              htmlFor=""
              className="dashboard-input flex items-center gap-2 whitespace-nowrap"
            >
              About Me-
              <input
                defaultValue={fullProfile?.about_me?.description}
                name="description"
                type="text"
                placeholder="Write Something You"
                className="w-full"
              />
            </label>

            <label
              htmlFor=""
              className="dashboard-input flex items-center gap-2"
            >
              Address-
              <input
                defaultValue={fullProfile?.profile?.address}
                name="address"
                type="text"
                placeholder="Write your address"
                className="w-full"
              />
            </label>
            <label
              htmlFor=""
              className="dashboard-input flex items-center gap-2 whitespace-nowrap"
            >
              Email Address-
              <input
                defaultValue={fullProfile?.profile?.email?.join(', ')} 
                name="email"
                type="text"
                placeholder="Separated by commas"
                className="w-full"
              />
            </label>
            <label
              htmlFor=""
              className="dashboard-input flex items-center gap-2"
            >
              Phone-
              <input
                defaultValue={fullProfile?.profile?.phone?.join(', ')} 
                name="phone"
                type="text"
                placeholder="Separated by commas"
                className="w-full"
              />
            </label>
            <label
              htmlFor=""
              className="dashboard-input flex items-center gap-2"
            >
              Copyright-
              <input
                defaultValue={fullProfile?.profile?.copyright} 
                name="copyright"
                type="text"
                placeholder="Copyright text here"
                className="w-full"
              />
            </label>

            <div className="flex gap-5 ">
              <div className="flex flex-col items-center space-y-2">
                <div className="border-2 border-dotted border-zinc-300 rounded-xl bg-slate-100 w-44 h-44 p-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange1}
                    className="hidden"
                    id="imageUpload1"
                  />
                  <label
                    htmlFor="imageUpload1"
                    className="cursor-pointer w-full h-full block"
                  >
                    <Image
                      // src={"https://i.ibb.co.com/p0WxN1N/file.png"}
                      src={image1 ? image1 : "/assets/images/empty.png"}
                      width={176} // 44 * 4 = 176 px (equivalent to w-44)
                      height={176} // same as width to ensure it's a square
                      alt="Banner image"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </label>
                </div>
                <span>Upload Banner Image</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="border-2 border-dotted border-zinc-300 rounded-xl bg-slate-100 w-44 h-44 p-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange2}
                    className="hidden"
                    id="imageUpload2"
                  />
                  <label
                    htmlFor="imageUpload2"
                    className="cursor-pointer w-full h-full block"
                  >
                    <Image
                      // src={"https://i.ibb.co.com/p0WxN1N/file.png"}
                      src={image2 ? image2 : "/assets/images/empty.png"}
                      width={176} // 44 * 4 = 176 px (equivalent to w-44)
                      height={176} // same as width to ensure it's a square
                      alt="Banner image"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </label>
                </div>
                <span>Upload Profile Image</span>
              </div>
            </div>
            <div className=" space-y-5">
              <h6 className="text-md text-black font-bold">Skills</h6>
              <>
                {skills?.map((skill, index) => (
                  <div
                    key={index}
                    className=" flex gap-1 justify-between  p-1  bg-zinc-200"
                  >
                    <div className="w-full flex flex-col ">
                      <input
                        type="text"
                        name="title"
                        placeholder="Skill Title"
                        value={skill.title}
                        onChange={(event) => handleChange(index, event)}
                        className="dashboard-input"
                      />
                      <input
                        type="text"
                        name="details"
                        placeholder="Skill Details"
                        value={skill.description}
                        onChange={(event) => handleChange(index, event)}
                        className="dashboard-input"
                      />
                    </div>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-sm text-xs"
                      type="button"
                      onClick={() => deleteSkill(index)}
                    >
                      Delete Skill
                    </button>
                  </div>
                ))}
                <button
                  className="bg-green-400 hover:bg-green-600 py-1 px-2 rounded-sm text-xs text-black font-bold"
                  type="button"
                  onClick={addSkill}
                >
                  Add Skill
                </button>
              </>
            </div>
          </div>
          {/* Second Part / right */}
          <div className="w-full md:w-1/2 p-2 md:p-5 space-y-5">
            <div>
              <h6 className="text-md text-black font-bold">Social Links</h6>
              <div className="grid grid-cols-2 gap-1">
                <input
                  defaultValue={fullProfile?.profile?.social_links[0]} 
                  name="facebook"
                  type="text"
                  placeholder="Facebook Link"
                  className="dashboard-input"
                />
                <input
                  defaultValue={fullProfile?.profile?.social_links[1]} 
                  name="linkedin"
                  type="text"
                  placeholder="linkedIn Link"
                  className="dashboard-input"
                />
                <input
                  defaultValue={fullProfile?.profile?.social_links[2]} 
                  name="x"
                  type="text"
                  placeholder="X Link"
                  className="dashboard-input"
                />
                <input
                  defaultValue={fullProfile?.profile?.social_links[3]} 
                  name="github"
                  type="text"
                  placeholder="Github Link"
                  className="dashboard-input"
                />
                <input
                  defaultValue={fullProfile?.profile?.social_links[4]} 
                  name="youtube"
                  type="text"
                  placeholder="Youtube Link"
                  className="dashboard-input"
                />
                <input
                  defaultValue={fullProfile?.profile?.social_links[5]} 
                  name="instagram"
                  type="text"
                  placeholder="Instagram Link"
                  className="dashboard-input"
                />
              </div>
            </div>
            <ProjectAdd setProjects={setProjects} projects={projects} />
          </div>
        </div>
        <div className="w-full">
          <Button onSubmit={handleSubmit} text={"Save"} />
        </div>
      </form>
    </div>
  );
}






// const handleSubmit = (event) => {
//     event.preventDefault();

//     // Email and Phone
//     const emailString = event.target.email.value;
//     const phoneString = event.target.phone.value;
//     //
//     // Social links
//     const facebookLink = event.target.facebook.value;
//     const linkedinLink = event.target.linkedin.value;
//     const xLink = event.target.x.value;
//     const githubLink = event.target.github.value;
//     const youtubeLink = event.target.youtube.value;
//     const instagramLink = event.target.instagram.value;
//     //

//     const logo = event.target.logo.value;
//     const name = event.target.name.value;
//     const profession = event.target.profession.value;
//     const description = event.target.description.value;
//     const address = event.target.address.value;
//     const copyright = event.target.copyright.value;
//     const emailArray = emailString
//       .split(/[;,]/)
//       .map((email) => email.trim())
//       .filter((email) => email);
//     const phoneArray = phoneString
//       .split(/[;,]/)
//       .map((phone) => phone.trim())
//       .filter((phone) => phone);
//     const social_links = [
//       facebookLink,
//       linkedinLink,
//       xLink,
//       githubLink,
//       youtubeLink,
//       instagramLink,
//     ];
//     const profile = {
//       logo: logo,
//       name: name,
//       profession: profession,
//       About_Me: description,
//       address: address,
//       email: emailArray,
//       phone: phoneArray,
//       copyright: copyright,
//       bannerImage: image1,
//       ProfileImage: image2,
//       socialLinks: social_links,
//       skills,
//       projects


//     };
//     console.log("🚀 ~ handleSubmit ~ profile:", profile);
//   };