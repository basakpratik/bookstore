var app = angular.module('bsApp');

app.controller('BooksController',
	['$scope', '$http', '$location', '$routeParams',
		function($scope, $http, $location, $routeParams){
			console.log('BooksController loaded..');

			$scope.getBooks = function(){
				$http({
					method: 'GET',
					url: '/api/books'
				}).then(function(response){
					console.log('response->'+JSON.stringify(response));
					$scope.books = response.data;
				}, function(error){
					console.log('Error fetching books data...');
				});
			}

			$scope.getBook = function(){
				var id = $routeParams.id;
				$http({
					method: 'GET',
					url: '/api/books/'+id
				}).then(function(response){
					console.log('response->'+JSON.stringify(response));
					$scope.book = response.data;
				}, function(error){
					console.log('Error fetching book data...');
				});
			}

			$scope.addBook = function(){
				var id = $routeParams.id;
				$http.post('/api/books/', $scope.book).then(function(response){
					window.location.href = '#!books'
				}, function(error){
					console.log('Error adding...'+error);
				});
			}			

			$scope.updateBook = function(){
				var id = $routeParams.id;
				$http.put('/api/books/'+id, $scope.book).then(function(response){
					window.location.href = '#!books'
				}, function(error){
					console.log('Error updating...'+error);
				});
			}

			$scope.deleteBook = function(id){
				$http.delete('/api/books/'+id).then(function(response){
					window.location.href = '#!books'
				}, function(error){
					console.log('Error updating...'+error);
				});
			}
		}
	]);