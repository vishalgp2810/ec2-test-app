(this["webpackJsonpreact-demo-app"]=this["webpackJsonpreact-demo-app"]||[]).push([[0],{42:function(e,a,t){e.exports=t(93)},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},59:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),i=t.n(r),c=(t(47),t(48),t(29)),o=t(30),s=t(39),m=t(38);t(49);var u=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("h2",null,"Gallery"))},d=(t(50),t(35)),f=t.n(d),p=t(108);t(51),t(52);var g=function(e){var a=e.img,t=e.name,n=e.handlePreviewImage;return l.a.createElement("div",{id:t,className:"image"},l.a.createElement("img",{onclick:function(){return n(t)},src:a,alt:""}),l.a.createElement("h3",null,t))};var h=function(e){var a=e.handleUploadFile,t=e.imgList;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"file_upload"},l.a.createElement("div",{className:"file_border"},l.a.createElement(p.a,{className:"input_button",variant:"contained",component:"label"},l.a.createElement(f.a,{className:"upload_icon"}),l.a.createElement("span",{className:"upload_lable"},"Upload"),l.a.createElement("input",{onChange:function(e){return a(e)},className:"file_input",type:"file",accept:"image/*"})))),l.a.createElement("div",{className:"img_container"},l.a.createElement("div",{className:"img_list"},t&&(null===t||void 0===t?void 0:t.map((function(e,a){return l.a.createElement(g,{className:"image",img:e.file_data,name:e.file_name,handlePreviewImage:function(e){return function(e){console.log("cliced",e)}(e)}})})))))))};t(59);function v(){return l.a.createElement("div",{className:"footer"},l.a.createElement("h2",null,"FullStack Challenge - 2020"))}var E=t(36),N=t.n(E),b=t(37),y=t.n(b).a.create({baseURL:"http://localhost:5000"}),_=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleResponsePopUp=function(e,a,t,r){n.setState({alert:l.a.createElement(N.a,{success:t,error:r,style:{display:"block",marginTop:"250px"},title:a,onConfirm:function(){return n.handleModalClose()},confirmBtnBsStyle:"success",btnSize:"md"},e)})},n.handleModalClose=function(){n.setState({alert:null})},n.componentDidMount=function(){n.handleGetImagesList()},n.handleGetImagesList=function(){y.get("/api/image").then((function(e){n.setState({imagesList:e.data})})).catch((function(e){return n.handleResponsePopUp(e.response.data.message?e.response.data.message:e.message,"Error",!1,!0)}))},n.handleSaveFile=function(){var e={file_name:n.state.fileName,file_data:n.state.fileData};y.post("/api/image",e).then((function(e){return n.handleResponsePopUp(e.data.message,"Success",!0,!1)})).catch((function(e){return n.handleResponsePopUp(e.response.data.message,"Error",!1,!0)}))},n.handleFileChange=function(e){var a=e.target.files,t=a[0].name;console.log(t);var l=t.lastIndexOf(".")+1,r=t.substr(l,t.length).toLowerCase();if("jpg"!=r&&"jpeg"!=r&&"png"!=r)return n.handleResponsePopUp("Only image media is suported","Error",!1,!0);if(a.length>0){var i=a[0],c=new FileReader;c.onload=function(e){n.setState({fileData:e.target.result,fileName:a[0].name})},c.readAsDataURL(i),n.handleSaveFile()}},n.state={alert:null,fileData:"",fileName:"",imagesList:[]},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,this.state.alert,l.a.createElement("div",{className:"galarry"},l.a.createElement("div",{className:"galarry_header"},l.a.createElement(u,null)),l.a.createElement("div",{className:"galarry_body"},l.a.createElement(h,{imgList:this.state.imagesList,handleUploadFile:function(a){return e.handleFileChange(a)}})),l.a.createElement("div",{className:"galarry_fotter"},l.a.createElement(v,null))))}}]),t}(n.Component);var w=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(92);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.9ad2671c.chunk.js.map