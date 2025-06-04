import Header from "./coponents/header"

// src/App.jsx
import { useEffect, useState } from 'react';
import { client } from './sanity'; // Only need 'client' for this example
import Hero from "./coponents/hero";
import About from "./coponents/about";
import Gallery from "./coponents/gallery";
import Contact from "./coponents/contact";


function App() {
  const [helloMessage, setHelloMessage] = useState('Loading...'); // Default message
  const [error, setError] = useState(null);

  useEffect(() => {
    // GROQ query to fetch the 'helloText' from a document of type 'siteSettings'
    // Since there should ideally be only one siteSettings document,
    // we use '[0]' to get the first one found.
    const query = '*[_type == "siteSettings"][0]{ helloText }';

    client.fetch(query)
      .then((data) => {
        if (data && data.helloText) {
          setHelloMessage(data.helloText);
          console.log(data)
        } else {
          setHelloMessage('Hello text not found in Sanity. Did you publish it?');
        }
      })
      .catch((err) => {
        console.error("Failed to fetch hello text from Sanity:", err);
        setError("Error fetching data from Sanity. Check console for details.");
      });
  }, []); // Run once on component mount

  if (error) return <div>{error}</div>;

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Gallery/>
      <Contact/>
      <div className="App">
        <h1>{helloMessage}</h1> {/* This will display the text from Sanity */}
        <p>This text is fetched directly from your Sanity CMS!</p>
        {/* You can re-add your tattoo pieces display here later */}
        {/*
      {tattooPieces.length > 0 && (
        <div className="tattoo-grid">
          ... your tattoo map rendering ...
        </div>
      )}
      */}
      </div>
    </>
  );
}

export default App;
