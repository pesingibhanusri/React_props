import Grandchild from "./grandchild"

const Child=(c)=>{
    console.log(c.parent)
 return<>
 <Grandchild child={c.parent}></Grandchild>
 <h3>{c.parent}</h3></>
}
export default Child