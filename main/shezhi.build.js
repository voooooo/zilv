import wx from '../wxsys/lib/base/wx';
import _createPageConfig from '../wxsys/lib/base/createPageConfig';
import PageClass from './shezhi.user';

import '../wxsys/comps/wrapper/wrapper';
import '../wxsys/comps/page/page'; 
import '../wxsys/comps/commonOperation/commonOperation'; 
import '../wxsys/comps/text/text'; 
import '../wxsys/comps/toptips/toptips'; 
import '../wxsys/comps/loading/loading'; 
import '../wxsys/comps/wxApi/wxApi'; 
var methods = {
$evtH_col5_tap: function({$event,$data,$item,params,$page,props}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/yijian_fk.w"};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('navigateTo', args, $$$args);

}

,$evtH_col8_tap: function({$event,$data,$item,params,$page,props}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/guanyu_wm.w"};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('navigateTo', args, $$$args);

}

,$evtH_col_tap: function({$event,$data,$item,params,$page,props}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/changjian_wt.w"};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('navigateTo', args, $$$args);

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
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text3",
			"text":"设置"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"col"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text",
			"text":"常见问题"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"col5"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text2",
			"text":"意见反馈"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"col8"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text1",
			"text":"关于我们"
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
