import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { FaEnvelope , FaHome, FaLinkedin, FaGithub , FaPhone } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";


function Sidebar({ items }) {
  return (
    <div className="sidebar text-center  ">
	     <figure>
              <img
                src={require("../images/profile1.png")}
                style={{ width: 160, height: 160, borderRadius: 200/ 2 }}
				fluid
              />
             
            </figure>
			
			<ul className=" mt-3 list-group menus  intro">
                  <li>THANA SHREE JEEVANANDAM</li>

				  </ul>	
	<ul className="list-group">
				  <li> <a className="mail a"
              href="mailto:thanashreej@gmail.com"
              target="blank"
              id="mail"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={15}/>  thanashreej@gmail.com
            </a> </li>
			<li>   <a className="mail a"
              href="mailto:thanashr@buffalo.edu"
              target="blank"
              id="mail"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={15} />  thanashr@buffalo.edu
            </a> </li>
		
			</ul>
			<ul className=" mt-3 list-group menus monospace text-warning">
                  <li><a href="#home" className="menus a" ><span className="glyphicon glyphicon-envelope"></span>Home</a></li>
                  <li><a href="#education" className="menus a">Education</a></li>
				  <li ><a href="#projects"className="menus a" >Projects</a></li>
				  <li ><a href="#experience"className="menus a" >Experience</a></li>
				  <li ><a href="#skills" className="menus a" >Skills</a></li>
				  <li ><a href="#social" className="menus a">Social</a></li>
                </ul>
			<ul className="list-group mt-4">
			<li> <a className="menus a "
              href="https://www.linkedin.com/in/thanashree/"
              target="_blank"
              id="linkedin"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a> </li>
           <li> <a className="menus a"
              href="https://github.com/thanashr"
              target="blank"
              id="github"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a> </li>
			</ul>
      
      
     
    </div>
  )
}

export default Sidebar

  