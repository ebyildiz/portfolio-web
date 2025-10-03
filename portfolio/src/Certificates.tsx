import React from "react"
import advanced from "../certificates/advanced.png"
import nodejs from "../certificates/nodejs.png"
import react from "../certificates/react.png"
import typescript from "../certificates/typescript.png"

export default function Certificates() {
    return (
        <div className="certificates">
            <img src={react} />
            <img src={advanced} />
            <img src={nodejs} />
            <img src={typescript} />
        </div>
    )
}