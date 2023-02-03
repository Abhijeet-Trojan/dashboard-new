import React from 'react'

const Description = ({ plan, title, projectUsed, upgrade }) => {
  return (
    <div className='mb-10'>
        <p className='text-3xl font-extrabold tracking-tight text-slate-900'>
            {title}
        </p>
        <div className='flex mt-2'>
            <p className='text-sm'>{plan}</p>
            <p className='text-sm ml-1'>{projectUsed}</p>
            <p className={`ml-6 text-sm`}>{upgrade}</p>
        </div>

    </div>
  )
}

export default Description
