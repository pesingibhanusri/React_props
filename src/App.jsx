import Button from "./Components/Button.jsx";
import Cards from "./Components/Cards.jsx";
import Child from "./Components/child.jsx";
import Grandchild from "./Components/grandchild.jsx";
import Grandparent from "./Components/grandparent.jsx";
import Parent from "./Components/parent.jsx";
import { details } from "./Data/Details.js";

const App = () => {
  const style={
    color:"red",
    backgroundColor:"green"
  }
  return (
    <>
      {details.map((v, i) => (
        <Cards  objs={v} index={i} />
        

      ))}
      <Button style={style} value={"this is button"}></Button>
      <Grandparent></Grandparent>
     <Parent></Parent>
     <Child></Child>
      <Grandchild></Grandchild>
      
    </>
  );
};

export default App;
