
import React, { useEffect, useState } from 'react'
import VideoCard from '../components/Videocard'
import { Col, Row } from 'react-bootstrap'
import { getAlluploadVideoAPI, getCategoryAPI, updateCategoryAPI} from '../servises/allAPI'



function View({uploadVideoResponse,setDropVideoResponse}) {

  const [allVideos,setAllVideos]=useState([])
const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)


  useEffect(()=>{
getAllVideos()
setDeleteVideoResponse(false)

  },[uploadVideoResponse,deleteVideoResponse])

const getAllVideos=async()=>{

  const result=await getAlluploadVideoAPI()
  console.log(result);
  if(result.status==200){

    setAllVideos(result.data)
  }else{

    console.log("API FAILED");
    setAllVideos([])
  }

}
//console.log(allVideos);
  const dragOver=(e)=>{
e.preventDefault()


  }
  const videoDropped=async(e)=>{

    const {videoId,CategoryId}=JSON.parse(e.dataTransfer.getData('data'))
  //console.log(videoId,CategoryId);
const {data}=await getCategoryAPI()
const selectedCategory=data.find(item=>item.id==CategoryId)
//console.log(selectedCategory);
let result=selectedCategory.allVideos.filter(video=>video.id!==videoId)
console.log(result);
let{id,categoryName}=selectedCategory
let newCategory={id,categoryName,allVideos:result}
console.log(newCategory);
const res=await updateCategoryAPI(CategoryId,newCategory)
//console.log(res);

setDropVideoResponse(res);
  }

  return (
    <>
<Row droppable="true"onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
  {
    allVideos?.length>0?allVideos.map(video=>(

<Col sm={12} md={4} lg={3}>
<VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
</Col>
 )):<p className='text-danger fw-bolder'>Nothing to display</p>



  }
</Row>


      
    </>
  )
}

export default View
