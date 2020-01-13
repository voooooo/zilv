import wx from '../../lib/base/wx';
import RestData from "../restData/restData";
import Data from "../tableData/data";
import {observable, extendObservable, autorun, toJS, isObservableArray, isObservableObject, isObservable } from  "../../lib/mobx/mobx-2.6.2.umd";
import {parsePath} from "../../lib/base/pageImpl";
import UUID from "../../lib/base/uuid";
import _String from "../../lib/base/string";
import {isArray,hint} from "../../lib/base/util";

function isNumeric(obj){
	return !isNaN( parseFloat(obj) ) && isFinite( obj )
}

class Filter{
	constructor(){
		this.filterList = {};
		this.variables = {};
	}
	
	clear() {
		for ( var o in this.filterList)
			delete this.filterList[o];
		this.clearVars();
	}

	clearVars() {
		this.variables = {};
	}

	getVar(name) {
		return this.variables["__"+name];
	}

	setVar(name, ver) {
		return this.variables["__"+name] = ver;
	}

	setFilter(name, filter) {
		this.filterList[name] = filter;
	}

	getFilter(name) {
		return this.filterList[name];
	}

	deleteFilter(name) {
		delete this.filterList[name];
	}
}

var fns = {};
var names = ['eq', 'neq', 'gt', 'lt', 'gte', 'lte', 'like', 'ilike', 'not'];
for (let i=0; i<names.length; i++){
	let name = names[i];
	fns[name] = function(relation, value, $$dataObj){
		if(name=='like'||name=='ilike'){
			if(value){
				if((value+'').indexOf('*')<0) value = '*' + value + '*';
			}else value = '*'; 
		}
		return relation + "=" + ('inn'!==name?name:'in') + "." + (isArray(value)?value.join(','):value);
	}
}


export default class AggData extends RestData {
	constructor(page, id, props, context){
		super(page, id, props, context);
	}

	getHaving(name) {
		return this.havings.getFilter(name);
	}

	setHaving(name, filter) {
		return this.havings.setFilter(name, filter);
	}

	init(){
		// 创建filters对象
		this.havings = new Filter();
		this.havingFns = fns;
		this.groupBy = [];

		super.init();
	}
	
	_initDefinition() {
		super._initDefinition();
		//产生统计相关定义
		if(!this.props.options.idColumn){
			this.props.options.idColumn = 'idCol';
			this.props.schema.items.props['idCol'] = {type:'String',label:'ID列'};
		}
		//统计中的分组查询
		if(this.props.options.groupBy) this.groupBy = this.props.options.groupBy;
		// 处理定义的havings
		// 格式{'filterName':having,...}
		var havings = this.props.havings;
		for (var o in havings)
			this.setHaving(o, havings[o]);
	}
	
	_initJoin(){
		super._initJoin();
		//增加统计的aggDef
		var columns = this.getColumnDefs();
	   	for (let n in columns) {
	   		let v = columns[n];
			if(v.fn && v.field){
				var t = "";
				if(isArray(this.join)){
					t = (v['tableAlias']||v['table']||this.tableName) + ".";
				}
				v['aggDef']=_String.format('{0}({1})', v.fn, t+v.field);
			}
		}
	}
	
	saveData(option) {
		this.showError({message:"不支持保存"});
	}
	
	newData(option) {
		this.showError({message:"不支持新增"});
	}

	deleteData(option) {
		this.showError({message:"不支持删除"});
	}
	
	_getSelectCol(){
		var ret = [];
		var groupBy = this.groupBy;
		var columns = this.getColumnDefs();
	   	for ( var n in columns) {
	   		let v = columns[n];
	   		if(!v.isCal){
	   			if(v.aggDef) ret.push(v.aggDef);
	   			else if(groupBy.indexOf(v.field)>-1||groupBy.indexOf(n)>-1){
					let col=v.field;
					if(isArray(this.join)){
						var t = (v['tableAlias']||v['table']||this.tableName) + ".";
						col = _String.format("{0} as \"{1}\"", t+v.field, n);
					}
	   				ret.push(col); 
	   			}
	   		}
		}
		return ret.join();
	}
	
	_getGroupBy(){
		if(isArray(this.join)){
			var grps = [];
			for(var i in this.groupBy){
				let grp = this.groupBy[i];
				let v = this.getColumnDef(grp);
				let t = ((v && (v['tableAlias']||v['table']))||this.tableName) + ".";
				grps.push(t+((v&&v.field)||grp));
			}
			return grps.join();
		}else
			return this.groupBy.join();
	}
	
	// 重新实现orderBy
	getOrderBys() {
		var ret = [];
		var items = this.getOderBysObj();
		for (var i=0;i<items.length;i++) {
			let o = items[i];
			let col = o.name;
			let defcol = this.getColumnDef(col);
			if(defcol){
				if(defcol.aggDef){
					col = defcol.aggDef; 
				}else{
					col = defcol.field;
				}
			}
			var t = "";
			if(!defcol.aggDef && isArray(this.join)){
				t = ((defcol && (defcol['tableAlias']||defcol['table']))||this.tableName) + ".";
			}
			
			ret.push(t + col + "." + (0 === o.type ? 'desc' : 'asc'));
		}
		return ret.length>0?"order="+ret.join(","):null;
	}

	_createRefreshParam(offset, limit, append, options) {
		var queryParam = {};

		var filter = this.buildFilter();
		if (filter)
			queryParam.filter = filter;
		
		var having = this.buildHaving();
		if (having)
			queryParam.having = having;

		queryParam.offset = offset;
		queryParam.limit = limit;

		queryParam.columns = this._getSelectCol();

		//生成join
		if(this.join){
			var joins = [];
			for(let i in this.join){
				let join = this.join[i];
				var leftTable = join['leftTable'];
				var rightTable = join['rightTable'];
				var rightTableAlias = join['rightTableAlias'];
				var joinOn = join['on'][0];//目前支持一个
				joins.push(_String.format("{0}.{1}.{2}.{3}.{4}", leftTable,joinOn.leftField,joinOn.fn,rightTable+(rightTableAlias?('|'+rightTableAlias):''),joinOn.rightField));
			}
			queryParam.join = joins.join();
		}
		
		queryParam.groupBy = this._getGroupBy();
		
		var o = this.getOrderBys();
		if (o)
			queryParam.orderBy = o;

		return queryParam;
	}

	_getQueryParam(queryParam) {
		var ret = [];
		if('number' == typeof(queryParam.limit)) ret.push("limit="+queryParam.limit);
		if('number' == typeof(queryParam.offset)) ret.push("offset="+queryParam.offset);

		if(queryParam.columns) ret.push("select="+queryParam.columns);
		if(queryParam.orderBy) ret.push(queryParam.orderBy);
		if(isArray(queryParam.filter))
			for(let i=0,len=queryParam.filter.length;i<len;i++){
				ret.push(queryParam.filter[i]);
			}
		if(isArray(queryParam.having))
			for(let i=0,len=queryParam.having.length;i<len;i++){
				ret.push('having::'+queryParam.having[i]);
			}
		if(queryParam.join) ret.push("join="+queryParam.join);
		if(queryParam.groupBy) ret.push("groupby="+queryParam.groupBy);
		return ret.length>0?ret:null; 
	}
	
	_processHaving(having, variables){
		if (typeof this.page[having] === 'function'){
			var vars = Object.assign({}, this.context.vars,  {$page: this.page}, {params: this.page.params}, this.havingFns);
			vars.$$dataObj = this; //添加data对象自身
			having = this.page[having](vars);
		}
		
		if (having==null || having==undefined || having===""){
			return [];
		}else if (isArray(having)){
			return having;
		}else{
			return [having];
		}
	}

	buildHaving() {
		var ret = [];
		var havings = this.havings.filterList;
		var variables = this.havings.variables;
		for ( var o in havings) {
			var having = havings[o];
			if (!having) continue;
			var s = this._processHaving(having,variables);
			if(isArray(s)) ret = ret.concat(s);
		}

		return ret.length>0?ret:null;
	}
	
	//处理统计字段
	_processRow(row){
		if(row){
			var groupBy = this.groupBy;
			var cols = this.getColumnDefs();
	    	for (let n in cols) {
	    		let v = cols[n];
	    		if(v.aggDef) row[n] = row[v.aggDef];
	 	   		else if(groupBy.indexOf(v.field)>-1) row[n] = row[v.field]; 
	    	}
		}
		return row;
	}
	
	_doRefreshData(offset, limit, options) {
		var onError = null, onSuccess = null, onLoad;
		if (options) {
			if ('function'===typeof(options))
				onSuccess = options;
			else {
				onError = options.onError;
				onSuccess = options.onSuccess;
				onLoad = options.onLoad;
			}
		}

		var queryParam = this._createRefreshParam(offset, limit, options ? options.append : false, options);
		if (!queryParam)
			return false;

		var params = this._getQueryParam(queryParam);
		var headers = {"X-SERVICE":this.getService()};
		if (isNumeric(queryParam.limit) && queryParam.limit > 0) {
			headers['X-Output-Count'] = 1;
		}

		var self = this;
		wx.request({
			type : "GET",
			dataType : "json",
			header : headers,
			url : this.buildUrl(params),
			success : function(res) {
				let o = res.data || [];
				let hasRecordCount = o.length && undefined!==o[0].recordCount;
				let count = o.length>0 ? (o[0].recordCount + '') : '0';
				if(hasRecordCount) o = o.splice(1);
				if (0===offset){
					if (count) {
						let ipos = count.lastIndexOf("/");
						if (ipos > -1)
							count = count.substring(ipos + 1);
						count = parseInt(count, 10);
						self.setTotal(count, options ? options.parent : null);
					}
				}
				
				for(let i=0,len=o.length;i<len;i++){
					self._processRow(o[i]);
				}
				self.loadData(o, options ? options.append : false, options ? options.parent : null);
				var eventData = {
					source : self,
					rows : o
				};
				self.doRefreshAfter(true, options, eventData);
			},
			fail : function(xhr) {
				self._refreshError(arguments, onError, options);
			}
		});
		
		return {
			success : true,
			async : true
		};
	}
	
	_loadData(data, append, parent, index, override, fireEvt){
		if(isArray(data)){
			let idColumn = this.getIdColumn();
			for (let i=0; i<data.length; i++){
				 let row = data[i];
				 if(!row[idColumn]){
						let uuid = new UUID().toString();
						row[idColumn] = uuid.replace(/-/g,'').toUpperCase();
				 }
			 }
		}
		return super._loadData(data, append, parent, index, override, fireEvt);
	}

}

wx.comp = wx.comp || {};
wx.comp.AggregateData = AggData
