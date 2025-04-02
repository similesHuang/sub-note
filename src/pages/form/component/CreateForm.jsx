import React, { useState } from "react"
import creatFormLogo from './../../../static/createForm.png'
const CreateForm = ()=>{
      
     const [selected,setSelected] = useState();


     const handleChange =(index)=>{
         setSelected(index);
              
     }
     return <div className="form-container-create">
        <div className="form-container-create-title">
           <div className="form-container-create-left">创建新表单</div>
           <div className="">模板库</div>
        </div>
        <div className="form-container-create-content" onClick={()=>{
             handleChange(1);
        }}>
            <img src={creatFormLogo} alt='新建表单' className="form-container-create-content-icon"></img>
        </div>
        <div className="form-container-create-template">

        </div>
     </div>
}
export default CreateForm;