import React from 'react'
import { FaEnvelope ,  FaLinkedin, FaGithub  } from "react-icons/fa";


function Sidebar({ items }) {
  return (
    <div className="sidebar  text-center">
	     <figure className="mt-4 sideFig" >
              <img alt="Profile"
                src={require("../images/profile.JPG")}
                style={{ width: 180, height: 180, borderRadius: 200/ 2 }}
				fluid
              />             
            </figure>			
			<ul className=" mt-4 list-group introbar  ">
                  <li>THANA SHREE JEEVANANDAM</li>
			</ul>	
	        <ul className=" list-group">
				<li> <a className="mail introbar "
						  href="mailto:thanashreej@gmail.com"
						  target="blank"
						  id="mail"
						  rel="noopener noreferrer"
					    >
							<FaEnvelope size={15}/>  thanashreej@gmail.com
						</a> 
				</li>
				<li>    <a className="mail introbar "
						  href="mailto:thanashr@buffalo.edu"
						  target="blank"
						  id="mail"
						  rel="noopener noreferrer"
						 >
						<FaEnvelope size={15} />  thanashr@buffalo.edu
						</a> 
				</li>
		
			</ul>
			<ul className="  subs mt-3 list-group introbar monospace">
                  <li><a href="#home" className="subs introbar" ><span className="glyphicon glyphicon-envelope"></span>Home</a></li>
                  <li><a href="#education" className=" subs introbar">Education</a></li>
				  <li ><a href="#experience"className="subs introbar" >Experience</a></li>
				  <li ><a href="#projects"className=" subs introbar" >Projects</a></li>				  
				  <li ><a href="#skills" className="subs introbar" >Skills</a></li>
				  <li ><a href="#social" className="subs introbar">Social</a></li>
            </ul>
			<ul className="list-group mt-3 ">
				<li>    <a className="socialIcons  introbar "
						  href="https://www.linkedin.com/in/thanashree/"
						  target="_blank"
						  id="linkedin"
						  rel="noopener noreferrer"
					    >
							<FaLinkedin size={20} />
						</a>
				</li>
			    <li>    <a className="socialIcons introbar "
						  href="https://github.com/thanashr"
						  target="blank"
						  id="github"
						  rel="noopener noreferrer"
						>
							<FaGithub size={20} />
						</a>
				</li>
			</ul>     
    </div>
  )
}

export default Sidebar

  