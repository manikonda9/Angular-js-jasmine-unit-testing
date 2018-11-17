describe('myDirective spec', function() {

  beforeEach(module('Testing'));

  var scope,compile,element;

  beforeEach(inject(function($rootScope,$compile) {
    // element = angular.element(
    //   '<my-directive>Old text</my-directive>'
    // );
    scope = $rootScope.$new();
    compile = $compile;
    //compile(element)(scope);
    scope.$digest();
  }));

  it('should display "Active" if passed true', function() {
    element = '<my-directive is-active="blogArticle.active"></my-directive>';
    scope.blogArticle = { active: true };
    element = compile(element)(scope);
    scope.$digest();

    expect(element.isolateScope().activeDisplayName).toEqual('Active');
  });

});