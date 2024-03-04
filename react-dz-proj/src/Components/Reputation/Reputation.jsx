import React from "react"

import './Reputation.scss'

import icon_1 from '../../assets/icons/icon_1.png'
import icon_2 from '../../assets/icons/icon_2.png'


export const Reputation = () => {
    return (
            <div className="container">
            <h2 className="reputation-title">Our Reputation</h2>
            <div className="reputation-wrapper">
                <div className="reputation-item">
                    <img src={icon_1} alt="" />
                    <h3>Best Services</h3>
                    <div>
                    Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                    </div>
                </div>
                <div className="reputation-item">
                    <img src={icon_1} alt="" />
                    <h3>Best Services</h3>
                    <div>
                    Cursus semper tellus volutpat aliquet lacus. 
                    </div>
                </div>
                <div className="reputation-item">
                    <img src={icon_2} alt="" />
                    <h3>Best Services</h3>
                    <div>
                    Ultricies at ipsum nunc, tristique nam lectus.
                    </div>
                </div>
            </div>
            </div>
    )
}