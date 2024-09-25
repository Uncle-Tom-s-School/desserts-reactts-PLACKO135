import { useEffect, useState } from "react"
import Dessertcard, { Dessertcardprop } from "./components/Dessertcard"

const App = () => {
 
  const [desserts, setDesserts]=useState<Dessertcardprop[]>([])
 
  useEffect(()=>{
    fetch('/data.json').then(res=>res.json()).then(apiDesserts=>setDesserts(apiDesserts))
  },[])

  return (
    <div className="dessert-grid">
    {
      desserts.map(dessert=> <Dessertcard {...dessert}/>)
    }
 

    </div>
  )
}

export default App