import { app, BrowserWindow } from "electron"
import * as path from "path"
import * as url from "url"

let win: BrowserWindow

const createWindow = function() {
    win = new BrowserWindow({ 
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }        
    })

    console.log(process.cwd())

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/electron-tutorial/index.html`),
            protocol: "file:",
            slashes: true
        })
    )
    
    win.on("closed", () => win = null)
}

app.on("ready", createWindow)

app.on("activate", () => {
    if (win === null) 
        createWindow()
})