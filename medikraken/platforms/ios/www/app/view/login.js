/*User Login*/
Ext
.define(
        'kcube_medikraken.view.login',
        {
        extend : 'Ext.form.Panel',
        alias : 'widget.login',
        xtype : 'login',
        height : Ext.Viewport.getWindowHeight(),
        config : {
        scrollable: false,
        title : 'login',
        items : [
                 {
                 xtype : 'container',
                 style: 'background-image: url(resources/images/bg/loginScreen.png);background-size: cover !important',
                 width: Ext.Viewport.getWindowWidth(),
                 height: Ext.Viewport.getWindowHeight(),
                 layout: 'vbox',
                 items: [
                         {
                         xtype: 'container',
                         layout: 'vbox',
                         itemId: 'loginContent',
                         style: 'margin-top:560px',
                         id: 'loginContent',
                         items: [
                                 {
                                 xtype : 'textfield',
                                 placeHolder : 'EMAIL',
                                 id:'loginEmail',
                                 autoCapitalize: false,
                                 itemId : 'userNameTextField',
                                 name : 'userNameTextField',
                                 required : true,
                                 },
                                 {
                                 xtype : 'passwordfield',
                                 placeHolder : 'PASSWORD',
                                 id:'loginPassword',
                                 autoCapitalize: false,
                                 itemId : 'userPasswordField',
                                 name : 'userPasswordField',
                                 required : true,
                                 },
                                 {
                                 xtype : 'component',
                                 html : '<div>Forgot Password?</div>',
                                 id:'forgotPassword',
                                 listeners:[
                                            {
                                            element: 'element',
                                            event: 'tap',
                                            fn: function() {
                                            kcube_medikraken.app.getController('loginController').forgotPassword();
                                            }
                                            }
                                            ]
                                 },
                                 {
                                 xtype : 'component',
                                 html : '<div>GET STARTED</div>',
                                 id:'loginSubmit',
                                 listeners:[
                                            {
                                            element: 'element',
                                            event: 'tap',
                                            fn: function() {
                                            kcube_medikraken.app.getController('loginController').getStarted();
                                            }
                                            }
                                            ]
                                 },
                                 {
                                 xtype : 'component',
                                 html : "<div><div style='float:left;color:#3d3d3d;'>Don't have an acccount?  </div><div style='float:left;font-weight: 500;color: #548ced;margin-left:20px;'>SIGN-UP</div></div>",
                                 id:'signUp',
                                 listeners:[
                                            {
                                            element: 'element',
                                            event: 'tap',
                                            fn: function() {
                                            kcube_medikraken.app.getController('loginController').openRegistration();
                                            }
                                            }
                                            ]
                                 },
                                 
                                 
                                 ]
                         },
                         {
                         xtype: 'container',
                         layout: 'vbox',
                         itemId: 'resetPwdContent',
                         style: 'margin-top:560px',
                         hidden: true,
                         items: [
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 height:130,
                                 width:400,
                                 style: 'border: solid 2px #548ced;background-color:rgba(255,255,255,0.7);margin-left: 184px;margin-top: -30px;border-radius: 10px;text-align: center;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html: '<div style="font-size: 20px;font-weight: 500;margin-top: 20px;color:#636363;">Reset your password.</div>',
                                         id:'getPwdText',
                                         },
                                         {
                                         xtype : 'component',
                                         html: '<div style="width:300px;margin-left: 50px;font-size: 17px;margin-top: 15px;color: #636363;">Enter your username and we\'ll help you reset your password</div>',
                                         id:'helpTextPwdUn',
                                         },
                                 ]
                                 },
                                 
                                 {
                                 xtype : 'textfield',
                                 placeHolder : 'Please enter your email',
                                 id:'resetPwdEmail',
                                 autoCapitalize: false,
                                 itemId : 'resetPwdEmail',
                                 name : 'resetPwdEmail',
                                 required : true,
                                 },
                                 {
                                 xtype: 'container',
                                 layout: 'hbox',
                                 id: 'resetCancel',
                                 items: [
                                         {
                                         xtype : 'button',
                                         id:'cancelReset',
                                         cls:'btn',
                                         itemId : 'cancelReset',
                                         ui : 'action',
                                         padding : '10px',
                                         handler: function () {
                                         kcube_medikraken.app.getController('loginController').cancelReset();
                                         }
                                         },
                                         {
                                         xtype : 'button',
                                         id:'submitReset',
                                         cls:'btn',
                                         itemId : 'submitReset',
                                         ui : 'action',
                                         padding : '10px',
                                         handler: function () {
                                         kcube_medikraken.app.getController('loginController').submitReset();
                                         }
                                         }
                                         ]
                                 }
                                 
                                 ]
                         },
                         
                         ]
                 },
                 
                 
                 ]
        }
        });
