const app = angular.module('BeerApp' , []);

app.controller('MainController', ['$http', function($http){
    this.allBeers = [];

    this.getBeers = () => {
        $http({
            method:'GET',
            url:'/beers'
        }).then((response) => {
            this.allBeers = response.data
        })
    }

    this.createBeers = () => {
        $http({
            method:'POST',
            url:'/beers',
            data:{
                name: this.name,
                brand: this.brand,
                img: this.img,
                abv: this.abv,
                likes: this.likes
            }
        }).then((response) => {
            console.log(response.data);
            this.getBeers();
        }, (error) => {
            console.log(error);
        })
    }

    this.deleteBeer = (beer) => {
        $http({
            method:'DELETE',
            url:'/beers/' + beer._id
        }).then((response) => {
            this.getBeers();
        }, (error) => {
            console.log(error);
        })
    }

}])
