function Stream(t,r){this.transporter=t,this.path=r,this._current_id=null,this._size=50,this._sort="DESC",this.onData=null,this.onError=null}var DataElement=require("./dataelement");module.exports=Stream,Stream.prototype.sort=Stream.prototype.order=function(t){return this._sort=t.toUpperCase(),this},Stream.prototype.size=Stream.prototype.limit=function(t){return t>999&&(t=999,window.console&&window.console.log("size too large")),this._size=t,this},Stream.prototype.onData=function(t){this.onData=t},Stream.prototype.onError=function(t){this.onError=t},Stream.prototype.next=function(t){return this.exec(t),this},Stream.prototype.exec=function(t){var r=this,o={path:this.path,limit:this._size,sort:this._sort};this._current_id&&(o.th=this._current_id),this.transporter.call("query",o,function(o,e){if(o)return r.onError&&r.onError(e.err),void(t&&t(o,null));if(null!=e.err)return r.onError&&r.onError(e.err),void(t&&t(e.err,[]));var n=e.content.d.map(DataElement.format);n=n.sort(function(t,r){return t.id>r.id?1:t.id<r.id?-1:0}),n.length>0&&(r._current_id="ASC"==r._sort?n[n.length-1].id:n[0].id),r.onData&&r.onData(n),t&&t(null,n)})};