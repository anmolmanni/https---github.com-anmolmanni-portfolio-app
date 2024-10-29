import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main">
        <div id="about">
          <h1>About Me</h1>
          <p>
            I am a web developer passionate about creating user-friendly
            interfaces with a focus on modern web technologies like HTML, CSS,
            JavaScript, and React.
          </p>
        </div>
        <div id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div id="experience">
          <h2>Experience</h2>
          <p>
            5+ years of experience in full-stack development, building
            responsive websites and web applications using the latest
            technologies
          </p>
          <p></p>
        </div>
        <div id="projects">
          <h2 id="P">Projects</h2>
          <div className="project-container">
            <div className="project-card">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D"
                width="100%"
              />
              <h3>Project One</h3>
              <p>
                A web application built with HTML, CSS, and JavaScript,
                showcasing a dynamic and interactive user interface.
              </p>
            </div>
            <div className="project-card">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D"
                width="100%"
              />
              <h3>Project Two</h3>
              <p>
                A React application featuring state management, API integration,
                and a responsive design.
              </p>
            </div>
            <div className="project-card">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D"
                width="100%"
              />
              <h3>Project Three</h3>
              <p>
                A portfolio website utilizing modern CSS techniques like Flexbox
                for layout and styling.
              </p>
            </div>
            <div className="project-card">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D"
                width="100%"
              />
              <h3>Project Four</h3>
              <p>
                A web application built with HTML, CSS, and JavaScript,
                showcasing a dynamic and interactive user interface.
              </p>
            </div>
            <div className="project-card">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D"
                width="100%"
              />
              <h3>Project Five</h3>
              <p>
                A React application featuring state management, API integration,
                and a responsive design.
              </p>
            </div>
            <div className="project-card">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D"
                width="100%"
              />
              <h3>Project Six</h3>
              <p>
                A portfolio website utilizing modern CSS techniques like Flexbox
                for layout and styling.
              </p>
            </div>
            <div className="project-card">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D"
                width="100%"
              />
              <h3>Project Seven</h3>
              <p>
                A web application built with HTML, CSS, and JavaScript,
                showcasing a dynamic and interactive user interface.
              </p>
            </div>
            <div className="project-card">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D"
                width="100%"
              />
              <h3>Project Eight</h3>
              <p>
                A React application featuring state management, API integration,
                and a responsive design.
              </p>
            </div>
            <div className="project-card">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D"
                width="100%"
              />
              <h3>Project Nine</h3>
              <p>
                A portfolio website utilizing modern CSS techniques like Flexbox
                for layout and styling.
              </p>
            </div>
          </div>
        </div>
        <div id="contact">
          <h2>Contact Me</h2>
          <p>
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <form>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              type="text"
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              type="email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
