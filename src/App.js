import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = "1419d3c92b8d3f39176a74636b4217c22e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
    useEffect( () =>  {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if( command == 'testCommand' ){
                    alert('Hola, Francisco!!');
                }
            }
        })
    }, [] ) 
    return (
        <div>
            <h1>Alan AI News Application</h1>
        </div>
    );
}

export default App;