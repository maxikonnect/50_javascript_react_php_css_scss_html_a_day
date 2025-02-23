import Contact from "./Contact"

export default function App(){

  return (
    <main>
      <div className="contact-container">
        <Contact 
        img= {require("./images/pic1.jpg")}
        name="Makaveli"
        phone = "+233552343560"
        email = "ghs@gmail.com"
        />

        <Contact 
        img= {require("./images/pic2.jpg")}
        name="Ansah Paul"
        phone = "+233548136366"
        email = "tribillio@gmail.com"
        />

        <Contact 
        img= {require("./images/pic3.jpg")}
        name="Michael"
        phone = "+233554324897"
        email = "pako@gmail.com"
        />

        <Contact 
        img= {require("./images/pic4.jpg")}
        name="Michael"
        phone = "+233554324897"
        email = "pako@gmail.com"
        />
      </div>
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