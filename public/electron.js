const { app, BrowserWindow, Tray } = require("electron");
const isDevelopmentMode = require("electron-is-dev");
const path = require("path");

let mainWindow;
let tray;

app.dock.hide();

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 200,
    height: 400,
    center: true,
    resizable: false,
    movable: false,
    alwaysOnTop: true,
    show: false,
    frame: false,
    transparent: true,
    webPreferences: {
      devTools: isDevelopmentMode,
    },
  });

  mainWindow.loadURL(
    isDevelopmentMode
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDevelopmentMode) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.setResizable(false);
};

const onTrayClick = (_, bounds) => {
  const { x, y } = bounds;
  mainWindow.setBounds({ x: x, y });

  mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
};

app.whenReady().then(() => {
  createWindow();
  tray = new Tray(path.join(__dirname, "icon.png"));

  tray.on("click", onTrayClick);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
