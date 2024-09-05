import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <div className='text-center'>
<div className="list-group">
    <h4>Admin Panel</h4>
  <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action " aria-current="true">
    Create Categoty
  </NavLink>
  <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">
    Create Product
  </NavLink>
  <NavLink to="/dashboard/admin/create-banner" className="list-group-item list-group-item-action">
    Create Banner
  </NavLink>
  <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action">
   Products
  </NavLink>
  <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-action">
   All Orders
  </NavLink>
  <NavLink to="/dashboard/admin/create-blog" className="list-group-item list-group-item-action">
    Create Blog
  </NavLink>
  <NavLink to="/dashboard/admin/blogs" className="list-group-item list-group-item-action">
   Blogs
  </NavLink>
</div>

    </div>
  )
}

export default AdminMenu