import React from 'react';
import styled from 'styled-components';

const ContactBox = styled.div`
  background-color: black;
  color: white;
  padding: 20px; /* Increased padding for a larger box */
  border-radius: 10px; /* Increased border-radius for a rounded look */
  width: 600px; /* Increased width */
  position: absolute;
  bottom: -340%; /* Position at the bottom */
  left: 50%; /* Position at the center horizontally */
  transform: translateX(-50%); /* Center the box horizontally */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center text horizontally */

  h3 {
    margin: 0 0 15px 0; /* Increased margin for the heading */
    font-size: 24px; /* Increased font size for the heading */
  }

  p {
    margin: 10px 0; /* Increased margin for paragraphs */
    font-size: 18px; /* Increased font size for paragraphs */
  }
`;

const ContactMeBox = () => {
  return (
    <ContactBox>
      <h3>Contact Me</h3>
      <p>Email: mdomermohi@gmail.com</p>
      <p>Phone: (613) 314-9939</p>
      <p>Location: Ottawa, ON</p> {/* Replace "Your Location" with the actual location */}
    </ContactBox>
  );
};

export default ContactMeBox;
