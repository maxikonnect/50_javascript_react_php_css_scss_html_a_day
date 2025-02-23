import Contact from "./Contact"

export default function App(){

  return (
    <main>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </main>
  )
}






/* 
export default function App(){
  const date = new Date().getHours();
  const now = new Date();
  let timeOfDay = "";

  if(date < 12){
    timeOfDay = "Morning";
  }else if(date >= 12 && date < 17){
    timeOfDay = "Afternoon";

  }else if(date >= 17 && date <= 21){
    timeOfDay = "Evening";
  }else{
    timeOfDay = "Night";
  }
  return (
    <>
      <h1>Good {timeOfDay}</h1>
      <h1>{date}</h1>
      <p>{now.getFullYear()}</p>
    </>
  )
}

*/