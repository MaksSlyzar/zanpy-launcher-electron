import { Component } from "react";
import { Modpack } from "./Modpack/Modpack";
import "./Modpacks.css";

export class Modpacks extends Component {
    constructor () {
        super ({});
    }

    render () {
        return <div className="Modpacks">
            <Modpack name="Jalynka" description="Зборка для мізко-їбання, скачуй, заходь і страдай хуйньою, впаюй свій час в якусь хуйню." version="1.16.5" />
            <Modpack name="Pizdec" description="Description" version="1.16.5" />
        </div>
    }
}