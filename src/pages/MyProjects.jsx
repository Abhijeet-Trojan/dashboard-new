import React from 'react';
import { BiPlus } from "react-icons/bi";
import Description from '../components/Description';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data/dummy';

const MyProjects = () => {
  return (
    <div className='mt-16 p-2 md:px-10'>
      <div className='flex justify-between'>
        <div className='flex-none'>
          <Description 
            plan="free | " 
            title="My Projects" 
            projectUsed="2 of 3 project used" 
            upgrade="Upgrade"
          />
        </div>
        <div className="">
          <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
            <BiPlus className='mr-2' />
                Create Project
            </button>
        </div>
      </div>
      <div>
        <ProjectCard details={projectData} />
      </div>
    </div>
  )
}

export default MyProjects
