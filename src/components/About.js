import React from 'react'

export default function About(props) {

  return (
    <div className="container" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
        <h1 className="my-3">About Us</h1>
        <p>This is a text analyzer website in which we can convert the text in uppercase, lowercase, captitalize, copy, remove extra spaces and clear the text...
            We can also count the characters, words of the text and also preview it...
            We can also change the mode of this app.
        </p>   
    </div>
  )
}
