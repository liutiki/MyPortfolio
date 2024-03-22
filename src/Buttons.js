function Buttons ({filteredStuff}){
    return(
        <div>
            <button className="btn-top" onClick={() =>filteredStuff('Javascript')}>JavaScript</button>
            <button className="btn-top"onClick={() =>filteredStuff('React')}>React</button>
            <button className="btn-top"onClick={() =>filteredStuff('Bootstrap')}>Bootstrap</button>
            <button className="btn-top"onClick={() =>filteredStuff('API')}>API</button>
        </div>
    )
}

export default Buttons;