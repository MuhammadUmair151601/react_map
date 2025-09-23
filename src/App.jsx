// import React from 'react'

// const App = () => {
//   let players = ["afridi", "Fawad", "Usman","shayan"]
//   return (
//     <>
//     <h1>Players in the team:</h1>
//     {players.map(player=> (
//       <li key={player}>{player}</li>
//     ))}
//     <ul>
//       <li></li>
//     </ul>
//     </>
//     )
// }

// export default App

// now if there is nothing in the list:

// import React from 'react'

// const App = () => {
//   // let players = []
//   let players = ["afridi", "Fawad", "Usman","shayan"]

//   if (players.length=== 0){
//     return <h1>I am still hungry</h1>
//   }
//   return (
//     <>
//     <h1>Players in the team:</h1>
//     {players.map(player=> (
//       <li key={player}>{player}</li>
//     ))}
//     <ul>
//       <li></li>
//     </ul>
//     </>
//     )
// }

// export default App

// Now if we want to use if statement inside the block:

// export default App

// now if there is nothing in the list:

// import React from 'react'

// const App = () => {
//   let players = []
// let players = ["afridi", "Fawad", "Usman","shayan"]

//   return (
//     <>
//     <h1>Players in the team:</h1>
//     {players.length===0 ? <h1>I am still hungry</h1>: null}
//     {players.map(player=> (
//       <li key={player}>{player}</li>
//     ))}
//     <ul>
//       <li></li>
//     </ul>
//     </>
//     )
// }

// export default App

// similarly we can use logical operators like &&
// import React from 'react'

// const App = () => {
//   let players = []
// let players = ["afridi", "Fawad", "Usman","shayan"]

//   return (
//     <>
//     <h1>Players in the team:</h1>
//     {players.length===0 ? <h1>I am still hungry</h1>: null}
//     {players.map(player=> (
//       <li key={player}>{player}</li>
//     ))}
//     <ul>
//       <li></li>
//     </ul>
//     </>
//     )
// }

// export default App

//******************************************USE STATE HOOKS IN REACT:
// import React from "react";
// import React, { useState } from "react";

// const App = () => {
//   let [count, setCount] = useState(0);
//   function incrementCount() {
//     setCount(count => count + 1);
//     setCount(count => count + 1);

//   }
//   function decrementCount() {
//     setCount((count = count - 1));
//   }

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={incrementCount}>Increment</button>
//       <button onClick={decrementCount}>Decrement</button>
//     </div>
//   );
// };

// export default App;

// **************************FORM HANDLING and Two way binding IN REACT:

// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [username, setusername] = useState('')

//   const submithandler  = (e) => {
//       e.preventDefault();
//       console.log(username)
//       setusername('')
//     }

//     return(
//     <div>
//       <form onSubmit={(e)=>{
//         submithandler(e)
//       }}>
//         <input className='px-5 py-3 bg-green-500 border rounded text-white font-bold m-5' 
//         value={username}
//         onChange={(e)=>{
//           setusername(e.target.value)
//         }}  
//         type="text"  placeholder='Enter your name'/>
//         <button className='px-5 py-3 bg-blue-500 border rounded text-white font-bold '>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App;

// ******************************COMPONENTS IN REACT
// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// const App = () => {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <Footer></Footer>
//     </div>
//   )
// }

// export default App


