(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{252:function(e,t,a){e.exports=a(253)},253:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a(5),o=a(9),r=a(18),c=a(14),l=a(17),s=a(131),d=a.n(s),h=a(229),p=a.n(h),u=a(230),m=a.n(u),v=(a(260),a(283)),f=["Starfish"],g=640,w=640;console.log("production");var y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={model:null,preview:"",predictions:[]},a.onDrop=function(e,t,n){a.setState({preview:e[0].preview||n[0]})},a.cropToCanvas=function(e,t,a){var n=e.naturalWidth,i=e.naturalHeight;a.clearRect(0,0,a.canvas.width,a.canvas.height),a.fillStyle="#000000",a.fillRect(0,0,t.width,t.height);var o=Math.min(t.width/e.naturalWidth,t.height/e.naturalHeight),r=Math.round(n*o),c=Math.round(i*o);a.drawImage(e,0,0,n,i,(t.width-r)/2,(t.height-c)/2,r,c)},a.onImageChange=function(e){var t=document.getElementById("canvas"),i=t.getContext("2d");a.cropToCanvas(e.target,t,i);var o=v.tidy(function(){return v.image.resizeBilinear(v.browser.fromPixels(t),[g,w]).div(255).expandDims(0)});a.state.model.executeAsync(o).then(function(e){var a="16px sans-serif";i.font=a,i.textBaseline="top";var o,r=Object(n.a)(e,4),c=r[0],l=r[1],s=r[2],d=r[3],h=c.dataSync(),p=l.dataSync(),u=s.dataSync(),m=d.dataSync()[0];for(v.dispose(e),o=0;o<m;++o){var g=h.slice(4*o,4*(o+1)),w=Object(n.a)(g,4),y=w[0],b=w[1],j=w[2],x=w[3];y*=t.width,j*=t.width,b*=t.height;var S=j-y,F=(x*=t.height)-b,D=f[u[o]],E=p[o].toFixed(2);i.strokeStyle="#00FFFF",i.lineWidth=4,i.strokeRect(y,b,S,F),i.fillStyle="#00FFFF";var O=i.measureText(D+":"+E).width,C=parseInt(a,10);i.fillRect(y,b,O+4,C+4)}for(o=0;o<m;++o){var k=h.slice(4*o,4*(o+1)),I=Object(n.a)(k,3),z=I[0],M=I[1];z*=t.width,M*=t.height;var B=f[u[o]],N=p[o].toFixed(2);i.fillStyle="#000000",i.fillText(B+":"+N,z,M)}})},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.loadGraphModel("/web_model/model.json").then(function(t){e.setState({model:t})})}},{key:"render",value:function(){return d.a.createElement("div",{className:"Dropzone-page"},this.state.model?d.a.createElement(m.a,{className:"Dropzone",accept:"image/jpeg, image/png, .jpg, .jpeg, .png",multiple:!1,onDrop:this.onDrop},this.state.preview?d.a.createElement("img",{alt:"upload preview",onLoad:this.onImageChange,className:"Dropzone-img",src:this.state.preview}):"Choose or drop a file.",d.a.createElement("canvas",{id:"canvas",width:"640",height:"640"})):d.a.createElement("div",{className:"Dropzone"},"Loading model..."))}}]),t}(d.a.Component),b=document.getElementById("root");p.a.render(d.a.createElement(y,null),b)},260:function(e,t,a){},268:function(e,t){},269:function(e,t){},277:function(e,t){},280:function(e,t){},281:function(e,t){},282:function(e,t){}},[[252,2,1]]]);
//# sourceMappingURL=main.82caf5b7.chunk.js.map