import wx from '../wxsys/lib/base/wx';
import _createPageConfig from '../wxsys/lib/base/createPageConfig';
import PageClass from './quanzi_czy.user';

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


 var $g_fns_aggregateData = {
		get _userdata(){
			return {
				countfid: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				fhuodongid: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				}
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
import '../wxsys/comps/aggregateData/aggregateData'; 
import '../wxsys/comps/image/image'; 
import '../wxsys/comps/commonOperation/commonOperation'; 
import '../wxsys/comps/messageDialog/messageDialog'; 
import '../wxsys/comps/restData/restData'; 
import '../wxsys/comps/button/button'; 
import '../wxsys/comps/page/page'; 
import '../wxsys/comps/wrapper/wrapper'; 
import '../wxsys/comps/text/text'; 
import '../wxsys/comps/toptips/toptips'; 
import '../wxsys/comps/loading/loading'; 
import '../wxsys/comps/wxApi/wxApi'; 
var methods = {
$evtH_messageDialog1_ok: function({$event,$data,restData,aggregateData,restData1,$item,params,$page,restData2,props}){
let $$$args = arguments[0];
wx.OperationPromise.resolve(function(){
	let args={};
	args={"data":"restData1","force":"false"};
	args.filter=function($row){return wx.Util.iif($row.fhuodongid==params.param0,true,false);};
	return $page.$compByCtx('commonOperation',$event.source).executeOperation('deleteData', args, $$$args);
}()).then(() => {
wx.OperationPromise.resolve(function(){
	let args={};
	args={"data":"restData1"};
	return $page.$compByCtx('commonOperation',$event.source).executeOperation('saveData', args, $$$args);
}()).then(() => {
wx.OperationPromise.resolve(function(){
	let args={};
	args={"data":"restData","force":"false"};
	args.filter=function($row){return wx.Util.iif($row.fid==params.param0,true,false);};
	return $page.$compByCtx('commonOperation',$event.source).executeOperation('deleteData', args, $$$args);
}()).then(() => {
wx.OperationPromise.resolve(function(){
	let args={};
	args={"data":"restData"};
	return $page.$compByCtx('commonOperation',$event.source).executeOperation('saveData', args, $$$args);
}()).then(() => {
	let args={};
	args={"url":"$UI/main/index.w"};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('redirectTo', args, $$$args);
});
});
});
});

}

,
 $attrBindFn_text_view5: function({restData,aggregateData,restData1,params,$page,restData2,props}){
 try{return wx.Util.iif(restData1.current.fsanyuzt!=null,"打卡","先加入圈子")}catch(e){return ''} ;
}

,
 $filter__system1__restData: function({restData,nlike,aggregateData,lt,restData1,restData2,not,gte,neq,lte,$page,isNotNull,$$dataObj,like,RBRAC,inn,is,params,eq,gt,props,LBRAC,isNull,ilike,nilike}){
 	return eq('fid',params.param0, $$dataObj);
 ;
}

,
 $roFn_aggregateData: function($data){
return true;
}

,$evtH_button_tap: function({$event,$data,restData,aggregateData,restData1,$item,params,$page,restData2,props}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/quanzi_xqy.w"};
	args.params={"param0":params.param0,"flag":1};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('redirectTo', args, $$$args);

}

,$evtH_button3_tap: function({$event,$data,restData,aggregateData,restData1,$item,params,$page,restData2,props}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/quanzi_dkxqy.w"};
	args.params={"param0":params.param0,"flag":1};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('redirectTo', args, $$$args);

}

,
 $filter__system1__restData1: function({restData,nlike,aggregateData,lt,restData1,restData2,not,gte,neq,lte,$page,isNotNull,$$dataObj,like,RBRAC,inn,is,params,eq,gt,props,LBRAC,isNull,ilike,nilike}){
 	return eq('fhuodongid',params.param0, $$dataObj);
 ;
}

,$evtH_button7_tap: function({$event,$data,restData,aggregateData,restData1,$item,params,$page,restData2,props}){
let $$$args = arguments[0];
	let args={};
	return $page.$compByCtx('messageDialog1',$event.source).executeOperation('show', args, $$$args);

}

,
 $attrBindFn_text_text2: function({restData,aggregateData,restData1,params,$page,restData2,props}){
 try{return wx.Util.iif(aggregateData.current.countfid==null,"0",aggregateData.current.countfid)}catch(e){return ''} ;
}

,$evtH_button5_tap: function({$event,$data,restData,aggregateData,restData1,$item,params,$page,restData2,props}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/daka_y.w"};
	args.params={"param0":params.param0,"param1":restData2.current.id};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('navigateTo', args, $$$args);

}

,
 $filter__system1__aggregateData: function({isNotNull,$$dataObj,restData,like,aggregateData,lt,inn,restData1,is,params,eq,gt,restData2,props,not,isNull,gte,ilike,neq,lte,$page}){
 	return eq('fhuodongid',params.param0, $$dataObj);
 ;
}

,
 $attrBindFn_disabled_button1: function({restData,aggregateData,restData1,params,$page,restData2,props}){
 try{return wx.Util.iif(restData1.current.fsanyuzt!=null,true,false)}catch(e){return ''} ;
}

,
 $attrBindFn_disabled_button5: function({restData,aggregateData,restData1,params,$page,restData2,props}){
 try{return wx.Util.iif(restData1.current.fsanyuzt!=null,false,true)}catch(e){return ''} ;
}

,
 $imageUrlFn_image1: function({restData,aggregateData,restData1,params,$page,restData2,props}){
 return restData.current.fjuanzitp ;
}

,$evtH_button2_tap: function({$event,$data,restData,aggregateData,restData1,$item,params,$page,restData2,props}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/quanzi_dty.w"};
	args.params={"param0":params.param0,"flag":1};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('redirectTo', args, $$$args);

}

,
 $attrBindFn_text_view1: function({restData,aggregateData,restData1,params,$page,restData2,props}){
 try{return wx.Util.iif(restData1.current.fsanyuzt!=null,"已加入","加入")}catch(e){return ''} ;
}

,
 $attrBindFn_hidden_button7: function({restData,aggregateData,restData1,params,$page,restData2,props}){
 try{return wx.Util.iif(restData.current.fchuangjianropenid==restData2.current.id,false,true)}catch(e){return ''} ;
}

,
 $attrBindFn_hidden_button8: function({restData,aggregateData,restData1,params,$page,restData2,props}){
 try{return wx.Util.iif(restData.current.fchuangjianropenid==restData2.current.id,false,true)}catch(e){return ''} ;
}

,$evtH_messageDialog_ok: function({$event,$data,restData,aggregateData,restData1,$item,params,$page,restData2,props}){
let $$$args = arguments[0];
wx.OperationPromise.resolve(function(){
	let args={};
	args={"data":"restData1"};
	args.filter=function($row){return wx.Util.iif(restData1.current.fyonghuopenid==restData2.current.id,true,false);};
	return $page.$compByCtx('commonOperation',$event.source).executeOperation('deleteData', args, $$$args);
}()).then(() => {
wx.OperationPromise.resolve(function(){
	let args={};
	args={"data":"restData1"};
	return $page.$compByCtx('commonOperation',$event.source).executeOperation('saveData', args, $$$args);
}()).then(() => {
	let args={};
	args={"url":"$UI/main/index.w"};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('redirectTo', args, $$$args);
});
});

}

,$evtH_button6_tap: function({$event,$data,restData,aggregateData,restData1,$item,params,$page,restData2,props}){
let $$$args = arguments[0];
	let args={};
	return $page.$compByCtx('messageDialog',$event.source).executeOperation('show', args, $$$args);

}

,$evtH_button8_tap: function({$event,$data,restData,aggregateData,restData1,$item,params,$page,restData2,props}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/quanzi_bjy.w"};
	args.params={"param0":params.param0};
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
				"filters":{
					"_system1_":[
						"$filter__system1__restData"
					]
				}
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
							"fsanyuzt":{
								"define":"fsanyuzt",
								"label":"参与状态",
								"type":"integer",
								"extType":"Integer"
							},
							"fyonghuopenid":{
								"define":"fyonghuopenid",
								"label":"用户openID",
								"type":"string",
								"extType":"String"
							},
							"juanzi":{
								"define":"yonghuhdb_juanzi",
								"label":"圈子",
								"type":"juanzi",
								"extType":"ManyToOne"
							},
							"fhuodongid":{
								"define":"fhuodongid",
								"label":"活动ID",
								"type":"string",
								"extType":"String"
							},
							"fsanyusj":{
								"define":"fsanyusj",
								"label":"参与时间",
								"type":"string",
								"extType":"String"
							},
							"_key":{
								"type":"string"
							}
						}
					}
				},
				"options":{
					"isMain":false,
					"className":"/main/yonghuhdb",
					"autoMode":"load",
					"defSlaves":[],
					"url":"/dbrest",
					"confirmDelete":true,
					"tableName":"main_yonghuhdb",
					"confirmRefreshText":"",
					"allowEmpty":false,
					"confirmDeleteText":"",
					"confirmRefresh":true,
					"idColumn":"fid"
				},
				"id":"restData1",
				"filters":{
					"_system1_":[
						"$filter__system1__restData1"
					]
				}
			}
		},
		{
			"cls":wx.compClass('$UI/wxsys/comps/aggregateData/aggregateData'),
			"props":{
				"schema":{
					"limit":20,
					"orderBy":[],
					"keyItems":"_key",
					"id":"aggregateData",
					"type":"array",
					"items":{
						"fns":$g_fns_aggregateData,
						"type":"object",
						"key":"_key",
						"props":{
							"countfid":{
								"field":"fid",
								"readonly":"$data.getReadonly()",
								"aggDef":"count(fid)",
								"define":"fid",
								"fn":"count",
								"label":"主键计数",
								"type":"string"
							},
							"fhuodongid":{
								"field":"fhuodongid",
								"readonly":"$data.getReadonly()",
								"define":"fhuodongid",
								"label":"活动ID",
								"type":"string"
							},
							"_key":{
								"type":"string"
							}
						}
					}
				},
				"havings":{},
				"options":{
					"isMain":false,
					"className":"/main/yonghuhdb",
					"groupBy":[
						"fhuodongid"
					],
					"autoMode":"load",
					"url":"/dbrest",
					"confirmDelete":true,
					"tableName":"main_yonghuhdb",
					"confirmRefreshText":"",
					"allowEmpty":false,
					"confirmDeleteText":"",
					"confirmRefresh":true
				},
				"$roFn":"$roFn_aggregateData",
				"id":"aggregateData",
				"filters":{
					"_system1_":[
						"$filter__system1__aggregateData"
					]
				}
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
				"flag":"String",
				"param0":"String"
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
			"title":"删除确认",
			"content":"确认要退出圈子？"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/messageDialog/messageDialog'),
		"props":{
			"$events":{
				"ok":"$evtH_messageDialog1_ok"
			},
			"id":"messageDialog1",
			"title":"删除确认",
			"content":"确认要删除圈子吗？"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/image/image'),
		"props":{
			"$urlFn":"$imageUrlFn_image1",
			"id":"image1"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text1"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text2",
			"$attrBindFns":{
				"text":"$attrBindFn_text_text2"
			}
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text3",
			"text":"人"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button2"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button3"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button4"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button6"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button7",
			"$attrBindFns":{
				"hidden":"$attrBindFn_hidden_button7"
			}
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button8",
			"$attrBindFns":{
				"hidden":"$attrBindFn_hidden_button8"
			}
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button1",
			"$attrBindFns":{
				"disabled":"$attrBindFn_disabled_button1"
			}
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"view1",
			"$attrBindFns":{
				"text":"$attrBindFn_text_view1"
			}
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button5",
			"$attrBindFns":{
				"disabled":"$attrBindFn_disabled_button5"
			}
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"view5",
			"$attrBindFns":{
				"text":"$attrBindFn_text_view5"
			}
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
