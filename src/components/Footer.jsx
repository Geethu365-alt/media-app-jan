
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div>

<Row className='mt-5  align-item-center d-flex  w-100 justify-content-between'>
  <Col></Col>
  <Col lg={2} >
  
   
  <h4 style={{color:'blue'}} >media player</h4>

  <p className='justify-content-between'style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae quaerat similique, nam inventore eligendi officiis nostrum natus cumque ad ducimus, sunt blanditiis. Exercitationem est at, quis corrupti qui incidunt.</p>
  </Col>
  <Col lg={2} className='mx-5' >
  <h4 style={{color:'blue'}}>Links</h4>
  <p style={{color:'white'}}>Landing page</p>
  <p style={{color:'white'}}>Home page</p>
  <p style={{color:'white'}}>Watching Page</p>

  
  </Col>
  <Col>
  <h4 style={{color:'blue'}}>Guides</h4>
  <p style={{color:'white'}}>React</p>
  <p style={{color:'white'}}>React bootstrap</p>
  <p style={{color:'white'}}>bootswatch</p>
  
  </Col>
  <Col>
  <h4 style={{color:'blue'}}> Contact us</h4>
  <input type="text" placeholder='enter your email-id'/>
  <Button className='mt-3 btn btn-info'> subscribe</Button>

  
</Col>
<Col></Col> 

<h6 className='mt-5'style={{textAlign:'center'}}>Copyright@2025 Media-Player.Built with react</h6>


</Row>










    </div>
   
  )
}

export default Footer
