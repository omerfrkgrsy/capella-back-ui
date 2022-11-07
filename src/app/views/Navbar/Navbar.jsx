import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
         <ul>
            <li>
                 <NavLink to="/">Dashboard</NavLink>
            </li>

            <ul>
                <li>
                    <NavLink to="user-management">User Management</NavLink>
                </li>
            </ul>
        </ul>
        <Outlet />
    </div>
  )
}
