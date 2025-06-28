import Header from "./coponents/header"

// src/App.jsx
import { useEffect, useState } from 'react';
//import { client } from './sanity'; // Only need 'client' for this example
import Hero from "./coponents/hero";
import About from "./coponents/about";
import Gallery from "./coponents/gallery";
import Contact from "./coponents/contact";
import Review from "./coponents/review";
import Footer from "./coponents/footer";
import Artist from "./coponents/artist";


function App() {
  //const [helloMessage, setHelloMessage] = useState('Loading...'); // Default message
  //const [error, setError] = useState(null);

  //useEffect(() => {
    // GROQ query to fetch the 'helloText' from a document of type 'siteSettings'
    // Since there should ideally be only one siteSettings document,
    // we use '[0]' to get the first one found.



  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Artist/>
      <Gallery/>
      <Contact/>
      <Review/>
      <Footer/>
    </>
  );
}

export default App;
