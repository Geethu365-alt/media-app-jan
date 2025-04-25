
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../servises/allAPI'

function Watchhistory() {

  const[history,setHistory]=useState([])

const getHistory=async()=>{
const result=await getHistoryAPI()
//console.log(result);
if(result.status==200){
setHistory(result.data)


}else{
console.log("API failed");
setHistory([])


}
}
//console.log(history);
const removeHistory=async(id)=>{
await deleteHistoryAPI(id)
getHistory()

}

useEffect(()=>{

getHistory()

},[])






  return (
    <div>
     <div className='container d-flex justify-content-between mt-5'>
<h1>Watch-History</h1>
<Link to={"/home"} style={{textDecoration:"none",color:"blueviolet",fontSize:"30px"}}>

Back to home <i class='fa-solid fa-arrow-rotate-left fa-spin fa-spin-reverse'></i>


</Link>

</div>
<table className='container shadow '>
  <thead>
<tr>
<th>#</th>
<th>Video Title</th>
<th>URL</th>
<th>TimeStamp</th>
<th>Action</th>
</tr>
</thead>
<tbody>
  {
    history?.length>0?history.map((video,index)=>(
  <tr>
    <td className='text-warning'>{index+1}</td>
    <td className='fw-bolder'>{video.title}</td>
    <td><a href="{video.link}">{video.link}</a></td>
    <td>{video.timeStamp}</td>
    <td><button className='btn btn-link'onClick={e=>removeHistory(video?.id)}><i className='fa-solid fa-trash text-danger'></i></button></td>
</tr>
    )):<p className='text-danger fw-bold'>Nothing to display</p>
  }

</tbody>
</table>
</div>
  )
}

export default Watchhistory
