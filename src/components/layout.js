import React from "react"
import {main} from '../styles/layout.module.scss'


const Layout = ({ children }) => {
  

  return (
    <div className={main}>
      <main>{children}</main>
    </div>
  )
}


export default Layout
