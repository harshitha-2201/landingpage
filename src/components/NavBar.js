
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpeg'
import main from '../assets/main.jpeg'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import videotitle from '../assets/videotitle.jpeg'
import ww1 from '../assets/ww1.jpeg';
import ww2 from '../assets/ww2.jpeg';
import ww3 from '../assets/ww3.jpeg';
import features1 from '../assets/features1.jpeg';
import features2 from '../assets/features2.jpeg';
import features3 from '../assets/features3.jpeg';
import resources1 from '../assets/resources1.jpeg'
import resources2 from '../assets/resources2.jpeg'




function NavBar() {
  return (
<div>
    <Navbar expand="lg" variant="light" bg="light"  >
      <Container  >
        <Navbar.Brand> <img src= {logo} alt = 'reactlogo' style={{height : '40' , width : 50 }}  /> </Navbar.Brand>
        <Navbar.Brand >Overview</Navbar.Brand>
        <Navbar.Brand >Pages</Navbar.Brand>
        <Navbar.Brand >Template</Navbar.Brand>
        <Navbar.Brand ><Button variant="primary">ContactUs</Button></Navbar.Brand>
      </Container>
    </Navbar>
    

  <div className='section1'>
  
    <div className='contained'>
        <div  className='headingmain'>
          <h1 style = {{fontSize: 40 }}>Build for enterprise businesses</h1>
          <p style = {{fontSize: 25}}>Opus includes everything you need to build a bueatiful websites gor your business.Build to perform and look good doing so.</p>
          <div>
          <Button variant="primary">learnMore</Button>
          <Button variant="outline-secondary" style = {{height : 40  }}>Explore</Button>
          </div>
        </div>
        <div className='mainimage'>
            <img src = {main} alt = "main react" style = {{height:380 }}/>
        </div>
    </div>

      <div className='section1foot'>
        <p style = {{height : 80 , width : 500 , paddingLeft : 250 , color : 'gray'}}>Scroll for more</p>
        <p style = {{height : 80 , width : 500 }}></p>
     </div> 

     <h4>Trusted and loved by the world's best team</h4>
     
        <div className='Teams'>
            <h3>Wetransfer</h3>
            <h3>Stamps</h3>
            <h3>Manter</h3>
            <h3>Surgarcane</h3>
        </div>

      <div className='section2'>
        <div>
            <h3>99.95%</h3>
            <h6>Accuracy rate</h6>
            <p>In fulfilling orders</p>
        </div>
        <div>
          <h3>5,000+</h3>
          <h6>Ecommerce business</h6>
          <p>partner with opus</p>
       </div>
     <div>
         <h3>99.96%</h3>
         <h6>of orders ship on time</h6>
        <p>with SLA</p>
     </div>
     <div>
         <h3>#1</h3>
         <h6>Best fullfillment Technology  </h6>
         <p>by Adweek's Retails Awards</p>
      </div>
      </div>
   

   <div className='section3'>
     <p>VIDEO TITLE</p>
     <h2>Inform users with Video sections</h2>
   </div>
   <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 videotitle"
          src={videotitle}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel >

    <div className='videopassage'>
        <p>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliquam erat volutpat.Prasent pulvinar  arc non lectus dapibus,a pulvinar mauris aliquam.</p>
    </div>

   <div className='section4'>
    <div  className='section41'>
        <h1>Make your site better with Opus</h1>
        <p style = {{paddingLeft : " 50px"}}>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliquam erat volutpat.Prasent pulvinar  arc non lectus dapibus,a pulvinar mauris aliquam.</p>
        <Button variant="primary">learnMore</Button>     
    </div>
    <div style = {{backgroundColor : 'GhostWhite', height : 200 }}>
    <div className='section42'>
          <h2 style = {{backgroundColor : 'White' , marginBottom : 20}}>Build or Customize a wegsite in minutes</h2>
          <h2>Our UI kit made for creativity</h2>
    </div>
    </div>
   </div>
   
 <div className='section5'>
    <div className='section51'>
        <h1>Ways to work withus</h1>
        <Button variant="primary">GetStarted</Button>    
    </div>
    <div>
      <div className='section52'>
       <div className='section521'>
         <img src = {ww1} alt = "char" style = {{ height : 280 , width : 320}}/>
         <h1 style = {{paddingTop : 15}}>Project Management</h1>
         <p style = {{paddingTop : 15 ,color : ' Gray'}}>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliquam erat volutpat</p>
       </div>
        <div className='section521'>
           <img src = {ww2} alt = "char" style = {{ height : 280 , width : 320}}/>
           <h1 style = {{paddingTop : 15}}>Advanced Anlyticst</h1>
           <p style = {{paddingTop : 15 ,color : ' Gray'}}>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliqum erat volutpat</p>
        </div>
        <div className='section521'>
           <img src = {ww3} alt = "char" style = {{ height : 280 , width : 320}}/>
           <h1 style = {{paddingTop : 15}}>Marketing & Dashbord</h1>
           <p style = {{paddingTop : 15 ,color : ' Gray'}}>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliqum erat volutpat</p>
        </div>
     </div>
     </div>
  </div>
 

     <div className='section4'>
    <div style = {{ height : 200 }}>
     <div className='section42'>
          <h2 style = {{ marginBottom : 20 }}>Choose your section</h2>
          <p style = {{fontSize : 15 }}>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliquam erat volutpat.Prasent pulvinar  a arc non lectus dapibus,a pulvinar mauris aliquam</p>
          <h2 style = {{ marginTop : 40 }}>Add the image  and text you need</h2>
          <p style = {{fontSize : 15 }}>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliquam erat volutpat.Prasent pulvinar  a arc non lectus dapibus,a pulvinar mauris aliquam</p>
        </div>
     </div>
    <div  className='section41'>
        <h1 style = {{marginTop : 100}}>Make your site better with Opus</h1>
         <p style = {{paddingLeft : " 100px"}}>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliquam erat volutpat.Prasent pulvinar  a arc non lectus dapibus,a pulvinar mauris aliquam.</p>
        <Button variant="outline-secondary">learnMore</Button>     
    </div>
   </div>
 
      <div className='section6'>
         <div>
            <h6 style = {{color: "gray"}}>Features</h6>
            <h1 className='featuresheading'>You're not just doing a business. you're doing a life</h1>
            <ul>
               <li>Responsive components</li>
               <li>Over 50 sections</li>
               <li>Handcrafted Pages</li>
          </ul>
         </div>
         <div>
            <img src = {features1} alt = "features" style = {{height : 600, width : 480 , marginRight : 100}}/>
         </div>

      </div>


    <div className='section61'>
    
        <div>
            <img src = {features2} alt = "features" style = {{height : 580, width : 480 , marginRight : 200}}/>
        </div>
        <div>
            <h6 style = {{color: "gray"}}>OUR KNOWLDGE</h6>
            <h1 className='featuresheading'>A UI Kit that's Modern &Elegant</h1>
            <p>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliquam erat volutpat.Prasent pulvinar  a arc non lectus dapibus,a pulvinar mauris aliquam.</p>
          <ul>
            <li>Responsive components</li>
            <li>Over 50 sections</li>
            <li>Handcrafted Pages</li>
          </ul>
        </div>
   </div>

   <div className='section6'>
      <div>
           <h6 style = {{color: "gray"}}>STAMPS</h6>
           <h1 className='featuresheading'>The Opus UI Kit lets you showcase your work in style.I's helped take our business online</h1>
           <h2>ALEXAF</h2>
           <p>DESIGNER<span style = {{color : "blue"}}>@STAMPS</span></p>
       </div>
     <div>
        <img src = {features3} alt = "features" style = {{height : 600, width : 480 , marginRight : 100}}/>
      </div>
   </div>
              




   <div className='section7'>
    <div className='section71'>
        <h1>Resources</h1>
        <Button variant="primary">GetStarted</Button>    
    </div>
    <div>
      <div className='section52'>
       <div className='section721'>
          <img src = {resources1} alt = "char" style = {{ height : 280 , width : 320}}/>
          <h3 style = {{paddingTop : 15}}>A high-converting, high-performing template</h3>
          <p style = {{paddingTop : 15 ,color : ' Gray'}}>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliquam erat volutpat</p>
          <button style = {{border:" solid 1px white" ,padding : 10}}>Read Article</button>
       </div>
        <div className='section721'>
            <img src = {resources2} alt = "char" style = {{ height : 280 , width : 320}}/>
            <h3 style = {{paddingTop : 15}}>with a clean,minimal professional look</h3>
            <p style = {{paddingTop : 15 ,color : ' Gray'}}>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliqum erat volutpat</p>
            <button style = {{border:" solid 1px white" ,padding : 10}}>Read Article</button>
        </div>
        <div className='section721'>
            <img src = {ww3} alt = "char" style = {{ height : 280 , width : 320}}/>
            <h3 style = {{paddingTop : 15}}>Opus made our journt possible</h3>
            <p style = {{paddingTop : 15 ,color : ' Gray'}}>Lorem ipsum dolor sit amet , consectere adipising elit,Cras egat consectetur eros.Aliqum erat volutpat</p>
            <button style = {{border:" solid 1px white" ,padding : 10}}>Read Article</button>
        </div>
      </div>
      </div>
    </div>
 

    <div>
      <h1 style = {{paddingTop : 100}}>Opus</h1>
    </div>
  <div className='footer'>
         <div className='footer1'>
          <h2 style = {{color : 'gray' }}>Overview</h2>
          <ul>
            <li>Overview</li>
            <li>Landings</li>
            <li>Company</li>
            <li>Pricing</li>
            <li>CMS Pages</li>
            <li>Accounts</li>
            <li>Buy for Figma</li>
          </ul>
         </div>


        <div className='footer1'>
          <h2 style = {{color : 'gray' }}>Pages</h2>
         <ul>
           <li>Landing1</li>
           <li>Landing2</li>
            <li>Landiiing3</li>
            <li>Company1</li>
            <li>Company2</li>
            <li>Company3</li>
            <li>Blog1</li>
            <li>Blog2</li>
            <li>Contact1</li>
            <li>Contact3</li>
            <li>Contact3</li>
           <li>Buy for Figma</li>
          </ul>
       </div>
    

    <div className='footer1'>
          <h2 style = {{color : 'gray' }}>Pages</h2>
         <ul>
           <li>case Studies</li>
           <li>Careers</li>
            <li>Pricing1</li>
            <li>Pricing2</li>
            <li>Pricing3</li>
            <li>Login</li>
            <li>Resigster</li>
            <li>ForgotPassword</li>
            <li>Blog Post</li>
            <li>Team Member</li>
            <li>Case Study</li>
           <li>JOb Post</li>
          </ul>
       </div>
      
      <div className='footer2'>
        <input type = "text" placeholder='Eamil adress'/>
        <Button variant="primary">GetStarted</Button>  
        <div className='footer3'>
        <div>
          <p style = {{color : 'gray'}}>OPUS FOR WEBFLOW</p>
          <h2 style = {{color : 'blue'}}>Lorem Ipsum</h2>
        </div>  
        <div style = {{paddingLeft:40}}>
          <p style = {{color : 'gray'}}>OPUS FOR WEBFLOW</p>
          <h2 style = {{color : 'blue'}}>Lorem Ipsum</h2>
        </div>  
        </div>
      
        <p style = {{paddingTop:50 ,color : "gray"}}>Templated by<span style = {{color : "blue"}}> Lorem</span>-Powered by<span style = {{color : "blue"}}> Ipsum</span></p>
        </div>
        
  </div>
  <hr style = {{ height : 1 ,border : "none" , backgroundColor : "black"}}/>
  <div className='footersection'>
    <p>Style Guide</p>
    <p>Licence</p>
    <p>changelog</p>
  </div>
   

     
  </div>
</div>
   
   
   
  );
}

export default NavBar;

