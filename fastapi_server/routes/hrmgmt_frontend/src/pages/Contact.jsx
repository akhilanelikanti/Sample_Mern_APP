import {useState} from "react"
function Contact(){
    let [name, setName] = useState("")
    let [age, setAge] = useState(18)
    let [phone, setPhone] = useState("")

    let RegisterData=(event)=>{
        event.preventDefault();
        // used to collect all data from the form
        console.log(name);
        console.log(age);
        
    }

 return(
    <div>
        <h1>Contact page called</h1>
        <form>
            <input type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name"></input><br></br>
            <input type="number" value ={age} onChange={(e) => setAge(e.target.value)} placeholder="enter your age"></input><br></br>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="enter your phone no"></input><br></br>
            <button>Submit</button>
        </form>
    </div>
 )
}
export default Contact