import { useState } from "react"

export default function TextForm
  (props) {
  const handelupclick = () => {
    //   console.log("upper clicked has pressed"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to the uppercase","success")
  }
  const handelonchange = (event) => {
    // console.log("on changed ");
    setText(event.target.value);

  }
  const handelclrclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" text areea has been clean ","warning")
  }
  const handellowclick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("converted to the lOWERcase","success")
  }
  const handeltrclick = () => {
    let newText = text.trim();
    setText(newText);
  }
  const handelCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("copide to the clipboard!S","success")
  }
  const [text, setText] = useState('Enter your text here')
  return (
    <>
      <div className="container"style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">

          <textarea className="form-control" id="myBox" rows={8} value={text} onChange={handelonchange} style={{backgroundColor:props.mode === 'dark' ? '#042743' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-2" onClick={handelupclick}>convert to uppercase^</button>
        <button className="btn btn-primary mx-3 my-2" onClick={handellowclick}>convert to lowercase^</button>
        <button className="btn btn-primary mx-3 my-2" onClick={handeltrclick}>click to trim spacces</button>
        <button className="btn btn-primary mx-3 my-2" onClick={handelclrclick}>click to clear </button>
        <button className="btn btn-primary mx-3 my-2" onClick={handelCopy}>click to copy </button>
      </div>
      <div className="container my-3"style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>minutes your need to read this {0.008 * text.split(" ").length}</p>
        <h3>preview</h3>
        <p>{text.length>0?text:"Enterr anything u want to preview"}</p>
      </div>
    </>
  )
}
