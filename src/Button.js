import React from "react";

const Button = ( {type,disabled,onClick,children,Name,Date,select,Sex,Text,Sub,tel,email}) => {
 
 
  return (
    <button type={type}      disabled={Sub&&(Name||Date||select||Sex||Text||tel||email)?null:!Sub&&(Name||Date||select||Sex||Text)?null:disabled} onClick={onClick}> 
  {children}
</button>
 
     
  );
};

export default Button;
