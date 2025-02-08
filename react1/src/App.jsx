// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Banner from "./components/Banner/Banner";

import Header from "./Components/Header/Header";
import Corrosil from "./Components/Corrosil/Corrosil";
import "./Components/Header/Header.css"
import "./utiles/menuitems/MenuItems.css"
import "./Components/Banner/Banner.css"
import"./Components/Corrosil/Corrosil.css"
import Explore from "./Components/Explore/Explore";
import "./Components/Explore/Explore.css"
import Cards from "./components/Cards/Cards";
import "./Components/Cards/Cards.css"
import Footer from "./Components/Footer/Footer";
import "./Components/Footer/Footer.css"


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// const name="sree"
// const array=[1,2,3,4,5,6]
// function App() {
//   return (
//     <div>
//       <h1>hai  {name}</h1>
//       <h2>{array}</h2>
//       <h3>shaluuuu</h3>
//     </div>
//   )
// }
// export default App;


//////////////////////////////////////////////////////////////////////
// import Header from "./Components/Header/Header.jsx";

const App = () => {
  return (
    <>
    <Header></Header>
   
    <Banner></Banner>
    <Corrosil></Corrosil>
    <Explore></Explore>
    <Cards></Cards>
    <Footer></Footer>
   
   
  
   
    </>
  );
};

export default App;


