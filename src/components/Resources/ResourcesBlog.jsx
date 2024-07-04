import React from "react";
//import { Link } from "react-router-dom";
import moment from "moment";
import Treadmill from "../../assets/images/Treadmill.png";
import {
  TwitterShareButton,
  FacebookShareButton,
  //PinterestShareButton,
} from "react-share";

import "bootstrap/dist/css/bootstrap.min.css";
import post1 from "../../data/posts/resources-posts/resources-post1.json"; // Import the specific blog post

function CatchingBlogPosts() {
  const blogPost = post1;

  return (
    <div>


      <h2>Blog</h2>

      <div className="w3-row-padding">
    <div className="w3-card">
    <img src={Treadmill} alt="Post" style={{width:'100%'}}/>
      <img src={blogPost.imageUrl} alt="Post" />
      <div className="container">
        <h2>{blogPost.title}</h2>
        <p>Author: {blogPost.author}</p>
        <p>
          Published:{" "}
          {moment(blogPost.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        
        <p>{blogPost.content}</p>
        </div>
        <div className="card-footer">
      <div className="row d-flex border-top">
        <div className="col-12">
          <div className="w3-container w3-margin-bottom">
         
            <div className="mt-3">
            <h6 className="">
             SHARE THIS POST
            </h6>

            <div className="floating-icons">
  {/* Twitter Share Button */}
  <span>
    <TwitterShareButton
      url={window.location.href}
      title={blogPost.title}
    >
      <div className="w3-button w3-black w3-large rounded" style={{ padding: '5px 10px' }}>
        <i className="fab fa-twitter"></i>
      </div>
    </TwitterShareButton>
  </span>

  {/* Facebook Share Button */}
  <span className="mx-2">
    <FacebookShareButton
      url={window.location.href}
      quote={blogPost.title}
    >
      <div className="w3-button w3-black w3-large rounded" style={{ padding: '5px 10px' }}>
        <i className="fab fa-facebook"></i>
      </div>
    </FacebookShareButton>
  </span>

  {/* Email Share Button */}
  <span>
    <a href="mailto:example@example.com?subject=Check%20out%20this%20website&body=I%20thought%20you%20might%20be%20interested%20in%20this%20website:%20https://example.com">
      <div className="w3-button w3-black w3-large rounded" style={{ padding: '5px 10px' }}>
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

export default CatchingBlogPosts;
