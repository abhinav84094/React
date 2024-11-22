import { useState } from 'react'
import Cards from './components/Cards/Cards'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

function App() {
  

  const [data, setData] = useState([
    {
      name: "Abhinav", 
      email:"abhinav0000000@gmail.com", 
      qualification:"BCA", 
      image:"https://th.bing.com/th/id/OIP.k4cglAcVePk9RoE-YNdsbwHaJH?w=202&h=249&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      added: true
    },
  ])

  const setInput = (val)=>{
    setData((prev)=>([...prev , val]));
  }

  const remove = (name)=>{
    setData((prevData)=>prevData.filter((val)=>val.name!=name));
  }

  const number = data.length;

  return (
    <>
      <Header number={number} />
      <Cards data={data} remove={remove} />
      <Form setInput={setInput} />
    </>
  )
}

export default App
