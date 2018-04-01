const app = angular.module('BeerApp' , []);

app.controller('MainController', ['$http', function($http){
    this.allBeers = [];
    this.showBeer = null;

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
                likes: 0
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

    this.editBeer = (beer , form) => {
        $http({
            method:'PUT',
            url:'/beers/' + beer._id,
            data: {
                name: form.name,
                brand: form.brand,
                img: form.img,
                abv: form.abv,
                likes: form.likes
            }
        }).then((response) => {
            this.getBeers()
        }, (error) => {
            console.log(error);
        })
    }

    // this.likeBeer = (beer , form) => {
    //     form.likes += 1;
    //     $http({
    //         method:'PUT',
    //         url:'/beers/' + beer._id,
    //         data: {
    //             name: form.name,
    //             brand: form.brand,
    //             img: form.img,
    //             abv: form.abv,
    //             likes: form.likes
    //         }
    //     }).then((response) => {
    //         this.getBeers()
    //     }, (error) => {
    //         console.log(error);
    //     })
    // }

    this.getBeers();
}])
