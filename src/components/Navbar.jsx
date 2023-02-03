import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { useStateContext } from '../context/ContextProvider';



const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);


const Navbar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    // To check what is the screen size when size changes
    window.addEventListener('resize', handleResize);

    // To check what is the screen size initially
    handleResize();

    // To remove addEventListener
    return () => window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <NavButton 
        title="Menu"
        customFunc={handleActiveMenu}
        color={'#414141'}
        icon={<AiOutlineMenu />}
      />
    </div>
  )
}

export default Navbar
