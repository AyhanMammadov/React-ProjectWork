import React from "react";
import './Submit.scss'

export const Submit = () => {
    return (
            <div className="container">
                <div className="submit-wrapper">
                <div className="submit-offer">
                    <h2>What can us do for you?</h2>
                    <div className="submit-text">
                        We are ready to work on a project of any complexity, whether it’s commercial or residential.
                    </div>
                </div>
                <form action="" className="form">
                    <div className="submit-input-wrapper">
                        <input className="submit-input" type="name" placeholder="Name*"/>
                        <input className="submit-input" type="mail" placeholder="Email*"/>
                        <input className="submit-input" type="text" placeholder="Reason for Contacting*"/>
                        <input className="submit-input" type="phone" placeholder="Phone"/>
                        <input className="submit-input message" type="message" placeholder="Message"/>
                    </div>
                    <div>* indicates a required field</div>
                    <div>
                        <button className="submit-btn">Submit</button>
                    </div>
                </form>
                </div>
            </div>
    )
}