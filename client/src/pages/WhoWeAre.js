import React from 'react';
import Lay from '../components/Layout/Lay';

const WhoWeAre = () => {
  // Define styles as a JavaScript object with unique names
  const sectionStyles = {
    sectionWrapper: {
      padding: '5%',
      backgroundColor: '#e9f5e9', // Light green background for a natural feel
      borderRadius: '8px', // Rounded corners
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      fontFamily: 'Arial, sans-serif', // Clean font
      color: '#333', // Dark text for readability
      lineHeight: '1.6', // Improved line spacing
    },
    sectionHeading: {
      fontSize: '2.5rem', // Large heading size
      color: '#2c3e50', // Dark blue color for the heading
      marginBottom: '20px', // Space below the heading
      textAlign: 'center', // Centered heading
      textTransform: 'uppercase', // Uppercase letters
    },
    sectionParagraph: {
      fontSize: '1.2rem', // Slightly larger text for body
      marginBottom: '20px', // Space below each paragraph
      textAlign: 'justify', // Justified text for a clean look
    },
  };

  return (
    <Lay>
      <div style={sectionStyles.sectionWrapper}>
        <h2 style={sectionStyles.sectionHeading}>Who We Are</h2>
        <p style={sectionStyles.sectionParagraph}>
          We are a team of nature enthusiasts, health advocates, and sustainability champions. Our brand, Samarthya Naturals, is built on the foundation of trust, quality, and a deep respect for the environment. We believe in the power of natural products to transform lives, and our mission is to make these products available to everyone.
        </p>
        <p style={sectionStyles.sectionParagraph}>
          Our team works diligently to source the best natural ingredients and create products that meet the highest standards of quality. We are proud to be a part of the movement towards a more sustainable and healthy world. Whether you’re a gardening enthusiast looking for the perfect compost or someone seeking the health benefits of natural supplements, we are here to serve you.
        </p>
      </div>
    </Lay>
  );
};

export default WhoWeAre;
