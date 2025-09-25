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

// *******************************PROPS IN REACT
// import React from 'react'
// import Card from './components/Card'
// const App = () => {
//   return (
//     <div>
//       <Card user = "Umair"/>
//     </div>
//   )
// }

// export default App

// *******************now if we create a div and pass some data to that div with multiple info
// import React from "react";
// import Card from "./components/Card";

// const App = () => {
//   return (
//     <div className="bg-black text-white inline-block text-center p-20 m-10">
//       <Card name = "m.umair" city = "Peshawar" age = "21" />
//     </div>
//   );
// };

// export default App;

// *****************************PROPS FOR JSON DATA:
// import React from 'react'
// import Card from './components/Card'
// let user =
// [
//   {
//     "name": "Ali Khan",
//     "profession": "Software Engineer",
//     "age": 28,
//     "city": "Lahore"
//   },
//   {
//     "name": "Sara Ahmed",
//     "profession": "Doctor",
//     "age": 32,
//     "city": "Karachi"
//   },
//   {
//     "name": "Bilal Hussain",
//     "profession": "Teacher",
//     "age": 40,
//     "city": "Islamabad"
//   },
//   {
//     "name": "Ayesha Malik",
//     "profession": "Graphic Designer",
//     "age": 25,
//     "city": "Rawalpindi"
//   },
//   {
//     "name": "Usman Raza",
//     "profession": "Businessman",
//     "age": 35,
//     "city": "Faisalabad"
//   }
// ]


// const App = () => {
//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
//       {user.map((elem, idx)=>{
//         return <Card
//       key={idx}
//       username={elem.name}
//       profession={elem.profession}
//       age={elem.age}
//       city={elem.city}/>
//       })}
//     </div>
//   )
// }

// export default App

// *******************************API (AXIOS) IN REACT:

// import React from 'react'
// import axios from 'axios'
// const App = () => {
//   const data = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
//     console.log(response.data)
//   }
//   return (
//     <div>
//        <button onClick={data} className='p-5 bg-emerald-500 m-10 rounded font-bold text-white active:scale-90 cursor-pointer'>Get data</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import axios from 'axios'
// const App = () => {
//   const [data, setdata] = useState([])
//   const getdata = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
//     setdata(response.data)
//     console.log(data)
//   }
//   return (
//     <div>
//        <button onClick={getdata} className='p-5 bg-emerald-500 m-10 rounded font-bold text-white active:scale-90 cursor-pointer'>Get data</button>
//        <div className='p-10 bg-gray-300 text-white'>
//           {data.map((elem,idx)=>{
//             return <div key={idx} className='bg-black mt-2 '>
//               <img src={elem.download_url} alt="" className='h-40 w-40'/>
//               <h1>{elem.author }</h1>
//             </div>
//           })}
//        </div>
//     </div>
    
//   )
// }

// export default App