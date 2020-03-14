import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
     return (
        <div>
           <Header/>
           <div className="clearfix"></div>
           <Banner/>
           <div className="clearfix"></div>
           <Content/>
           <div className="clearfix"></div>
           <Footer/>
        </div>
     );
  }
}

class Header extends Component {
  render() {
     return (
      <header>
      <div className="container">
        <div className="logo"> <a href="index.html"><img src="/images/logo.png" alt="logo"/></a> </div>
        <div className="navbar-menu">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active"> <a className="nav-link" href="#">Home</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Jobs</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">How it works</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Contact us</a> </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
     );
  }
}
class Content extends Component {
  render() {
     return (
      <React.Fragment>
      <section className="brand-logo">
      <div className="container">
        <ul>
          <li><a href="#"><img src="images/vaio.png" alt=""/></a></li>
          <li><a href="#"><img src="images/airbnb.png" alt=""/></a></li>
          <li><a href="#"><img src="images/slack.png" alt=""/></a></li>
          <li><a href="#"><img src="images/walmart.png" alt=""/></a></li>
          <li><a href="#"><img src="images/logitech.png" alt=""/></a></li>
        </ul>
      </div>
    </section>
    <div className="clearfix"></div>
    <section class="job-posted">
  <div class="container">
    <div class="job-posted-left">
      <ul>
        <li><img src="images/airbnb-logo.png" alt=""/></li>
        <li><img src="images/adidas-logo.png" alt=""/></li>
      </ul>
      <ul class="job-posted-last">
        <li><img src="images/google-logo.png" alt=""/></li>
        <li><img src="images/slack-logo.png" alt=""/></li>
      </ul>
    </div>
    <div class="job-posted-right">
      <div class="content-title">
        <h2>Over 12’000+ Top Companies Job Posted</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ex tristique, tristique libero eu, cursus eros. Integer porttitor vitae magna eget molestie. Nam accumsan gravida feugiat. Etiam ultrices eros et orci malesuada, in rutrum nunc placerat.</p>
        <p>Donec a mi suscipit, ultricies justo nec, hendrerit nunc. Nam sed tortor et eros iaculis tempus id ut velit. Sed quam dolor, sagittis ac tellus eget.</p>
        <div class="job-post-button"> <a href="#" class="btn btn-custom get-start-btn">Get Started</a> </div>
      </div>
    </div>
  </div>
</section>
<div className="clearfix"></div>
<section className="currently-job">
  <div className="container">
    <div className="content-title">
      <h2>Currently available jobs</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ex tristique, tristique libero eu, cursus eros. Integer porttitor vitae magna eget molestie. Nam accumsan gravida feugiat. Etiam ultrices eros et orci malesuada, in rutrum nunc placerat.</p>
    </div>
    <div className="current-job-list">
      <ul>
        <li>
          <div className="job-profile-img"><img src="images/job-profile-img1.jpg" alt=""/></div>
          <div className="job-profile-detail">
            <h3>Data Center Support Specialist Engineer</h3>
            <span className="job-profile-list-detail"><img src="images/user-profile.png" alt=""/> It Contractor</span> <span class="job-profile-list-detail"><img src="images/calender.png" alt=""/> 30-10-2019</span> <span class="job-profile-list-detail"><img src="images/location.png" alt=""/> Jaipur</span> </div>
          <div className="job-profile-time"><img src="images/flag-icon-full.png" alt=""/> Full Time</div>
          <div className="apply-now"><a href="#" className="btn btn-custom">Apply Now</a></div>
        </li>
        <li>
          <div className="job-profile-img"><img src="images/job-profile-img2.jpg" alt=""/></div>
          <div className="job-profile-detail">
            <h3>Sales Manager</h3>
            <span className="job-profile-list-detail"><img src="images/user-profile.png" alt=""/> It Contractor</span> <span class="job-profile-list-detail"><img src="images/calender.png" alt=""/> 30-10-2019</span> <span class="job-profile-list-detail"><img src="images/location.png" alt=""/> Jaipur</span> </div>
          <div className="job-profile-time part-time"><img src="images/flag-icon-part.png" alt=""/> Part Time</div>
          <div className="apply-now"><a href="#" className="btn btn-custom">Apply Now</a></div>
        </li>
        <li>
          <div className="job-profile-img"><img src="images/job-profile-img1.jpg" alt=""/></div>
          <div className="job-profile-detail">
            <h3>Data Center Support Specialist Engineer</h3>
            <span className="job-profile-list-detail"><img src="images/user-profile.png" alt=""/> It Contractor</span> <span class="job-profile-list-detail"><img src="images/calender.png" alt=""/> 30-10-2019</span> <span class="job-profile-list-detail"><img src="images/location.png" alt=""/> Jaipur</span> </div>
          <div className="job-profile-time"><img src="images/flag-icon-full.png" alt=""/> Full Time</div>
          <div className="apply-now"><a href="#" className="btn btn-custom">Apply Now</a></div>
        </li>
      </ul>
      <a href="#" className="view-all">View All &nbsp;&nbsp;</a> </div>
  </div>
</section>
<div className="clearfix"></div>
<section className="job-category">
<div className="container">
        <div className="content-title">
          <h2>Jobs by categories</h2>
        </div>
	</div>
  <div className="job-category-slider">
  <div className="item">
                <div className="job-category-box">
                	<div className="job-category-top">
                    	<img src="images/job-category-img1.jpg" alt=""/>
                        <div className="job-category-text">
                        	<h4>Job Category 1</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ex tristique, tristique libero eu, cursus eros. Integer porttitor.</p>
                            <div className="job-category-detail">
                            	<span>7,255 views</span>
                                <span>765 applies</span>
                                <span>2h 40min</span>
                            </div>
                        </div>
                    </div>
                    <div className="job-category-bottom">
                    	<a href="#" className="btn btn-custom">View Details</a>
                        <a href="#" className="btn btn-custom apply-now-btn">Apply Now</a>
                    </div>
                </div>     
    </div>
    <div className="item">
                <div className="job-category-box">
                	<div className="job-category-top">
                    	<img src="images/job-category-img2.jpg" alt=""/>
                        <div className="job-category-text">
                        	<h4>Job Category 2</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ex tristique, tristique libero eu, cursus eros. Integer porttitor.</p>
                            <div className="job-category-detail">
                            	<span>7,255 views</span>
                                <span>765 applies</span>
                                <span>2h 40min</span>
                            </div>
                        </div>
                    </div>
                    <div className="job-category-bottom">
                    	<a href="#" className="btn btn-custom">View Details</a>
                        <a href="#" className="btn btn-custom apply-now-btn">Apply Now</a>
                    </div>
                </div>     
      </div>
      <div class="item">
                <div class="job-category-box">
                	<div class="job-category-top">
                    	<img src="images/job-category-img3.jpg" alt=""/>
                        <div class="job-category-text">
                        	<h4>Job Category 3</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ex tristique, tristique libero eu, cursus eros. Integer porttitor.</p>
                            <div class="job-category-detail">
                            	<span>7,255 views</span>
                                <span>765 applies</span>
                                <span>2h 40min</span>
                            </div>
                        </div>
                    </div>
                    <div class="job-category-bottom">
                    	<a href="#" class="btn btn-custom">View Details</a>
                        <a href="#" class="btn btn-custom apply-now-btn">Apply Now</a>
                    </div>
                </div>     
            </div>
            <div class="item">
                <div class="job-category-box">
                	<div class="job-category-top">
                    	<img src="images/job-category-img4.jpg" alt=""/>
                        <div class="job-category-text">
                        	<h4>Job Category 4</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ex tristique, tristique libero eu, cursus eros. Integer porttitor.</p>
                            <div class="job-category-detail">
                            	<span>7,255 views</span>
                                <span>765 applies</span>
                                <span>2h 40min</span>
                            </div>
                        </div>
                    </div>
                    <div class="job-category-bottom">
                    	<a href="#" class="btn btn-custom">View Details</a>
                        <a href="#" class="btn btn-custom apply-now-btn">Apply Now</a>
                    </div>
                </div>     
            </div>  
  </div>
</section>
<div class="clearfix"></div>
<section class="testimonials">
    <div class="container">
      <div class="content-title">
          <h2>Testimonials</h2>
      </div>
      <div class="testimonial-slider">
      	<div class="item">
        	<span class="img-block"><img src="images/user1.png" alt="client"/></span>
          	<div class="ts-content">
            	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ex tristique, tristique libero eu, cursus eros. Integer porttitor vitae magna eget molestie. Nam accumsan gravida feugiat. Etiam ultrices eros et orci malesuada.</p>
          		<div class="client-name">Cathy D’Cruze</div>
            </div>       
      	</div>  
        <div class="item">
        	<span class="img-block"><img src="images/user1.png" alt="client"/></span>
          	<div class="ts-content">
            	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ex tristique, tristique libero eu, cursus eros. Integer porttitor vitae magna eget molestie. Nam accumsan gravida feugiat. Etiam ultrices eros et orci malesuada.</p>
          		<div class="client-name">Cathy D’Cruze</div>
            </div>       
      	</div>
        <div class="item">
        	<span class="img-block"><img src="images/user1.png" alt="client"/></span>
          	<div class="ts-content">
            	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ex tristique, tristique libero eu, cursus eros. Integer porttitor vitae magna eget molestie. Nam accumsan gravida feugiat. Etiam ultrices eros et orci malesuada.</p>
          		<div class="client-name">Cathy D’Cruze</div>
            </div>       
      	</div>
    </div>
    </div>
</section>
</React.Fragment>
     );
  }
}
class Footer extends Component {
  render() {
     return (
      <footer>
      <div className="container">
        <div className="social-icon"> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-google-plus"></i></a> </div>
        <ul className="footer-menus">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
        <div className="copyright-text">Copyright © 2019 Job portal. All rights reserved</div>
      </div>
    </footer>
     );
  }
}

class Banner extends Component {
  render() {
     return (
      <section className="banner-content">
  <div className="container-fluid">
    <div className="banner-detail banner-middle-detail">
      <div className="banner-text">
        <h1>Find your <span>Dream Jobs TODAY!</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ex tristique, tristique libero eu, cursus eros. Integer porttitor vitae magna eget molestie. Nam accumsan gravida feugiat.</p>
        <div className="search-job">
          <input className="form-control" type="text" placeholder="Search here"/>
          <a href="#" className="btn btn-custom search-btn">Search <img src="images/search.png" alt="search-icon"/></a> </div>
      </div>
    </div>
    <div class="banner-detail banner-left-detail">
      <h2>Client <br/>
        <span>Post a Job</span></h2>
      <div class="banner-buttons"> <a href="#" class="btn btn-custom register-btn">Register</a> <strong>OR</strong> <a href="#" class="btn btn-custom login-btn">Login</a> </div>
    </div>
    <div class="banner-detail">
      <h2>Staff <br/>
        <span>Get a Job</span></h2>
      <div class="banner-buttons"> <a href="#" class="btn btn-custom register-btn">Register</a> <strong>OR</strong> <a href="#" class="btn btn-custom login-btn">Login</a> </div>
    </div>
  </div>
</section>
     );
  }
}


export default App;