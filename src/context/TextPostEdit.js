import React, { useState, createContext, useRef } from 'react';
import axios from 'axios';

const TextPostContext = createContext();

export default TextPostContext;

export function TextPostEditProvider(props) {
    const [ edit, setEdit ] = useState(false);
    const refInput = useRef(null);

    const getFocusInput = () => {
        refInput.current.focus();
    };

    function textPostEdit(){
        setEdit(!edit);
        getFocusInput();
    }
    

    return (
        <TextPostContext.Provider value={edit, textPostEdit}>    
            <form>
                <input type="text" name="textDescription" value={props.children} ref={refInput}></input>
            </form>
        </TextPostContext.Provider>
    );
}