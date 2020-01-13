import wx from '../wxsys/lib/base/wx';
import _createPageConfig from '../wxsys/lib/base/createPageConfig';
import PageClass from './daka_y.user';

 var $g_fns_restData = {
		get _userdata(){
			return {

			};
		}
}; 


 var $g_fns_restData1 = {
		get _userdata(){
			return {

			};
		}
}; 


 var $g_fns_restData2 = {
		get _userdata(){
			return {

			};
		}
}; 


import '../wxsys/comps/wrapper/wrapper';
import '../wxsys/comps/commonOperation/commonOperation'; 
import '../wxsys/comps/messageDialog/messageDialog'; 
import '../wxsys/comps/restData/restData'; 
import '../wxsys/comps/button/button'; 
import '../wxsys/comps/page/page'; 
import '../wxsys/comps/wrapper/wrapper'; 
import '../wxsys/comps/toptips/toptips'; 
import '../wxsys/comps/textarea/textarea'; 
import '../wxsys/comps/attachmentImage/attachmentImage'; 
import '../wxsys/comps/loading/loading'; 
import '../wxsys/comps/wxApi/wxApi'; 
var methods = {

 $refFn_attachmentImage: function({restData,restData1,params,$page,restData2,props}){
 return restData.current.fzhaopian ;
}

,
 $readonly_attachmentImage: function({restData,restData1,params,$page,restData2,props}){
 return (restData.current._userdata && restData.current._userdata.fzhaopian && restData.current._userdata.fzhaopian.readonly) ;
}

,
 $refPathFn_textarea: function({restData,restData1,params,$page,restData2,props}){
 return restData.current._path ;
}

,
 $refFn_textarea: function({restData,restData1,params,$page,restData2,props}){
 return restData.current.fdakarxq ;
}

,$evtH_messageDialog_ok: function({$event,$data,restData,restData1,$item,params,$page,restData2,props}){
let $$$args = arguments[0];
wx.OperationPromise.resolve(function(){
	let args={};
	args={"data":"restData"};
	args.values=[{"filed":"fjuanziid","value":params.param0},{"filed":"fdakaropenid","value":restData2.current.id},{"filed":"fdakarjsj","value":wx.Date.now()},{"filed":"fdakartx","value":restData2.current.avatarUrl},{"filed":"fdakarnc","value":restData2.current.userName}];
	return $page.$compByCtx('commonOperation',$event.source).executeOperation('filedValues', args, $$$args);
}()).then(() => {
wx.OperationPromise.resolve(function(){
	let args={};
	args={"data":"restData"};
	return $page.$compByCtx('commonOperation',$event.source).executeOperation('saveData', args, $$$args);
}()).then(() => {
	let args={};
	args={"url":"$UI/main/quanzi_dty.w"};
	args.params={"param0":params.param0,"flag":1};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('redirectTo', args, $$$args);
});
});

}

,$evtH_button_tap: function({$event,$data,restData,restData1,$item,params,$page,restData2,props}){
let $$$args = arguments[0];
	let args={};
	return $page.$compByCtx('messageDialog',$event.source).executeOperation('show', args, $$$args);

}

,
 $refPathFn_attachmentImage: function({restData,restData1,params,$page,restData2,props}){
 return restData.current._path ;
}

}
var template = [
	[
		{
			"cls":wx.compClass('$UI/wxsys/comps/restData/restData'),
			"props":{
				"schema":{
					"limit":20,
					"orderBy":[],
					"keyItems":"_key",
					"id":"restData",
					"type":"array",
					"items":{
						"fns":$g_fns_restData,
						"type":"object",
						"key":"_key",
						"props":{
							"fid":{
								"define":"fid",
								"label":"主键",
								"type":"string",
								"extType":"String"
							},
							"fdakarnc":{
								"define":"fdakarnc",
								"label":"打卡人昵称",
								"type":"string",
								"extType":"String"
							},
							"fdakarjsj":{
								"define":"fdakarjsj",
								"label":"打卡日期时间",
								"type":"datetime",
								"extType":"DateTime"
							},
							"fdakartx":{
								"define":"fdakartx",
								"label":"打卡人头像",
								"type":"string",
								"extType":"String"
							},
							"fdakaropenid":{
								"define":"fdakaropenid",
								"label":"打卡人openID",
								"type":"string",
								"extType":"String"
							},
							"fzhaopian":{
								"define":"fzhaopian",
								"label":"照片",
								"type":"objectstorage",
								"extType":"File"
							},
							"fdakarxq":{
								"define":"fdakarxq",
								"label":"打卡人心情",
								"type":"string",
								"extType":"String"
							},
							"_key":{
								"type":"string"
							},
							"fjuanziid":{
								"define":"fjuanziid",
								"label":"圈子ID",
								"type":"string",
								"extType":"String"
							}
						}
					}
				},
				"options":{
					"isMain":false,
					"className":"/main/dakab",
					"autoMode":"new",
					"defSlaves":[],
					"url":"/dbrest",
					"confirmDelete":true,
					"tableName":"main_dakab",
					"confirmRefreshText":"",
					"allowEmpty":false,
					"confirmDeleteText":"",
					"confirmRefresh":true,
					"idColumn":"fid"
				},
				"id":"restData",
				"filters":{}
			}
		},
		{
			"cls":wx.compClass('$UI/wxsys/comps/restData/restData'),
			"props":{
				"schema":{
					"limit":20,
					"orderBy":[],
					"keyItems":"_key",
					"id":"restData1",
					"type":"array",
					"items":{
						"fns":$g_fns_restData1,
						"type":"object",
						"key":"_key",
						"props":{
							"fid":{
								"define":"fid",
								"label":"主键",
								"type":"string",
								"extType":"String"
							},
							"fopenid":{
								"define":"fopenid",
								"label":"openid",
								"type":"string",
								"extType":"String"
							},
							"ftouxiang":{
								"define":"ftouxiang",
								"label":"头像",
								"type":"string",
								"extType":"String"
							},
							"_key":{
								"type":"string"
							},
							"fnicheng":{
								"define":"fnicheng",
								"label":"昵称",
								"type":"string",
								"extType":"String"
							}
						}
					}
				},
				"options":{
					"isMain":false,
					"className":"/main/yonghub",
					"autoMode":"load",
					"defSlaves":[],
					"url":"/dbrest",
					"confirmDelete":true,
					"tableName":"main_yonghub",
					"confirmRefreshText":"",
					"allowEmpty":false,
					"confirmDeleteText":"",
					"confirmRefresh":true,
					"idColumn":"fid"
				},
				"id":"restData1",
				"filters":{}
			}
		},
		{
			"cls":wx.compClass('$UI/wxsys/comps/restData/restData'),
			"props":{
				"schema":{
					"limit":20,
					"orderBy":[],
					"keyItems":"_key",
					"id":"restData2",
					"type":"array",
					"items":{
						"fns":$g_fns_restData2,
						"type":"object",
						"key":"_key",
						"props":{
							"previousLogonSuccessTime":{
								"define":"previous_logon_success_time",
								"label":"最早登录时间",
								"type":"datetime",
								"extType":"DateTime"
							},
							"origin":{
								"define":"origin",
								"label":"源",
								"type":"string",
								"extType":"String"
							},
							"phonenumber":{
								"define":"phonenumber",
								"label":"手机号",
								"type":"string",
								"extType":"String"
							},
							"_key":{
								"type":"string"
							},
							"password":{
								"define":"password",
								"label":"密码",
								"type":"string",
								"extType":"String"
							},
							"familyName":{
								"define":"familyname",
								"label":"姓",
								"type":"string",
								"extType":"String"
							},
							"zoneId":{
								"define":"identity_zone_id",
								"label":"租户域id",
								"type":"string",
								"extType":"String"
							},
							"id":{
								"define":"id",
								"label":"id",
								"type":"string",
								"extType":"String"
							},
							"email":{
								"define":"email",
								"label":"邮箱",
								"type":"string",
								"extType":"String"
							},
							"data9":{
								"define":"data9",
								"label":"地址",
								"type":"string",
								"extType":"String"
							},
							"data18":{
								"define":"data18",
								"label":"--扩展18",
								"type":"datetime",
								"extType":"DateTime"
							},
							"data17":{
								"define":"data17",
								"label":"生日",
								"type":"date",
								"extType":"Date"
							},
							"data8":{
								"define":"data8",
								"label":"--扩展8",
								"type":"string",
								"extType":"String"
							},
							"data7":{
								"define":"data7",
								"label":"--扩展7",
								"type":"string",
								"extType":"String"
							},
							"salt":{
								"define":"salt",
								"label":"密码盐",
								"type":"string",
								"extType":"String"
							},
							"passwdLastModified":{
								"define":"passwd_lastmodified",
								"label":"密码修改日期",
								"type":"datetime",
								"extType":"DateTime"
							},
							"data6":{
								"define":"data6",
								"label":"国家",
								"type":"string",
								"extType":"String"
							},
							"data5":{
								"define":"data5",
								"label":"微博",
								"type":"string",
								"extType":"String"
							},
							"avatarUrl":{
								"define":"avatarurl",
								"label":"头像",
								"type":"string",
								"extType":"String"
							},
							"data4":{
								"define":"data4",
								"label":"QQ",
								"type":"string",
								"extType":"String"
							},
							"created":{
								"define":"created",
								"label":"创建时间",
								"type":"datetime",
								"extType":"DateTime"
							},
							"data3":{
								"define":"data3",
								"label":"市",
								"type":"string",
								"extType":"String"
							},
							"givenName":{
								"define":"givenname",
								"label":"名",
								"type":"string",
								"extType":"String"
							},
							"data2":{
								"define":"data2",
								"label":"省",
								"type":"string",
								"extType":"String"
							},
							"verified":{
								"define":"verified",
								"label":"验证状态",
								"type":"boolean",
								"extType":"Boolean"
							},
							"data1":{
								"define":"data1",
								"label":"openid",
								"type":"string",
								"extType":"String"
							},
							"active":{
								"define":"active",
								"label":"激活状态",
								"type":"boolean",
								"extType":"Boolean"
							},
							"externalId":{
								"define":"external_id",
								"label":"外部用户id",
								"type":"string",
								"extType":"String"
							},
							"userName":{
								"define":"username",
								"label":"用户名",
								"type":"string",
								"extType":"String"
							},
							"version":{
								"define":"version",
								"label":"版本",
								"type":"integer",
								"extType":"Integer"
							},
							"authorities":{
								"define":"authorities",
								"label":"账户授权信息",
								"type":"string",
								"extType":"String"
							},
							"data10":{
								"define":"data10",
								"label":"--扩展10",
								"type":"string",
								"extType":"String"
							},
							"lastLogonSuccessTime":{
								"define":"last_logon_success_time",
								"label":"最后登录时间",
								"type":"datetime",
								"extType":"DateTime"
							},
							"data12":{
								"define":"data12",
								"label":"--扩展12",
								"type":"string",
								"extType":"String"
							},
							"lastModified":{
								"define":"lastmodified",
								"label":"更新时间",
								"type":"datetime",
								"extType":"DateTime"
							},
							"data11":{
								"define":"data11",
								"label":"--扩展11",
								"type":"string",
								"extType":"String"
							},
							"data14":{
								"define":"data14",
								"label":"--扩展14",
								"type":"string",
								"extType":"String"
							},
							"data13":{
								"define":"data13",
								"label":"--扩展13",
								"type":"string",
								"extType":"String"
							},
							"data16":{
								"define":"data16",
								"label":"--扩展16",
								"type":"integer",
								"extType":"Integer"
							},
							"data15":{
								"define":"data15",
								"label":"性别",
								"type":"integer",
								"extType":"Integer"
							}
						}
					}
				},
				"options":{
					"isMain":false,
					"className":"/uaa/users",
					"autoMode":"load",
					"defSlaves":[],
					"url":"/dbrest",
					"confirmDelete":true,
					"tableName":"users",
					"confirmRefreshText":"",
					"allowEmpty":false,
					"confirmDeleteText":"",
					"confirmRefresh":true,
					"idColumn":"id"
				},
				"id":"restData2",
				"filters":{}
			}
		}
	],
	{
		"cls":wx.compClass('$UI/wxsys/comps/page/page'),
		"props":{
			"id":"page",
			"params":{
				"param0":"String",
				"param1":"String"
			}
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
		"cls":wx.compClass('$UI/wxsys/comps/textarea/textarea'),
		"props":{
			"$propName":"fdakarxq",
			"$refFn":"$refFn_textarea",
			"id":"textarea",
			"$refPathFn":"$refPathFn_textarea"
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
			"title":"确认",
			"content":"确认发布今天的打卡？"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/attachmentImage/attachmentImage'),
		"props":{
			"$refPathFn":"$refPathFn_attachmentImage",
			"statics":"false",
			"$propName":"fzhaopian",
			"$refFn":"$refFn_attachmentImage",
			"compDisabled":"$readonly_attachmentImage",
			"id":"attachmentImage"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"image"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"view9"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"default1"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"view12"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"view15"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"view17"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"view20"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"image6"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"default4"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"image7"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"view25"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"view28"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"view29"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"myAudio"
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
