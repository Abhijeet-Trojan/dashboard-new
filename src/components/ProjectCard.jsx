import React, { useState } from 'react';
import Dropdown from './Dropdown';


const ProjectCard = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortState, setSortState] = useState("none");
    // console.log(dataSort.sort((a, b) => (a.ProjectTitle > b.ProjectTitle) ? 1 : -1), "A - Z");
    // console.log(dataSort.sort((a, b) => (a.ProjectTitle < b.ProjectTitle) ? 1 : -1), "Z - A");
    // console.log(dataSort.sort((a, b) => new Date(Date.parse(b.CreatedTime)) - 
    //  new Date(Date.parse(a.CreatedTime))), "Recent Created");
    // console.log(dataSort.sort((a, b) => new Date(Date.parse(a.CreatedTime)) - 
    //  new Date(Date.parse(b.CreatedTime))), "Last Created");

    const sortMethods = {
        none: { method: (a, b) => null },
        asc: { method: ((a, b) => (a.ProjectTitle > b.ProjectTitle) ? 1 : -1) },
        dsc: { method: ((a, b) => (a.ProjectTitle < b.ProjectTitle) ? 1 : -1) },
        recentCreated: { method: ((a, b) => new Date(Date.parse(b.CreatedTime)) - new Date(Date.parse(a.CreatedTime))) },
        lastCreated: { method: ((a, b) => new Date(Date.parse(a.CreatedTime)) - new Date(Date.parse(b.CreatedTime))) },
        lastEdited: { method: ((a, b) => {
            let aMilliseconds, bMilliseconds;
            if (a.LastEdited.includes('days')) {
              aMilliseconds = parseInt(a.LastEdited.split(' ')[0], 10) * 24 * 60 * 60 * 1000;
            } else {
              aMilliseconds = parseInt(a.LastEdited.split(' ')[0], 10) * 60 * 60 * 1000;
            }
            if (b.LastEdited.includes('days')) {
              bMilliseconds = parseInt(b.LastEdited.split(' ')[0], 10) * 24 * 60 * 60 * 1000;
            } else {
              bMilliseconds = parseInt(b.LastEdited.split(' ')[0], 10) * 60 * 60 * 1000;
            }
            return aMilliseconds - bMilliseconds;
        }) }
    }

    // console.log(
    //     dataSort.sort((a, b) => {
    //         let aMilliseconds, bMilliseconds;
    //         if (a.LastEdited.includes('days')) {
    //           aMilliseconds = parseInt(a.LastEdited.split(' ')[0], 10) * 24 * 60 * 60 * 1000;
    //         } else {
    //           aMilliseconds = parseInt(a.LastEdited.split(' ')[0], 10) * 60 * 60 * 1000;
    //         }
    //         if (b.LastEdited.includes('days')) {
    //           bMilliseconds = parseInt(b.LastEdited.split(' ')[0], 10) * 24 * 60 * 60 * 1000;
    //         } else {
    //           bMilliseconds = parseInt(b.LastEdited.split(' ')[0], 10) * 60 * 60 * 1000;
    //         }
    //         return aMilliseconds - bMilliseconds;
    //     }), "Last Edited"
    // );
  return (
    <>
    <div className='mb-8'>
        <div className='flex justify-between items-center'>
        <div className="relative w-1/4 flex-none">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required 
            onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        {/* Sort selection */}
        <div className="p-2 cursor-pointer">
            <form action='#'>
                <label htmlFor='sort'></label>
                <select name='sort' id='sort' defaultValue={'DEFAULT'} className='p-2 cursor-pointer' 
                    onChange={(e) => setSortState(e.target.value)}
                >
                    <option className='px-2 py-2 h-8' value="DEFAULT" disabled>None</option>
                    <option className='px-2 py-2 h-8' value='lastEdited'>Last Edited</option>
                    <option className='px-2 py-2 h-8' value='recentCreated'>Recent Created</option>
                    <option className='px-2 py-2 h-8' value='lastCreated'>Last Created</option>
                    <option className='px-2 py-2 h-8' value='asc'>A - Z</option>
                    <option className='px-2 py-2 h-8' value='dsc'>Z - A</option>
                </select>
            </form>
        </div>
        </div>
    </div>
    {props.details.filter((value) => {
        if(searchTerm === ""){
            return value;
        } else if (value.ProjectTitle.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
        } else if (value.LastEdited.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
        } else if (value.CreatedTime.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
        }
    }).sort(sortMethods[sortState].method)
    .map((value, index) => (
    <div className='flex p-2 items-center' key={index}>
        <div className='flex-none mr-4'>
            <img className='w-16 h-16' src={value.ProjectImage} alt='project'/>
        </div>
        <div className='flex-auto'>
            <div className='text-md'>
                <p className="text-gray-900 font-medium leading-none mb-4">
                  {value.ProjectTitle}
                </p>
            </div>
            <div className='flex flex-auto'>
                <p className="text-gray-400 text-xs">Edited {value.LastEdited} ago</p>
                <p className="text-gray-400 text-xs ml-8">Created on {value.CreatedTime}</p>
            </div>
        </div>
        <div className='order-last text-center'>
            <Dropdown />
        </div>
    </div>
    ))}
    </>
  )
}

export default ProjectCard
