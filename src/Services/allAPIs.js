import BASEURL from "./baseURL"
import commonApi from "./commonAPI"
//adddiaryApi
  export const adddiaryApi =(pages)=>{
   return  commonApi("POST",`${BASEURL}/pages`,pages)
}
//getdiaryapi
export const getsiaryApi=()=>{
    return commonApi("GET",`${BASEURL}/pages`)
}
//deletediarybyid
export const deletediaryapibyID =(id)=>{
    return commonApi("DELETE",`${BASEURL}/pages/${id}`,)
}
//favourites
export const togglefavouriteAPI =(id,currentfav)=>{
    return commonApi("PUT",`${BASEURL}/pages/${id}`,{favourite:!currentfav})
}
