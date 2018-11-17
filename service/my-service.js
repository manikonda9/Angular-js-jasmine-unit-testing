angular.module('Testing').factory('myService',function() {

    var myService = {};

    var myObj=[
        {
            name:"hari",
            place:"bangalore",
            dob:"19-02-93"
        },
        {
            name:"mmk",
            place:"ongole",
            dob:"02-02-1990"
        },
        {
            name:"hemanth",
            place:"hyderabad",
            dob:"20-09-1994"
        },
        {
            name:"anirudh",
            place:"hyderabad",
            dob:"08-12-1993"
        },
        {
            name:"kishore",
            place:"bangalore",
            dob:"01-01-1995"
        },
        {
            name:"shiva",
            place:"ongole",
            dob:"28-07-1995"
        },
        {
            name:"lakshman",
            place:"bangalore",
            dob:"17-12-1990"
        }
    ];

    var _getData=function(){
        return myObj;
    }

    myService.getData=_getData;

    return myService;
});