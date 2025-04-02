
import React from "react";
import './style.less';
import CreateForm from "./component/CreateForm";
import { Card } from "antd";

const Form = ()=>{
    return <div  className="form-container">
            <CreateForm></CreateForm>
            <Card>
         历史表单
         </Card>
             
        
    </div>
}
export default Form;