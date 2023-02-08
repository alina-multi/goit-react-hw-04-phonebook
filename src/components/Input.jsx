import React from 'react';



export const Input = ({value, onChange}) => {    
    console.log(value)
    return (
        <div>
             <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
            <input type="text" placeholder="Enter your name" onChange={onChange} />
        </div>
    )
}