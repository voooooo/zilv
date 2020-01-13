import wx from '../../lib/base/wx';
/*! 
* WeX5 v3 (http://www.justep.com) 
* Copyright 2015 Justep, Inc.
* Licensed under Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) 
*/
import Component from "../../lib/base/component";

var MsgDialog = {
    type: {
        OK: 'OK',
        OKCancel: 'OKCancel',
    }
}

export default class MessageDialog extends Component {
    constructor(page, id, props, context) {
        super(page, id, props, context);
    }

    show(options) {
        const self = this;
        options = options || {};
        let title = options.title || this.props.title || "";
        let content = options.content || this.props.content || "";
        let showCancel = (options.type || this.props.type) !== MsgDialog.type.OK;
        let cancelText = (options.cancelText || this.props.cancelText) || '取消';
        let confirmText = (options.confirmText || this.props.confirmText) || '确定';
        var ret = wx.showModal({
            title: title,
            content: content,
            showCancel: showCancel,
            cancelText: cancelText,
            confirmText: confirmText
        });
        ret.then(function(res){
            if(options.callback)
                options.callback(res);
            if (res.confirm) {
                self.fireEvent('ok', {source : self});
                
            } else if (res.cancel) {
                self.fireEvent('cancel', {source : self});
            }
        }).catch( function(res){
        	self.fireEvent('fail', {source : self});
        });
        return ret;
    }

    initOperation() {
        super.initOperation();
        this.defineOperation('show', {
            label: "打开",
            icon: 'glyphicon glyphicon-floppy-disk',
            argsDef: [],
            method: function(args) {
                return this.owner.show(args.option);
            }
        });
    }

    destroy() {
        super.destroy();
    }
}

wx.comp = wx.comp || {};
wx.comp.MessageDialog = MessageDialog;
