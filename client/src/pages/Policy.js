import React from 'react';
import Lay from '../components/Layout/Lay';

const Policy = () => {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    paragraph: {
      marginBottom: '15px',
      fontSize: '1rem',
      color: '#555',
    },
    list: {
      marginLeft: '20px',
      listStyleType: 'disc',
      color: '#555',
    },
    contact: {
      marginTop: '20px',
      fontWeight: 'bold',
    }
  };

  return (
    <Lay>
      <div style={styles.container}>
        <h1 style={styles.title}>PRIVACY POLICY</h1>
        <p style={styles.paragraph}>
          We are dedicated to safeguarding and respecting your privacy while adhering to all applicable laws.
        </p>
        <p style={styles.paragraph}>
          Your privacy is of utmost importance to us, and to ensure transparency, we have developed this policy to explain how we collect, use, communicate, and disclose personal information. The following provides an overview of our privacy policy.
        </p>
        <h2 style={styles.title}>Information Collected</h2>
        <p style={styles.paragraph}>
          Our website employs forms where you may provide contact details (such as name, address, phone number, IP address, and email) for creating an account, purchasing products/services, seeking information, and requesting support. As you utilize your account, we may also collect support requests and other relevant information pertinent to managing your account and services.
        </p>
        <p style={styles.paragraph}>
          The company reserves the right to refuse service to anyone at any time. Users understand that content may be transferred unencrypted, and any unauthorized reproduction or exploitation of the service is prohibited without written permission.
        </p>
        <h2 style={styles.title}>How We Use Your Personal Data</h2>
        <p style={styles.paragraph}>
          Your personal information is utilized for account creation, necessary communications (e.g., updates on purchased products/services), responding to support requests, and informing you about new offerings. We strictly adhere to legal guidelines and will not use your personal information inappropriately.
        </p>
        <h2 style={styles.title}>Your Personal Information and Third Parties</h2>
        <p style={styles.paragraph}>
          We prioritize your privacy and will not share your information without your consent unless mandated by law or legal processes.
        </p>
        <h2 style={styles.title}>Retention & Deletion of Account Information</h2>
        <p style={styles.paragraph}>
          Upon refunding a product/service order or canceling a subscription, your personal information enters a “deactivated” status. Deactivation, however, does not imply deletion; we retain and use your information as required by law, to resolve disputes, and enforce agreements.
        </p>
        <h2 style={styles.title}>Links to Other Websites</h2>
        <p style={styles.paragraph}>
          Cookie Policy We may process your Personal Data through Cookies and similar technologies.
        </p>
        <p style={styles.paragraph}>
          Our website utilizes cookies, both session and persistent, to enhance functionality and user experience. Session cookies are temporary and deleted upon closing the browser, while persistent cookies remember preferences for future visits. Disabling cookies may limit website access.
        </p>
        <p style={styles.paragraph}>
          By using our website without changing your settings, you consent to our cookie usage.
        </p>
        <h2 style={styles.title}>Security</h2>
        <p style={styles.paragraph}>
          We uphold personal information security through reasonable safeguards against loss, theft, unauthorized access, disclosure, copying, use, or modification. Customers can access information about our policies and practices regarding personal information management.
        </p>
        <p style={styles.contact}>
          For any further queries, contact us at <a href="mailto:samarthyanaturals@gmail.com">samarthyanaturals@gmail.com</a>.
        </p>
        <p style={styles.paragraph}>
          This privacy policy is subject to change without notice.
        </p>
      </div>
    </Lay>
  );
}

export default Policy;
