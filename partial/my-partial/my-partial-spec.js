describe('MyPartialCtrl Spec', function() {

    beforeEach(module('Testing'));

    var scope,ctrl;
    var data=[
        {
            name:"mmk",
            place:"ongole",
            dob:"02-02-1990"
        },
        {
            name:"shiva",
            place:"ongole",
            dob:"28-07-1995"
        }
    ];

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('MyPartialCtrl', {$scope: scope});
    }));

    it('Get the users by city', inject(function() {
        
        expect(scope.getByPlace('ongole')).toEqual(data);
        
    }));

});
