/*
    jQuery backgound color changing plugin 
    @author Paul P.
*/
;(function($, window, document, undefined){
    
    /*
        The plugin's methods
    */
    var methods = {
        // the plugin settings object
        settings:{
            color:'#999999',
            default:'#FFFFFF'
        },
        // initialize the plugin 
        init:function(options){
            $.extend(methods.settings, options);
            
            return this.each(function(){
                $(this).click(function(){
                    $(this).css('background-color', methods.settings.color);
                });
            });
            
        },
        // revert changes
        clear:function(){
            return this.each(function(){
                $(this).css('background-color',methods.settings.default);
            });
        }
    };
    
    
    /*
        Register the plugin to jQuery's namespace
    */
    $.fn.backgroundChanger = function(methodOrOptions){
        /*
            if the argument is an method of the plugin 
            just call it
        */
        if(methods[methodOrOptions]){
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call( arguments, 1 ));
        } else if(typeof methodOrOptions === 'object' || !methodOrOptions){
            // defaults to init method
            return methods.init.apply( this, arguments );
        } else {
            // thow an error if none of the above macth
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.backgroundChanger' );
        }
    };
    
})(jQuery, window, document);