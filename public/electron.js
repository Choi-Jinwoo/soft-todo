const AutoLaunch = require("auto-launch");
const { app, BrowserWindow, Tray } = require("electron");
const isDevelopmentMode = require("electron-is-dev");
const path = require("path");

let mainWindow;
let tray;

const onTrayClick = (_, bounds) => {
  const { x, y } = bounds;
  mainWindow.setBounds({ x: x, y });

  mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
};

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 240,
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
    title: "Soft Todo",
    icon: path.join(__dirname, "./icon_512_512.png"),
  });

  mainWindow.setVisibleOnAllWorkspaces(true);

  mainWindow.loadURL(
    isDevelopmentMode
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDevelopmentMode) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.setResizable(false);

  mainWindow.on("blur", () => mainWindow.hide());

  tray = new Tray(path.join(__dirname, "icon_16_16.png"));

  tray.on("click", onTrayClick);
};

app.whenReady().then(() => {
  app.dock.hide();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  const autoLaunch = new AutoLaunch({
    name: "Soft Todo",
    path: app.getPath("exe"),
  });

  autoLaunch.isEnabled().then((isEnabled) => {
    if (!isEnabled) autoLaunch.enable();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
