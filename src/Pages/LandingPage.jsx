import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/home')
  }
  return (
    <>
      <div className='container '>
        <div className="header row align-items-center m-5" >
          <div className="col-lg-5">
            <h3 style={{ height: '100px' }}>Welcome to <span className='text-warning' >Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Media player APP.will allow you to add and remove their uploaded videos,also helps to arrange hem in ddefferent categories by providing drag and ddrops functionalities</p>
            <button onClick={handleNavigate} className='btn btn-info mt-3 '>Get started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img style={{ height: '800px', width:'100%',objectFit:'cover',position:'center' }} src="https://media1.tenor.com/images/33a46f727dbe790d436616a1f56fce9c/tenor.gif?itemid=7412752 " alt="LandingPage " />
          </div>
        </div>
        <div className="features">
          <h3 className='text-center' style={{ height: '100px' }}>Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
              <Card style={{height:'540px'}}>
                <Card.Img style={{height:'400px'}} variant="top" src="https://i.pinimg.com/474x/69/38/19/693819a387d246b33278b61dd9d6fd00--black-and-white-wallpaper-music-wallpaper.jpg" />
                <Card.Body>
                  <Card.Title style={{ height: '30px' }}>Managing Videos</Card.Title>
                  <Card.Text>
                   user can upload,view and remove the videos
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{height:'540px'}}>
                <Card.Img  style={{height:'400px'}}variant="top" src="https://i.pinimg.com/originals/4c/1a/52/4c1a52e76ecb222ace05df67dff0796a.gif" />
                <Card.Body>
                  <Card.Title style={{ height: '30px' }}>Categories Videos</Card.Title>
                  <Card.Text>
                  user can cateogories the videos according to their preference using drag and .
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{height:'540px'}}>
                <Card.Img  style={{height:'400px'}} variant="top" src="https://media1.tenor.com/images/18a0a33c874e26a55fe2456347567ae9/tenor.gif?itemid=16911003" />
                <Card.Body>
                  <Card.Title style={{ height: '30px' }}>Wach History</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
          </div>

        </div>
        <div className="video  row  border m-5 rounded">
          <div className="col-lg-5">
            <h3 className='text-warning' style={{height:'100px'}}>Simple, Fast and Powerfull</h3>

            
            <p style={{textAlign:'justify'}}> <span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolor, ab, fugiat inventore at officiis expedita iste laboriosam fuga quod ea consequatur dolorem. Quia eveniet velit eaque dolorum consequuntur saepe?</p>
            
            <p style={{textAlign:'justify'}}> <span className='fs-4'>Categorize Videos:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe perferendis voluptates id similique sed assumenda aspernatur cupiditate animi inventore quo incidunt, eius itaque repellendus iusto delectus vel eligendi minus molestiae.</p>
            <p style={{textAlign:'justify'}}> <span className='fs-4'>Watch videos:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam cupiditate minima incidunt ut explicabo architecto voluptatibus sit sunt porro. Exercitationem maiores quisquam repellendus eaque sit iure a numquam nesciunt!</p>
          </div>
          <div className="col">
          

          </div>
          <div className="col-lg-6">
          <iframe width="1521" height="615" src="https://www.youtube.com/embed/ZdMZ40GSVmc" title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default LandingPage