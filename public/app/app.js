(function(){
	'use strict';

		angular.module('Listnr', ['appRoutes','mainCtrl', 'authService', 'userCtrl', 'userCreateCtrl','userService', 'storyService', 'storyCtrl', 'allStoriesCtrl', 'profileCtrl', 'profileService', 'reverseDirective'])

			   .config(function($httpProvider){

		$httpProvider.interceptors.push('AuthInterceptor');

	});

})();