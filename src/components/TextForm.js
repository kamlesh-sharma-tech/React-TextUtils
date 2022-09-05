import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React, {useState} from 'react'
import '../App.css';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TextForm(props) {
    // const [btnEnable,setBtnEnable] = useState('disabled');

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
      setOpen(true);
    }

    const handleExtraSpaces = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

    const [text,setText] = useState("");

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  

  
  return (
    <>
    <div className="container" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
    <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="text-box form-control" value={text} placeholder="Enter your text here" style={{backgroundColor : props.mode==='dark' ? 'gray' : 'white',color: props.mode==='dark' ? 'white' : 'black'}} onChange={handleOnChange} id="myBox" rows="5"></textarea>
    </div>

    <Stack spacing={2} direction="row">
    <Button variant="contained" disabled={!text.length>0} onClick={handleUpClick}>Uppercase</Button>
    <Button variant="contained" disabled={!text.length>0} onClick={handleLowClick}>Lowercase</Button>
    <Button variant="contained" disabled={!text.length>0} onClick={handleCapitalize}>Capitalize</Button>
    <Button variant="contained" disabled={!text.length>0} onClick={handleCopy}>Copy</Button>
    <Button variant="contained" disabled={!text.length>0} onClick={handleExtraSpaces}>Remove Extra Spaces</Button>
    <Button variant="contained" disabled={!text.length>0} onClick={handleClearAll}>Clear All</Button>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Text Copied!
        </Alert>
      </Snackbar>
    </Stack>
      
    </div>
    <div className="container my-3" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
      <h3>Your text summary</h3>
      <div className="countBox" style={{backgroundColor : props.mode==='dark' ? 'white' : 'rgb(51, 50, 50)',color: props.mode==='light' ? 'white' : 'black'}}>
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
