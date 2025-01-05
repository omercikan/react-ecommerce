import React, { Dispatch, SetStateAction } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

type ResponsiveHeaderProps = {
  setMenu: Dispatch<SetStateAction<string>>;
  isOpenMenu: string;
}

const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({isOpenMenu, setMenu}) => {
  const handleMenu = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    setMenu(isOpenMenu == 'active' ? '' : 'active')
    e.stopPropagation();
  }

  return (
    <div className='responsive-header flex gap-5'>
        <RxHamburgerMenu size={28} color='white'/>
        <IoSearchOutline size={28} color='white' onClick={handleMenu}/>
    </div>
  )
}

export default ResponsiveHeader