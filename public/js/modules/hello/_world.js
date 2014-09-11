/*global PubSub*/

'use strict';

/**
 * Global modules
 */
var util = require('util');

/**
 * Private variables
 */
var _$context;
var _config;

/**
* This method is who initialize the main methods and variables of the module
* @param  {object} $context jQuery object with the DOM context where the module will work
* @param  {object} config JSON with the configuration of the module
*/
function init($context, config){

    //Save the context in a local variable to allow 
    //the use in all the methods of the module.
    //Also, this is a good practice for better performace
    //in selections with jQuery
    _$context = $context;

    //Save the configuration for the same
    //reason: the common use in all the methods
    _config = config;

    //This is an example of a subscription using pubsub.
    //When the event 'incoming' happens, the function 
    //_incomingEvent is executed
    PubSub.subscribe('incoming', _logIncomingEvent);

    //Finally, the execution of a private method
    _render();
    
}

/**
 * This private method is only an example who illustrate
 * the use of global modules/variables
 */
function _render(){

    //Using utils, check if is config.words is an array
    if(util.isArray(_config.words) === true){

        //Join every word
        var result = _config.words.join(' ');

        //Append the result into an element. 
        //Note the use of find() for seach inside _$context
        _$context.find('h1').append(result);


    }

}

/**
* This private method is executed when the event 'incoming' was announced
* @param  {string} msg The key of the event
* @param  {object} data JSON with information relative to the event
*/
function _logIncomingEvent(msg, data){

    //Format the output of the message
    console.log(util.format('The event \'%s\' has this data: %s', msg, JSON.stringify(data)));

}

/**
 * Public methods exported
 */
module.exports = {
    init: init
};
