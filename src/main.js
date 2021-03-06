const { app, BrowserWindow, ipcMain, Menu, globalShortcut, shell } = require('electron');  
// const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const path = require('path');
const url = require('url');
const isDevMode = false;

if(isDevMode){
  require('electron-reload')(__dirname);
}
//import { enableLiveReload } from 'electron-compile';

const template = [
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Electron Github',
        click () { shell.openExternal('https://github.com/yusufakpinar/electronjs') }
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { shell.openExternal('https://electron.atom.io') }
      }
    ]
  }
];

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

//const isDevMode = process.execPath.match(/[\\/]electron/);
//if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: "Electron Sunum",
    // titleBarStyle: 'hidden',
    width: 800,
    height: 600,
    show:false
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/../out/index.html`);
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  });

  // Child Window
  ipcMain.on('childOpen', (event, arg) => {
    console.log(arg)  // prints "ping"   
    let childWin = new BrowserWindow({parent: mainWindow, width: 600, height: 400, show:false});
    childWin.loadURL('https://github.com'); 
    childWin.show();
  });
  

  // Open the DevTools.
  if (isDevMode) {
    installExtension(REACT_DEVELOPER_TOOLS);
    require('devtron').install();
    mainWindow.webContents.openDevTools();
  }

  // Dock Menu
  const dockMenu = Menu.buildFromTemplate([
    {label: 'Github', click () { shell.openExternal('http://www.github.com') }},
    {label: 'New Window with Settings',
      submenu: [
        {label: 'Basic'},
        {label: 'Pro'}
      ]
    },
    {label: 'New Command...'}
  ]);
  app.dock.setMenu(dockMenu);

  // Menu
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // GlobalShortcuts
  const ret = globalShortcut.register('Command+Enter', () => {
    console.log('Enter is pressed');
    mainWindow.webContents.send('start', true);
  })

  if (!ret) {
    console.log('registration failed')
  }

  // Check whether a shortcut is registered.
  globalShortcut.isRegistered('Enter');

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
app.on('will-quit', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('Command+Enter')

  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})