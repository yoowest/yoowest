var app= angular.module ("app", ["ui-router"] );


app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        
        .state('about', {
             url: '/about',
            templateUrl: 'about.html'
        });
	
	
	.state('Blog', {
             url: '/blog',
            templateUrl: 'blogPost.html'
        });
        
	
	
        
});



app.controller ("denemeController", function($scope){
	
	
	
});