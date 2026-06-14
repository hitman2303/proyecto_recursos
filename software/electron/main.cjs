const { app, BrowserWindow } = require("electron");
const path = require("path");

let splash;
let mainWindow;

function createWindow() {

  // Splash Screen
  splash = new BrowserWindow({
    width: 700,
    height: 400,
    frame: false,
    alwaysOnTop: true,
    transparent: false,
  });

  splash.loadFile(
    path.join(__dirname, "../public/splash.html")
  );

  // Main Window
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    show: false,
  });

  mainWindow.loadFile(
    path.join(__dirname, "../build/index.html")
  );

  mainWindow.once("ready-to-show", () => {

    setTimeout(() => {
      splash.close();
      mainWindow.show();
    }, 2500);

  });

}

app.whenReady().then(createWindow);