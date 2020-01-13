import wx from './wxsys/lib/base/wx';
import {initenv} from './wxsys/lib/base/initenv';
 wx.App = {baseUrl: 'https://zilv-app.newdaoapp.cn', resPath: 'https://zilv-app.newdaoapp.cn/zilv'};
initenv();

App({
})
