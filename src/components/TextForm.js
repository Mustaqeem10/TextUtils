import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase);
        if(text.length>0){
            props.showAlert('Converted to Uppercase', 'success')
        }
        else{
            props.showAlert('No Text input', 'warning')
        }
    }

    const handleLCLick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        if(text.length>0){
            props.showAlert('Converted to Lowercase', 'success')
        }
        else{
            props.showAlert('No Text input', 'warning')
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        if (text.length > 0){
            props.showAlert('Text Copied to Clipboard', 'success')
        }
        else {
            props.showAlert('No Text input', 'warning')
        }
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/\s{2,}/);
        setText(newText.join(" "));
        if (text.length > 0){ 
            props.showAlert('Extra Spaces have been removed', 'success')
        }
        else{
            props.showAlert('No Text input', 'warning')
        }
    }

    const countCharacters = (event) => {
        let words = event.target.value;   
        let sent = words.split(/[.]/);
        let newSent = sent.filter((elm) => {
                return elm !== "";
            });
        setSentences(newSent.length);
        setCharacters(words.length);
        words = words.trim();
        let arr = (words.split(/\s+/));
        let newarr = arr.filter(function(elm){
                return elm !== "";
            }); 
        setWord(newarr.length);
    }

    const clearText = () => {
        setText("");
    }

    const [text, setText] = useState("");
    const [word, setWord] = useState(0);
    const [characters, setCharacters] = useState(0);
    const [sentences, setSentences] = useState(0);

    return(
    <>
    <div style={{color: props.mode === "light" ? "black" : "white"}} className="container">
        <h1>{props.heading}</h1>
            <div className='mb-3'>
            <textarea style={{backgroundColor: props.mode === "light" ? "white" : "#13466e" , color: props.mode === "light" ? "black" : "white"}} onInput={countCharacters} className="form-control" onChange={handleOnChange} 
            id="exampleFormControlTextarea1" value={text} rows="8">
            </textarea>
            </div>
        <button onClick={handleUpClick} style={{color: 'white', backgroundColor: props.color}} className='btn'>Convert to Uppercase</button>
        <button onClick={handleLCLick} style={{color: 'white', backgroundColor: props.color}} className='btn my-2 ms-3'>Convert to Lowercase</button> 
        <button onClick={copyText} style={{color: 'white', backgroundColor: props.color}} className='btn my-2 ms-3'>Copy Text</button>
        <button onClick={removeExtraSpaces} style={{color: 'white', backgroundColor: props.color}} className='btn my-2 ms-3'>Remove Extra Spaces</button>
        <button onClick={clearText} style={{color: 'white', backgroundColor: props.color}} className='btn my-2 ms-3'>Clear Text</button>
    </div>

    <div style={{color: props.mode === "light" ? "black" : "white"}} className="container my-3">
        <h2>Your Text Summary:</h2>
        <p>You entered {word} words and {characters} characters and {sentences} sentences</p>
        <p>Time taken to read {word * 0.008} minutes</p>
        <h2>Preview</h2>
        <p>{text.length <=0 ? "Enter text in textbox to preview here." : text }</p>
    </div>
    </>
    );
}