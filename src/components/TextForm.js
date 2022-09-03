import React, {useState} from 'react'
import '../App.css';

export default function TextForm(props) {

    const handleUpClick = ()=> {
      // console.log("up clicked");
      let newText = text.toUpperCase();
      setText(newText);
    }

    const handleLowClick = ()=> {
      // console.log("up clicked");
      let newText = text.toLowerCase();
      setText(newText);
    }

    const handleCapitalize = ()=> {
      // console.log("up clicked");
      const string = text.split(" ");
      const cased = [];

      // Convert every first letter to uppercase
      string.map((word) => {
        cased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
      });

      // Convert my words array to a string with .join()
      setText(cased.join(" "));
      
    }

    const handleOnChange = (event)=> {
      // console.log("on change");
      setText(event.target.value);
    }

    const handleClearAll = (event)=> {
      // console.log("on change");
      setText("");
      document.getElementById("myBox").focus();
    }

    const handleCopy = ()=> {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

    const [text,setText] = useState("");
  
  return (
    <>
    <div className="container" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
    <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} placeholder="Enter your text here" style={{backgroundColor : props.mode==='dark' ? 'gray' : 'white',color: props.mode==='dark' ? 'white' : 'black'}} onChange={handleOnChange} id="myBox" rows="3"></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Lowercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalize}>Capitalize</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleClearAll}>Clear All</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
      <h3>Your text summary</h3>
      <div className="countBox">
      <p>Character Count : {text.length}</p>
      <p>Word Count : {text.split(" ").filter((element)=>{return element.length!=0}).length}</p>
      {/* <p>{text.split(" ").length} words, {text.length} characters.</p> */}
      <p>{0.008 * text.split(" ").length} minutes read</p>
      </div>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the box to preview it here..."}</p>
    </div>
    </>
    
  )
}
