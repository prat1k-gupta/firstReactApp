import React from "react";

export default function MainContent(){
    return(
        <div className="Main">
            <h1>My First React App</h1>
            <ul class="mainList">
                <li>Used create-react-app to make this app</li>
                <li>Command used are
                    <ul>
                        <li>npx create-react-app first-app</li>
                        <li>cd first-app</li>
                        <li>npm start</li>
                    </ul>
                </li>
                <li>Edited the local files provided by react</li>
            </ul>
        </div>
    )
}