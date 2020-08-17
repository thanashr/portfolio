import React from 'react';
import {BrowserRouter as Router,Route,Link , Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css'; 
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'; 
import HomeSection from './pages/HomeSection' ;
import EducationSection from './pages/EducationSection.js' ;
import ProjectsSection from './pages/ProjectsSection' ;
import ExperienceSection from './pages/ExperienceSection' ;
import SkillsSection from './pages/SkillsSection' ;
import SocialSection from './pages/SocialSection' ;

const items = [
  { name: 'home', label: 'Home' },
  { name: 'sales', label: 'Sales' },
  { name: 'orders', label: 'Orders' },
  { name: 'billing', label: 'Billing' },
  { name: 'settings', label: 'Settings' }]

class App extends React.Component {
	
	
	constructor(props) {
		super(props);
		this.state = {
			title: 'Thana Shree',
			headerLinks:[
			{ title : 'Home ' , path: '/'},
			
			{ title : 'Education' , path: '/education'},
			{ title : 'Experience' , path: '/experience'},
			{ title : 'Projects' , path: '/projects'}
			],
			home: {
				title: ' Thana Shree Jeevanandam',
				subTitle : 'Projects that make a difference',
				text: 'checkout my projs'
			},
			education : {
				title: 'Education',
			},
			projects :  {
				title: 'Projects',
			}  ,
			experience : {
				title: 'Work Experience',
			},
			skills : {
				title: 'Skills',
			},
			social : {
				title: 'Social Works',
			}
			}
	}
  render() {
	  return(
	    <React.Fragment> 
			<Sidebar items={items}/> 
			<HomeSection title={this.state.home.title} subTitle={this.state.home.subTitle} text = {this.state.home.text} />
			<EducationSection subTitle={this.state.education.title}  />
			<ExperienceSection subTitle={this.state.experience.title}/>
			<ProjectsSection subTitle={this.state.projects.title}/>		
			<SkillsSection subTitle={this.state.skills.title}/>
			<SocialSection subTitle={this.state.social.title}/>	
			<Footer/>
		</React.Fragment>
		  	
  );
  }
}

export default App;
