import wx from '../../lib/base/wx';
import BindComponent from "../../lib/base/bindComponent";

export default class SearchBar extends BindComponent {
     constructor(page, id, props, context){
        super(page, id, props, context);
     }
     
     buildState(context){
		var state = super.buildState(context);
		state.value = this.getInputValue();
		return state;
     }
     
     getInputValue(){
    	 var input = this.getInput();
    	 if (input){
    		 return input.getValue();	 
    	 }else{
    		 return "";
    	 }
     }
     
     getInput(){
    	 if (this.props.input){
    		 return this.page.$compByCtx(this.props.input, this);	 
    	 }else{
    		 return null;
    	 }
    	 
     }
     
     // 当前只支持一个列
     getFilter(value){
    	 if (this.props.filterProps){
    		 var filterPropsRows = this.props.filterProps.split(",");
    		 var rows = [];
    		 for(var i = 0 ; i < filterPropsRows.length; i ++){
    			  if(i == 0){
    				  rows.push({
    					  name: filterPropsRows[i],
    					  op: "ilike",
    					  value: value
    				  })
    			  }else{
    				  rows.push({
    					  name: filterPropsRows[i],
    					  op: "ilike",
    					  value: value,
    					  kind:'or'
    				  })
    			  }
    		 }
    		 return rows;
    	 }else{
    		 return null;
    	 }
     }
     
     onClear(event){
    	 var input = this.getInput();
    	 if (input){
        	 input.doChange({value: ""});
        	 this._update(this.context);
    	 }
     }
     
     onInput(event){
		 this._update(this.context);
	 }
     
     onSearch(event){
    	 var value = this.getInputValue();
    	 var filter = this.getFilter(value);
    	 if (filter){
        	 var eventData = {source: this, value: value, filterProps: this.props.filterProps, cancel: false, filter: filter};
        	 this.fireEvent(SearchBar.EVENT_SEARCH, eventData);
        	 if (!eventData.cacnel){
        		 this.doSearch(eventData.filter);
        	 }
    	 }
     }
     
     doSearch(filter){
    	 if (this.props.data){
    		 var data = this.page.comp(this.props.data);
    		 if (data){
    			 data.setFilter(this.props.id + "__auto_filter", filter);
    			 data.refreshData();
    		 }
    	 }
     }
     
}

SearchBar.EVENT_SEARCH = "search";
wx.comp = wx.comp || {};
wx.comp.SearchBar = SearchBar;

