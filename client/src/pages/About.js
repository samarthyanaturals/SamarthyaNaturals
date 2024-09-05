import React from 'react';
import Lay from '../components/Layout/Lay';
import "../css/about.css";

const About = () => {
  // Define styles as a JavaScript object with unique names
  const customStyles = {
    aboutContainer: {
      padding: '5%',
      backgroundColor: '#f9f9f9', // Light grey background for contrast
      borderRadius: '8px', // Rounded corners
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      fontFamily: 'Arial, sans-serif', // Clean font
      color: '#333', // Dark text for readability
      lineHeight: '1.6', // Improved line spacing
    },
    aboutHeading: {
      fontSize: '2.5rem', // Large heading size
      color: '#2c3e50', // Dark blue color for the heading
      marginBottom: '20px', // Space below the heading
      textAlign: 'center', // Centered heading
      textTransform: 'uppercase', // Uppercase letters
    },
    aboutParagraph: {
      fontSize: '1.2rem', // Slightly larger text for body
      marginBottom: '20px', // Space below each paragraph
      textAlign: 'justify', // Justified text for a clean look
    },
  };

  return (
    <Lay title={"About - SipShop"}>
      <div style={customStyles.aboutContainer}>
        <h2 style={customStyles.aboutHeading}>About Us</h2>
        <p style={customStyles.aboutParagraph}>
          Welcome to Samarthya Naturals, where we bring you closer to nature with our pure and sustainable products. We are passionate about enhancing the well-being of our customers by offering natural solutions that are both effective and environmentally friendly. Our journey began with a simple mission: to harness the power of nature and make it accessible to everyone.
        </p>
        <p style={customStyles.aboutParagraph}>
          At Samarthya Naturals, we believe that nature holds the key to a healthier and more balanced life. That’s why we are dedicated to providing high-quality products that are derived from the finest natural ingredients. We work closely with local farmers and communities to ensure that our products are not only beneficial for you but also for the environment.
        </p>
        <p style={customStyles.aboutParagraph}>
          Our commitment to sustainability and quality is unwavering. We ensure that each product is crafted with care, following rigorous quality standards. Whether it’s nourishing your plants or boosting your health, we are here to support your journey to a natural and healthier lifestyle.
        </p>
        <p style={customStyles.aboutParagraph}>
          SAMARTHYA QUALITY FABRICS
        </p>
      </div>
    </Lay>
  );
};

export default About;
