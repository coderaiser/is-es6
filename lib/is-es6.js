(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports  = new isEs6();
    else
        global.isEs6    = new isEs6();
    
    function isEs6() {
        var es          = function(array) {
            var is;
            
            if (Array.isArray(array))
                array.some(function(name) {
                    is = es[name]();
                    return !is;
                });
            
            return is;
        };
        
        es.const      = function() {
            var is = check('const s');
            
            return is;
        };
        
        es.templates  = function() {
            var is = check('``');
            
            return is;
        };
        
        es.generators = function() {
            var is = check('function* is(){}');
             
            return is;
        };
        
        function check(expression) {
            var is;
            
            is = !tryCatch(function() {
                Function(expression);
            });
            
            return is;
        }
        
        function tryCatch(fn) {
            var error;
            
            try {
                fn();
            } catch (e) {
                error = e;
            }
            
            return error;
        }
        
        return es;
    }
    
})(this);
