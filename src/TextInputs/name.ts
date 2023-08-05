import { stdin, stdout } from "process"
import readline from "readline"
import {  setName } from "../index"

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

export const getName = async () => {
    return new Promise<void>((resolve) => {
        rl.question("project name: ", (input) => {
            setName(input)
            resolve()
        })
    })
}