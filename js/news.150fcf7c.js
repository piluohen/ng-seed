webpackJsonp([11,21],{N7Gh:function(e,n,t){var i=t("eslX");i.registerController("newsCtrl",["$scope","News","$modal","dialogs","$timeout",function(e,n,t,i,o){function r(){return n.query({key:"12"},function(n){return e.news=n,n})}function s(t,o){i.confirm({template:'<p class="text-center text-default">确认删除？</p>'}).then(function(){n.remove({id:o._id.$oid},function(){e.query()})})}var u=this;u.indexCrumb={displayName:"首页",router:"home"},u.query=r,u.removeArticle=s,u.query()}]),i.registerController("newsDetailCtrl",["$scope","news","News",function(e,n,t){e.news=n}]),i.registerController("newsSaveCtrl",["$scope","news","News","$state",function(e,n,t,i){e.news=n,e.save=function(o){e.newsForm.submited=!0,e.newsForm.$invalid||(e.news._id?t.update({id:n._id.$oid},angular.extend({},e.news,{_id:void 0}),function(e){i.go("news.list")}):t.save({},angular.extend({},e.news),function(e){i.go("news.list")}))}}])}});