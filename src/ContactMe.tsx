import React from 'react';
import styled from 'styled-components';

const ContactBox = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px; 
  width: 600px;
  transform: translateX(-50%); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; 

  h3 {
    margin: 0 0 15px 0; 
    font-size: 24px; 
  }

  p {
    margin: 10px 0;
    font-size: 18px; 
  }
`;

const ContactMeBox = () => {
  return (
    <ContactBox>
      <h3>Contact Me</h3>
      <p>Email: mdomermohi@gmail.com</p>
      <p>Phone: (613) 314-9939</p>
      <p>Location: Ottawa, ON</p>
    </ContactBox>
  );
};

export default ContactMeBox;
