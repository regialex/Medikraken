/*User Login*/
Ext
.define(
        'kcube_medikraken.view.registration',
        {
        extend : 'Ext.form.Panel',
        alias : 'widget.registration',
        xtype : 'registration',
        height : Ext.Viewport.getWindowHeight(),
        config : {
        scrollable: false,
        title : 'registration',
        items : [
                 {
                 xtype : 'container',
                 style: 'background-image: url(resources/images/bg/registerScreen.png);background-size: cover !important',
                 width: Ext.Viewport.getWindowWidth(),
                 height: Ext.Viewport.getWindowHeight(),
                 layout: 'vbox',
                 items: [
                         {
                         xtype: 'component',
                         html: '<div>Company Registration</div>',
                         style: 'text-align: center;font-size:26px;color:#636363;margin-top: 25px;',
                         width: Ext.Viewport.getWindowWidth(),
                         },
                         {
                         xtype: 'container',
                         layout: 'hbox',
                         style: '',
                         items: [
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:50px;margin-top:50px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">EMAIL LOGIN ID</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'Email',
                                         id:'registrationEmail',
                                         autoCapitalize: false,
                                         itemId : 'registrationEmail',
                                         name : 'registrationEmail',
                                         required : true,
                                         
                                         listeners:{
                                         change:{
                                         fn    : function() {
                                         kcube_medikraken.app.getController('loginController').textFieldChange('registrationEmail');
                                         },
                                         scope: this
                                         },
                                         }
                                         }
                                 ]
                                 },
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:60px;margin-top:50px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">CONFIRM</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'Confirm Email',
                                         id:'confirmRegistrationEmail',
                                         autoCapitalize: false,
                                         itemId : 'confirmRegistrationEmail',
                                         name : 'confirmRegistrationEmail',
                                         required : true,
                                         listeners:{
                                         change:{
                                         fn    : function() {
                                         kcube_medikraken.app.getController('loginController').textFieldChange('confirmRegistrationEmail');
                                         },
                                         scope: this
                                         },
                                         }
                                         }
                                         ]
                                 },
                                 ]
                         },
                         {
                         xtype: 'container',
                         layout: 'hbox',
                         style: '',
                         items: [
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:50px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">PASSWORD</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div><div style="float: left;margin-top: 5px;margin-right: 5px;border-radius: 50%;background-color: red;width: 8px;height: 8px;margin-left: 30px;"></div><div style="float:left;font-size:14px;color:#828282">8 - 20 characters long</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'Password',
                                         id:'registrationPassword',
                                         autoCapitalize: false,
                                         itemId : 'registrationPassword',
                                         name : 'registrationPassword',
                                         required : true,
                                         listeners:{
                                         change:{
                                         fn    : function() {
                                         kcube_medikraken.app.getController('loginController').textFieldChange('registrationPassword');
                                         },
                                         scope: this
                                         },
                                         }
                                         }
                                         ]
                                 },
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:60px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">CONFIRM</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'Confirm Password',
                                         id:'confirmRegistrationPassword',
                                         autoCapitalize: false,
                                         itemId : 'confirmRegistrationPassword',
                                         name : 'confirmRegistrationPassword',
                                         required : true,
                                         listeners:{
                                         change:{
                                         fn    : function() {
                                         kcube_medikraken.app.getController('loginController').textFieldChange('confirmRegistrationPassword');
                                         },
                                         scope: this
                                         },
                                         }
                                         }
                                         ]
                                 }
//                                 <div><div style="float: left;margin-top: 5px;margin-right: 10px;border-radius: 50%; background-color: red;width: 10px;height: 10px; "></div><div style="float:left">8 - 20 characters long</div></div>
                                 ]
                         },
                         {
                         xtype: 'container',
                         layout: 'hbox',
                         style: '',
                         items: [
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:50px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">COMPANY NAME</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'Company Name',
                                         id:'registrationCompanyName',
                                         autoCapitalize: false,
                                         itemId : 'registrationCompanyName',
                                         name : 'registrationCompanyName',
                                         required : true,
                                         listeners:{
                                         change:{
                                         fn    : function() {
                                         kcube_medikraken.app.getController('loginController').textFieldChange('registrationCompanyName');
                                         },
                                         scope: this
                                         },
                                         }
                                         }
                                         ]
                                 },
                                 ]
                         },
                         {
                         xtype: 'container',
                         layout: 'hbox',
                         style: '',
                         items: [
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:50px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">FIRST NAME</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'First Name',
                                         id:'registrationFirstName',
                                         autoCapitalize: false,
                                         itemId : 'registrationFirstName',
                                         name : 'registrationFirstName',
                                         listeners:{
                                         change:{
                                         fn    : function() {
                                         kcube_medikraken.app.getController('loginController').textFieldChange('registrationFirstName');
                                         },
                                         scope: this
                                         },
                                         },
                                         required : true,
                                         }
                                         ]
                                 },
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:60px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">LAST NAME</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'Last Name',
                                         id:'registrationLastName',
                                         autoCapitalize: false,
                                         itemId : 'registrationLastName',
                                         name : 'registrationLastName',
                                         listeners:{
                                         change:{
                                         fn    : function() {
                                         kcube_medikraken.app.getController('loginController').textFieldChange('registrationLastName');
                                         },
                                         scope: this
                                         },
                                         },
                                         required : true,
                                         }
                                         ]
                                 },
                                 ]
                         },
                         {
                         xtype: 'container',
                         layout: 'hbox',
                         style: '',
                         items: [
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:50px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">ADDRESS</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'Address',
                                         id:'registrationAddress',
                                         autoCapitalize: false,
                                         itemId : 'registrationAddress',
                                         name : 'registrationAddress',
                                         listeners:{
                                         change:{
                                         fn    : function() {
                                         kcube_medikraken.app.getController('loginController').textFieldChange('registrationAddress');
                                         },
                                         scope: this
                                         },
                                         },
                                         required : true,
                                         }
                                         ]
                                 },
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:60px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">ADDRESS</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'Address Continue',
                                         id:'registrationAddressTwo',
                                         autoCapitalize: false,
                                         itemId : 'registrationAddressTwo',
                                         name : 'registrationAddressTwo',
                                         required : true,
                                         }
                                         ]
                                 },
                                 ]
                         },
                         {
                         xtype: 'container',
                         layout: 'hbox',
                         style: '',
                         items: [
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:50px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">CITY</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'City',
                                         id:'registrationCity',
                                         autoCapitalize: false,
                                         itemId : 'registrationCity',
                                         name : 'registrationCity',
                                         required : true,
                                         listeners:{
                                         change:{
                                         fn    : function() {
                                         kcube_medikraken.app.getController('loginController').textFieldChange('registrationCity');
                                         },
                                         scope: this
                                         },
                                         }
                                         }
                                         ]
                                 },
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:60px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">STATE</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype: 'selectfield',
                                         width: 150,
                                         cls:'selectField',
                                         style:'width: 150px !important;font-size: 18px;color: #636363;margin-top: 5px;border: solid 2px #548ced;border-radius: 10px;',
                                         itemId: 'managerOptions',
                                         options: [{'text': 'Select State',  'value': 'unselected'},{'text': 'Alabama',  'value': 'AL'},{'text': 'Alaska',  'value': 'AK'},{'text': 'Arizona',  'value': 'AZ'},{'text': 'Arkansas',  'value': 'AR'},{'text': 'California',  'value': 'CA'},{'text': 'Colorado',  'value': 'CO'},{'text': 'Conneticut',  'value': 'CT'},{'text': 'Delaware',  'value': 'DE'},{'text': 'District Of Columbia',  'value': 'DC'},{'text': 'Florida',  'value': 'FL'},{'text': 'Georgia',  'value': 'GA'},{'text': 'Hawaii',  'value': 'HI'},{'text': 'Idaho',  'value': 'ID'},{'text': 'Illinois',  'value': 'IL'},{'text': 'Indiana',  'value': 'IN'},{'text': 'IOWA',  'value': 'IA'},{'text': 'Kansas',  'value': 'KS'},{'text': 'Kentucky',  'value': 'KY'},{'text': 'Louisiana',  'value': 'LA'},{'text': 'Maine',  'value': 'ME'},{'text': 'Maryland',  'value': 'MD'},{'text': 'Massachusetts',  'value': 'MA'},{'text': 'Michigan',  'value': 'MI'},{'text': 'Minnesota',  'value': 'MI'},{'text': 'Mississippi',  'value': 'MS'},{'text': 'Missouri',  'value': 'MO'},{'text': 'Montana',  'value': 'MT'},{'text': 'Nebraska',  'value': 'NE'},{'text': 'Nevada',  'value': 'NV'},{'text': 'New Hampshire',  'value': 'NH'},{'text': 'New Jersey',  'value': 'NJ'},{'text': 'New Mexico',  'value': 'NM'}, {'text': 'New York',  'value': 'NY'},{'text': 'North Carolina',  'value': 'NC'},{'text': 'North Dakota',  'value': 'ND'},{'text': 'Ohio',  'value': 'OH'},{'text': 'Oklahoma',  'value': 'OK'},{'text': 'Oregon',  'value': 'OR'},{'text': 'Pennysylvania',  'value': 'PA'},{'text': 'Rhode Island',  'value': 'RI'},{'text': 'South carolina',  'value': 'SC'},{'text': 'South Dakota',  'value': 'SD'},{'text': 'Tennesse',  'value': 'TN'},{'text': 'Texas',  'value': 'TX'},{'text': 'Utah',  'value': 'UT'},{'text': 'Vermont',  'value': 'VT'},{'text': 'Virginia',  'value': 'VA'},{'text': 'Washington',  'value': 'WA'},{'text': 'West Virginia',  'value': 'WV'},{'text': 'Wisconsin',  'value': 'WI'},{'text': 'Wyoming',  'value': 'WY'}],
                                         listeners: {
                                         change : function(selectfield, newValue,
                                                                         oldValue, options) {
                                         if((newValue==='unselected')||(newValue===null)||(newValue==='null')){
                                         globalVariables.usState = '';
                                         }else{
                                         globalVariables.usState = newValue;
                                         }
                                         
                                         }
                                         },
                                         
                                         }
                                         ]
                                 },
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:30px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">ZIP</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'Zip Code',
                                         id:'registrationZip',
                                         autoCapitalize: false,
                                         itemId : 'registrationZip',
                                         name : 'registrationZip',
                                         listeners:{
                                         change:{
                                         fn    : function() {
                                         kcube_medikraken.app.getController('loginController').textFieldChange('registrationZip');
                                         },
                                         scope: this
                                         },
                                         },
                                         required : true,
                                         }
                                         ]
                                 }
                                 ]
                         },
                         {
                         xtype: 'container',
                         layout: 'hbox',
                         style: '',
                         items: [
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:50px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">PHONE</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'numberfield',
                                         placeHolder : 'Office Phone Number',
                                         id:'registrationPhone',
                                         autoCapitalize: false,
                                         itemId : 'registrationPhone',
                                         name : 'registrationPhone',
                                         required : true,
                                         }
                                         ]
                                 },
                                 {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 style: 'margin-left:60px;margin-top:15px;',
                                 items: [
                                         {
                                         xtype : 'component',
                                         html : '<div><div style="float:left">MOBILE</div><div style="font-size: 30px;color: red;float:left;margin-top: -8px;margin-left: 3px;">*</div></div>',
                                         cls:'textFieldTitle',
                                         
                                         },
                                         {
                                         xtype : 'textfield',
                                         placeHolder : 'Mobile Number for SMS',
                                         id:'registrationMobile',
                                         autoCapitalize: false,
                                         itemId : 'registrationMobile',
                                         name : 'registrationMobile',
                                         listeners:{
                                         change:{
                                         fn    : function() {
                                         kcube_medikraken.app.getController('loginController').textFieldChange('registrationMobile');
                                         },
                                         scope: this
                                         },
                                         },
                                         required : true,
                                         }
                                         ]
                                 },
                                 ]
                         },
                         {
                         xtype: 'container',
                         layout: 'hbox',
                         id: 'registerCancel',
                         items: [
                                 {
                                 xtype : 'button',
                                 id:'cancelRegistration',
                                 cls:'btn',
                                 itemId : 'cancelRegistration',
                                 ui : 'action',
                                 padding : '10px',
                                 handler: function () {
                                 kcube_medikraken.app.getController('loginController').cancelRegistration();
                                 }
                                 },
                                 {
                                 xtype : 'button',
                                 id:'submitRegistration',
                                 cls:'btn',
                                 itemId : 'submitRegistration',
                                 ui : 'action',
                                 padding : '10px',
                                 handler: function () {
                                 kcube_medikraken.app.getController('loginController').submitRegistration();
                                 }
                                 }
                                 ]
                         }
                         
                         ]
                 },
                 
                 
                 ]
        }
        });
