"use client";
import React, { useEffect, useState } from "react";
import { data } from "../../../../../public/data";

export default function Profile() {
  const [skills, setSkills] = useState([{ title: "", details: "" }]);
  const [projects, setProjects] = useState([{ title: "",link:"", img:"", details: "" }]);
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
  // Projects start ⬇️
  useEffect(() => {
    const projects = data.projects;
    setProjects(projects);
  }, []);
  // Handle input change for each project
  const handleProjectChange = (index, event) => {
    const updatedProjects = [...projects];
    updatedProjects[index][event.target.name] = event.target.value;
    setProjects(updatedProjects);
  };

  // Add a new project
  const addProject = () => {
    setProjects([...projects, { title: "", link: "", img: "", details: "" }]);
  };

  // Delete a skill
  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
       setProjects(updatedProjects);

  };
  // Project end ⬆️
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Email and Phone
    const emailString = event.target.email.value;
    const phoneString = event.target.phone.value;
    //
    // Social links
    const facebookLink = event.target.facebook.value;
    const linkedinLink = event.target.linkedin.value;
    const xLink = event.target.x.value;
    const githubLink = event.target.github.value;
    const youtubeLink = event.target.youtube.value;
    const instagramLink = event.target.instagram.value;
    //

    const logo = event.target.logo.value;
    const name = event.target.name.value;
    const emailArray = emailString
      .split(/[;,]/)
      .map((email) => email.trim())
      .filter((email) => email);
    const phoneArray = phoneString
      .split(/[;,]/)
      .map((phone) => phone.trim())
      .filter((phone) => phone);
    const social_links = [
      facebookLink,
      linkedinLink,
      xLink,
      githubLink,
      youtubeLink,
      instagramLink,
    ];
    console.log("🚀 ~ handleSubmit ~ emailsArray:", skills);
  };

  let fileName;
  return (
    <div className="bg-white">
      <form action="" onSubmit={handleSubmit} className="">
        <div className="flex flex-col md:flex-row w-full p-5">
          <div className="w-full md:w-1/2 p-2 md:p-5 space-y-5">
            <label className=" dashboard-input flex items-center gap-2">
              Logo
              <input name="logo" type="text" placeholder="Logo text" />
            </label>
            <label className=" dashboard-input flex items-center gap-2">
              Name
              <input
                name="name"
                type="text"
                placeholder="Write your name"
                className=""
              />
            </label>
            <div className="w-full border pl-4 py-3 border-zinc-300">
              <label
                htmlFor="file-upload"
                className="   rounded-sm w-full bg-white text-gray-600 cursor-pointer flex items-center gap-2"
              >
                {fileName ? fileName : "Upload your banner image 🖼️"}
                <input
                  id="file-upload"
                  name="banner-image"
                  type="file"
                  className="hidden"
                  onChange={""}
                />
              </label>
            </div>
            <label
              htmlFor=""
              className="dashboard-input flex items-center gap-2"
            >
              About Me
              <input
                name="description"
                type="text"
                placeholder="Write Something You"
                className=""
              />
            </label>
            <div className="w-full border pl-4 py-3 border-zinc-300">
              <label
                htmlFor="file-upload"
                className="   rounded-sm w-full bg-white text-gray-600 cursor-pointer "
              >
                {fileName ? fileName : "Upload your Profile image 🖼️"}
              </label>
              <input
                id="file-upload"
                name="profile-image"
                type="file"
                className="hidden"
                onChange={""}
              />
            </div>
            <label
              htmlFor=""
              className="dashboard-input flex items-center gap-2"
            >
              Address
              <input
                name="address"
                type="text"
                placeholder="Write your address"
              />
            </label>
            <label
              htmlFor=""
              className="dashboard-input flex items-center gap-2"
            >
              Email Address
              <input
                name="email"
                type="text"
                placeholder="Separated by commas"
              />
            </label>
            <label
              htmlFor=""
              className="dashboard-input flex items-center gap-2"
            >
              Phone
              <input
                name="phone"
                type="text"
                placeholder="Separated by commas"
              />
            </label>
            <label
              htmlFor=""
              className="dashboard-input flex items-center gap-2"
            >
              Copyright
              <input
                name="copyright"
                type="text"
                placeholder="Copyright text here"
              />
            </label>
            <div className="space-y-5">
              <h6 className="text-md text-black font-bold">Projects</h6>
              <>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className=" flex gap-1 justify-between  p-1  bg-zinc-200"
                  >
                    <div className="w-full flex flex-col ">
                      <label
                        htmlFor=""
                        className="  dashboard-input rounded-sm w-full bg-white text-gray-600 cursor-pointer "
                      >
                        Title
                        <input
                          type="text"
                          name="title"
                          placeholder="Project Title"
                          value={project.title}
                          onChange={(event) =>
                            handleProjectChange(index, event)
                          }
                        />
                      </label>
                      <input
                        type="text"
                        name="details"
                        placeholder="Skill Details"
                        value={project.details}
                        onChange={(event) => handleProjectChange(index, event)}
                        className="dashboard-input"
                      />
                    </div>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-sm text-xs font-bold"
                      type="button"
                      onClick={() => deleteProject(index)}
                    >
                      Delete Project
                    </button>
                  </div>
                ))}
                <button
                  className="bg-green-400 hover:bg-green-600 py-1 px-2 rounded-sm text-xs  text-black font-bold"
                  type="button"
                  onClick={addProject}
                >
                  Add Project
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
                  name="facebook"
                  type="text"
                  placeholder="Facebook Link"
                  className="dashboard-input"
                />
                <input
                  name="linkedin"
                  type="text"
                  placeholder="linkedIn Link"
                  className="dashboard-input"
                />
                <input
                  name="x"
                  type="text"
                  placeholder="X Link"
                  className="dashboard-input"
                />
                <input
                  name="github"
                  type="text"
                  placeholder="Github Link"
                  className="dashboard-input"
                />
                <input
                  name="youtube"
                  type="text"
                  placeholder="Youtube Link"
                  className="dashboard-input"
                />
                <input
                  name="instagram"
                  type="text"
                  placeholder="Instagram Link"
                  className="dashboard-input"
                />
              </div>
            </div>
            <div className=" space-y-5">
              <h6>Skills</h6>
              <>
                {skills.map((skill, index) => (
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
                        value={skill.details}
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
        </div>
        <button onSubmit={handleSubmit} className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
