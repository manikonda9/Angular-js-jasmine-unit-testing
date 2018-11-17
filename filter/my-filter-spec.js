describe('myFilter spec', function() {

    beforeEach(module('Testing'));

    it('should return the ordinal', inject(function($filter) {

        var filter = $filter('myFilter');

        expect(filter(109)).toEqual(109+'th');

    }));

});
