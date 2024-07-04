import React from "react";
import moment from "moment";
import { TwitterShareButton, FacebookShareButton } from "react-share";

import "bootstrap/dist/css/bootstrap.min.css";

function FullEntry1() {
    const timestamp = "2023-06-30T12:34:56Z"; // Replace this with the actual timestamp
    const title= "   The Importance of Marketing Yourself as a Student Athlete for Recruiting Purposes."; 

  
  
  return (
    <div>
   <div className="w3-row-padding">
        <div className="w3-card">
       <div className="container mt-3">
            <h2>
           {title}
            </h2>
            <div className=" mt-2 mb-2">
              <p style={{ fontSize: "12px" }} className="m-0">
                Author:{" "}
              </p>
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
              nature of transitioning from high school to college sports. 
             </p>


             <h3>The Competitive Landscape</h3>
        <p>
        The journey from high school athletics to collegiate sports is incredibly competitive. According to the National Collegiate Athletic Association (NCAA), there are over 8 million high school athletes in the United States. However, only about 480,000 of these athletes go on to compete at NCAA schools. This means that less than 6% of high school athletes will make it to the collegiate level.
        </p>

        <h3>Controlled Platforms: The Personal Website</h3>
        <p>A personal website serves as a central hub for showcasing your athletic achievements, academic accomplishments, and personal brand. Here are some key elements to include on your personal website:</p>
<ul>
    <li><b> Athletic Profile:</b>
        Highlight your sports statistics, notable achievements, and game highlights. Include high-quality photos and videos that showcase your skills.
        </li>
        <li><b>Academic Information:</b> Display your GPA, test scores, and any academic awards or honors you’ve received. This shows recruiters that you’re a well-rounded student-athlete.</li>
        <li><b>Personal Statement: </b>Share your story, goals, and motivations. This helps recruiters get to know you beyond your athletic and academic achievements.</li>
        <li><b>Contact Information:</b> Make it easy for recruiters to get in touch with you. Include your email address, phone number, and links to your social media profiles.</li>
</ul>

<h3>Leveraging Social Media</h3>
        <p>Social media platforms are powerful tools for increasing your visibility and connecting with college recruiters. Here are some tips for effectively using social media:

</p>
<ul>
    <li><b>Consistent Branding:</b> Use the same profile photo and handle across all platforms to create a cohesive personal brand.</li>
    <li><b>Regular Updates:</b> Post regularly about your training, games, and achievements. Engage with your followers by sharing insights and responding to comments.</li>
    <li><b>Highlight Reels:</b> Share short highlight videos that capture your best moments. Use platforms like Instagram and TikTok to reach a broader audience.
    </li>
    <li><b>Engage with Recruiters:</b> Follow college teams and coaches. Like and comment on their posts to show your interest and increase your visibility.</li>
</ul>


<h3>Key Factors for Successful Marketing</h3>
<ul>
    <li><b>Quality Content: </b>Ensure that all the content you share, whether on your website or social media, is high-quality and professional. This includes photos, videos, and written content.</li>
<li><b>Authenticity:</b> Be genuine in your posts and interactions. Authenticity builds trust and makes you more relatable.</li>
<li><b>Networking: </b>Engage with other athletes, coaches, and sports organizations. Building a strong network can open doors to new opportunities.</li>
<li><b>Consistency:</b> Maintain a consistent posting schedule and message across all platforms. This helps reinforce your personal brand.</li>
</ul>

<h3>Conclusion</h3>
<p>Marketing yourself as a student-athlete is essential for standing out in a highly competitive field. By using a controlled platform like a personal website and leveraging the power of social media, you can effectively showcase your talents and achievements to college recruiters. Remember, the journey from high school to college sports is challenging, but with the right strategy and dedication, you can increase your chances of success. Stay authentic, consistent, and proactive in your efforts, and you’ll be well on your way to achieving your athletic and academic goals.</p>
          </div>
          <div className="card-footer">
            <div className="row d-flex border-top">
              <div className="col-12">
                <div className="w3-container w3-margin-bottom">
                  <div className="mt-3">
                    <h6 className="">SHARE THIS POST</h6>

                    <div className="floating-icons">
                      {/* Twitter Share Button */}
                      <span>
                        <TwitterShareButton
                          url={window.location.href}
                          title={title}
                        >
                          <div
                            className="w3-button w3-black w3-large rounded"
                            style={{ padding: "5px 10px" }}
                          >
                            <i className="fab fa-twitter"></i>
                          </div>
                        </TwitterShareButton>
                      </span>

                      {/* Facebook Share Button */}
                      <span className="mx-2">
                        <FacebookShareButton
                          url={window.location.href}
                            title={title}
                        >
                          <div
                            className="w3-button w3-black w3-large rounded"
                            style={{ padding: "5px 10px" }}
                          >
                            <i className="fab fa-facebook"></i>
                          </div>
                        </FacebookShareButton>
                      </span>

                      {/* Email Share Button */}
                      <span>
                        <a href="mailto:example@example.com?subject=Check%20out%20this%20website&body=I%20thought%20you%20might%20be%20interested%20in%20this%20website:%20https://example.com">
                          <div
                            className="w3-button w3-black w3-large rounded"
                            style={{ padding: "5px 10px" }}
                          >
                            <i className="fas fa-envelope"></i>
                          </div>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default FullEntry1;
