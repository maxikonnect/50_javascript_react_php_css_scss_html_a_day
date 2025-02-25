import '../index.css'
export default function Joke(prop){
    console.log(prop)
    return (
        /*You can also use this
            <p>Setup: {prop.setup}</p>
            <p>punchline: {prop.punchline}</p>
        */
        /* use this when you use entry = {entry} in app.js */
        <>

            
            {prop.entry.setup && <p className="setup"><span>Setup: </span> {prop.entry.setup}</p>}
            <p>punchline: {prop.entry.punchline}</p>
            <hr />
        </>
    )
}