import React from "react";

const Input = ( {type,placeholder,value,onChange,name,required,header,Dirty,Error }) => {
   
 
   

  //      
  return (
    <>
    <label>
    {header}  
    {Dirty && Error && (<div style={{ color: "rgb(187, 77, 77)" }}>{Error}</div>)} 
    <input type={type} placeholder={placeholder} value={value} 
    onChange={onChange} name={name} required={required}
    
    />
    
  </label>
  
  </>
     
  );
};

export default Input;
