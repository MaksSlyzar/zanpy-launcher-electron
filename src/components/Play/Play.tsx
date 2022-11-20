import { Component } from "react";
import "./Play.css";

export class Play extends Component {
    constructor () {
        super({});
    }

    render () {
        return (
            <div className="Play">
                <div className="runButton">Play!</div>
            </div>
        )
    }
}