import React from 'react'
import Navbar from '../component/Navbar'
import { useState } from 'react'
import Card from '../component/card'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react'
import MovieFAQ from '../component/question'
import Footer from '../component/Footer'
gsap.registerPlugin(ScrollTrigger);



const Home = () => {
    const[email,setEmail] =useState('')
    const[error,setError] =useState('')

useEffect(() => {
    const cards = gsap.utils.toArray(".box"); // all cards inside .box

    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".box",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse", 
          // play when entering, reverse when leaving
          markers: false, // set true for debugging
        },
      }
    );
  }, []);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    // Clear error instantly as user starts typing
    if (error) setError('');
  };

  const validateEmail = (email) => {
    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleGetStarted = (e) => {
    e.preventDefault(); // Prevent form submission if in a <form>
    
    if (!email) {
      setError('Email is required.');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      alert(`Starting sign-up process for: ${email}`);
      // In a real app, you would navigate here: navigate('/signup', { state: { email } });
    }
  };



  return (
    <div className='page-1'>
       <Navbar/>
       <div id="hero-content">
       <h2>Unlimited movies, TV  </h2>
       <h2>shows and more.</h2>
       <h3>Starts at ₹149. Cancel at any time.</h3>
      
       <h4> Ready to watch? Enter your email to create or restart your membership</h4>
       
       </div>
      <div id="email">
        <input className='email-input'
        type='email'
        placeholder='Email address'
        value={email}
        onChange={handleInputChange}/>
        <button onClick={handleGetStarted} id="get">Get Started</button>
      </div>

      <div id="page-2">
        <h2>Trending Movies </h2>
        <div id="card">
          <Card/>
        </div>

        <h3>More enjoyable features which force you to join us</h3>

      </div>
      
      <div id="page-3">
        <div className="box">
          <h2>Enjoy on your TV.</h2>
          <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>

        </div>
        <div className="box">
          <h2>Download your shows to watch offline.</h2>
          <h3>Save your favorites easily and always have something to watch.</h3>

        </div>
        <div className="box">
          <h2>Watch everywhere.</h2>
          <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>

        </div>
        <div className="box">
          <h2>Create profiles for kids.</h2>
          <h3>Send children on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
        </div>
      </div>
           
      <div id="page-4">
        <h2>Frequently Asked Questions box for your comfort</h2>
        <MovieFAQ/>
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>


  )
}

export default Home