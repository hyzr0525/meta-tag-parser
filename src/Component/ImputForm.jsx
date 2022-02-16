import React from 'react'
import {useState} from 'react'

function ImputForm() {

    const [input, setInput] = useState()

    function formFill(e){
        setInput(e.target.value);
    }

    console.log(input)

  return (
    <div>
        <form >
            <textarea
            type= 'text'
            name='input'
            placeholder= "Pase Your Data Here"
            onChange={formFill}
            />
            <button>submit</button>
        </form>
    </div>
  )
}

export default ImputForm