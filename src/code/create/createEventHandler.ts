import {exec} from "child_process"
import { language, name } from "../.."
import { createBefehl } from "./createIndex"
export const createEventHandler = async () => {
    exec(`cd ${name} && cd src && mkdir events && ${createBefehl} index.${language}`)
}