import React from "react";

interface IMainPage {
    title: string
}

function MainPage(props:IMainPage) {
   return (
       <>
        {props.title}
       </>
   ) 
}



export default MainPage;