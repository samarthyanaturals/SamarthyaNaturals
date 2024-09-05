import React from 'react';
import Lay from '../components/Layout/Lay';

const Terms = () => {
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
        <h1 style={styles.title}>Terms and Conditions</h1>
        <p style={styles.paragraph}>
          By accepting these Terms of Service, users confirm they are of legal age or have obtained consent from a legal guardian for any minor dependents. Products must not be used for illegal or unauthorized purposes, and any violation will result in immediate service termination.
        </p>

        <h2 style={styles.subtitle}>General Conditions</h2>
        <p style={styles.paragraph}>
          The company reserves the right to refuse service to anyone at any time. Users understand that content may be transferred unencrypted, and any unauthorized reproduction or exploitation of the service is prohibited without written permission.
        </p>

        <h2 style={styles.subtitle}>Accuracy, Completeness, and Timeliness of Information</h2>
        <p style={styles.paragraph}>
          The company does not guarantee the accuracy, completeness, or timeliness of information on the site. Users should use the material for general information only and consult more accurate and timely sources when making decisions.
        </p>

        <h2 style={styles.subtitle}>Security</h2>
        <p style={styles.paragraph}>
          We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
        </p>

        <h2 style={styles.subtitle}>Modifications to the Services, Products, and Prices</h2>
        <p style={styles.paragraph}>
          Prices for products and services are subject to change without notice. The company reserves the right to modify or discontinue the service without notice. The company is not liable for any modifications, price changes, or discontinuation of the service or product.
        </p>

        <h2 style={styles.subtitle}>Links to Other Websites</h2>
        <p style={styles.paragraph}>
          Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
        </p>

        <h2 style={styles.subtitle}>Products or Services</h2>
        <p style={styles.paragraph}>
          Certain products or services may be exclusively available online, with limited quantities and subject to return or exchange as per the Return Policy. Efforts are made to accurately display product colors and images, but accuracy is not guaranteed.
        </p>

        <h2 style={styles.subtitle}>Accuracy of Billing and Account Information</h2>
        <p style={styles.paragraph}>
          The company reserves the right to refuse any order, limit or cancel quantities, and change or discontinue products or services. Users must provide current, complete, and accurate purchase and account information.
        </p>

        <h2 style={styles.subtitle}>Third-Party Links</h2>
        <p style={styles.paragraph}>
          Certain content, products, and services may include third-party materials. Third-party links are not affiliated with the company, which is not responsible for third-party materials or websites.
        </p>

        <h2 style={styles.subtitle}>User Comments, Feedback, and Other Submissions</h2>
        <p style={styles.paragraph}>
          By submitting comments, users grant the company the right to edit, copy, publish, and distribute them. The company may monitor, edit, or remove content deemed unlawful, offensive, or violating intellectual property or these Terms of Service.
        </p>

        <h2 style={styles.subtitle}>Personal Information</h2>
        <p style={styles.paragraph}>
          Personal information submission is governed by the Privacy Policy.
        </p>

        <h2 style={styles.subtitle}>Errors, Inaccuracies, and Omissions</h2>
        <p style={styles.paragraph}>
          The company may correct errors, inaccuracies, or omissions without notice. Users are responsible for monitoring changes.
        </p>

        <h2 style={styles.subtitle}>Prohibited Uses</h2>
        <p style={styles.paragraph}>
          Users are prohibited from unlawful, harassing, or disruptive use of the site or content. The company reserves the right to terminate user access for violating prohibited uses.
        </p>

        <h2 style={styles.subtitle}>Disclaimer of Warranties; Limitation of Liability</h2>
        <p style={styles.paragraph}>
          The company does not guarantee uninterrupted, secure, or error-free service. Users agree to use the service at their own risk, and products and services are provided “as is” and “as available.”
        </p>

        <h2 style={styles.subtitle}>Severability</h2>
        <p style={styles.paragraph}>
          If any provision is deemed unlawful or unenforceable, it shall be enforceable to the fullest extent permitted by law. The unenforceable portion will be severed without affecting other provisions' validity.
        </p>

        <h2 style={styles.subtitle}>Termination</h2>
        <p style={styles.paragraph}>
          Termination of these Terms of Service does not affect prior obligations. Either party may terminate, and the company may deny access for violations. Obligations and liabilities survive termination.
        </p>

        <h2 style={styles.subtitle}>Entire Agreement</h2>
        <p style={styles.paragraph}>
          These Terms of Service constitute the entire agreement, superseding prior agreements. Ambiguities in interpretation are not construed against the drafting party.
        </p>

        <h2 style={styles.subtitle}>Governing Law</h2>
        <p style={styles.paragraph}>
          The Terms of Service are governed by Indian law.
        </p>

        <h2 style={styles.subtitle}>Changes to Terms of Service</h2>
        <p style={styles.paragraph}>
          Users can review the most current version of the Terms of Service on the website. The company reserves the right to update or change the Terms of Service, and continued use constitutes acceptance of changes.
        </p>

        <h2 style={styles.subtitle}>Contact Information</h2>
        <p style={styles.paragraph}>
          For questions about the terms of service, users can contact the company at <a href="mailto:samarthyanaturals@gmail.com">samarthyanaturals@gmail.com</a>.
        </p>
      </div>
    </Lay>
  );
};

export default Terms;
