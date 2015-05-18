angular.module( 'JSONEditor', [] )

.directive( 'jsoneditor', function() {

    return {
        restrict: 'A',
        link: function( scope, element, attrs ) {

            if( !scope.hasOwnProperty('jsoneditor') ) scope['jsoneditor'] = {
                _: {
                    init: function( element_id, editor_id ) {

                        var editor = new JSONEditor(document.getElementById(element_id));

                        scope.jsoneditor.editors[editor_id] = editor;

                        return true;
                    }
                },
                editors: {}
            };

            var editor_id = attrs.jsoneditor;
            var element_id = 'jsoneditor_' + editor_id;

            element.html( '<div id="' + element_id + '" class="jsoneditor"></div>' );

            scope.jsoneditor._.init(element_id, editor_id);
        }
    };
} )


;
