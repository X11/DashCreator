angular.module('dashDirectives').directive('draggable', function(){
    return function(scope, element, attr){
        var el = element[0];
        el.draggable = true;
        el.addEventListener('dragstart', function(e){
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('widgetIndex', this.dataset.widgetIndex);
            e.dataTransfer.setData('widgetRow', this.dataset.widgetRow);
            this.classList.add('drag');
            return false;
        }, false);
        el.addEventListener('dragend', function(e){
            this.classList.remove('drag');
            return false;
        }, false);
    };
});
