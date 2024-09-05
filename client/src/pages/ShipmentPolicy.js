import React from 'react';
import Lay from '../components/Layout/Lay';

const ShipmentPolicy = () => {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#000',
    },
    subtitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginTop: '20px',
      marginBottom: '10px',
      color: '#444',
    },
    paragraph: {
      marginBottom: '15px',
      fontSize: '1rem',
    },
    listItem: {
      marginBottom: '10px',
    },
    contact: {
      marginTop: '20px',
      fontWeight: 'bold',
    },
  };

  return (
    <Lay>
      <div style={styles.container}>
        <h1 style={styles.title}>Shipping Policy</h1>
        <p style={styles.paragraph}><strong>Last Revised:</strong> August 5, 2024</p>
        
        <h2 style={styles.subtitle}>1. Introduction</h2>
        <p style={styles.paragraph}>
          Welcome to samarthyanaturals.com (“we,” “our,” “us”). This Shipping Policy outlines the terms and conditions regarding the shipping and delivery of products purchased through our online marketplace, samarthyanaturals.com (the “Site”). By making a purchase on our Site, you agree to this Shipping Policy.
        </p>

        <h2 style={styles.subtitle}>2. Shipping Destinations</h2>
        <p style={styles.paragraph}>
          We currently ship to addresses within India. We do not ship to P.O. boxes or international addresses.
        </p>

        <h2 style={styles.subtitle}>3. Order Processing Time</h2>
        <h3 style={styles.subtitle}>3.1 General Processing:</h3>
        <p style={styles.paragraph}>
          All orders are processed within 1-5 business days (excluding weekends and holidays) after receiving your order confirmation email.
          You will receive another notification when your order has shipped.
        </p>
        <h3 style={styles.subtitle}>3.2 Delays:</h3>
        <p style={styles.paragraph}>
          During high volume periods, such as holidays or sales events, processing times may be longer. We will notify you of any significant delays via email.
        </p>

        <h2 style={styles.subtitle}>4. Shipping Rates and Delivery Estimates</h2>
        <h3 style={styles.subtitle}>4.1 Shipping Rates:</h3>
        <p style={styles.paragraph}>
          Shipping charges for your order will be calculated and displayed at checkout based on the weight, dimensions, and destination of the package.
        </p>
        <h3 style={styles.subtitle}>4.2 Delivery Estimates:</h3>
        <p style={styles.paragraph}>
          Standard Shipping: 2-3 business days<br/>
          Expedited Shipping: 1-2 business days<br/>
          Same-Day Delivery (if available): Orders placed before 9 AM will be delivered the same day
        </p>
        <p style={styles.paragraph}>
          Please note that delivery times are estimates and are not guaranteed. Factors beyond our control, such as courier delays or weather conditions, may affect delivery times.
        </p>

        <h2 style={styles.subtitle}>5. Shipment Confirmation and Order Tracking</h2>
        <p style={styles.paragraph}>
          You will receive a shipment confirmation email with a tracking number once your order has shipped. You can track your order on the courier’s website using the provided tracking number.
        </p>

        <h2 style={styles.subtitle}>6. Customs, Duties, and Taxes</h2>
        <p style={styles.paragraph}>
          All applicable customs fees, taxes, and duties are the sole responsibility of the customer. We have no control over these charges and cannot predict what they may be. Customs policies vary widely from country to country; please contact your local customs office for more information. By law, we must declare all items at their full price and cannot alter this amount to decrease international customs fees.
        </p>

        <h2 style={styles.subtitle}>7. Damages and Issues</h2>
        <h3 style={styles.subtitle}>7.1 Damaged Items:</h3>
        <p style={styles.paragraph}>
          If you receive an item that is damaged during shipping, please contact us immediately at <a href="mailto:samarthyanaturals@gmail.com">samarthyanaturals@gmail.com</a> with photos of the damaged item and your order number.
          We will work with you to resolve the issue and ensure that you receive a replacement or a refund.
        </p>
        <h3 style={styles.subtitle}>7.2 Missing or Incorrect Items:</h3>
        <p style={styles.paragraph}>
          If you receive an incorrect item or if an item is missing from your order, please contact us at <a href="mailto:samarthyanaturals@gmail.com">samarthyanaturals@gmail.com</a> within 3 days of receiving your order. We will correct the mistake as quickly as possible.
        </p>

        <h2 style={styles.subtitle}>8. Shipping Restrictions</h2>
        <p style={styles.paragraph}>
          Certain products may be subject to shipping restrictions due to size, weight, or legal regulations. We will notify you if any restrictions apply to your order.
        </p>

        <h2 style={styles.subtitle}>9. Changes to This Shipping Policy</h2>
        <p style={styles.paragraph}>
          We reserve the right to update or modify this Shipping Policy at any time. Any changes will be posted on this page with an updated “Effective Date.” Your continued use of our Site after any changes constitute your acceptance of the new Shipping Policy.
        </p>

        <h2 style={styles.subtitle}>10. Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions about this Shipping Policy, please contact us at:<br/>
          Email: <a href="mailto:samarthyanaturals@gmail.com">samarthyanaturals@gmail.com</a>
        </p>

        <p style={styles.paragraph}>
          By making a purchase on our Site, you agree to this Shipping Policy.
        </p>
      </div>
    </Lay>
  );
};

export default ShipmentPolicy;
