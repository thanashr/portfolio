import React from 'react';
import Huge from '../components/Huge';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import {  FaLink } from "react-icons/fa";
function ProjectsSection(props) {
	return(
		<div id="projects" className="mainlayout homecolour  ">
			<Huge  subTitle={props.subTitle} />
			<Container fluid= {true}>	
			
					<Row className = "  ml-lg-5 mt-4">
					<Col  className = "edu_col">
							<a href="https://blog.codepath.org/2020-codepath-org-fall-semester-demo-day-android-winners-announced/" className="proj_link" >
							<p className = "edu ml-4 mt-4  intro  font-weight-LIGHT">HabitWise   <small>(2020) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small><b>(2nd prize at CodePath’s Android Demo Day)</b></small></p> 
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Java, Android Studio, Parse database</small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col   className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small>Our habits have likely suffered due to the instantaneous impact of COVID-19 on our lives.</small> </li>
							<li className="exp_list ml-5 "><small>Schools and gyms have closed, offices have gone remote, and social distancing has become the norm.</small> </li>
							<li className="exp_list ml-5 "><small>HabitWise, a habit-tracking application, helps users get back to their norm while adding a social aspect for motivation.</small> </li>
							<li className="exp_list ml-5 "><small>Users and their friends can share and work on habits together, adding a twist of accountability.   </small> </li>
							<li className="exp_list ml-5 "><a href="https://github.com/habitwise/HabitWise" 
							className="proj_link" ><small> GitHub Link. <FaLink className="projlink_link" size={13} /></small></a></li>
						</ul>
					</Col>			
				</Row>	
				
					<Row className = "  ml-lg-5 mt-4">
					<Col className = "edu_col">
							<a href="https://devpost.com/software/kinshield" className="proj_link" >
							<p className = "edu ml-4 mt-4  intro  font-weight-LIGHT">KinShield - SFHacks (Online)  <small>(2021) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Kotlin, Python, Android Studio, Firebase, GCP, JavaScript, HTML, Notivize</small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small>The app/website provides a way to protect families from COVID.
  </small> </li>
  <li className="exp_list ml-5 "><small>The kids are monitored on their daily hygiene practices.
  </small> </li>
  <li className="exp_list ml-5 "><small>The 
elders are notified with vaccine appointments available at one of the nearby pharmacies if they meet the state criteria.
  </small> </li>
							</ul>
					</Col>			
				</Row>	
				
					<Row className = "  ml-lg-5 mt-4">
					<Col  className = "edu_col">
							<a href="https://www.youtube.com/watch?v=kDTlyP16yrw" className="proj_link" >
							<p className = "edu ml-4 mt-4  intro  font-weight-LIGHT">Food Blockchain   <small>(2021) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Solidity, Metamask, Ethereum, Ropsten network, Ganache, Remix IDE, Node.js, JavaScript</small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small>Created a Dapp (decentralized app) which connects remote farmers and consumers with a blockchain network.  </small> </li>

<li className="exp_list ml-5 "><small>Real-time ether payments, quality checks and transparency of food trail are achieved to ensure t
he farmers’ profit and consumers’ trust  </small> </li>
					</ul>
					</Col>			
				</Row>	
				
				
				<Row className = "  ml-lg-5 mt-4">
					<Col  className = "edu_col">
							<a href="https://github.com/thanashr/IRTweet-Search" className="proj_link" >
							<p className = "edu ml-4 mt-4  intro  font-weight-LIGHT">Multilingual Search Engine   <small>(2020) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Twitter, Python, ReactJS, Flask, Material-UI, AWS, Apache Solr, Google Charts</small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small>Built a search engine web application to retrieve tweets to the user queries and also to predict the political trend in specified countries.  </small> </li>
							<li className="exp_list ml-5 "><small>Multilingual tweets(Engligh, Portugese, Hindi) were scraped using Python TwitterAPI and were preprocessed and stored in Apache Solr.</small> </li>
							<li className="exp_list ml-5 "><small> UI was built using ReactJS , Material-UI and Flask.</small></li>
							<li className="exp_list ml-5 "><small> The political trends were visualized with Google charts.</small></li>
							<li className="exp_list ml-5 "><small> Hosted the website in AWS EC2 instance.</small></li>
							<li className="exp_list ml-5 "><a href="https://drive.google.com/file/d/1ke3FsmDYe9VojB6Y6ErGQ144q8WqZ9rz/view?usp=sharing" 
							className="proj_link" ><small> Video Link. <FaLink className="projlink_link" size={13} /></small></a></li>
						</ul>
					</Col>			
				</Row>	
				<Row className = "  ml-lg-5 mt-4">
					<Col  className = "edu_col">
							<a href="https://github.com/thanashr/GroupMessenger" className="proj_link" >
							<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">Group Messenger Application for Android <small>(2020) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Java, XML, Android Studio, Socket Programming</small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small>Developed a multicast messenger application that can send every user-entered message to all the AVDs in the group.  </small> </li>
							<li className="exp_list ml-5 "><small>The messages were stored as key-value pairs in a file-based content provider.</small> </li>
							<li className="exp_list ml-5 "><small>Total and FIFO ordering were preserved in real time by implementing ISIS algorithm.</small></li>
							<li className="exp_list ml-5 "><small>Failure of app instance at the middle of execution was handled by the decentralized property of the algorithm.</small></li>
							<li className="exp_list ml-5 "><small> Hosted the website in AWS EC2 instance.</small></li>
						</ul>
					</Col>			
				</Row>
				<Row className = " ml-lg-5 mt-4">
					<Col  className = "edu_col">
							<a href="https://devpost.com/software/home-management" className="proj_link" >
							<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">Hackathon : BrickHack – 6 (at Rochester Institute of Technology <small>(2020) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Arduino101, JavaScript, HTML, Wegmans API </small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul >
							<li className=" exp_list ml-5  "><small> Developed an IoT system with Arduino 101 and sensors such as light sensor, temperature sensor, air quality sensor and load sensor.</small> </li>
							<li className="exp_list ml-5  "><small>JavaScript, HTML, CSS were used to build the website.</small></li>
							<li className="exp_list  ml-lg-5  "><small>The quantity of grocery, lighting and temperature of the household  were monitored and uploaded live to the website. </small> </li>
							<li className="exp_list ml-5  "><small>When the supply of the item ran low, it got added to the Wegmans shopping cart of the user.</small></li>
							<li className="exp_list ml-5  "><small> Statistical visualizations of weekly and monthly expenses were also provided in the website. </small></li>
						</ul>
					</Col>			
				</Row>
				<Row className = " ml-lg-5 mt-4">
					<Col className = "edu_col">
							<a href="https://github.com/thanashr/MovieGenre-Prediction-Apache-Spark-" className="proj_link" >
							<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">Movie Genre Prediction-Predictive Analytics<small>(2020) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Apache Spark, Python, Kaggle Platform </small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small>Implemented a predictive analytics pipeline using Spark to predict the genres associated with a movie.</small> </li>
							<li className="exp_list ml-5 "><small>The movie plots were preprocessed using SparkNLP library built on top of Apache Spark and SparkML. </small> </li>
							<li className="exp_list ml-5 "><small>Tokenization was done with RegexTokenizer and the stop words were removed using Stopwords remover.</small></li>
							<li className="exp_list ml-5 "><small> Term-document matrix from the plots was inputted to the machine learning model. </small></li>
							<li className="exp_list ml-5 "><small> Logistic Regression model was created in Spark to predict .</small></li>
							<li className="exp_list ml-5 "><small> Performance was improved with term frequency-inverse document frequency(tf-idf) based engineering technique.</small></li>
							<li className="exp_list ml-5 "><small> Custom feature engineering method, Word2Vec was implemented and an increase in performance was noted.</small></li>
							<li className="exp_list ml-5 "><small> Predictions for the test set were uploaded to the Kaggle website.</small></li>
						</ul>
					</Col>			
				</Row>
				<Row className = " ml-lg-5 mt-4">
					<Col  className = "edu_col">
							<a href="https://drive.google.com/file/d/1DkjQWlpvbe-Y7GADN86QwtWRhU3jH8OH/view?usp=sharing" className="proj_link" >
							<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">Healthcare IoT system with Blockchain <small>(2019) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Java, Pulse Oximeter, Arduino, MySQL </small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small>Developed a healthcare Iot system and secured it with Blockchain technology.</small> </li>
							<li className="exp_list ml-5 "><small>The Pulse Oximeter was used to monitor the heart beat of patients and the data was hashed with RSA cryptographic algorithm.</small> </li>
							<li className="exp_list ml-5 "><small>Studied the various blockchain consensus algorithms to secure the acquired data.</small></li>
							<li className="exp_list ml-5 "><small> 'Proof-of-work' consensus algorithm was used based on the comparisions. </small></li>
							<li className="exp_list ml-5 "><small> The project was successful and was managed well for the given amount of data.</small></li>
						</ul>
					</Col>			
				</Row>
				<Row className = " ml-lg-5 mt-4">
					<Col className = "edu_col">
							<a href="https://github.com/thanashr/SimpleDynamo" className="proj_link" >
							<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">Simple Amazon DynamoDB  <small>(2020) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Java, Android Studio, Socket Programming, Distributed Systems </small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small>Implemented a simple dynamo style key-value storage with replication, partitioning and failure handling.</small> </li>
							<li className="exp_list ml-5 "><small>Used a file-based content provider to create server and client threads, to open sockets, and to respond to the incoming requests.</small> </li>
							<li className="exp_list ml-5 "><small>Maintained linearizability using Quorum replication.</small></li>
							<li className="exp_list ml-5 "><small> Handled multiple node (AVDs) crashes, recovery, failures, and re-joins seamlessly while the other nodes were operating concurrently. </small></li>
						</ul>
					</Col>			
				</Row>
				<Row className = " ml-lg-5 mt-4">
					<Col  className = "edu_col">
							<a href="https://github.com/thanashr/Parallel-computation-on-hyper-quicksort" className="proj_link" >
							<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">Parallel Computation on Hyper Quicksort <small>(2020) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Python, mpi4py library</small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small>The Hyper quicksort by Bruce Wager was studied.</small> </li>
							<li className="exp_list ml-5 "><small>Improved the efficiency of sequential quicksort algorithm by replacing it with the parallel modified hyper quicksort algorithm.</small> </li>
							<li className="exp_list ml-5 "><small>The input was run parallely with different processors using the hyper quicksort algorithm.</small> </li>
							<li className="exp_list ml-5 "><small>Compared the performances of quicksort and hyper quicksort with different processors. (64 - 1M processors)</small></li>
							<li className="exp_list ml-5 "><small>Concluded the high performance of hyper quicksort for large number of processors with visualizations. </small></li>
						</ul>
					</Col>			
				</Row>
				<Row className = " ml-lg-5 mt-4">
					<Col  className = "edu_col">
							<a href="https://github.com/thanashr/Machine-Learning" className="proj_link" >
							<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">Multiclass Classification - Neural Networks <small>(2019) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Python, Keras, TensorFlow </small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small> Built a neural network from scratch to classify a multi labelled Fashion-MNIST dataset.</small> </li>
							<li className="exp_list ml-5 "><small>Studied the effect of a few hyperparameters such as learning rate and number of epochs, hidden layers and nodes in the hidden layers etc. </small> </li>
							<li className="exp_list ml-5 "><small>Obtained 83% accuracy for the model. </small> </li>
							<li className="exp_list ml-5 "><small>Optimized the model by building a CNN using Keras on top of TensorFlow with mini-batch gradient descent optimization and dropout regularization.</small></li>
							<li className="exp_list ml-5 "><small>Obtained 89% accuracy for the model.</small></li>
							<li className="exp_list ml-5 "><small>Clustered the condensed representation with K-Means clustering and Gaussian Mixture Models. </small></li>
						</ul>
					</Col>			
				</Row>
				<Row className = " ml-lg-5 mt-4">
					<Col  className = "edu_col">
							<a href="https://github.com/thanashr/Machine-Learning" className="proj_link" >
							<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">Grid Navigation - Reinforcement Learning <small>(2019) <FaLink className="projlink_link" size={20} /></small></p></a>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Python, OpenAI Gym </small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small> Built a reinforcement learning agent that navigates a 4x4 grid environment.</small></li>	
							<li className="exp_list ml-5 "><small> Implemented Q-learning for the agent to learn the optimal policy to reach the target.</small></li>													
							<li className="exp_list ml-5 "><small> The agent was trained for 1000 episodes and its increasing reward was observed.</small></li>
						</ul>
					</Col>			
				</Row>
				<Row className = " ml-lg-5 mt-4">
					<Col  className = "edu_col">
							<p className = "edu ml-4 mt-5  intro  font-weight-LIGHT">Boolean Information Retrieval System <small>(2019) </small></p>
							<p className = "edu_sub ml-4 intro font-weight-LIGHT"><small>Python </small></p> 
					</Col>
				
				</Row>
				<Row className = "text-justify ml-lg-5">
					<Col  className = "edu_col">
						<ul  >
							<li className="exp_list ml-5 "><small> Built a command line-based IR system for boolean queries.</small></li>
							<li className="exp_list ml-5 "><small> Preprocessed the data and obtained an inverted index.</small></li>
							<li className="exp_list ml-5 "><small> Generated output ranked by the tf-idf statistics using the Document at a time (DAAT) strategy.</small></li>
						</ul>
					</Col>			
				</Row>				
			</Container>
		</div>
	
	);
}

export default ProjectsSection;