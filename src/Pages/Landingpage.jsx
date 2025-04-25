
import React from 'react'
import { Button, Card, Col, Row, } from 'react-bootstrap'
 import {useNavigate} from 'react-router-dom'


function Landingpage() {

  const navigateByUrl =useNavigate()
  return (
    <div>
    <Row className="mt-5 align-item-center d-flex justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"blueviolet",fontsize:"40px"}} >Welcome to <span className='text-warning'>Media-Player</span></h1>
        <p className='fs-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam accusamus, iste ipsam aliquam sequi iusto! Blanditiis, quam a, sint, aliquid molestiae modi iure odio quaerat culpa aspernatur reiciendis officiis deserunt!</p>
        <Button onClick={()=>navigateByUrl('/home')} className="btn btn-info">Get Started</Button>
        
        </Col>



        
        <Col lg={5} className="mt-1">
        <img src="https://media.tenor.com/OiwgU0MtwOcAAAAC/213.gif"height="300px"width="500px" alt="" />
        </Col>
        <Col></Col>






    </Row>




<div className="container mb-5 mt-5 d-flex flex-column align-item-center justify-content-center w-100">

<h5 className='text-warning'style={{fontsize:"40px"}}>Features</h5>
<div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>

<Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/R.0b87e7a886b3c3e27c26d7a263d52578?rik=3izFWkN63pIXdw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31000000%2fMusic-music-31055637-1920-1200.jpg&ehk=8%2bqf3CxkEt0t976kDpbYH6IqX5WilP6OZ5GJE711%2fkA%3d&risl=&pid=ImgRaw&r=0"height="200px"width="200px" />
      <Card.Body>
        <Card.Title  style={{color:'white'}}>Managing Videos</Card.Title>
        <Card.Text style={{color:'black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>




<Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/000/414/517/original/vector-colorful-musicnotes-on-white-background.jpg"height="200px"width="200px" />
      <Card.Body>
        <Card.Title  style={{color:'white'}}>Managing videos</Card.Title>
        <Card.Text style={{color:'black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/021/990/502/large_2x/colorful-music-notes-background-with-sheet-music-disc-and-treble-clef-illustration-ai-generative-free-photo.jpg"height="200px"width="200px" />
      <Card.Body>
        <Card.Title  style={{color:'white'}}>Managing videos</Card.Title>
        <Card.Text style={{color:'black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>


    
  



</div>

</div>


<div className='container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center'>
  <div className='col-lg ms-5'>
<h4 className='text-warning'>Simple,Powerful & Fast</h4>
<h6 className='mb-5 mt-4'><span className='text-warning'>Play Everything</span>:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime commodi sequi doloremque ab velit beatae, labore, tempora sit corrupti nostrum quas. Repellat sed placeat libero officia. Voluptatibus quis quidem deleniti.</h6>

<h6 className='mb-5 mt-4'><span className='text-warning'>Categorised video</span>:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime commodi sequi doloremque ab velit beatae, labore, tempora sit corrupti nostrum quas. Repellat sed placeat libero officia. Voluptatibus quis quidem deleniti.</h6>

<h6 className='mb-5 mt-4'><span className='text-warning'>Managing video</span>:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime commodi sequi doloremque ab velit beatae, labore, tempora sit corrupti nostrum quas. Repellat sed placeat libero officia. Voluptatibus quis quidem deleniti.</h6>
</div>
  <div className='col-lg-5 ms-5'>
  <iframe width="500" height="315" src="https://www.youtube.com/embed/PyiDVQwcCGs?si=sIOgtRA2unniVAie" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>

  </div>




</div>







</div>
    
  )
}

export default Landingpage
