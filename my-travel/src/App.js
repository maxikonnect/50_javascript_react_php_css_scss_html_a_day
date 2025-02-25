import data from "./data"
import Joke from "./component/Joke"
export default function App(){

  const dataElement = data.map((entry)=>{
    return (
      <Joke 
        key={entry.id}

        //You can use 
        //{...entry}

        entry = {entry}
        //OR You can use
        /*setup={entry.setup}
        punchline = {entry.punchline} */

      />
    )
  })
  return (
    <main>
      {dataElement}
    </main>
    
  )
}