import wx from '../../../../wxsys/lib/base/wx';
/*! 
 * WeX5 v3 (http://www.justep.com) 
 * Copyright 2015 Justep, Inc.
 * Licensed under Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) 
 */ 
import Component from "../../../../wxsys/lib/base/component";
import _String   from "../../../../wxsys/lib/base/string";
import Util      from "../../../../wxsys/lib/base/util";
import Base64    from "../../../../wxsys/lib/base/base64";
import helper    from "../../../../wxsys/comps/user/js/userHelper";
import uaa       from "../../../../wxsys/comps/user/js/uaa";
import User      from "../../../../wxsys/comps/user/user";
import Device    from "../../../../wxsys/lib/base/device";
import {intercept} from  "../../../../wxsys/lib/mobx/mobx-2.6.2.umd";

const apiGatewayUrl = wx.App.baseUrl || "";
function request(options) {
    return new Promise(function(resolve, reject) {
        options = options || {};
        if (options.method !== "GET") {
            options.headers = options.headers || {};
            options.headers.Accept = "application/json; charset=utf-8";
            options.contentType = "application/json; charset=utf-8";
            options.datatype = "json";
            options.data = JSON.stringify(options.data);
        }
        options.success = function(res){
            console.log(res.data);
            resolve(res);
        };
        options.fail = function(error){
            console.error(JSON.stringify(error.data));
            reject(error);
        };
        wx.request(options);
    });
}

var JQUERY = null;
function ajax(options) {
    return new Promise(function(resolve, reject) {
        if (JQUERY == null)
            JQUERY = require("jquery");
        JQUERY.ajax(options).done(function(resp) {
            console.log(resp);
            resolve(resp);
        }).fail(function(resp) {
            console.log(resp);
            reject(resp); 
        });
    });
}

function showWXAuthURL() {
    console.log("===location:", window.location.href);
    var url="/config/config/configs/search/like?key=com.qq.weixin.mp.appID";
    var params = {type: "mp", redirect_url: window.location.href};
    if (!Device.isWeChat()) {
        url="/config/config/configs/search/like?key=com.qq.weixin.open.appID";
        params.type = "open";
    }
    ajax({type:"GET", url}).then(function(data) {
        var appId = "wxb3efde94a26e25fe";
        if (data && data.length > 0 && data[0].fvalue.trim().length > 0)
            appId = data[0].fvalue.trim();
        else {
            console.log("===公众号APPID/SECRET未配置");
            return;
        }
        var callback = [window.location.protocol, "//", window.location.host, window.location.port? ":" + window.location.port : "",
            "/wxxcx_login/thirdpartylogin/wxCallback?params=",
            Base64.encode(JSON.stringify(params))].join("");
        var authUrl = [];
        if (Device.isWeChat())
            authUrl.push("https://open.weixin.qq.com/connect/oauth2/authorize?appid=");
        else
            authUrl.push("https://open.weixin.qq.com/connect/qrconnect?appid=");
        authUrl.push(appId);
        if (Device.isWeChat())
            authUrl.push("&response_type=code&scope=snsapi_userinfo&state=justep_weixin_login&redirect_uri=")
        else
            authUrl.push("&response_type=code&scope=snsapi_login&state=justep_weixin_login&redirect_uri=");
        authUrl.push(encodeURIComponent(callback));

        window.location.href = authUrl.join("");
    });
}

let WxUserInfo = {};    
//加载wx相关信息
let WxUserInfoDfd = null;
let LoginResolve = null;
let LoginDfd = null;

function getWxUserInfo(){
    if(!WxUserInfoDfd){
        WxUserInfoDfd = new Promise(function(resolve, reject) {
            LoginDfd.then(function() {
                //获取wx的用户信息
                wx.getUserInfo({
                    lang: 'zh_CN',
                    withCredentials: true,
                    success: function(res) {
                        let userInfo = res.userInfo;
                        WxUserInfo.avatarUrl = userInfo.avatarUrl;
                        WxUserInfo.nickName = userInfo.nickName;
                        WxUserInfo.gender = userInfo.gender;
                        WxUserInfo.province = userInfo.province;
                        WxUserInfo.city = userInfo.city;
                        WxUserInfo.country = userInfo.country;
                        WxUserInfo.encryptedData = res.encryptedData;
                        WxUserInfo.iv = res.iv;
                        resolve(WxUserInfo);
                    },
                    fail: function(){
                        reject();
                    }
                });
            });
        });
    }
    return WxUserInfoDfd;
}

function _wxLogin(url, method, data) {
    return new Promise(function(resolve, reject) {
        request({
            method,
            url : apiGatewayUrl + url,
            data
        }).then(function(res) {
            resolve(res);
        },function(error) {
            reject(error);
        });
    });
}   

function login2Uaa(code) {
    return new Promise(function(resolve, reject) {
        wx.getUserInfo({
            lang: 'zh_CN',
            withCredentials: true,
            success: function(res) {
                _wxLogin("/wxxcx_login/thirdpartylogin/login2Uaa", "POST", {code, encryptedData:res.encryptedData, iv:res.iv})
                .then(function(res) { resolve(res); }, function(res) { reject(res); });
            },
            fail: function(){
                _wxLogin("/wxxcx_login/thirdpartylogin/login2Uaa", "POST", {code, encryptedData:"", iv:"" })
                .then(function(res) { resolve(res); }, function(res) { reject(res); });
            }
        });
    });
}

function _getOpenId(code) {
    return _wxLogin("/wxxcx_login/thirdpartylogin/getOpenId?code=" + code, "GET", null);
}   

export default class Wxxcx_login extends Component {
    constructor(page, id, props, context){
        super(page, id, props, context);
        this.miniappLogin = props.miniappLogin;
        this.mpLogin = props.mpLogin;
        console.log("===miniappLogin:", this.miniappLogin);
        console.log("===mpLogin:", this.mpLogin);
        if (this.miniappLogin === true && (Device.isSimulate()||Device.isMiniProgram()||Device.isX5App()) || this.mpLogin === true && Device.isWeChat())
            helper.addLoginComp(this);
        LoginDfd = new Promise(function(resolve, reject) { LoginResolve = resolve; });
    }

    destroy() {
        if (this.miniappLogin === true && (Device.isSimulate()||Device.isMiniProgram()||Device.isX5App()) || this.mpLogin === true && Device.isWeChat())
            helper.removeLoginComp(this);
        super.destroy();
    }

    getName() { return "wxxcx_login"; }
    getDisplayName() { return "微信小程序登录"; }
    getOpenId() {
        return this.wxLogin(_getOpenId);
    }

    login(option) {
        if (this.miniappLogin === true && (Device.isSimulate() || Device.isMiniProgram()||Device.isX5App())) {
            console.log("===wxLogin===");
            return this.wxLogin(login2Uaa, option);
        }
        if (this.mpLogin === true && Device.isWeChat()) {
            console.log("===wxBrowserLogin===");
            return this.wxBrowserLogin();
        }
        console.log("===ERROR CONFIG===");
    }

    _getUnionId(encryptedData, iv, resolve, reject) {
        _wxLogin("/wxxcx_login/thirdpartylogin/getUserInfo", "POST", {encryptedData, iv}).then(function(ret) {
            resolve(ret);
        }, function(err) { reject(err); });
    }
    getUnionId() {
        var self = this;
        return new Promise(function(resolve, reject) {
            getWxUserInfo().then(function(ret) {
                if (ret.encryptedData && ret.iv) {
                    self._getUnionId(ret.encryptedData, ret.iv, resolve, reject);
                }
                else {
                    WxUserInfoDfd = null;   
                    getWxUserInfo().then(function(ret) {
                        if (ret.encryptedData && ret.iv) {
                            self._getUnionId(ret.encryptedData, ret.iv, resolve, reject);
                        }
                    }, function(err) { reject(err); });
                }
            }, function(err) { reject(err);});
        });
    }

    logout(option) {
        WxUserInfo = {};
        return uaa.logout();
    }

    wxBrowserLogin() {
        var self = this;
        return new Promise(function(resolve, reject) {
            var idx = window.location.href.indexOf("oauth2LoginOk=");
            if (idx === -1)
                showWXAuthURL();
            else {
                var userInfo = Base64.decode(window.location.href.substring(idx + 14));
                WxUserInfo = JSON.parse(userInfo);
                console.log("===userInfo:", WxUserInfo);
                resolve(WxUserInfo);
            }
        });
    }

    wxLogin(func,option) {
        var self = this;
        return new Promise(function(resolve, reject) {
            wx.login({
                success: function(res) {
                    if (res.code) {
                        let wxCode = res.code;
                        func(wxCode).then(function(res){
                            if ((res.data.regStatusCode == 201 || res.data.regStatusCode == 200) && option) {
                                LoginResolve(res.data);
                                resolve(res.data);
                            } else if((res.data.error || res.data.regStatusCode==500) && option){
                                console.error(JSON.stringify(res.data));
                                reject(res.data);
                            } else { resolve(res.data); }
                        }, function(res) { reject(res); });
                    } else { reject(res); }
                },
                fail: function(res){ reject(res); }
            });
        });
    }

}

wx.comp = wx.comp || {};
wx.comp.Wxxcx_login = Wxxcx_login;
