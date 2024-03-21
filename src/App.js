import { useState } from "react";
import Clothes from "./Projects/Clothes";
import { data } from "./Projects/data";
import './App.css';

function App (){
    const [staff,setStuff]=useState(data);

    return (<div>
        <div className="cont">
        <Projects grocery={staff} />
        </div>
    </div>
    )
}


export default App;