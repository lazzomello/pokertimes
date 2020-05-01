import React from 'react'

const Raimbow = (WrappedComponent) => {

  const colours = ['green', 'blue', 'pink', 'red',  'black', 'orange'];
  const randomColor = colours[Math.floor(Math.random() * colours.length-1)];
  const className = `${randomColor}-text`;

  
  return (props) => {
    
    return (
      <div className={className}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

export default Raimbow