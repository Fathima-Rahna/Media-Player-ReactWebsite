


import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div style={{ height: '300px',width:'100%' }} className='container mt-5 '>
            <div className="footer-content d-flex justify-content-between">


                <div style={{ width: '400px'}} className="media">
                    <h5 className='d-flex'><i style={{ height: '30px' }}  className="fa-solid fa-music me-3"></i>Media Player</h5>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ea soluta quo amet labore sed at illo?
                     Rem pariatur sunt amet, reprehenderit ipsa nemo.</p>
                     <span>Code liscenced MIT,dos CC BY 3.0.</span>
                     <span>Currently v5.3.2</span>
                </div>

                <div className="links d-flex flex-column" >
                    <h5 className='d-flex' style={{ height: '30px' }}>Links</h5>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
                    <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
                    <Link to={'/watch'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
                    </div> 


                <div className="guides links d-flex flex-column">
                    <h5 style={{ height: '30px' }}>Guides</h5>
                    <a href ="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
                    <a href ="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
                    <a href ="https://react-bootstsrap.github.io/" target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
                    </div>



                <div className="contact">
                    <h5 style={{ height: '30px' }}>Contact Us</h5>
                    <div className="d-flex">
                        <input type='text' className='form-control me-1' placeholder='E-mail Id Please'/>
                        <button className='btn btn-info'><i className = "fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="icons d-flex justify-content-between mt-2">
                    <a href ="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-square-twitter fa-1x"></i></a>
                    <a href ="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-square-instagram fa-1x"></i></a>
                    <a href ="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-square-facebook fa-1x"></i></a>
                    <a href ="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class= "fa-brands fa-linkedin fa-1x"></i></a>
                    <a href ="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-square-github fa-1x"></i></a>
                    <a href ="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-phone fa-1x"></i></a>

                    </div>
                
                </div>
            </div>
            <p className="text-center mt-5">Copyright & copy; 2024 Media Player.Built with React.</p>
        </div>
    )
}

export default Footer
