
import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../servises/allAPI';
import Videocard from './Videocard';


function Category({ dropVideoResponse }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState("")
  const [allCategories, setAllCategories] = useState([])




  //console.log(categoryName);

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, allVideos: [] })
      //console.log(result)
      if (result.status >= 200 && result.status < 300) {
        handleClose()
        setCategoryName("")
        getCategories()


      } else {

        console.log(result.message);
      }



    } else {

      alert("please fill the field")
    }


  }
  const getCategories = async () => {
    const { data } = await getCategoryAPI()
    setAllCategories(data)


  }
  //console.log(allCategories);
  const removeCategory = async (id) => {
    await deleteCategoryAPI(id)
    getCategories()


  }



  useEffect(() => {
    getCategories()


  }, [dropVideoResponse])
  const dragOver = (e) => {
    console.log("video card drag over the category");
    e.preventDefault()


  }
  const videoDrop = async (e, CategoryId) => {
    console.log("video dropped");
    const videoId = e.dataTransfer.getData("videoId")
    console.log("videoId" + videoId + "dropped into" + CategoryId);
    const { data } = await getAVideoAPI(videoId)
    console.log(data);
    const selectedCategory = allCategories.find(item => item.id == CategoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    const res = await updateCategoryAPI(CategoryId, selectedCategory)
    getCategories()



  }

  const videoDragStarted = async (e, videoId, CategoryId) => {
    let dataShare = { videoId, CategoryId }
    //console.log(dataShare);
    e.dataTransfer.setData("data", JSON.stringify(dataShare))


  }

  console.log(allCategories);
 

  return (
    <div>

      <div className='d-grid'>
        <button onClick={handleShow} className='btn btn-info'>Add-Category</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className='form-control' placeholder='category name' onChange={e => setCategoryName(e.target.value)} />



        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleAdd}>Create</Button>
        </Modal.Footer>
      </Modal>
      {
        allCategories?.length > 0 ? allCategories.map(Category => (

          <div className='border rounded p-3 m-3' droppable="true" onDragOver={e => dragOver(e)} onDrop={e => videoDrop(e, Category?.id)}>
            <div className='d-flex justify-content-between align-items-center'>
              <h4>{Category?.categoryName}</h4>
              <button className='btn btn-link' onClick={() => removeCategory(Category?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            <Row>
              {
                Category?.allVideos.length > 0 ? Category?.allVideos?.map(card => (
            
                  
                  <Col sm={12} className='mb-2' draggable onDragStart={e => videoDragStarted(e, card.id, Category.id)}>

                    <Videocard video={card} insideCategory={true} />

                  </Col>


                )) : null

              }
            </Row>
          </div>
        )) : <p className='text-danger fw-bolder'>Nothing to display</p>
      }
    </div>
  )
}

export default Category
