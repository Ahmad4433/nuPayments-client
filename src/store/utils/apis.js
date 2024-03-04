const apis = ()=>{
const baseUrl = 'https://newapp--4-f1f2be6aa8d1.herokuapp.com'
const list = {

 getUserID: `${baseUrl}/plugin/product/by-user`,
 getUserProductsById:`${baseUrl}/plugin/product/by-user-id`

}

return list

}

export default apis