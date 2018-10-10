import { Menu } from 'electron';

export default Menu.buildFromTemplate([
    {
        label: '开始截图',
        accelerator: 'CmdOrCtrl+Shift+A',
        click: (menuItem, browserWindow, event)=>{
            console.log('menuItem',menuItem);
            console.log('browserWindow',browserWindow);
            console.log('event',event);
        }
    },
    {
        type: 'separator'
    },
    {
        label: '退出',
        role: 'quit'
    }
]);