import React, { useState } from 'react';
import Lay from '../../components/Layout/Lay';
import AdminMenu from '../../components/Layout/AdminMenu';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  // Create blog function
  const handleCreate = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!title || !description || !content || !thumbnail) {
      toast.error("All fields are required");
      return;
    }
    try {
      const blogData = new FormData();
      blogData.append('title', title);
      blogData.append('description', description);
      blogData.append('content', content);
      blogData.append('thumbnail', thumbnail);

      const { data } = await axios.post('/api/v1/blog/create-blog', blogData);
      console.log(data)
      if (data?.success) {
        toast.success('Blog Created Successfully');
        navigate("/dashboard/admin/products"); // Ensure this is the correct path
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log('Error creating blog:', error);
      toast.error();
    }
  };

  return (
    <Lay title={"Create Blogs - Admin"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Blogs</h1>
            <div className="m-1 w-75">
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {thumbnail ? thumbnail.name : 'Upload Thumbnail'}
                  <input
                    type="file"
                    name="thumbnail"
                    accept="image/*"
                    onChange={(e) => setThumbnail(e.target.files[0])}
                    required
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {thumbnail && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(thumbnail)}
                      alt="blog_thumbnail"
                      style={{ height: '50vh' }}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={title}
                  placeholder="Write a title"
                  className="form-control"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  value={description}
                  placeholder="Write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  value={content}
                  placeholder="Write content"
                  className="form-control"
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE BLOG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Lay>
  );
};

export default CreateBlog;
