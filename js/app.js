angular.module('app', ["ui.router"])
// a state for controller
	.config(function config($stateProvider) {
	$stateProvider.state("ng-sharing-data.html", {
		url: "",
		controller: "FirstCtrl as first",
		templateUrl: "templates/first.html"
	})
	})
  .controller('FirstCtrl', function FirstCtrl() {
    var first = this;
  
    first.greeting = "First";  
  })