(()=>{"use strict";var t={987:function(t,e,r){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const u=s(r(123));class a extends u.default{constructor(t,e){super(t,e),this.pictures=[]}addPicture(t){this.pictures.push(t)}}e.default=a},123:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(t,e){this.id=t,this.title=e}}},519:function(t,e,r){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const u=s(r(536)),a=s(r(987)),i=s(r(449)),o=s(r(945)),n=new u.default(1,"BrandArgel","Brandon Argel",!0),l=new a.default(10,"Platzi Album"),d=new i.default(1,"Foto","2020-08",o.default.Landscape);n.addAlbum(l),l.addPicture(d),console.log(n),n.removeAlbum(l),console.log(n)},945:(t,e)=>{var r;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.Landscape=0]="Landscape",t[t.Portrait=1]="Portrait",t[t.Square=2]="Square",t[t.Panorama=3]="Panorama"}(r||(r={})),e.default=r},449:function(t,e,r){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const u=s(r(123));class a extends u.default{constructor(t,e,r,s){super(t,e),this._date=r,this._orientation=s}toString(){return`[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`}}e.default=a},536:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(t,e,r,s){this.id=t,this.username=e,this.firstName=r,this.isPro=s,this.album=[]}addAlbum(t){this.album.push(t)}removeAlbum(t){const e=this.album.indexOf(t);~e&&this.album.splice(e,1)}}}},e={};!function r(s){var u=e[s];if(void 0!==u)return u.exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,r),a.exports}(519)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDNUJjLEdBQ0RyQyxLQUFLdUIsTUFBTWdCLE9BQU9GLEVBQU8sT0NmakNHLEVBQTJCLElBRy9CLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWF0QyxRQUdyQixJQUFJd0MsRUFBU0wsRUFBeUJFLEdBQVksQ0FHakRyQyxRQUFTLElBT1YsT0FIQXlDLEVBQW9CSixHQUFVSyxLQUFLRixFQUFPeEMsUUFBU3dDLEVBQVFBLEVBQU94QyxRQUFTb0MsR0FHcEVJLEVBQU94QyxRQ2xCV29DLENBQW9CLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvYWxidW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL3Bob3RvLW9yaWVudGF0aW9uLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9waWN0dXJlLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy91c2VyLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waG90by1hcHAvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaXRlbV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2l0ZW1cIikpO1xuY2xhc3MgQWxidW0gZXh0ZW5kcyBpdGVtXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlKSB7XG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XG4gICAgICAgIHRoaXMucGljdHVyZXMgPSBbXTtcbiAgICB9XG4gICAgYWRkUGljdHVyZShwaWN0dXJlKSB7XG4gICAgICAgIHRoaXMucGljdHVyZXMucHVzaChwaWN0dXJlKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBBbGJ1bTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEl0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIGltcG9ydCB7IFVzZXIsIEFsYnVtLCBQaWN0dXJlLCBQaG90b09yaWVudGF0aW9uIH0gZnJvbSAnLi9waG90by1hcHAnO1xuY29uc3QgdXNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3VzZXJcIikpO1xuY29uc3QgYWxidW1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hbGJ1bVwiKSk7XG5jb25zdCBwaWN0dXJlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGljdHVyZVwiKSk7XG5jb25zdCBwaG90b19vcmllbnRhdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Bob3RvLW9yaWVudGF0aW9uXCIpKTtcbmNvbnN0IHVzZXIgPSBuZXcgdXNlcl8xLmRlZmF1bHQoMSwgJ0JyYW5kQXJnZWwnLCAnQnJhbmRvbiBBcmdlbCcsIHRydWUpO1xuY29uc3QgYWxidW0gPSBuZXcgYWxidW1fMS5kZWZhdWx0KDEwLCAnUGxhdHppIEFsYnVtJyk7XG5jb25zdCBwaWN0dXJlID0gbmV3IHBpY3R1cmVfMS5kZWZhdWx0KDEsICdGb3RvJywgJzIwMjAtMDgnLCBwaG90b19vcmllbnRhdGlvbl8xLmRlZmF1bHQuTGFuZHNjYXBlKTtcbi8vIENyZWFtb3MgcmVsYWNpb25lc1xudXNlci5hZGRBbGJ1bShhbGJ1bSk7XG5hbGJ1bS5hZGRQaWN0dXJlKHBpY3R1cmUpO1xuY29uc29sZS5sb2codXNlcik7XG51c2VyLnJlbW92ZUFsYnVtKGFsYnVtKTtcbmNvbnNvbGUubG9nKHVzZXIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUGhvdG9PcmllbnRhdGlvbjtcbihmdW5jdGlvbiAoUGhvdG9PcmllbnRhdGlvbikge1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIkxhbmRzY2FwZVwiXSA9IDBdID0gXCJMYW5kc2NhcGVcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQb3J0cmFpdFwiXSA9IDFdID0gXCJQb3J0cmFpdFwiO1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIlNxdWFyZVwiXSA9IDJdID0gXCJTcXVhcmVcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQYW5vcmFtYVwiXSA9IDNdID0gXCJQYW5vcmFtYVwiO1xufSkoUGhvdG9PcmllbnRhdGlvbiB8fCAoUGhvdG9PcmllbnRhdGlvbiA9IHt9KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBQaG90b09yaWVudGF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBpdGVtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaXRlbVwiKSk7XG5jbGFzcyBQaWN0dXJlIGV4dGVuZHMgaXRlbV8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgX2RhdGUsIF9vcmllbnRhdGlvbikge1xuICAgICAgICBzdXBlcihpZCwgdGl0bGUpO1xuICAgICAgICB0aGlzLl9kYXRlID0gX2RhdGU7XG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uID0gX29yaWVudGF0aW9uO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBbaWQ6ICR7dGhpcy5pZH0sIHRpdGxlOiAke3RoaXMudGl0bGV9LCBvcmllbnRhdGlvbjogJHt0aGlzLl9vcmllbnRhdGlvbn1dYDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBQaWN0dXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdXNlcm5hbWUsIGZpcnN0TmFtZSwgaXNQcm8pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLmlzUHJvID0gaXNQcm87XG4gICAgICAgIHRoaXMuYWxidW0gPSBbXTtcbiAgICB9XG4gICAgYWRkQWxidW0oYWxidW0pIHtcbiAgICAgICAgdGhpcy5hbGJ1bS5wdXNoKGFsYnVtKTtcbiAgICB9XG4gICAgcmVtb3ZlQWxidW0oYWxidW0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmFsYnVtLmluZGV4T2YoYWxidW0pO1xuICAgICAgICBpZiAofmluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFsYnVtLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBVc2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MTkpO1xuIl0sIm5hbWVzIjpbIl9faW1wb3J0RGVmYXVsdCIsInRoaXMiLCJtb2QiLCJfX2VzTW9kdWxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJpdGVtXzEiLCJBbGJ1bSIsImRlZmF1bHQiLCJjb25zdHJ1Y3RvciIsImlkIiwidGl0bGUiLCJzdXBlciIsInBpY3R1cmVzIiwiYWRkUGljdHVyZSIsInBpY3R1cmUiLCJwdXNoIiwidXNlcl8xIiwiYWxidW1fMSIsInBpY3R1cmVfMSIsInBob3RvX29yaWVudGF0aW9uXzEiLCJ1c2VyIiwiYWxidW0iLCJMYW5kc2NhcGUiLCJhZGRBbGJ1bSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVBbGJ1bSIsIlBob3RvT3JpZW50YXRpb24iLCJQaWN0dXJlIiwiX2RhdGUiLCJfb3JpZW50YXRpb24iLCJ0b1N0cmluZyIsInVzZXJuYW1lIiwiZmlyc3ROYW1lIiwiaXNQcm8iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=