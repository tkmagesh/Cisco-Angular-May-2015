 var appInit = function(initScope){
        $(function(){
            angular.bootstrap(document.body, []);
            window.scope = angular.element(document.body).scope();
            initScope(scope);
            

            $("*[app-model]").each(function(index, element){
               var $element = $(element);
               var model = $element.attr("app-model");
               $element.change(function(){
                    scope.$apply(function(){
                        var expr = model + ' = ' + this.value;
                        scope.$eval(expr);
                        //scope.calculator.basic = this.value.toFloat();
                    }.bind(this));
                });
                scope.$watch(model, function(){
                    $element.val(scope.$eval(model));
                });
            });

            $("*[app-bind]").each(function(index, element){
               var $element = $(element);
               var model = $element.attr("app-bind");
                scope.$watch(model, function(){
                    $element.html(scope.$eval(model));
                });
            });

            $("*[app-click]").each(function(index, element){
               var $element = $(element);
                $element.click(function(){
                   var model = $element.attr("app-click");
                    console.log(model);
                    scope.$apply(function(){
                        scope.$eval(model);
                    });
                });
            });
        });    
    }