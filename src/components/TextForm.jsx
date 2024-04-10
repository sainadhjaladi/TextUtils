import React,{useState} from 'react';


function TextForm(props) {

  const [text, setText] = useState('Enter the text here');

  
  const handleUpClick = () => {
    //console.log("Upper case was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlret("Converted to Uppercase","success");
  };


  const handleLowClick = () => {
    //console.log("Lower case was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlret("Converted to Lowercase" , "success");
  };

  const handleClearClick = () => {
    let newText='';
    setText(newText);
    props.showAlret("Cleared the text","success");
  }

  const copyText = () =>{
    const text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlret("Copied to clipboard!","success");
  }
  

  //This function is used to allow changes to the text field
  const handleOnchange = (event) =>{
    setText(event.target.value)
  }

  
  

  // text="New text passing"; //wrong way of passing 
  //setText = "New text passing" // correct way of passing

  return (
    <>
    <div>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange}  id="myBox" rows="8"></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
      <button type="button" className="btn btn-primary mx-2" onClick={copyText}>Copy text</button>



      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter something to preview here"}</p>
      </div>

     
    </div>

    </>
  );
}

TextForm.defaultProps = {
  heading: 'Pass some prop ',
};

export default TextForm;
