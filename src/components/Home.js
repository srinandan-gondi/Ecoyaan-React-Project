import { useEffect, useState } from "react";
import "../App.css";
import home1 from '../media/home1.png'
import home2 from '../media/home2.gif'
import home3 from '../media/home3.png'
import GraphicScroller from './GraphicScroller';

export default function Home(){

    

    return (
        
        <>

            <GraphicScroller />

            <div className="Home" >
            <div className="s1" style={{backgroundColor:"white"}}>
                <div className="s11" style={{backgroundColor:"white"}}>
                    <p style={{fontWeight:'bold', fontSize:'30px'}}>Join our community in creating a more sustainable future for everyone</p>
                    <p>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</p>
                    <p>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
                </div>
                <div>
                    <img src={home1} alt="Image" style={{width: '800px', height: '480px'}}></img>
                    
                </div>
            </div>

            <div className="s1" style={{backgroundColor:"white"}}>
                <div className="s11">
                    <p style={{fontWeight:'bold', fontSize:'30px'}}>Carefully curated Eco-friendly products</p>
                    <p>We believe that every purchase you make can have a positive impact on the planet and the future.</p>
                    <p>Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.</p>
                </div>
                <div>
                <img src={home2} alt="Image" style={{width: '700px', height: '400px'}}></img>
                </div>
            </div>
                
            <div className="s1" style={{backgroundColor:"white"}}>
                <div className="s11">
                    <p style={{fontWeight:'bold', fontSize:'30px'}}>For businesses that care deeply about sustainability</p>
                    <p>Do you run a business that is committed to sustainability in every aspect of your work?</p>
                    <p>Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?</p>
                    <p>If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability.</p>
                    Contact Us Today:
                    <br></br>
                    <button style={{width:'200px'}}>Contact Us</button>
                </div>
                <div>
                <img src={home3} alt="Image" style={{width: '800px', height: '480px'}}></img>
                </div>
            </div>

            
            
        </div>
 
        </>

           );
}