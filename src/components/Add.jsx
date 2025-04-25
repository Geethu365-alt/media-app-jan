 import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../servises/allAPI';


 function Add({setUploadVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const[UploadVideo,setUploadVideo]=useState({id:"",title:"",url:"",link:""})
  console.log(UploadVideo);
const getYouTubeLink=(e)=>{
const {value}=e.target
//console.log(value)
if (value.includes("v=")){
  let VID=value.split('v=')[1].slice(0,11)
//console.log(`https:`)
  setUploadVideo({...UploadVideo,link:`https://www.youtube.com/embed/${VID}`})

}else{


  setUploadVideo({...UploadVideo,link:""})
}
}
const handleAdd=async()=>{
const{id,title,url,link}=UploadVideo
if(!id || !title || !url || !link){
alert("please fill the fields")


}else{
//upload video to json server

const result = await uploadVideoAPI(UploadVideo)
console.log(result);
if(result.status>=200 && result.status<300){
alert("vdeo uploaded")
handleClose()
  setUploadVideo({id:"",title:"",url:"",link:""})
  setUploadVideoResponse(result.data)

}else{
  alert(result.message)
}
}


}


   return (
     <div>
<div className='d-flex mb-5 mt-5 align-item-center'>
<h2>Upload Videos</h2>
<button className='btn btn-link'onClick={handleShow}><i className='fa-solid fa-arrow-up-from-bracket fa-beat fa-2x mb-2'></i></button>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>



          <FloatingLabel
        controlId="floatingInput1"
        label=" video Id "
        className="mb-3"
      >
        <Form.Control type="Text" placeholder=" videoId" onChange={(e)=>setUploadVideo({...UploadVideo,id:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput2"
        label=" video Name "
        className="mb-3"
      >
        <Form.Control type="Text" placeholder="Enter videoName"onChange={(e)=>setUploadVideo({...UploadVideo,title:e.target.value})} />
        
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput3"
        label=" Image url "
        className="mb-3"
      >
        <Form.Control type="Text" placeholder="Enter videoId"onChange={(e)=>setUploadVideo({...UploadVideo,url:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput4"
        label=" video url "
        className="mb-3"
      >
        <Form.Control type="Text" placeholder="Enter videoUrl"onChange={getYouTubeLink} />
      </FloatingLabel>
      
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info"onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>

</div>


       
     </div>
   )
 }
 
 export default Add
 