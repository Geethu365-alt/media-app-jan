import { commonAPI} from "./commonAPI"
import { server_url} from "./server_url"
//upload video API

export const uploadVideoAPI=async (video)=>{
return await commonAPI('POST',`${server_url}/allVideos`,video)


}
//getalluploadvideo
export const getAlluploadVideoAPI=async ()=>{
    return await commonAPI('GET',`${server_url}/allVideos`,"")
}
//getAVideoAPI
export const getAVideoAPI=async (id)=>{
    return await commonAPI('GET',`${server_url}/allVideos/${id}`,"")
}



//delete alluploadvideo
export const deleteVideoAPI=async (id)=>{
    return await commonAPI('DELETE',`${server_url}/allVideos/${id}`,{})
}
// add historyAPI

export const addHistoryAPI = async(video)=>{
return await commonAPI('POST',`${server_url}/history`,video)


}
// get historyAPI

export const getHistoryAPI = async()=>{
    return await commonAPI('GET',`${server_url}/history`,"")
    
    
    }
    // delete historyAPI

export const deleteHistoryAPI = async(id)=>{
    return await commonAPI('DELETE',`${server_url}/history/${id}`,{})
    
    
    }
    // add categoryAPI
    export const addCategoryAPI = async(category)=>{
        return await commonAPI('POST',`${server_url}/category`,category)
        
    }        
    // get categoryAPI
    export const getCategoryAPI = async()=>{
        return await commonAPI('GET',`${server_url}/category`,"")
        
    }      
    // delete categoryAPI
    export const deleteCategoryAPI = async(id)=>{
        return await commonAPI('DELETE',`${server_url}/category/${id}`,{})
        
    }      
      // update categoryAPI
      export const updateCategoryAPI = async(id,categoryDetails)=>{
        return await commonAPI('PUT',`${server_url}/category/${id}`,categoryDetails)
        
    }        