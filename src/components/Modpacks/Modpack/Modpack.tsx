import "./Modpack.css";
import { Component } from "react";

type ModpackProps = {
    name: string,
    description: string,
    version: string,
    host?: number,
    port?: number,
    modes?: Array<string>
}

export class Modpack extends Component<ModpackProps> {
    constructor (props: ModpackProps) {
        super(props);
    }

    render () {
        return (
            <div className="Modpack">
                <div className="name">{this.props.name}</div>

                <div className="description">{this.props.description}</div>

                <div className="enterButton">Enter</div>

                <div className="wrapper">
                    {
                        this.props.modes?<div className="modes">Моди</div>:<div className="withoutMods">Без модів</div>
                    }

                    <span className="version">{this.props.version}</span>
                </div>

            </div>
        )
    }
}