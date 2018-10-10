import { app, BrowserWindow, Menu , Tray} from 'electron';
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';
import { resolve } from 'path';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let tray = null;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload();


const init = async () => {
  tray = new Tray(resolve(__dirname , '../icon/jietu.png'));
  tray.setContextMenu(require('./menu.js').default);

};

app.on('ready', init);

app.on('quit' , ()=>{
  tray ? tray.destroy() : '';
});


