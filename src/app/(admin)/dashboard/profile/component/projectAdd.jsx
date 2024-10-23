import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export default function ProjectAdd({setProjects,projects}) {

  // Handle image upload to imgbb and set the image link
 const handleImageChange = async (index, e) => {
   const file = e.target.files[0];
   if (file) {
     const formData = new FormData();
     formData.append("image", file);

     try {
       const response = await fetch(
         `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
         {
           method: "POST",
           body: formData,
         }
       );

       const result = await response.json();

       if (response.ok && result.success) {
         const imageUrl = result.data.display_url;

         // Update the image link in the project object
         const updatedProjects = [...projects];
         updatedProjects[index].img = imageUrl;
         setProjects(updatedProjects);

         // Trigger a success toast notification
         toast.success("Image uploaded successfully!");
       } else {
         throw new Error(result.error.message || "Image upload failed");
       }
     } catch (error) {
       console.error("Image upload failed", error);
       toast.error("Failed to upload image. Please try again.");
     }
   }
 };


  // Handle field changes for title, link, and details
  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = value;
    setProjects(updatedProjects);
  };

  // Add a new empty project form
  const addMoreProject = () => {
    setProjects([...projects, { title: '', link: '', details: '', img: '' }]);
  };
  // Delete a project from the list
  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div className="space-y-5">
      <Toaster position="top-center" reverseOrder={false} />

      <h6 className="text-md dark font-bold">Projects</h6>

      {projects?.map((project, index) => (
        <div key={index} className="flex gap-1 justify-between p-1 bg-zinc-200">
          <div className="w-full flex flex-col">
            <label className="dashboard-input flex items-center gap-2">
              Title:
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={(event) => handleFieldChange(index, event)}
                className="w-full"
              />
            </label>

            <label className="dashboard-input flex items-center gap-2">
              Link:
              <input
                type="text"
                name="link"
                value={project.link}
                onChange={(event) => handleFieldChange(index, event)}
                className="w-full"
              />
            </label>

            <label className="dashboard-input flex items-center gap-2">
              Details:
              <input
                type="text"
                name="details"
                value={project.details}
                onChange={(event) => handleFieldChange(index, event)}
                className="w-full"
              />
            </label>

            <label className="dashboard-input flex items-center gap-2">
              Image:
              <input
                type="file"
                accept="image/*"
                onChange={(event) => handleImageChange(index, event)}
              />
            </label>

            {project.img && (
              <Image
                src={project.img}
                alt="Project"
                width={200}
                height={200}
                className="w-full h-60 object-cover"
              />
            )}
            <button
              className="bg-red-500 hover:bg-red-700 mt-5 text-white py-3 rounded-sm text-xs font-bold"
              onClick={() => deleteProject(index)}
            >
              Delete Project
            </button>
          </div>
        </div>
      ))}

      <button
        className="bg-green-400 hover:bg-green-600 py-1 px-2 rounded-sm text-xs  text-black font-bold"
        onClick={addMoreProject}
      >
        Add More Project
      </button>
    </div>
  );
};
