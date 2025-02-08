import Child from "./child"

const Parent=(b)=>{
    console.log(b.grandparent)
    return(
        <><Child parent={b.grandparent}></Child>
        <h1>{b.grandparent}</h1></>
    )
 
}
export default Parent