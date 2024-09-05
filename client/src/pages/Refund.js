import React from 'react';
import Lay from '../components/Layout/Lay';

const Refund = () => {
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
        <h1 style={styles.title}>Return & Refund Policy</h1>
        <p style={styles.paragraph}><strong>Last Revised:</strong> August 5, 2024</p>

        <h2 style={styles.subtitle}>1. Introduction</h2>
        <p style={styles.paragraph}>
          At samarthyanaturals.com (“we,” “our,” “us”), we are committed to ensuring customer satisfaction with every purchase. This Return and Refund Policy outlines the conditions under which returns are accepted, the process for returning items, and how refunds are handled. By making a purchase on our online marketplace, samarthyanaturals.com (the “Site”), you agree to this Return and Refund Policy.
        </p>

        <h2 style={styles.subtitle}>2. Return Eligibility</h2>
        <h3 style={styles.subtitle}>2.1 General Conditions:</h3>
        <ul>
          <li style={styles.listItem}>Items must be returned within 7 days from the date of purchase.</li>
          <li style={styles.listItem}>Items must be unused, in the same condition as received, and in their original packaging.</li>
          <li style={styles.listItem}>A receipt or proof of purchase is required for all returns.</li>
        </ul>
        
        <h3 style={styles.subtitle}>2.2 Non-Returnable Items:</h3>
        <ul>
          <li style={styles.listItem}>Downloadable software products and digital codes/keys.</li>
          <li style={styles.listItem}>Gift cards.</li>
          <li style={styles.listItem}>Perishable goods (e.g., food, flowers).</li>
          <li style={styles.listItem}>Personal hygiene items (e.g., cosmetics, undergarments).</li>
        </ul>

        <h2 style={styles.subtitle}>3. Return Process</h2>
        <h3 style={styles.subtitle}>3.1 Initiating a Return:</h3>
        <p style={styles.paragraph}>
          To initiate a return, please contact our customer support team at <a href="mailto:samarthyanaturals@gmail.com">samarthyanaturals@gmail.com</a> with the following information:
        </p>
        <ul>
          <li style={styles.listItem}>Order number.</li>
          <li style={styles.listItem}>Reason for the return.</li>
          <li style={styles.listItem}>Photos of the item, if applicable (e.g., if the item is damaged or defective).</li>
        </ul>

        <h3 style={styles.subtitle}>3.2 Return Shipping:</h3>
        <p style={styles.paragraph}>
          Customers are responsible for paying the return shipping costs unless the item was damaged or defective upon receipt. We recommend using a trackable shipping service or purchasing shipping insurance for items valued over 999 INR, as we cannot guarantee that we will receive your returned item.
        </p>

        <h3 style={styles.subtitle}>3.3 Inspection and Approval:</h3>
        <p style={styles.paragraph}>
          Once your returned item is received and inspected, we will notify you via email regarding the approval or rejection of your return request. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7-14 days.
        </p>

        <h2 style={styles.subtitle}>4. Refunds</h2>
        <h3 style={styles.subtitle}>4.1 Refund Process:</h3>
        <p style={styles.paragraph}>
          Approved refunds will be credited back to your original method of payment. Processing times for refunds may vary based on your payment provider.
        </p>

        <h3 style={styles.subtitle}>4.2 Partial Refunds:</h3>
        <p style={styles.paragraph}>
          Partial refunds may be granted for items that are not in their original condition, are damaged, or have missing parts for reasons not due to our error.
        </p>

        <h3 style={styles.subtitle}>4.3 Late or Missing Refunds:</h3>
        <p style={styles.paragraph}>
          If you haven't received a refund within the expected timeframe, please check with your bank or credit card company as there may be a delay in processing. If you have done this and still have not received your refund, please contact us at <a href="mailto:samarthyanaturals@gmail.com">samarthyanaturals@gmail.com</a>.
        </p>

        <h2 style={styles.subtitle}>5. Exchanges</h2>
        <p style={styles.paragraph}>
          We only replace items if they are defective or damaged. If you need to exchange an item for the same item, please contact us at <a href="mailto:samarthyanaturals@gmail.com">samarthyanaturals@gmail.com</a> and send your item to the return address printed on the item box.
        </p>

        <h2 style={styles.subtitle}>6. Return Shipping Address</h2>
        <p style={styles.paragraph}>
          Please send all returns to the following address mentioned on the item box you received.
        </p>

        <h2 style={styles.subtitle}>7. Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions about this Return and Refund Policy, please contact us at: <a href="mailto:samarthyanaturals@gmail.com">samarthyanaturals@gmail.com</a>.
        </p>

        <p style={styles.paragraph}>
          By making a purchase on our Site, you agree to this Return and Refund Policy.
        </p>
      </div>
    </Lay>
  );
};

export default Refund;
