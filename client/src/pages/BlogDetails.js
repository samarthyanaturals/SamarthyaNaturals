import React, { useEffect, useState } from 'react';
import Lay from '../components/Layout/Lay';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const BlogDetails = () => {
  const params = useParams();
  const [blog, setBlog] = useState({});

  // Fetch blog details when slug changes
  useEffect(() => {
    if (params?.slug) getBlog();
  }, [params?.slug]);

  const getBlog = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog/${params.slug}`);
      setBlog(data?.blog);
    } catch (error) {
      console.log(error);
      toast.error('Error while fetching details');
    }
  };

  // Define styles within the component
  const styles = {
    blogWrapper: {
      width: '100%',
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
    thumbnail: {
      width: '80%', // Reduced width for a smaller thumbnail
      height: 'auto',
      borderRadius: '8px',
      margin: '0 auto 20px auto', // Centered with auto margins
      display: 'block', // Ensures it is centered
      border: '1px solid #ddd',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333',
      textAlign: 'center',
    },
    description: {
      fontSize: '1.2rem',
      color: '#555',
      marginBottom: '15px',
      textAlign: 'center',
    },
    content: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#666',
      textAlign: 'justify',
    },
  };

  return (
    <Lay title={"Blog details"}>
      <div style={styles.blogWrapper}>
        {/* Thumbnail at the top */}
        <img
          src={`/api/v1/blog/blog-photo/${blog._id}`}
          alt={blog.title}
          style={styles.thumbnail}
        />

        {/* Title */}
        <h1 style={styles.title}>{blog?.title}</h1>

        {/* Description */}
        <h4 style={styles.description}>{blog?.description}</h4>

        {/* Content */}
        <p style={styles.content}>{blog?.content}</p>
      </div>
    </Lay>
  );
};

export default BlogDetails;
