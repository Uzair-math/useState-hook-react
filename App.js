import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from 'react'


export default function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)

  // useEffect screen size 

  // const handleResize = () =>{
  //   setwindowWidth(window.innerWidth)
  // }

  // useEffect(()=>{
  //   window.addEventListener('resize', handleResize)

  //   return () =>{
  //     window.removeEventListener('resize', handleResize)
  //   }

  // }, [])


  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  // useEffect

  console.log('render');

  useEffect(()=>{
    console.log('resourse change');
    return console.log('return resource the change');

    // api
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    // .then(response => response.json())
    // .then(json => setItems(json))
  }, [resourceType])

  return (
    // <div>
    //   {windowWidth}

    // </div>
    <>
    <div>
      <button onClick={()=>setResourceType('posts')}>Posts</button>
      <button onClick={()=>setResourceType('users')}>Users</button>
      <button onClick={()=>setResourceType('comments')}>Comments</button>
    </div>
    {/* <h1>{resourceType}</h1>
    {items.map(item =>{
      return <pre></pre>
    })} */}
    </>
  );
}

