angular.module('Testing').directive('myDirective', function () {
    return {
        restrict: 'E',
        template: "<span>{{activeDisplayName}}</span>",
        scope: {
            isActive: '='
        },
        link: function ($scope, $el, attrs) {
            if ($scope.isActive) {
                $scope.activeDisplayName = 'Active';
            } else {
                $scope.activeDisplayName = 'Inactive';
            }
        }
    }
});
