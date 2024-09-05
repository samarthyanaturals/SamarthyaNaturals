import React, { useEffect, useState } from 'react'
import Lay from '../../components/Layout/Lay'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Select, Upload, message } from 'antd'
import { useNavigate,useParams } from 'react-router-dom'

const {Option}=Select

const UpdateBlog = () => {
    const navigate=useNavigate()
    const params=useParams()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [content,setContent]=useState("")
    const [thumbnail,setThumbnail]=useState("")
    const[id,setId]=useState("")
   
//get single blog
   const getSingleBlog=async()=>{
    try{
        const {data}=await axios.get(`/api/v1/blog/get-blog/${params.slug}`)
        setTitle(data.blog.title)
        setId(data.blog._id)
        setDescription(data.blog.description)
        setContent(data.blog.content)
    }
    catch(error){
     console.log(error)
     toast.error("Something went wrong")
    }
   }
   useEffect(()=>{
    getSingleBlog()
    //enlist-disable-next-line
   },[])
    //Update blog function
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const blogData = new FormData();
        blogData.append("title", title);
        blogData.append("description", description);
        blogData.append("content", content);
        thumbnail && blogData.append("thumbnail", thumbnail);
        const { data } =await axios.put(
          `/api/v1/blog/update-blog/${id}`,
          blogData
        );
        if (data?.success) {
  
          toast.success("Product Updated Successfully");
          navigate("/dashboard/admin/blogs");
        } else {
          toast.error(data?.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    };
  
      //delete a blog
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this blog ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `/api/v1/blog/delete-blog/${id}`
      );
      toast.success("Product DEleted Succfully");
      navigate("/dashboard/admin/blogs");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Lay title={"Create-Product - Admin"}>
                <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Update Blogs</h1>
            <div className="m-1 w-75">
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {thumbnail ? thumbnail.title : "Upload Photo"}
                  <input
                    type="file"
                    title="photo"
                    accept="image/*"
                    onChange={(e) => setThumbnail(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {thumbnail ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(thumbnail)}
                      alt="blog_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                ):(<div className="text-center">
                <img
                  src={`/api/v1/blog/blog-photo/${id}`}
                  alt="blog_photo"
                  height={"200px"}
                  className="img img-responsive"
                />
              </div>)}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={title}
                  placeholder="write a title"
                  className="form-control"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={content}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-success" onClick={handleUpdate}>
                  UPDATE PRODUCT
                </button>
              </div>
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  DELETE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Lay>
  )
}

export default UpdateBlog