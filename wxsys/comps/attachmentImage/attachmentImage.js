import wx from '../../lib/base/wx';
import BindComponent from "../../lib/base/bindComponent";
import UUID from '../../lib/base/uuid';
import { observable, toJS, autorun, untracked } from '../../lib/mobx/mobx-2.6.2.umd';

export default class AttachmentImage extends BindComponent {
  constructor(page, id, props, context) {
    super(page, id, props, context);
    this.recordDuration = this.props.recordDuration;
    if(window && window.microService && window.microService.isMicroService){
		this.actionUrl = wx.App.baseUrl + "/" + this.page.basePath + (this.props.actionUrl || "/storage");
	}else{
		this.actionUrl = wx.App.baseUrl + (this.props.actionUrl || "/storage");
	} 

    //TODO 属性命名有问题 this.props.statics 代表启用 图片链接保护  代码中 this.statics 代码是否为静态图片	
    this.statics = this.props.statics && this.props.statics === "true" ? false : true;
    this.sizeType = this.props.sizeType && this.props.sizeType === "false" ? "original" : "compressed";
    this.attachmentData = this.props.attachmentData;
    
    this.attachments = observable([]);
    wx._previewImageEndPoint = wx._previewImageEndPoint || observable("");
    
    this.ownerId = context.vars && context.vars.$item && context.vars.$item.fid;
    autorun(() => {
      this.attachments.replace(this.getValueFromData());
    });
    autorun(() => {
        if(this.attachments && this.attachmentData){
        	if(this.ownerId){
        		this.attachments.forEach(item =>{
            		item.ownerId = this.ownerId;
            	});
        	};
        	let newData = toJS(this.attachments);
        	untracked(() => {
        		let data = this.page.comp(this.attachmentData);
				if(data){
					if(this.ownerId){
						let rows = data.find(["ownerId"], [this.ownerId]);
						data.deleteData(rows);
	        		}else{
	        			data.clear();	
	        		}
					data.loadData(newData,true,null,null,true);
                	data.first();
				}
        	});
        }
    });
    
    
    autorun(() => {
      this.attachments.forEach(item => {
        //TODO hcr 解决autorun由于依赖previewImageUrl，且自己修改previewImageUrl问题
        let percent = item.percent;
        let previewImageUrl = item.previewImageUrl;
        let storeFileName = item.storeFileName;
        let _previewImageEndPoint = wx._previewImageEndPoint;
        untracked(() => {
          if (item.percent == 100) {
            if (item.previewImageUrl == "//:0") {
              if (item.storeFileName.indexOf("anoy_") == 0 && wx._previewImageEndPoint.get() != "") {
                if (wx._previewImageEndPoint.get() != "//:0") {
                  item.previewImageUrl = wx._previewImageEndPoint.get() + item.storeFileName;
                }
              } else {
                //TODO lhj 解决如果第一张为图片链接保护模式  接下来的图片不显示问题
                //                              if(wx._previewImageEndPoint.get() == ""){
                //                                wx._previewImageEndPoint.set("//:0");
                //                              }
                wx.request({
                  url: this.actionUrl + '/presignedGetObject',
                  data: {
                    objectName: item.storeFileName
                  },
                  header: {
                    'content-type': 'application/json'
                  },
                  success: function (res) {
                    if (item.storeFileName.indexOf("anoy_") == 0) {
                      wx._previewImageEndPoint.set(res.data.split("anoy_")[0]);
                    }
                    item.previewImageUrl = res.data;
                  }
                })
              }
            }
          }
        });
      });
    });
    this.mode = observable(this.props.mode || 'upload');
    this.count = observable(parseInt(this.props.count) || 9);
    this.playPic = observable();
    this.chooseRecord = observable(false);
    this.animationData = observable();
    this.isSpeaking = observable(false);
    this.pictures = observable();
    this.name = observable(this.props.name || "图片上传");
    this.disabled = observable(this.props.compDisabled == "true");
    this.deleBox = observable(true);
    this.autoLayout = observable();
    this.commonMode = observable(false);
    this.commonModeImg = observable();
    this.imageMode = observable(this.props.imgmode || "aspectFill");
    this.recordMode = observable(this.props.recordMode || "touch");
    this.recordFont = observable("按住说话");
    this.recordState = "" ;
    if (this.recordMode.get() == "click"){
      this.recordFont.set("点击话筒开始说话");
    }
    if (this.props.compDisabled) {
    	autorun(() => {
    		let readlony = this.page[this.props.compDisabled](this.context.vars);
    		this.deleBox.set(!readlony);
    		this.disabled.set(readlony);
    	});
      }
  }

  getValueFromData() {
    let _value = super.getValue();
    if (_value && _value.indexOf("http")>=0){
        this.commonMode.set(true);
        this.commonModeImg.set(_value) ;
        return
      }
    let value = JSON.parse(_value || "[]");
    let valueLen = value.length;
     if (this.props.layout == "auto" && this.disabled.get()){
      if (valueLen == 1) {
          if (this.props.imgmode == "widthFix") {
              this.imageMode.set("widthFix");
            }
        this.autoLayout.set("x-one-col-layout");
      } else if (valueLen == 2 || valueLen == 4) {
    	if(this.props.imgmode == "widthFix"){
    		this.imageMode.set("aspectFill");
    	}
        this.autoLayout.set("x-two-col-layout");
      } else {
      	if(this.props.imgmode == "widthFix"){
    		this.imageMode.set("aspectFill");
    	}
        this.autoLayout.set("x-three-col-layout");
      }
    }
    value.forEach(item => {
      item.percent = 100;
      let realFileName = item.realFileName;
      let type = realFileName.substring(realFileName.lastIndexOf(".") + 1).toLowerCase();
      if (type == 'png'||type=='jpg'||type=='gif'||type=='jpeg'||type=='tiff'||type=='svg'||type=='webp'||type=='svgz') {
          item.documentType = 'image'
        }else if (type == 'mp4' || type == 'avi' || type == 'wmv' || type == 'm4v' || type == '3gp' || type == 'flv' || type == 'mov' || type == 'mkv' || type =='dat'|| type =='mpeg'|| type =='rmvb'){
          item.documentType = 'video' ;
        }else if(type=="aac" || type == "mp3" || type =="cd"||type == "wma"||type=="wav"||type=="asf"||type=="ape"||type =="flac"||type == "ogg" ||type =="mid"|| type == "m4a" || type == "amr" || type == "aiff" || type == "caf"){
          item.documentType = 'record' ;
          item.audioID = parseInt(Math.random() * 10000);
        }
      if (item.storeFileName.indexOf("anoy_") == 0 && wx._previewImageEndPoint.get().length > 5) {
        item.previewImageUrl = wx._previewImageEndPoint.get() + item.storeFileName;
      } else {
        item.previewImageUrl = '//:0';
      }

    });
    return value;
  }

  //给data写回值需要调用doChange函数 重载掉写回前调整内容
  setValueToData() {
    let data = toJS(this.attachments);
    
    data.forEach(attachment => {
      delete attachment.percent;
      delete attachment.previewImageUrl;
      delete attachment.documentType ;
      delete attachment.audioID ;
    });
    
    this.doChange({
      value: (data&&data.length>0)?JSON.stringify(data):null
    });
  }

  buildState(context) {
    let state = super.buildState(context);
    state.attachments = toJS(this.attachments);
    state.mode = toJS(this.mode);
    
    //控制加号
    if(this.disabled.get()){
    	state.count = state.attachments.length;
    }else{
    	state.count = toJS(this.count);
    }

    state.name = toJS(this.name);
    state.playPic = this.playPic.get() ;
    state.isSpeaking = this.isSpeaking.get();
    state.pictures = this.pictures.get();
    state.chooseRecord = this.chooseRecord.get();
    state.animationData = this.animationData.get();
    state.largeImage = this.props.largeImage == "true";
    state.deleBox = this.deleBox.get();
    state.autoLayout = this.autoLayout.get();
    state.commonMode = this.commonMode.get();
    state.commonModeImg = this.commonModeImg.get();
    state.imageMode = this.imageMode.get();
    state.recordMode = this.recordMode.get();
    state.recordFont = this.recordFont.get();
    return state;
  }

  getAttachmentUrls() {
    let urls = [];
    this.attachments.forEach(attachment => {
      if (attachment.documentType == 'image'){
        urls.push(attachment.previewImageUrl);
      } 
    });
    return urls;
  }
  
  getCurrentAttachment(storeFileName) {
	    let currentAttachment = this.attachments.find(attachment => {
	      return attachment.storeFileName == storeFileName;
	    });
	    return currentAttachment ;
	  }


  previewImageOperation(currentStoreFileName) {
	  let urls = this.getAttachmentUrls();
	  if(urls.length > 0){
		  wx.previewImage({
		      current: currentStoreFileName?this.getCurrentAttachment(currentStoreFileName).previewImageUrl:undefined,
		      urls: urls
		    })
	  }
  }
  
  playVideoOperation(currentStoreFileName) {
	    let curID = 'myVideo' + currentStoreFileName ;
	    this.videoContext = wx.createVideoContext(curID);
	    this.videoContext.requestFullScreen();
  }
  
  playRecordOperation(currentStoreFileName) {
	    let self = this;
	    let url = self.getCurrentAttachment(currentStoreFileName).previewImageUrl ;
	    self.audioCtx = wx.createAudioContext("myAudio");
	    self.audioCtx.setSrc(url);
	    self.audioCtx.play();

}
  photograph(){
	  if(this.count.get() == 1){
		  this.upLoadImage('replace',"0");
	  }else{
		  this.upLoadImage('upload',"0");
	  }
  }
  
  cameraShooting(){
	    if (this.count.get() == 1) {
	        this.upLoadVideo("replaceCamera");
	      }else{
	        this.upLoadVideo("onlyCamera");
	      }
  }
  
  recording(){
	  this.isWindow();
  }
  previewImage(event) {
	    let storeFileName = event.currentTarget.dataset.storeFileName ;
	    let documentType = this.getCurrentAttachment(storeFileName) .documentType ;
	    if(documentType !='image'){
	         return 
	    }
	    wx.previewImage({
	      current:this.getCurrentAttachment(storeFileName).previewImageUrl,// 当前显示图片的http链接
	      urls: this.getAttachmentUrls(event.target.id) // 需要预览的图片http链接列表
	    })
  }

  static getFileName(filePath) {
    return filePath.substring(filePath.lastIndexOf("/") + 1);
  }

  changeMode(event) {
    if (this.mode.get() == "upload") {
      this.mode.set("delete");
    } else {
      this.mode.set("upload");
    }
  }

  screenchange(event){
     let curID = event.target.id;
     this.videoContext = wx.createVideoContext(curID);
     if (event.detail.fullScreen==false){
       this.videoContext.pause();
     }else{
       this.videoContext.play();
     }
  }
  playVideoFullScreen(event){
    let curID = event.target.id ;
    this.videoContext = wx.createVideoContext(curID);
    this.videoContext.requestFullScreen();
  }
  deleteVideo(event){
    this.deleteImage(event);
  }
  previewOrDeleteImage(event) {
    let storeFileName = event.currentTarget.dataset.storeFileName;
    let imageUrls = this.getAttachmentUrls();
    let evtData = {
      data: {
        urls: imageUrls,
        currentUrl:  this.getCurrentAttachment(storeFileName).previewImageUrl,
        imagesLength: imageUrls.length ,
        mode: this.mode,
        item: this.attachments.find(item => {
          return item.storeFileName == storeFileName;
        })
      },
      cancel: false
    };
    let self = this ;
    this.fireEvent("attachmentClick",evtData);
    if (evtData.cancel == false) {
      if (this.mode.get() == 'upload') {
        this.previewImage(event);
      } else if (this.mode.get() == "delete") {
        this.deleteImage(event);
      }
    }
  }

  deleteImage(event) {
    if (this.disabled.get()) {
      return;
    }
    let storeFileName = event.currentTarget.dataset.storeFileName;
    this.attachments.remove(this.attachments.find(attachment => {
      return attachment.storeFileName == storeFileName;
    }));
    this.mode.set("upload");
    this.setValueToData();
  }
  
  deleteImageOperation(storeFileName) {
    this.attachments.remove(this.attachments.find(attachment => {
      return attachment.storeFileName == storeFileName;
    }));
    this.setValueToData();
  }
  
  replaceImage(event) {
    if (!this.disabled.get()) {
    	 this.upLoadImage('replace');
    }
  }
  upLoadImage(type = 'upload',sign) {
	    if (this.disabled.get()&& sign =="") {
	        return;
	      }
	      let relaseNumber = this.count.get() - this.attachments.length;
	      let self = this;
	      let photoType = ['album', 'camera'];
	      if(sign){
	      	photoType = ['camera']
	      }
	      wx.chooseImage({
	        count: relaseNumber,
	        sizeType: self.sizeType,
	        sourceType : photoType
	      }).then((res) => {
	        let tempFilePaths = res.tempFilePaths;
	        if(res.tempFiles){
	        	tempFilePaths  = res.tempFiles
	        }
	        let waitingUploadNum = tempFilePaths.length;
	        let initState = false ;
	        for (let filePath of tempFilePaths) {
	          if (!self.props.size || (self.props.size && self.props.size *1 >= (filePath.size || 0))){
	        	let imagePath =  filePath.path || filePath ;
	            let realFileName = AttachmentImage.getFileName(imagePath);
	            let tag = realFileName.substring(realFileName.lastIndexOf("."));
	            let storeFileName = self.statics ? "anoy_" + UUID.createUUID() + tag : UUID.createUUID() + tag;
	            if (type == "upload") {
	              self.attachments.push({
	                storeFileName,
	                realFileName,
	                percent: 0,
	                previewImageUrl: '//:0',
	                documentType: "image"
	              });
	            } else if (type == "replace") {
	              self.attachments.clear();
	              if (self.commonMode.get()) {
	                self.commonModeImg.set("");
	              }
	              self.attachments.push({
	                storeFileName,
	                realFileName,
	                percent: 0,
	                previewImageUrl: '//:0',
	                documentType: "image"
	              });
	            }
	            self.upLoadFile(imagePath, storeFileName, waitingUploadNum--, 'image')
	          }else{
	              initState = true ;
	          }

	        }
	        if (initState){
	          let tooltip = self.props.hint || "上传文件大小超出限制!" ;
	          wx.showToast({
	            title: tooltip ,  //标题
	            icon: 'none'
	          })
	        }
	      });
  }
  
  _doUploadFileComplete(filePath,res){
	  //上传完成后
  }
  
  upLoadFile(filePath, storeFileName, waitingUploadNum,fileTag,audioDuration){
	    let self = this;
	    let formVal = {
	    	        'storeFileName': storeFileName
	    	      }
	    if (fileTag=='record'){
	    	        formVal.duration = audioDuration
	    	      }
	    let uploadTask = wx.uploadFile({
	      url: self.actionUrl + "/postObject",
	      filePath: filePath,
	      name: 'file',
	      formData:formVal,
	      success: function (res) {
	        let currentAttachment = self.attachments.find(attachment => attachment.storeFileName == storeFileName);
	        currentAttachment.percent = 100;


	      },
	      fail: function (error) {
	        self.attachments.remove(self.attachments.find(attachment => attachment.storeFileName == storeFileName));
	        wx.showToast({
	          title: `上传失败`,
	          icon: 'loading',
	          duration: 3000
	        })

	      },
	      complete: function (res) {
	          if (fileTag == 'image'){
	              if (waitingUploadNum == 1){
	                self.setValueToData();
	              }
	            }else{
	              self.setValueToData();
	            }
	          self._doUploadFileComplete(filePath,res);
	      }
	    });
	    uploadTask && uploadTask.onProgressUpdate && uploadTask.onProgressUpdate((res) => {
	      let currentAttachment = self.attachments.find(attachment => attachment.storeFileName == storeFileName);
	      if (currentAttachment) {
	        //修改 progress 100 文件没有上传完成的bug
	        if (res.progress != 100) {
	          currentAttachment.percent = res.progress;
	        }else{
	            currentAttachment.fileSize = res.totalBytesSent;
	          }
	      }
	    });
	  }
  upLoadVideo(args) {
    var self = this;
    let videoNumber = self.props.videoNumb * 1 || 9;
    let Numb = self.getFileTypeUrls('video').length;
    if (Numb>=videoNumber){
       wx.showModal({
         title: '',
         content: '只允许上传'+videoNumber+'个视频哦',
         showCancel: false
       })
      return
    }
    let caremaType = ['album', 'camera'] ;
    if(args){
    	caremaType = ['camera'] ;
    }
    wx.chooseVideo({
      sourceType: caremaType,
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        // if(res.duration >60){
        //   wx.showToast({
        //     title: '视频限制60秒',
        //     duration:2000
        //   })
        //   return ;
        // }
          if (self.props.size && self.props.size *1 < res.size) {
              let tooltip = self.props.hint || "上传文件大小超出限制!" ;
              wx.showToast({
                title: tooltip,  //标题
                icon: 'none'
              })
              return;
            }
        let tempFilePaths = res.tempFilePath;
        let realFileName = AttachmentImage.getFileName(tempFilePaths);
        let tag = realFileName.substring(realFileName.lastIndexOf("."));
        let storeFileName = self.statics ? "anoy_" + UUID.createUUID() + tag : UUID.createUUID() + tag;
        if (args =='replaceCamera'){
            self.attachments.clear();
            self.attachments.push({
              storeFileName,
              realFileName,
              percent: 0,
              previewImageUrl: '//:0',
              documentType: "video",
              //  isFull: false 
            });
          }else{
            self.attachments.push({
              storeFileName,
              realFileName,
              percent: 0,
              previewImageUrl: '//:0',
              documentType: "video",
              //  isFull: false 
            });
          }
         self.upLoadFile(tempFilePaths,storeFileName);
      }
    })
  }
  
  playVoiceAnimate(event){
    let self = this;
    let currentAudioUrl = event.target.dataset.audiourl ;
    let currentAudioID = event.target.dataset.audioid ;
    let i = 1;
    self.audioCtx = wx.createAudioContext("myAudio");
    self.audioCtx.setSrc(currentAudioUrl);
    clearInterval(self.voiceTimer);
    self.audioCtx.play();
    self.voiceTimer = setInterval(function () {
      i++;
      i = i % 5;
      self.playPic.set(currentAudioID + i)
    }, 300);
	  }
	  
  audioEnd(event){
    clearInterval(this.voiceTimer);
    this.playPic.set();
  }
  
  speaking() {
	    let self = this;
	    //话筒帧动画
	    let i = 1;
	    self.timer = setInterval(function () {
	      i++;
	      i = i % 5;
	      self.pictures.set(i)
	    }, 200);
	  }
  // 点击录音及结束.
  startAndendRecord(){
    if(!this.recordState){
      this.startRecording();
      this.recordState = "starting"
    }else{
      this.endRecording();
      this.recordState = "" ;
    }


  }
  startRecording(){
    this.speaking.call(this);
    this.isSpeaking.set(true);
    const recorderManager = wx.getRecorderManager();
    let option = { format : "mp3"};
    if(this.recordDuration) option.duration = this.recordDuration*1;//转换成数值
    recorderManager.start(option);
  }
  endRecording(){
    let self = this;
    this.isSpeaking.set(false);
    clearInterval(this.timer);
    const recorderManager = wx.getRecorderManager();
    recorderManager.stop();
    recorderManager.onStop((res) => {
      self.closeModel();
      console.log('录音 stop.....', res);
      const { tempFilePath, duration } = res;
      let tempFilePaths = tempFilePath;
      let audioDuration = Math.ceil(duration / 1000);
      let realFileName = AttachmentImage.getFileName(tempFilePaths);
      let tag = realFileName.substring(realFileName.lastIndexOf("."));
      let storeFileName = self.statics ? "anoy_" + UUID.createUUID() + tag : UUID.createUUID() + tag;
      self.attachments.push({
        storeFileName,
        realFileName,
        percent: 0,
        previewImageUrl: '//:0',
        documentType: "record",
        duration: audioDuration,
        audioID: parseInt(Math.random() * 10000),
        //    isFull: false
      });
      self.upLoadFile(tempFilePaths, storeFileName, "", "record", audioDuration)
    })

  }
  // 长按录音及结束
  speakTouchDown() {   
	    this.startRecording();
     }
  speakTouchUp() {   
    this.endRecording() ;
	  }
  getFileTypeUrls(tag) {
	    let fileUrls = [];
	    this.attachments.forEach(attachment => {
	      if (attachment.documentType == tag) {
	        fileUrls.push(attachment.previewImageUrl);
	      }
	    });
	    return fileUrls;
	  }
  closeModel(event){
	    let self = this;
	    self.chooseRecord.set(false);
//	    let animation = wx.createAnimation({
//	      duration: 1000,
//	      timingFunction: 'linear'
//	    })
//	    self.animation = animation ;
//	    animation.translateY(200).step() ;
//	    self.animationData.set(animation.export());
//	    setTimeout(function () {
//	      animation.translateY(0).step()
//	      self.animationData.set(animation.export());
//	      self.chooseRecord.set(false);
//	    }, 200)   
	  }
  showRecordModel(){
	    let self = this;
	    let audioNumber = self.props.audioNumb * 1 || 9;
	    let Numb = self.getFileTypeUrls('record').length;
	    if (Numb >= audioNumber) {
	      wx.showModal({
	        title: '',
	        content: '只允许上传' + audioNumber + '个录音哦',
	        showCancel: false
	      })
	      return
	    }
	    self.chooseRecord.set(true);
	  }
  
  isWindow(){
	     var self = this ;
	     if (window) {
	       wx.showModal({
	         title: '',
	         content: "当前环境不支持录音,请到小程序开发环境查看",
	         showCancel: false
	       })
	       return
	     }
	     self.showRecordModel();
	   }
  chooseImage(event) {
	    var self = this;
	    let fileType = self.props.upType || 'image';
	    let list ;
	    if (fileType == 'image，video') {
	       list = ['上传图片', '上传视频']
	      wx.showActionSheet({
	        itemList: list,
	        success: function (res) {
	          if (res.tapIndex == 0) {
	        	if(self.count.get() == 1){
	        		self.upLoadImage("replace");
	        	}else{
	        		self.upLoadImage();	
	        	}
	          }else{
	            self.upLoadVideo();
	          }
	        },
	        fail: function (res) {
	          console.log(res.errMsg)
	        }
	      })
	    }else if (fileType == 'image') {
        	if(self.count.get() == 1){
        		self.upLoadImage("replace");
        	}else{
        		self.upLoadImage();	
        	}
	    }else if(fileType=='video'){
	      self.upLoadVideo();
	    }else if(fileType =='image，record'){
	        list = ['上传图片', '上传录音']
		   if (wx.Device.isX5App()){
		       list = ['上传图片'] 
		      }
	      wx.showActionSheet({
	        itemList: list,
	        success: function (res) {
	          if (res.tapIndex == 0) {
		        	if(self.count.get() == 1){
		        		self.upLoadImage("replace");
		        	}else{
		        		self.upLoadImage();	
		        	}
	          } else {
	        	self.isWindow();
	          }
	        },
	        fail: function (res) {
	          console.log(res.errMsg)
	        }
	      })
	    } else if (fileType == 'video，record'){
	        list = ['上传视频', '上传录音']
		    if (wx.Device.isX5App()){
		     list = ['上传视频'] 
		     }
	      wx.showActionSheet({
	        itemList: list,
	        success: function (res) {
	          if (res.tapIndex == 0) {
	            self.upLoadVideo();
	          } else {
                self.isWindow();
	          }
	        },
	        fail: function (res) {
	          console.log(res.errMsg)
	        }
	      })  
	    }else if(fileType=='image，video，record'){
	      list = ['上传图片','上传视频', '上传录音'] 
	      if (wx.Device.isX5App()){
	            list = ['上传图片', '上传视频'] 
	         }
	      wx.showActionSheet({
	        itemList: list,
	        success: function (res) {
	          if (res.tapIndex == 0) {
		        	if(self.count.get() == 1){
		        		self.upLoadImage("replace");
		        	}else{
		        		self.upLoadImage();	
		        	}
	          }else if(res.tapIndex ==1){
	            self.upLoadVideo() ;
	          } else{
	        	self.isWindow();
	          }
	        },
	        fail: function (res) {
	          console.log(res.errMsg)
	        }
	      })  
	    }else{
	    	self.isWindow();
	    }
	  }

  initOperation() {
    super.initOperation();
    this.defineOperation('chooseImage', {
      label: "上传",
      argsDef: [],
      method: function (args) {
        return this.owner.chooseImage();
      }
    });
    this.defineOperation('previewImageOperation', {
      label: "预览图片",
      argsDef : [{
		name : 'currentStoreFileName',
		displayName : '当前图片文件名',
		required : false
      }],
      method: function (args) {
        return this.owner.previewImageOperation(args.currentStoreFileName);
      }
    });
    this.defineOperation('deleteImageOperation', {
        label: "删除文件",
        argsDef : [{
				name : 'storeFileName',
			displayName : '文件存储名',
			required : true
		}],
        method: function (args) {
          return this.owner.deleteImageOperation(args.storeFileName);
        }
     });
    this.defineOperation('playVideoOperation', {
        label: "播放视频",
        argsDef : [{
				name : 'currentStoreFileName',
			displayName : '当前视频存储名',
			required : true
		}],
        method: function (args) {
          return this.owner.playVideoOperation(args.currentStoreFileName);
        }
     });
    this.defineOperation('playRecordOperation', {
        label: "播放录音",
        argsDef : [{
				name : 'currentStoreFileName',
			displayName : '当前视频存储名',
			required : true
		}],
        method: function (args) {
          return this.owner.playRecordOperation(args.currentStoreFileName);
        }
     });
    this.defineOperation('photograph', {
        label: "拍照",
        argsDef: [],
        method: function (args) {
          return this.owner.photograph();
        }
      });
    this.defineOperation('cameraShooting', {
        label: "摄像",
        argsDef: [],
        method: function (args) {
          return this.owner.cameraShooting();
        }
      });
    this.defineOperation('recording', {
        label: "录音",
        argsDef: [],
        method: function (args) {
          return this.owner.recording();
        }
      });
  }
}

wx.comp = wx.comp || {};
wx.comp.AttachmentImage = AttachmentImage;
