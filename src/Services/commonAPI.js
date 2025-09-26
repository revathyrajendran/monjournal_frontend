import axios from "axios"

const commonApi=  async (httpMethod,url,reqBody)=>{
    const reConfig ={
        method:httpMethod,
        url,
        data:reqBody
    }
    return await axios(reConfig).then (res=>{
        return res
    }).catch(err=>{
        console.log(err);
        
    })

}
export default commonApi