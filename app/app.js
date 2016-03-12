var app = angular.module('app', [
	'ui.router'
]);

app.config(function($stateProvider) {
	$stateProvider
		.state('notifications', {
			url: '/notificacoes',
			templateUrl: 'app/views/notifications.html',
			css: 'app/views/notifications.css'
		});
});
