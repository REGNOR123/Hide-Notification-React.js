import React,{useState,useEffect} from 'react';
import './App.css'

function App()
{
    let [unst,setunst]= useState("Hanna Moos like your status")
    let [inf,setinf]=useState("You have One New Message")
    let [warn,setwarn]=useState("Your Passward Will expired in 2 days")
    let [err,seterr]=useState("oop's somthing went wrong")
    let [suc,setsuc]=useState("your data has been saved")


    useEffect(()=>{
            setTimeout(() => {
                                   seterr(null)
                                   setwarn(null)
                                   setinf(null)
                                   setunst(null)
                                   setsuc(null)
                                   }, 8000
                            );
                }
            );

    return(
        <div className="container">
        <h3>Wait "8s" Otherwise Use Buttons To Hide The Notifications</h3>
        <button onClick={()=>setsuc(null)}>HIDE SUCCESS</button>
        <button onClick={()=>seterr(null)}>HIDE ERROR</button>
        <button onClick={()=>setwarn(null)}>HIDE WARNING</button>
        <button onClick={()=>setinf(null)}>HIDE INFO</button>
        <button onClick={()=>setunst(null)}>HIDE UNSTYLE</button>
        <br/>
        <div className="noti">
        
        <typography className="unst">{unst}</typography><br/>
        <typography className="inf">{inf}</typography><br/>
        <typography className="warn">{warn}</typography><br/>
        <typography className="err">{err}</typography><br/>
        <typography className="suc">{suc}</typography><br/>
        </div>
        </div>

    )
}
export default App