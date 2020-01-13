import wx from '../wxsys/lib/base/wx';
import _createPageConfig from '../wxsys/lib/base/createPageConfig';
import PageClass from './index.user';

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

 var $g_fns_restData3 = {
		get _userdata(){
			return {
				data9: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				data17: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				data6: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				data5: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				avatarUrl: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				data4: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				data3: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				nickName: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				data2: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				isLogined: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				description: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				userName: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				phone: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				name: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				id: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				email: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				data15: {
					readonly: 	function($self){
							try{
								let $data=$self.$data;
					 			return $data.getReadonly()
							}catch(_$e){
								return null;
							}
						}(this)
				},
				group: {
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

import '../wxsys/comps/user/user'; 
import '../wxsys/comps/image/image'; 
import '../wxsys/comps/commonOperation/commonOperation'; 
import '../wxsys/comps/list/list'; 
import '../wxsys/comps/restData/restData'; 
import '../wxsys/comps/button/button'; 
import '../comp/wxxcx_login/components/wxxcx_login/wxxcx_login'; 
import '../wxsys/comps/page/page'; 
import '../wxsys/comps/text/text'; 
import '../wxsys/comps/toptips/toptips'; 
import '../wxsys/comps/wxApi/wxApi'; 
var methods = {
$evtH_page_loaded: function({$event,$data,restData,restData1,$item,params,$page,restData2,props,restData3}){
let $$$args = arguments[0];
	let args={};
	return $page.$compByCtx('user',$event.source).executeOperation('login', args, $$$args);

}

,$evtH_button4_tap: function({$event,$data,restData,restData1,$item,params,$page,restData2,props,restData3}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/chazhao_qz.w"};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('navigateTo', args, $$$args);

}

,
 $items_list: function({listindex,restData,restData1,params,$page,restData2,props,restData3,listitem}){
 return restData2.value ;
}

,$evtH_list_tap: function({listindex,$event,$data,restData,restData1,$item,params,$page,restData2,props,restData3,listitem}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/quanzi_xqy.w"};
	args.params={"param0":listitem.fhuodongid,"flag":1};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('navigateTo', args, $$$args);

}

,$evtH_button1_tap: function({listindex,$event,$data,restData,restData1,$item,params,$page,restData2,props,restData3,listitem}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/faxian.w"};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('navigateTo', args, $$$args);

}

,$evtH_page_show: function({$event,$data,restData,restData1,$item,params,$page,restData2,props,restData3}){
let $$$args = arguments[0];
	let args={};
	return $page.$compByCtx('page',$event.source).executeOperation('refresh', args, $$$args);

}

,
 $imageUrlFn_image1: function({listindex,restData,restData1,$item,params,$page,restData2,props,restData3,listitem}){
 return listitem.fhuodongid_juanzi_fjuanzitp ;
}

,$evtH_button2_tap: function({listindex,$event,$data,restData,restData1,$item,params,$page,restData2,props,restData3,listitem}){
let $$$args = arguments[0];
	let args={};
	args={"url":"$UI/main/wode.w"};
	return $page.$compByCtx('wxapi',$event.source).executeOperation('navigateTo', args, $$$args);

}

,$evtH_user_login: function({$event,$data,restData,restData1,$item,params,$page,restData2,props,restData3}){
let $$$args = arguments[0];
wx.OperationPromise.resolve(function(){
	let args={};
	args={"index":"0"};
	args.defaultValues=[{"fnicheng":restData3.current.nickName,"ftouxiang":restData3.current.avatarUrl,"fopenid":restData3.current.id}];
	if (wx.Util.iif(restData1.current.fid!=restData3.current.id,false,false)) 	return $page.$compByCtx('restData1',$event.source).executeOperation('new', args, $$$args);
}()).then(() => {
	let args={};
	args={"data":"restData1"};
	return $page.$compByCtx('commonOperation',$event.source).executeOperation('saveData', args, $$$args);
});

}

,
 $filter__system1__restData2: function({restData,nlike,lt,restData1,restData2,restData3,not,gte,neq,lte,$page,isNotNull,$$dataObj,like,RBRAC,inn,is,params,eq,gt,props,LBRAC,isNull,ilike,nilike}){
 	return eq('fyonghuopenid',restData3.current.id/*{"dependencies":["user"]}*/, $$dataObj);
 ;
}

,
 $roFn_restData3: function($data){
return true;
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
							"fid":{
								"define":"fid",
								"label":"主键",
								"type":"string",
								"extType":"String"
							},
							"fhuodongid_juanzi_fjuanzijs":{
								"define":"fjuanzijs",
								"label":"活动ID-圈子介绍",
								"type":"richtext",
								"extType":"LongText",
								"table":"main_juanzi"
							},
							"fsanyuzt":{
								"define":"fsanyuzt",
								"label":"参与状态",
								"type":"integer",
								"extType":"Integer"
							},
							"fhuodongid_juanzi_fquanzimc":{
								"define":"fquanzimc",
								"label":"活动ID-圈子名称",
								"type":"string",
								"extType":"String",
								"table":"main_juanzi"
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
							"fhuodongid_juanzi_fjuanzitp":{
								"define":"fjuanzitp",
								"label":"活动ID-圈子图片",
								"type":"objectstorage",
								"extType":"Image",
								"table":"main_juanzi"
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
							"fhuodongid_juanzi_fdakagz":{
								"define":"fdakagz",
								"label":"活动ID-打卡规则",
								"type":"richtext",
								"extType":"LongText",
								"table":"main_juanzi"
							},
							"_key":{
								"type":"string"
							}
						}
					}
				},
				"options":{
					"depends":[
						"user"
					],
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
					"join":[
						{
							"rightTable":"main_juanzi",
							"columns":[
								{
									"field":"fquanzimc",
									"name":"fhuodongid_juanzi_fquanzimc",
									"label":"活动ID-圈子名称"
								},
								{
									"field":"fjuanzijs",
									"name":"fhuodongid_juanzi_fjuanzijs",
									"label":"活动ID-圈子介绍"
								},
								{
									"field":"fdakagz",
									"name":"fhuodongid_juanzi_fdakagz",
									"label":"活动ID-打卡规则"
								},
								{
									"field":"fjuanzitp",
									"name":"fhuodongid_juanzi_fjuanzitp",
									"label":"活动ID-圈子图片"
								}
							],
							"leftTable":"main_yonghuhdb",
							"type":"inner",
							"on":[
								{
									"fn":"eq",
									"rightField":"fid",
									"leftField":"fhuodongid"
								}
							]
						}
					],
					"idColumn":"fid"
				},
				"id":"restData2",
				"filters":{
					"_system1_":[
						"$filter__system1__restData2"
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
					"id":"restData3",
					"type":"array",
					"items":{
						"fns":$g_fns_restData3,
						"type":"object",
						"key":"_key",
						"props":{
							"data9":{
								"readonly":"$data.getReadonly()",
								"define":"data9",
								"label":"地址",
								"type":"string",
								"extType":"String"
							},
							"data17":{
								"readonly":"$data.getReadonly()",
								"define":"data17",
								"label":"生日",
								"type":"date",
								"extType":"Date"
							},
							"data6":{
								"readonly":"$data.getReadonly()",
								"define":"data6",
								"label":"国家",
								"type":"string",
								"extType":"String"
							},
							"data5":{
								"readonly":"$data.getReadonly()",
								"define":"data5",
								"label":"微博",
								"type":"string",
								"extType":"String"
							},
							"avatarUrl":{
								"readonly":"$data.getReadonly()",
								"define":"avatarUrl",
								"label":"头像",
								"type":"string",
								"extType":"String"
							},
							"data4":{
								"readonly":"$data.getReadonly()",
								"define":"data4",
								"label":"QQ",
								"type":"string",
								"extType":"String"
							},
							"data3":{
								"readonly":"$data.getReadonly()",
								"define":"data3",
								"label":"市",
								"type":"string",
								"extType":"String"
							},
							"nickName":{
								"readonly":"$data.getReadonly()",
								"isCal":true,
								"define":"EXPRESS",
								"label":"昵称",
								"type":"string"
							},
							"data2":{
								"readonly":"$data.getReadonly()",
								"define":"data2",
								"label":"省",
								"type":"string",
								"extType":"String"
							},
							"isLogined":{
								"readonly":"$data.getReadonly()",
								"isCal":true,
								"define":"EXPRESS",
								"label":"是否登录",
								"type":"boolean"
							},
							"description":{
								"readonly":"$data.getReadonly()",
								"define":"description",
								"label":"备注",
								"type":"string",
								"extType":"String"
							},
							"userName":{
								"readonly":"$data.getReadonly()",
								"define":"userName",
								"label":"登录名",
								"type":"string",
								"extType":"String"
							},
							"_key":{
								"type":"string"
							},
							"phone":{
								"readonly":"$data.getReadonly()",
								"define":"phone",
								"label":"手机",
								"type":"string",
								"extType":"String"
							},
							"name":{
								"readonly":"$data.getReadonly()",
								"define":"name",
								"label":"姓名",
								"type":"string",
								"extType":"String"
							},
							"id":{
								"readonly":"$data.getReadonly()",
								"define":"id",
								"label":"id",
								"type":"string",
								"extType":"String"
							},
							"email":{
								"readonly":"$data.getReadonly()",
								"define":"email",
								"label":"邮箱",
								"type":"string",
								"extType":"String"
							},
							"data15":{
								"readonly":"$data.getReadonly()",
								"define":"data15",
								"label":"性别",
								"type":"integer",
								"extType":"Integer"
							},
							"group":{
								"readonly":"$data.getReadonly()",
								"isCal":true,
								"define":"EXPRESS",
								"label":"群组",
								"type":"array"
							}
						}
					}
				},
				"options":{
					"isMain":false,
					"className":"/uaa/user",
					"autoMode":"",
					"defSlaves":[],
					"confirmDelete":true,
					"tableName":"uaa_user",
					"confirmRefreshText":"",
					"allowEmpty":false,
					"confirmDeleteText":"",
					"confirmRefresh":true,
					"isAllColumns":true,
					"idColumn":"id"
				},
				"$roFn":"$roFn_restData3",
				"id":"restData3",
				"filters":{}
			}
		}
	],
	{
		"cls":wx.compClass('$UI/wxsys/comps/page/page'),
		"props":{
			"$events":{
				"loaded":"$evtH_page_loaded",
				"show":"$evtH_page_show"
			},
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
		"cls":wx.compClass('$UI/wxsys/comps/user/user'),
		"props":{
			"useSmsService":true,
			"data":"restData3",
			"loginSuccessHint":true,
			"useOpenid":false,
			"autoLoadUserInfo":true,
			"appPath":"$UI/main",
			"autoLogin":false,
			"useOtherLogin":false,
			"autoUpdateUserInfo":true,
			"$events":{
				"login":"$evtH_user_login"
			},
			"id":"user",
			"autoBindPhone":false,
			"logoutAfterToLogin":true
		}
	},
	{
		"cls":wx.compClass('$UI/comp/wxxcx_login/components/wxxcx_login/wxxcx_login'),
		"props":{
			"miniappLogin":true,
			"id":"wxxcx_login",
			"mpLogin":false
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button4"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/list/list'),
		"props":{
			"$items":"$items_list",
			"item":"listitem",
			"autoRefresh":true,
			"dataId":"restData2",
			"$template":[
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
						"id":"text1"
					}
				},
				{
					"cls":wx.compClass('$UI/wxsys/comps/text/text'),
					"props":{
						"id":"text2"
					}
				}
			],
			"autoLoadNextPage":true,
			"index":"listindex",
			"id":"list",
			"items":"restData2.value",
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
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button1"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/button/button'),
		"props":{
			"id":"button2"
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
