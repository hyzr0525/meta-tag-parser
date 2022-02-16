import React from 'react'
import {useState} from 'react'

function ImputForm({setMetaData}) {

    const [input, setInput] = useState()

    function formFill(e){
        setInput(e.target.value);
    }

    function parser(e){
        e.preventDefault();
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(`${input}`, "text/xml");
    const metaData = parsedDocument.querySelectorAll("metadata")
    setMetaData(metaData)
    }

    
  return (
    <div>
        <form onSubmit={parser}>
            <textarea
            type= 'text'
            name='input'
            placeholder= "Pase Your Data Here"
            onChange= {formFill}
            />
            <button type='submit'>Parse</button>
        </form>
    </div>
  )
}

export default ImputForm