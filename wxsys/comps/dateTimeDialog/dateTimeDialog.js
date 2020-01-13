import wx from '../../lib/base/wx';
import Component from "../../lib/base/component";
import _Date from "../../lib/base/date";
export default class DateTimeDialog extends Component {
     constructor(page, id, props, context){
        super(page, id, props, context);
        this.value = [];
        this.years = this.generateYears();
        this.months = ['01', '02', '03', '04', '05', '06', '07', '08' , '09', '10', '11', '12'];
        this.hours = this.generateHours();
        this.minutes = this.generateMinutes();
        this.seconds = this.generateMinutes();
        this.days = [];
        this.nowTime = null;
        this.layerWindowStat = false;
     }
     
     generateYears(){
    	 var result = [];
    	 var date = new Date();
    	 for (let i = 1900; i <= date.getFullYear()+100; i++) {
    		 result.push(i);
         }
    	 return result;
     }
     
     generateHours(){
         var result = [];
    	 for (let i = 0 ; i <= 23; i++) {
      	   	result.push(i>9 ? i : ("0" + i));
         }
    	 return result;
     }

     generateMinutes(){
         var result = [];
    	 for (let i = 0 ; i <= 59; i++) {
       	   	result.push(i>9 ? i : ("0" + i));
         }
    	 return result;
     }
     
     generateDays(date){
    	 var result = [];
    	 var size = this.getMaxDay(date.getFullYear(), date.getMonth()+1);
    	 for (let i = 1 ; i <= size; i++) {
           	result.push(i>9 ? i : ("0" + i));
         }
    	 return result;
     }

     
     
     buildState(context){
 		var state = super.buildState(context);
 		this.nowTime = this.nowTime || new Date();
 		state.nowTime = _Date.toString(this.nowTime, "yyyy-MM-dd hh:mm:ss");;
 		state.layerWindowStat = this.layerWindowStat;
 		state.value = this.value;
 		this.days = this.generateDays(new Date(this.nowTime));
 		state.days = this.days;
    	var names = ['years','months', 'hours','minutes', 'seconds'];
 		names.forEach((name)=>{
            state[name]=this[name];
 		});
 		return state;
     }
     
      
     // 模态对话框
     showDialog(time, callback){ 
	    this.callback = callback;
	    this.layerWindowStat = true;
	    this.nowTime = new Date(time || new Date());
	    this.value = [this.nowTime.getFullYear()-1900, this.nowTime.getMonth(), this.nowTime.getDate()-1, 
	                  this.nowTime.getHours(), this.nowTime.getMinutes(), this.nowTime.getSeconds()];
	    this._update(this.context);
	  }
     
	 onMaskClick(evt){
		if (evt.target.id === evt.currentTarget.id){
			this.cancelClick();
		}
	 }
	 
     // 设置input时间
     okClick(evt){
    	this.callback && this.callback(this.nowTime)
    	this.layerWindowStat = false;
    	this._update(this.context);
     }
     
     // 取消
     cancelClick(){
     	this.layerWindowStat = false;
    	this._update(this.context);
     }
     
     
     
     // 时间每次变化更新状态
     bindChooseTime(e) {
    	 if (!this.layerWindowStat) return; // 不可见时会触发bindchange事件, 绕过这个bug
         var val = e.detail.value;
         this.value = val;
         var nowYear = this.years[val[0]];
         var nowMonth = this.months[val[1]];
         var nowDay = this.days[val[2]];
         nowDay = this.getValidDay(nowYear, nowMonth, nowDay);
         var nowtime = this.hours[val[3]];
         var nowminute = this.minutes[val[4]];
         var second = this.seconds[val[5]];
         this.nowTime = _Date.fromString(nowYear + "-" + nowMonth + "-" + nowDay + " " + nowtime + ":" + nowminute + ":" + second, _Date.DEFAULT_FORMAT1);
         this._update(this.context);
     }
     
     getMaxDay(year, month){
    	 month = month * 1;
    	 var max = 30;
    	 if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    		 max = 31;
    	 } else if (month == 2) {
    		 year = year * 1;
    		 if (year % 4 == 0) {
    			 max = 29;
    		 } else {
    			 max = 28;
    		 }
    	 }
    	 return max; 
     }
     
     getValidDay(year, month, day){
		 var max = this.getMaxDay(year, month);
    	 if (!day){
			day = max;
		 }else{
			 day = day * 1;
			 day = day > max ? max : day;
		 }
    	  if(day<10){
    	      day = "0" + day; 
    	  }
    	 return day;
     }
}

wx.comp = wx.comp || {};
wx.comp.DateTimeDialog = DateTimeDialog;

