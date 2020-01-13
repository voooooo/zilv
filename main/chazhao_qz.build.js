import wx from '../wxsys/lib/base/wx';
import _createPageConfig from '../wxsys/lib/base/createPageConfig';
import PageClass from './chazhao_qz.user';

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


import '../wxsys/comps/wrapper/wrapper';
import '../wxsys/comps/image/image'; 
import '../wxsys/comps/commonOperation/commonOperation'; 
import '../wxsys/comps/list/list'; 
import '../wxsys/comps/restData/restData'; 
import '../wxsys/comps/input/input'; 
import '../wxsys/comps/button/button'; 
import '../wxsys/comps/page/page'; 
import '../wxsys/comps/wrapper/wrapper'; 
import '../wxsys/comps/text/text'; 
import '../wxsys/comps/toptips/toptips'; 
import '../wxsys/comps/searchBar/searchBar'; 
import '../wxsys/comps/loading/loading'; 
import '../wxsys/comps/wxApi/wxApi'; 
var methods = {

 $items_list: function({listindex,restData,restData1,params,$page,props,listitem}){
 return restData.value ;
}

,
 $imageUrlFn_image: function({listindex,restData,restData1,$item,params,$page,props,listitem}){
 return listitem.fjuanzitp ;
}

,$evtH_row1_tap: function({listindex,$event,$data,restData,restData1,$item,params,$page,props,listitem}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/quanzi_xqy.w"};
	args.params={"param0":listitem.fid,"flag":1};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('navigateTo', args, $$$args);

}

,$evtH_button_tap: function({listindex,$event,$data,restData,restData1,$item,params,$page,props,listitem}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/chuangjian_xdqz.w"};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('navigateTo', args, $$$args);

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
							"fdakagz":{
								"define":"fdakagz",
								"label":"打卡规则",
								"type":"richtext",
								"extType":"LongText"
							},
							"fjuanzidkjssj":{
								"define":"fjuanzidkjssj",
								"label":"圈子打卡结束时间",
								"type":"datetime",
								"extType":"DateTime"
							},
							"fchuangjiansjc":{
								"define":"fchuangjiansjc",
								"label":"创建时间戳",
								"type":"string",
								"extType":"String"
							},
							"_key":{
								"type":"string"
							},
							"fjuanzitp":{
								"define":"fjuanzitp",
								"label":"圈子图片",
								"type":"objectstorage",
								"extType":"Image"
							},
							"fchuangjianropenid":{
								"define":"fchuangjianropenid",
								"label":"创建人openID",
								"type":"string",
								"extType":"String"
							},
							"fjuanzisyrs":{
								"define":"fjuanzisyrs",
								"label":"圈子参与人数",
								"type":"integer",
								"extType":"Integer"
							},
							"fjuanzijs":{
								"define":"fjuanzijs",
								"label":"圈子介绍",
								"type":"richtext",
								"extType":"LongText"
							},
							"fquanzimc":{
								"define":"fquanzimc",
								"label":"圈子名称",
								"type":"string",
								"extType":"String"
							},
							"fjuanzijsrj":{
								"define":"fjuanzijsrj",
								"label":"圈子结束日期",
								"type":"date",
								"extType":"Date"
							},
							"fjuanziksrj":{
								"define":"fjuanziksrj",
								"label":"圈子开始日期",
								"type":"date",
								"extType":"Date"
							},
							"fjuanzidksj":{
								"define":"fjuanzidksj",
								"label":"圈子打卡开始时间",
								"type":"datetime",
								"extType":"DateTime"
							}
						}
					}
				},
				"options":{
					"isMain":false,
					"className":"/main/juanzi",
					"autoMode":"load",
					"defSlaves":[
						{
							"field":"yonghuhdb_juanzi",
							"name":"main/yonghuhdb",
							"table":"main_yonghuhdb"
						}
					],
					"url":"/dbrest",
					"confirmDelete":true,
					"tableName":"main_juanzi",
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
				"id":"restData1",
				"filters":{}
			}
		}
	],
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
		"cls":wx.compClass('$UI/wxsys/comps/searchBar/searchBar'),
		"props":{
			"input":"input",
			"data":"restData",
			"filterProps":"fquanzimc",
			"id":"searchBar"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/input/input'),
		"props":{
			"id":"input"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"icon1"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text1",
			"text":"搜索"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/list/list'),
		"props":{
			"$items":"$items_list",
			"item":"listitem",
			"autoRefresh":true,
			"dataId":"restData",
			"$template":[
				{
					"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
					"props":{
						"id":"row1"
					}
				},
				{
					"cls":wx.compClass('$UI/wxsys/comps/image/image'),
					"props":{
						"$urlFn":"$imageUrlFn_image",
						"id":"image"
					}
				},
				{
					"cls":wx.compClass('$UI/wxsys/comps/text/text'),
					"props":{
						"id":"text2"
					}
				},
				{
					"cls":wx.compClass('$UI/wxsys/comps/text/text'),
					"props":{
						"id":"text3"
					}
				}
			],
			"autoLoadNextPage":true,
			"index":"listindex",
			"id":"list",
			"items":"restData.value",
			"key":"_key"
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
