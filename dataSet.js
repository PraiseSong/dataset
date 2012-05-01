/**
 * @fileOverview The dataSet is a lightly util used to get customise data(by HTML tag's data-attribute)
 * @author lychi blog:http://qiqicartoon.com
 * @param {Object} node primitive DOM
 * @param {String} [namespace] the key namespace 
 * @param {Object} [options] customise the parse value options
 * @returns {Object} return the customise data
 */
function dataSet(node/*,namespace,*//*options*/){
		var namespace = arguments[1],
		    options = arguments[2],
			//customise the parsing options
			defaultOptions = {
				parseBoolean: true,
				parseFunction: true,
				parseNull: true,
				parseObject: true,
				parseNumber: true,
				//customise parse function
				parse: undefined
			},
		    elem = document.createElement('div'),
		    support = elem.dataset ? true : false,
			object = {},
			setting = defaultOptions;
		
		if(options){
			for(k in options){
				setting[k] = options[k];
			}
		}
		
		var _convertDataType = function (value){
			var result = value,
			    firstChar = value.charAt ? value.charAt(0) : '';
			
			if(value === 'null'){
				setting.parseNull ? result = null : result;
			}else if(firstChar === '{' || firstChar === '['){
				
				
			    try{
					setting.parseObject ? result = JSON.parse(value) : '';	
				}catch(e){
					throw('The '+ value +' may be illegal JSON string! Happened in ' + node + '.');
				}
			}else if(setting.parseNull && (value === 'true' || value === 'false')){
				 switch(value){
				 	case 'true':
					    result = true;
					break;
					case 'false':
					    result = false;
					break;
				 }
			}else if(!isNaN(value*1)){
				setting.parseNumber ? result = value*1 : result;
			}
			
			return result;
		}
		
		switch(support){
			case true:
			  var _object = node.dataset;
			  
			  for(i in _object){
			  	value = _convertDataType(_object[i]);
				object[i] = value;
			  }
			break;
			case false:
			break;
		}
		
		return node.nodeType > 0 ? object : null;
}