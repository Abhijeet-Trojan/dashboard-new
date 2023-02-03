import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import avatar from '../data/avatar.jpg';
import { links } from '../data/dummy';
import prImage from '../data/image-32.png';

const Sidebar = () => {
  const activeLink = 'flex items-center gap-5 pt-3 pb-2.5 text-gray-800 text-sm pl-4';
  const normalLink = 'flex items-center gap-5 pt-3 pb-2.5 text-sm text-gray-700 hover:bg-light-gray pl-4';

  const { activeMenu, setActiveMenu, screenSize, } = useStateContext();

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false);
    }
  }
  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-gray-200">
      {activeMenu && (
        <>
        <div className='flex justify-between items-center'>
          <Link 
            to={'/'} 
            onClick={handleCloseSidebar} 
            className="items-center gap-3 ml-4 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900"
          >
            <span>VSPAGY</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button
              type="button"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray mt-5 pl-4 border-b border-gray-300 pb-4">
          <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          />
          <p>
            <span className="text-gray-600 text-14">Hi,</span>{' '}
            <span className="text-gray-600 font-bold ml-1 text-14">
              Michael
            </span>
          </p>
        </div>
        <div className="mt-10">
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-600 text-sm text-semibold ml-6 m-3 mt-4 uppercase'>
              { item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSidebar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#f3f6f4' : ''
                  })}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <img className='' src={prImage} alt='project-icon' />
                  <span className="capitalize font-semibold">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>
      )}
    </div>
  )
}

export default Sidebar
