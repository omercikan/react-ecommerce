import React, { useState } from 'react'
import HeaderBrand from './HeaderBrand'
import HeaderSearch from './HeaderSearch'
import HeaderUserTab from './HeaderUserTab'
import ResponsiveHeader from './ResponsiveHeader'

const Header: React.FC = () => {
  const [menu, setMenu] = useState<string>("");

  return (
    <div className='header-container'>
        <div className="header-wrapper flex items-center justify-between">
            <ResponsiveHeader isOpenMenu={menu} setMenu={setMenu} />
            <HeaderBrand />
            <HeaderSearch isOpenMenu={menu} setMenu={setMenu} />
            <HeaderUserTab />
        </div>
    </div>
  )
}

export default Header