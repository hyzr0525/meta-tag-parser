import React from 'react'
import {useState} from 'react'
import {Button} from '@mui/material'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'


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
    setMetaData(metaData[0].children)
    console.log(metaData)
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
            <Button sx={{ bgcolor: 'text.secondary'}} variant="contained" startIcon={<SettingsOutlinedIcon />} type='submit'>Parse</Button>
        </form>
    </div>
  )
}

export default ImputForm