describe("Greet Controller", function(){
    beforeEach(module("myApp.greet"));
    
    it("Should initilize the name with an empty string", inject(function($controller){
        var scope = {};
        var controller = $controller("greetController", {$scope : scope});
        expect(scope.name).toBe('');
    }));
    
    it("Should initilize the greetMsg with an empty string", inject(function($controller){
        var scope = {};
        var controller = $controller("greetController", {$scope : scope});
        expect(scope.greetMsg).toBe('');
    }));
    
    it("Should greet the user 'Have a nice day!' when greeted", inject(function($controller){
        var scope = {};
        var expectedResult = "Hi Magesh, Have a nice day!";
        $controller("greetController", {$scope : scope});
        
        scope.name = "Magesh";
        scope.greet();
        expect(scope.greetMsg).toBe(expectedResult);
    }));
});