angular.module('dashDirectives').directive('droppable', function(){
    return {
        scope: {
            drop: '&'
        },
        link: function(scope, element, attrs){

            var el = element[0];

            el.addEventListener('dragover', function(e){
                e.dataTransfer.dropEffect = 'move';
                if (e.preventDefault) e.preventDefault();
                this.classList.add('over');
                return false;
            }, false);

            el.addEventListener('dragenter', function(e){
                this.classList.add('over');
                return false;
            }, false);

            el.addEventListener('dragleave', function(e){
                this.classList.remove('over');
                return false;
            }, false);

            el.addEventListener('drop', function(e){
                if (e.stopPropagation) e.stopPropagation();
                this.classList.remove('over');
                scope.item = e.dataTransfer.getData('widgetId');
                console.log(scope.item);

                scope.$apply('drop()');

            }, false);

        }
    };
});
