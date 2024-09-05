import React, { useState, useEffect } from 'react'
import Lay from '../../components/Layout/Lay'
import AdminMenu from '../../components/Layout/AdminMenu'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])

  //get all product
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get('/api/v1/blog/get-blog')
      setBlogs(data.blogs)
    }
    catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  //lifecycle method
  useEffect(() => {
    getAllBlogs();
    console.log(blogs)
  }, [])
  return (
    <Lay title={"Create-Product - Admin"}>
      <div className="container-fluid p-3">
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu />
          </div>
          <div className='col-md-9'>
            <h1 className='text-center'>All Blogs List</h1>
            <div className='d-flex' style={{flexWrap:'wrap'}}>
              {blogs?.map((p) => (
                <Link 
               key={p._id} to={`/dashboard/admin/blog/${p.slug}`}>
                <div className="card m-2" style={{ width: '18rem' }} key={p._id}>
                  <img src={`/api/v1/blog/blog-photo/${p._id}`} className="card-img-top" alt={p.name} />
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    {p?.description?.length > 30 ? p.description.substring(0, 30) + '...' : p.description}
                    {p?.content?.length > 30 ? p.content.substring(0, 30) + '...' : p.content}
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Lay>
  )
}

export default Blogs