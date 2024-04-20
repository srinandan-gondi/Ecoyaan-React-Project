import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import home4 from '../media/home4.png'
import home5 from '../media/home5.png'
import home6 from '../media/home6.png'



export default function GraphicScroller() {
    
    const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

    const infoData = [
      { title: "Buy Less, Buy Better!", description: "Authentic source of truth for your sustainability needs.", image: <img src={home4} alt="Image"></img>, button: <button>About Us</button>},
    
      { title: "Follow us on Instagram", description: "For climate news, lifestyle tips, & updates", image: <img src={home5} alt="Image"></img>, button: <button>Follow Us</button> },
      { title: "Are you a business that truly cares about sustainability?", description: "We would love to work with you", image: <img src={home6} alt="Image"></img>, button: <button>Get In Touch</button> },
    ];
  
    
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentInfoIndex((prevIndex) => (prevIndex + 1) % infoData.length);
      }, 3000); 
  
      return () => clearInterval(intervalId);
    }, []);
  
    
    const handleButtonClick = (index) => {
      setCurrentInfoIndex(index);
    };
  
    return (
      <section className="image-container">
          {infoData[currentInfoIndex].image}
  
        
        <div className="overlay-content">
          <h2 className="overlay-text">{infoData[currentInfoIndex].title}</h2>
          <p className="overlay-text">{infoData[currentInfoIndex].description}</p>
          {infoData[currentInfoIndex].button}
          
          <br></br>
          
          
           
        </div>


        <div className="buttons-container">
            {infoData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  className={index === currentInfoIndex ? "active" : ""}
                >
                  
                  {'.'}
                </button>
              ))}
          </div>
        
        

        
      </section>
    );



}