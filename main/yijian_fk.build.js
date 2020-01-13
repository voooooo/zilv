import wx from '../wxsys/lib/base/wx';
import _createPageConfig from '../wxsys/lib/base/createPageConfig';
import PageClass from './yijian_fk.user';

import '../wxsys/comps/wrapper/wrapper';
import '../wxsys/comps/commonOperation/commonOperation'; 
import '../wxsys/comps/messageDialog/messageDialog'; 
import '../wxsys/comps/button/button'; 
import '../wxsys/comps/page/page'; 
import '../wxsys/comps/text/text'; 
import '../wxsys/comps/toptips/toptips'; 
import '../wxsys/comps/textarea/textarea'; 
import '../wxsys/comps/loading/loading'; 
import '../wxsys/comps/wxApi/wxApi'; 
var methods = {
$evtH_messageDialog_ok: function({$event,$data,$item,params,$page,props}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/shezhi.w"};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('redirectTo', args, $$$args);

}

,$evtH_button_tap: function({$event,$data,$item,params,$page,props}){
let $$$args = arguments[0];
	let args={};
	return $page.$compByCtx('messageDialog',$event.source).executeOperation('show', args, $$$args);

}

}
var template = [
	{
		"cls":wx.compClass('$UI/wxsys/comps/page/page'),
		"props":{
			"id":"page"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wxApi/wxApi'),
		"props":{
			"id":"wxapi"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/commonOperation/commonOperation'),
		"props":{
			"id":"commonOperation"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/loading/loading'),
		"props":{
			"loadingNum":0,
			"id":"_random1"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/messageDialog/messageDialog'),
		"props":{
			"$events":{
				"ok":"$evtH_messageDialog_ok"
			},
			"id":"messageDialog",
			"title":"提交确认",
			"content":"您是否填写完毕？您的意见将对我们帮助很大！"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text",
			"text":"意见反馈"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/textarea/textarea'),
		"props":{
			"id":"textarea"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/toptips/toptips'),
		"props":{
			"id":"__toptips__"
		}
	}
];
export function createPageConfig(){
	return _createPageConfig(PageClass, template, methods, {})
}
export function createPage(owner, pageid, props){
	var page = new PageClass(owner, props);
	page.$init(template, methods, pageid);
	return page;
}
