import React from 'react';
import pdf from '../documents/Brooke-Kullberg-Resume.pdf';

export default function Contact() {
  return(
    <div>
      <div className="contactContent">
        <p>brookekullberg@gmail.com</p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brooke-kullberg/">LinkedIn</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/brookezk">Github</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href={pdf}>Resume</a></p>
      </div>
      <div className="footer">
        <h6><em>Original Design and Media by Brooke Kullberg!</em></h6>
        <h6>All rights reserved.</h6>
      </div>
    </div>
  ) 
}