/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
!function(){var e=function(e,t){function i(){var e=arguments,t=this.getContentElement("advanced","txtdlgGenStyle");t&&t.commit.apply(t,e),this.foreach(function(t){t.commit&&"txtdlgGenStyle"!=t.id&&t.commit.apply(t,e)})}function n(e){if(!a){a=1;var t=this.getDialog(),i=t.imageElement;if(i){this.commit(r,i);for(var n,e=[].concat(e),o=e.length,s=0;o>s;s++)(n=t.getContentElement.apply(t,e[s].split(":")))&&n.setup(r,i)}a=0}}var a,o,r=1,s=/^\s*(\d+)((px)|\%)?\s*$/i,l=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,d=/^\d+px$/,c=function(){var e=this.getValue(),t=this.getDialog(),i=e.match(s);i&&("%"==i[2]&&p(t,!1),e=i[1]),t.lockRatio&&(i=t.originalElement,"true"==i.getCustomData("isReady")&&("txtHeight"==this.id?(e&&"0"!=e&&(e=Math.round(i.$.width*(e/i.$.height))),isNaN(e)||t.setValueOf("info","txtWidth",e)):(e&&"0"!=e&&(e=Math.round(i.$.height*(e/i.$.width))),isNaN(e)||t.setValueOf("info","txtHeight",e)))),u(t)},u=function(e){return e.originalElement&&e.preview?(e.commitContent(4,e.preview),0):1},p=function(e,t){if(!e.getContentElement("info","ratioLock"))return null;var i=e.originalElement;if(!i)return null;if("check"==t){if(!e.userlockRatio&&"true"==i.getCustomData("isReady")){var n=e.getValueOf("info","txtWidth"),a=e.getValueOf("info","txtHeight"),i=1e3*i.$.width/i.$.height,o=1e3*n/a;e.lockRatio=!1,n||a?!isNaN(i)&&!isNaN(o)&&Math.round(i)==Math.round(o)&&(e.lockRatio=!0):e.lockRatio=!0}}else void 0!=t?e.lockRatio=t:(e.userlockRatio=1,e.lockRatio=!e.lockRatio);return n=CKEDITOR.document.getById(v),e.lockRatio?n.removeClass("cke_btn_unlocked"):n.addClass("cke_btn_unlocked"),n.setAttribute("aria-checked",e.lockRatio),CKEDITOR.env.hc&&n.getChild(0).setHtml(e.lockRatio?CKEDITOR.env.ie?"■":"▣":CKEDITOR.env.ie?"□":"▢"),e.lockRatio},h=function(e){var t=e.originalElement;if("true"==t.getCustomData("isReady")){var i=e.getContentElement("info","txtWidth"),n=e.getContentElement("info","txtHeight");i&&i.setValue(t.$.width),n&&n.setValue(t.$.height)}u(e)},m=function(e,t){function i(e,t){var i=e.match(s);return i?("%"==i[2]&&(i[1]+="%",p(n,!1)),i[1]):t}if(e==r){var n=this.getDialog(),a="",o="txtWidth"==this.id?"width":"height",l=t.getAttribute(o);l&&(a=i(l,a)),a=i(t.getStyle(o),a),this.setValue(a)}},g=function(){var e=this.originalElement;e.setCustomData("isReady","true"),e.removeListener("load",g),e.removeListener("error",f),e.removeListener("abort",f),CKEDITOR.document.getById(y).setStyle("display","none"),this.dontResetSize||h(this),this.firstLoad&&CKEDITOR.tools.setTimeout(function(){p(this,"check")},0,this),this.dontResetSize=this.firstLoad=!1},f=function(){var e=this.originalElement;e.removeListener("load",g),e.removeListener("error",f),e.removeListener("abort",f),e=CKEDITOR.getUrl(CKEDITOR.plugins.get("image").path+"images/noimage.png"),this.preview&&this.preview.setAttribute("src",e),CKEDITOR.document.getById(y).setStyle("display","none"),p(this,!1)},b=function(e){return CKEDITOR.tools.getNextId()+"_"+e},v=b("btnLockSizes"),T=b("btnResetSize"),y=b("ImagePreviewLoader"),C=b("previewLink"),E=b("previewImage");return{title:e.lang.image["image"==t?"title":"titleButton"],minWidth:420,minHeight:360,onShow:function(){this.linkEditMode=this.imageEditMode=this.linkElement=this.imageElement=!1,this.lockRatio=!0,this.userlockRatio=0,this.dontResetSize=!1,this.firstLoad=!0,this.addLink=!1;var e=this.getParentEditor(),i=e.getSelection(),n=(i=i&&i.getSelectedElement())&&e.elementPath(i).contains("a",1);if(CKEDITOR.document.getById(y).setStyle("display","none"),o=new CKEDITOR.dom.element("img",e.document),this.preview=CKEDITOR.document.getById(E),this.originalElement=e.document.createElement("img"),this.originalElement.setAttribute("alt",""),this.originalElement.setCustomData("isReady","false"),n){this.linkElement=n,this.linkEditMode=!0;var a=n.getChildren();if(1==a.count()){var s=a.getItem(0).getName();("img"==s||"input"==s)&&(this.imageElement=a.getItem(0),"img"==this.imageElement.getName()?this.imageEditMode="img":"input"==this.imageElement.getName()&&(this.imageEditMode="input"))}"image"==t&&this.setupContent(2,n)}(i&&"img"==i.getName()&&!i.data("cke-realelement")||i&&"input"==i.getName()&&"image"==i.getAttribute("type"))&&(this.imageEditMode=i.getName(),this.imageElement=i),this.imageEditMode?(this.cleanImageElement=this.imageElement,this.imageElement=this.cleanImageElement.clone(!0,!0),this.setupContent(r,this.imageElement)):this.imageElement=e.document.createElement("img"),p(this,!0),CKEDITOR.tools.trim(this.getValueOf("info","txtUrl"))||(this.preview.removeAttribute("src"),this.preview.setStyle("display","none"))},onOk:function(){if(this.imageEditMode){var i=this.imageEditMode;"image"==t&&"input"==i&&confirm(e.lang.image.button2Img)?(this.imageElement=e.document.createElement("img"),this.imageElement.setAttribute("alt",""),e.insertElement(this.imageElement)):"image"!=t&&"img"==i&&confirm(e.lang.image.img2Button)?(this.imageElement=e.document.createElement("input"),this.imageElement.setAttributes({type:"image",alt:""}),e.insertElement(this.imageElement)):(this.imageElement=this.cleanImageElement,delete this.cleanImageElement)}else"image"==t?this.imageElement=e.document.createElement("img"):(this.imageElement=e.document.createElement("input"),this.imageElement.setAttribute("type","image")),this.imageElement.setAttribute("alt","");this.linkEditMode||(this.linkElement=e.document.createElement("a")),this.commitContent(r,this.imageElement),this.commitContent(2,this.linkElement),this.imageElement.getAttribute("style")||this.imageElement.removeAttribute("style"),this.imageEditMode?!this.linkEditMode&&this.addLink?(e.insertElement(this.linkElement),this.imageElement.appendTo(this.linkElement)):this.linkEditMode&&!this.addLink&&(e.getSelection().selectElement(this.linkElement),e.insertElement(this.imageElement)):this.addLink?this.linkEditMode?e.insertElement(this.imageElement):(e.insertElement(this.linkElement),this.linkElement.append(this.imageElement,!1)):e.insertElement(this.imageElement)},onLoad:function(){"image"!=t&&this.hidePage("Link");var e=this._.element.getDocument();this.getContentElement("info","ratioLock")&&(this.addFocusable(e.getById(T),5),this.addFocusable(e.getById(v),5)),this.commitContent=i},onHide:function(){this.preview&&this.commitContent(8,this.preview),this.originalElement&&(this.originalElement.removeListener("load",g),this.originalElement.removeListener("error",f),this.originalElement.removeListener("abort",f),this.originalElement.remove(),this.originalElement=!1),delete this.imageElement},contents:[{id:"info",label:e.lang.image.infoTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"txtUrl",type:"text",label:e.lang.common.url,required:!0,onChange:function(){var e=this.getDialog(),t=this.getValue();if(0<t.length){var e=this.getDialog(),i=e.originalElement;e.preview.removeStyle("display"),i.setCustomData("isReady","false");var n=CKEDITOR.document.getById(y);n&&n.setStyle("display",""),i.on("load",g,e),i.on("error",f,e),i.on("abort",f,e),i.setAttribute("src",t),o.setAttribute("src",t),e.preview.setAttribute("src",o.$.src),u(e)}else e.preview&&(e.preview.removeAttribute("src"),e.preview.setStyle("display","none"))},setup:function(e,t){if(e==r){var i=t.data("cke-saved-src")||t.getAttribute("src");this.getDialog().dontResetSize=!0,this.setValue(i),this.setInitValue()}},commit:function(e,t){e==r&&(this.getValue()||this.isChanged())?(t.data("cke-saved-src",this.getValue()),t.setAttribute("src",this.getValue())):8==e&&(t.setAttribute("src",""),t.removeAttribute("src"))},validate:CKEDITOR.dialog.validate.notEmpty(e.lang.image.urlMissing)},{type:"button",id:"browse",style:"display:inline-block;margin-top:10px;",align:"center",label:e.lang.common.browseServer,hidden:!0,filebrowser:"info:txtUrl"}]}]},{id:"txtAlt",type:"text",label:e.lang.image.alt,accessKey:"T","default":"",onChange:function(){u(this.getDialog())},setup:function(e,t){e==r&&this.setValue(t.getAttribute("alt"))},commit:function(e,t){e==r?(this.getValue()||this.isChanged())&&t.setAttribute("alt",this.getValue()):4==e?t.setAttribute("alt",this.getValue()):8==e&&t.removeAttribute("alt")}},{type:"hbox",children:[{id:"basic",type:"vbox",children:[{type:"hbox",requiredContent:"img{width,height}",widths:["50%","50%"],children:[{type:"vbox",padding:1,children:[{type:"text",width:"40px",id:"txtWidth",label:e.lang.common.width,onKeyUp:c,onChange:function(){n.call(this,"advanced:txtdlgGenStyle")},validate:function(){var t=this.getValue().match(l);return(t=!(!t||0===parseInt(t[1],10)))||alert(e.lang.common.invalidWidth),t},setup:m,commit:function(e,t,i){var n=this.getValue();e==r?(n?t.setStyle("width",CKEDITOR.tools.cssLength(n)):t.removeStyle("width"),!i&&t.removeAttribute("width")):4==e?n.match(s)?t.setStyle("width",CKEDITOR.tools.cssLength(n)):(e=this.getDialog().originalElement,"true"==e.getCustomData("isReady")&&t.setStyle("width",e.$.width+"px")):8==e&&(t.removeAttribute("width"),t.removeStyle("width"))}},{type:"text",id:"txtHeight",width:"40px",label:e.lang.common.height,onKeyUp:c,onChange:function(){n.call(this,"advanced:txtdlgGenStyle")},validate:function(){var t=this.getValue().match(l);return(t=!(!t||0===parseInt(t[1],10)))||alert(e.lang.common.invalidHeight),t},setup:m,commit:function(e,t,i){var n=this.getValue();e==r?(n?t.setStyle("height",CKEDITOR.tools.cssLength(n)):t.removeStyle("height"),!i&&t.removeAttribute("height")):4==e?n.match(s)?t.setStyle("height",CKEDITOR.tools.cssLength(n)):(e=this.getDialog().originalElement,"true"==e.getCustomData("isReady")&&t.setStyle("height",e.$.height+"px")):8==e&&(t.removeAttribute("height"),t.removeStyle("height"))}}]},{id:"ratioLock",type:"html",style:"margin-top:30px;width:40px;height:40px;",onLoad:function(){var e=CKEDITOR.document.getById(T),t=CKEDITOR.document.getById(v);e&&(e.on("click",function(e){h(this),e.data&&e.data.preventDefault()},this.getDialog()),e.on("mouseover",function(){this.addClass("cke_btn_over")},e),e.on("mouseout",function(){this.removeClass("cke_btn_over")},e)),t&&(t.on("click",function(e){p(this);var t=this.originalElement,i=this.getValueOf("info","txtWidth");"true"==t.getCustomData("isReady")&&i&&(t=t.$.height/t.$.width*i,isNaN(t)||(this.setValueOf("info","txtHeight",Math.round(t)),u(this))),e.data&&e.data.preventDefault()},this.getDialog()),t.on("mouseover",function(){this.addClass("cke_btn_over")},t),t.on("mouseout",function(){this.removeClass("cke_btn_over")},t))},html:'<div><a href="javascript:void(0)" tabindex="-1" title="'+e.lang.image.lockRatio+'" class="cke_btn_locked" id="'+v+'" role="checkbox"><span class="cke_icon"></span><span class="cke_label">'+e.lang.image.lockRatio+'</span></a><a href="javascript:void(0)" tabindex="-1" title="'+e.lang.image.resetSize+'" class="cke_btn_reset" id="'+T+'" role="button"><span class="cke_label">'+e.lang.image.resetSize+"</span></a></div>"}]},{type:"vbox",padding:1,children:[{type:"text",id:"txtBorder",requiredContent:"img{border-width}",width:"60px",label:e.lang.image.border,"default":"",onKeyUp:function(){u(this.getDialog())},onChange:function(){n.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateBorder),setup:function(e,t){if(e==r){var i;i=(i=(i=t.getStyle("border-width"))&&i.match(/^(\d+px)(?: \1 \1 \1)?$/))&&parseInt(i[1],10),isNaN(parseInt(i,10))&&(i=t.getAttribute("border")),this.setValue(i)}},commit:function(e,t,i){var n=parseInt(this.getValue(),10);e==r||4==e?(isNaN(n)?!n&&this.isChanged()&&t.removeStyle("border"):(t.setStyle("border-width",CKEDITOR.tools.cssLength(n)),t.setStyle("border-style","solid")),!i&&e==r&&t.removeAttribute("border")):8==e&&(t.removeAttribute("border"),t.removeStyle("border-width"),t.removeStyle("border-style"),t.removeStyle("border-color"))}},{type:"text",id:"txtHSpace",requiredContent:"img{margin-left,margin-right}",width:"60px",label:e.lang.image.hSpace,"default":"",onKeyUp:function(){u(this.getDialog())},onChange:function(){n.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateHSpace),setup:function(e,t){if(e==r){var i,n;i=t.getStyle("margin-left"),n=t.getStyle("margin-right"),i=i&&i.match(d),n=n&&n.match(d),i=parseInt(i,10),n=parseInt(n,10),i=i==n&&i,isNaN(parseInt(i,10))&&(i=t.getAttribute("hspace")),this.setValue(i)}},commit:function(e,t,i){var n=parseInt(this.getValue(),10);e==r||4==e?(isNaN(n)?!n&&this.isChanged()&&(t.removeStyle("margin-left"),t.removeStyle("margin-right")):(t.setStyle("margin-left",CKEDITOR.tools.cssLength(n)),t.setStyle("margin-right",CKEDITOR.tools.cssLength(n))),!i&&e==r&&t.removeAttribute("hspace")):8==e&&(t.removeAttribute("hspace"),t.removeStyle("margin-left"),t.removeStyle("margin-right"))}},{type:"text",id:"txtVSpace",requiredContent:"img{margin-top,margin-bottom}",width:"60px",label:e.lang.image.vSpace,"default":"",onKeyUp:function(){u(this.getDialog())},onChange:function(){n.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateVSpace),setup:function(e,t){if(e==r){var i,n;i=t.getStyle("margin-top"),n=t.getStyle("margin-bottom"),i=i&&i.match(d),n=n&&n.match(d),i=parseInt(i,10),n=parseInt(n,10),i=i==n&&i,isNaN(parseInt(i,10))&&(i=t.getAttribute("vspace")),this.setValue(i)}},commit:function(e,t,i){var n=parseInt(this.getValue(),10);e==r||4==e?(isNaN(n)?!n&&this.isChanged()&&(t.removeStyle("margin-top"),t.removeStyle("margin-bottom")):(t.setStyle("margin-top",CKEDITOR.tools.cssLength(n)),t.setStyle("margin-bottom",CKEDITOR.tools.cssLength(n))),!i&&e==r&&t.removeAttribute("vspace")):8==e&&(t.removeAttribute("vspace"),t.removeStyle("margin-top"),t.removeStyle("margin-bottom"))}},{id:"cmbAlign",requiredContent:"img{float}",type:"select",widths:["35%","65%"],style:"width:90px",label:e.lang.common.align,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.alignLeft,"left"],[e.lang.common.alignRight,"right"]],onChange:function(){u(this.getDialog()),n.call(this,"advanced:txtdlgGenStyle")},setup:function(e,t){if(e==r){var i=t.getStyle("float");switch(i){case"inherit":case"none":i=""}!i&&(i=(t.getAttribute("align")||"").toLowerCase()),this.setValue(i)}},commit:function(e,t,i){var n=this.getValue();if(e==r||4==e){if(n?t.setStyle("float",n):t.removeStyle("float"),!i&&e==r)switch(n=(t.getAttribute("align")||"").toLowerCase()){case"left":case"right":t.removeAttribute("align")}}else 8==e&&t.removeStyle("float")}}]}]},{type:"vbox",height:"250px",children:[{type:"html",id:"htmlPreview",style:"width:95%;",html:"<div>"+CKEDITOR.tools.htmlEncode(e.lang.common.preview)+'<br><div id="'+y+'" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div><div class="ImagePreviewBox"><table><tr><td><a href="javascript:void(0)" target="_blank" onclick="return false;" id="'+C+'"><img id="'+E+'" alt="" /></a>'+(e.config.image_previewText||"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.")+"</td></tr></table></div></div>"}]}]}]},{id:"Link",requiredContent:"a[href]",label:e.lang.image.linkTab,padding:0,elements:[{id:"txtUrl",type:"text",label:e.lang.common.url,style:"width: 100%","default":"",setup:function(e,t){if(2==e){var i=t.data("cke-saved-href");i||(i=t.getAttribute("href")),this.setValue(i)}},commit:function(t,i){if(2==t&&(this.getValue()||this.isChanged())){var n=decodeURI(this.getValue());i.data("cke-saved-href",n),i.setAttribute("href",n),(this.getValue()||!e.config.image_removeLinkByEmptyURL)&&(this.getDialog().addLink=!0)}}},{type:"button",id:"browse",filebrowser:{action:"Browse",target:"Link:txtUrl",url:e.config.filebrowserImageBrowseLinkUrl},style:"float:right",hidden:!0,label:e.lang.common.browseServer},{id:"cmbTarget",type:"select",requiredContent:"a[target]",label:e.lang.common.target,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.targetNew,"_blank"],[e.lang.common.targetTop,"_top"],[e.lang.common.targetSelf,"_self"],[e.lang.common.targetParent,"_parent"]],setup:function(e,t){2==e&&this.setValue(t.getAttribute("target")||"")},commit:function(e,t){2==e&&(this.getValue()||this.isChanged())&&t.setAttribute("target",this.getValue())}}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:e.lang.image.upload,elements:[{type:"file",id:"upload",label:e.lang.image.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:txtUrl",label:e.lang.image.btnUpload,"for":["Upload","upload"]}]},{id:"advanced",label:e.lang.common.advancedTab,elements:[{type:"hbox",widths:["50%","25%","25%"],children:[{type:"text",id:"linkId",requiredContent:"img[id]",label:e.lang.common.id,setup:function(e,t){e==r&&this.setValue(t.getAttribute("id"))},commit:function(e,t){e==r&&(this.getValue()||this.isChanged())&&t.setAttribute("id",this.getValue())}},{id:"cmbLangDir",type:"select",requiredContent:"img[dir]",style:"width : 100px;",label:e.lang.common.langDir,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.langDirLtr,"ltr"],[e.lang.common.langDirRtl,"rtl"]],setup:function(e,t){e==r&&this.setValue(t.getAttribute("dir"))},commit:function(e,t){e==r&&(this.getValue()||this.isChanged())&&t.setAttribute("dir",this.getValue())}},{type:"text",id:"txtLangCode",requiredContent:"img[lang]",label:e.lang.common.langCode,"default":"",setup:function(e,t){e==r&&this.setValue(t.getAttribute("lang"))},commit:function(e,t){e==r&&(this.getValue()||this.isChanged())&&t.setAttribute("lang",this.getValue())}}]},{type:"text",id:"txtGenLongDescr",requiredContent:"img[longdesc]",label:e.lang.common.longDescr,setup:function(e,t){e==r&&this.setValue(t.getAttribute("longDesc"))},commit:function(e,t){e==r&&(this.getValue()||this.isChanged())&&t.setAttribute("longDesc",this.getValue())}},{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"txtGenClass",requiredContent:"img(cke-xyz)",label:e.lang.common.cssClass,"default":"",setup:function(e,t){e==r&&this.setValue(t.getAttribute("class"))},commit:function(e,t){e==r&&(this.getValue()||this.isChanged())&&t.setAttribute("class",this.getValue())}},{type:"text",id:"txtGenTitle",requiredContent:"img[title]",label:e.lang.common.advisoryTitle,"default":"",onChange:function(){u(this.getDialog())},setup:function(e,t){e==r&&this.setValue(t.getAttribute("title"))},commit:function(e,t){e==r?(this.getValue()||this.isChanged())&&t.setAttribute("title",this.getValue()):4==e?t.setAttribute("title",this.getValue()):8==e&&t.removeAttribute("title")}}]},{type:"text",id:"txtdlgGenStyle",requiredContent:"img{cke-xyz}",label:e.lang.common.cssStyle,validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),"default":"",setup:function(e,t){if(e==r){var i=t.getAttribute("style");!i&&t.$.style.cssText&&(i=t.$.style.cssText),this.setValue(i);var n=t.$.style.height,i=t.$.style.width,n=(n?n:"").match(s),i=(i?i:"").match(s);this.attributesInStyle={height:!!n,width:!!i}}},onChange:function(){n.call(this,"info:cmbFloat info:cmbAlign info:txtVSpace info:txtHSpace info:txtBorder info:txtWidth info:txtHeight".split(" ")),u(this)},commit:function(e,t){e==r&&(this.getValue()||this.isChanged())&&t.setAttribute("style",this.getValue())}}]}]}};CKEDITOR.dialog.add("image",function(t){return e(t,"image")}),CKEDITOR.dialog.add("imagebutton",function(t){return e(t,"imagebutton")})}();