import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import "bootstrap/dist/css/bootstrap.min.css";

function PartialEntry1() {
    const timestamp = "2023-06-30T12:34:56Z"; // Replace this with the actual timestamp
    const title= "   The Importance of Marketing Yourself as a Student Athlete for Recruiting Purposes."; // Replace this with the actual timestamp

  
  
  return (
    <div>
   <div className="w3-row-padding">
        <div className="w3-card w3-white">
       <div className="container w3-padding-large w3-padding-16 mt-3">
            <h2>
           {title}
            </h2>
            <div className=" mt-2 mb-2">
              <p style={{ fontSize: "12px" }} className="m-0">
                Published: {moment(timestamp).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
            </div>
            <h3>Overview</h3>
            <p>
              In today's competitive sports landscape,
              marketing yourself effectively as a student-athlete is crucial for
              securing opportunities at the collegiate level. With the sheer
              volume of high school athletes aspiring to play in college,
              standing out from the crowd requires a strategic approach. This
              blog post will explore the importance of using controlled
              platforms, such as personal websites, alongside social media to
              enhance your visibility and attractiveness to college recruiters.
              We'll also delve into key statistics to highlight the competitive
              nature of transitioning from high school to college sports. <Link>See Full Post</Link>
           
            </p>
          </div>
         
        </div>
      </div>
      {/* Links to other blog posts 
        <div className="w3-padding-32">
        <ul>
        <li>
          <Link to={`/blog/${blogPost.id}`}>Post 2</Link>
        </li>
        Add more links to other blog posts here 
      </ul>
      </div> 
      */}
    </div>
  );
}

export default PartialEntry1;
