import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure axios is imported
import '../css/blog.css';
import Lay from '../components/Layout/Lay';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for error notifications
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  // Function to get all blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get('/api/v1/blog/get-blog');
      setBlogs(data.blogs);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <Lay>
      <div className='full'>
        <div className='background'>
          <h1>Welcome to the blog page</h1>
        </div>
        <div className='blogs' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '4%', padding: 10 }}>
          {blogs.map((blog) => (
            <div className="card" key={blog._id}>
              <div className="image" style={{height:'50%',width:'100%'}}>
                {/* Add a default image or use a conditional to check for image URL */}
                <img
                  src={`/api/v1/blog/blog-photo/${blog._id}`}
                  alt={blog.title}
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
              <div className="content">
                <a href="#">
                  <span className="title">{blog.title}</span>
                </a>
                <p className="desc">
                  {/* Safe check for blog.description */}
                  {blog.description ? (blog.description.length > 30 ? blog.description.substring(0, 30) + '...' : blog.description) : 'No description available'}
                </p>
                <p className="desc">
                  {/* Safe check for blog.description */}
                  {blog.content ? (blog.content.length > 30 ? blog.content.substring(0, 30) + '...' : blog.content) : 'No description available'}
                </p>
                <Link className="action" to={`/blog/${blog.slug}`}>
                  Find out more
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Lay>
  );
};

export default Blog;
