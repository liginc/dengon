function n2s(r){if(0==r)return"";var n=Math.floor(62*Math.random())%62;return n2s(r-1)+t[n]}var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";module.exports=n2s;