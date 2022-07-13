import { Layout } from "antd";
import React from "react";
import "./container.less"


const Container = (props) =>{
    return(
       <div >{props.children}</div>
    )
}

export default Container;