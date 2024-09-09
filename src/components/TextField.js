import React, {useState} from 'react'



export default function TextField(props) {
    const [text, setText] = useState("Enter Text Here")
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert( "success", "Converted to UpperCase")
    }
    const handlechange = (event)=>{
        setText(event.target.value)
    }
    // const handleLowClick = () => {
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea name="txt" value={text} id="box" onChange={handlechange} className="form-control" rows={8}></textarea>
            <button className="btn btn-primary mr-5" onClick={handleUpClick}>Convert</button>
            <button className="btn btn-primary mr-5" onClick={()=>setText(text.toLowerCase())}>Convert to LowerCase</button>
            <button className="btn btn-primary mr-5" onClick={()=>setText("")}>Clear</button>
        </div>
        <h2> Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
  )
}
