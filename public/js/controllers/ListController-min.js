app.controller("ListController",["$scope","$firebaseArray","FBURL","$firebaseObject",function(e,r,o){var a=new Firebase(o);e.products=r(a),e.removeProduct=function(e){var r=new Firebase(o+e),a=$firebaseObject(r);a.$remove()}}]);