import { useEffect, useState } from "react";
import "../App.css";
import aboutus1 from '../media/aboutus1.png'
import aboutus2 from '../media/aboutus2.png'
import aboutus3 from '../media/aboutus3.png'
import aboutus4 from '../media/aboutus4.png'
import aboutus5 from '../media/aboutus5.png'
import aboutus6 from '../media/aboutus6.png'
import aboutus7 from '../media/aboutus7.png'
import aboutus8 from '../media/aboutus8.png'
import aboutus9 from '../media/aboutus9.png'
import aboutus10 from '../media/aboutus10.png'
import aboutus11 from '../media/aboutus11.png'
import aboutus12 from '../media/aboutus12.png'
import aboutus13 from '../media/aboutus13.png'


export default function AboutUs(){

    

    return (
        <div className="AboutUs" >
            <div className="s1" style={{backgroundColor:"white"}}>
                <div className="s11" style={{backgroundColor:"white"}}>
                    <h1>About Ecoyaan</h1>
                    <p>At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.</p>
                    <p>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>
                    <p>
                    Tips and tricks to adopt a more eco-friendly and low-waste lifestyle
                    <br></br>
                    Videos, posts, and quizzes on climate change and sustainability
                    <br></br>
                    Events and pledges that invite you to adopt a more sustainable lifestyle
                    </p>
                </div>
                <div>
                    <img src={aboutus1} alt="Image" style={{width: '800px', height: '480px'}}></img>
                    
                </div>
            </div>

            <div>
                <h1>Our Values</h1>
                <div className="s1" style={{backgroundColor:"white"}}>
                    <div className="s1" style={{backgroundColor:"white"}}>      
                        <div>
                            <img src={aboutus2} alt="Image" style={{width: '300px', height: '200px'}}></img>
                        </div>
                        <div>
                            <h2>Trust</h2>
                            <p>We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
                        </div>
                    </div>
                    <div className="s1" style={{backgroundColor:"white"}}>
                        <div>
                            <img src={aboutus3} alt="Image" style={{width: '300px', height: '200px'}}></img>
                        </div>
                        <div>
                            <h2>Authenticity</h2>
                            <p>We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.</p>
                        </div>
                    </div>
                </div>
                <div className="s1" style={{backgroundColor:"white"}}>
                <div className="s1" style={{backgroundColor:"white"}}>      
                        <div>
                            <img src={aboutus4} alt="Image" style={{width: '300px', height: '200px'}}></img>
                        </div>
                        <div>
                            <h2>Impact</h2>
                            <p>We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.</p>
                        </div>
                    </div>
                    <div className="s1" style={{backgroundColor:"white"}}>
                        <div>
                            <img src={aboutus5} alt="Image" style={{width: '300px', height: '200px'}}></img>
                        </div>
                        <div>
                            <h2>Fun & Engaging</h2>
                            <p>Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1>Our Story</h1>
                <div className="s11" style={{backgroundColor:"white"}}>
                    <div className="s1" style={{backgroundColor:"white"}}>      
                        <div>
                            <img src={aboutus6} alt="Image" style={{width: '200px', height: '200px'}}></img>
                        </div>
                        <div>
                            
                            <p>We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.</p>
                        </div>
                    </div>
                    <div className="s1" style={{backgroundColor:"white"}}>
                        <div>
                            <img src={aboutus7} alt="Image" style={{width: '200px', height: '200px'}}></img>
                        </div>
                        <div>
                            
                            <p>Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.</p>
                            <p>We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.</p>
                            <p>As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.</p>
                            <p>Connect with the founders on LinkedIn here: Abhishek Rao   Sarwanjeet Singh </p>
                        </div>
                    </div>
                </div>
                
               
                        
                
                

            </div>

            <div>
           

                <div className="s11" style={{backgroundColor:"white"}}>
                    <h1>Meet the Team</h1>
                    <div className="s1" style={{backgroundColor:"white"}}>
                        <div className="s1" style={{backgroundColor:"white"}}>      
                            <div>
                                <img src={aboutus8} alt="Image" style={{width: '200px', height: '200px'}}></img>
                            </div>
                            <div>
                                <h2>SHRUTHI</h2>
                                <h3 style={{color:'brown'}}>SOCIAL MEDIA</h3>
                                <p>Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business here </p>
                            </div>
                        </div>
                        <div className="s1" style={{backgroundColor:"white"}}>
                            <div>
                                <img src={aboutus9} alt="Image" style={{width: '200px', height: '200px'}}></img>
                            </div>
                            <div>
                                <h2>URMIL</h2>
                                <h3 style={{color:'brown'}}>SOCIAL MEDIA</h3>
                                <p>Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business here </p>
                            </div>
                        </div>
                        <div className="s1" style={{backgroundColor:"white"}}>
                            <div>
                                <img src={aboutus10} alt="Image" style={{width: '200px', height: '200px'}}></img>
                            </div>
                            <div>
                                <h2>DIVYA</h2>
                                <h3 style={{color:'brown'}}>UX DESIGN</h3>
                                <p>Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on Behance</p>
                            </div>
                        </div>
                    </div>
                    <div className="s1" style={{backgroundColor:"white"}}>
                        <div className="s1" style={{backgroundColor:"white"}}>      
                            <div>
                                <img src={aboutus11} alt="Image" style={{width: '200px', height: '200px'}}></img>
                            </div>
                            <div>
                                <h2>PRASHANITH</h2>
                                <h3 style={{color:'brown'}}>ENGINEERING</h3>

                                <p>Prashanith is our front-end engineer, who brings the UX designs to life</p>

                            </div>
                        </div>
                        <div className="s1" style={{backgroundColor:"white"}}>
                            <div>
                                <img src={aboutus12} alt="Image" style={{width: '200px', height: '200px'}}></img>
                            </div>
                            <div>
                                <h2>SAI ABHILASH</h2>
                                <h3 style={{color:'brown'}}>ENGINEERING</h3>
                                <p>Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform</p>
                            </div>
                        </div>
                        <div className="s1" style={{backgroundColor:"white"}}>
                            <div>
                                <img src={aboutus13} alt="Image" style={{width: '200px', height: '200px'}}></img>
                            </div>
                            <div>
                                <h2>???</h2>
                                <h3 style={{color:'brown'}}>TEAM ECOYAAN</h3>
                                <p>This spot awaits you. Check out our open positions</p>
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>    
    </div>
    );
}
