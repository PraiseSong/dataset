/**
 * @fileOverview The dataset is a lightly util used to get customise data(by HTML tag's data-attribute)
 * @author lychi blog:http://qiqicartoon.com
 * @param {Object} node primitive DOM
 * @param {String} [namespace] the key namespace 
 * @param {Object} [options] customise the parse value options
 * @returns {Object} return the customise data
 */
function dataset(node/*,namespace,*//*options*/){
		var namespace = arguments[1],
		    options = arguments[2],
			//customise the parsing options
			defaultOptions = {
				parseBoolean: true,
				parseFunction: true,
				parseNull: true,
				parseObject: true,
				parseNumber: true,
                parseUndefined: true,
				//customise parse function
				parse: undefined,
                deep: true // deeply parse json 
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
					//if you use IE,you may be modify JSON.parse
					setting.parseObject ? result = JSON.parse(value) : '';	
					
                    if (setting.deep) {
                        for (var i in result) {
                            result[i] = _convertDataType(result[i]);
                        }
                    }
				}catch(e){
					
				}
			}else if(setting.parseBoolean && (value === 'true' || value === 'false')){
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
			}else if(setting.parseUndefined && value.toLowerCase() === 'undefined'){
                result = undefined;
            }
			
			return result;
		}
		
		switch(support){
            // for modern browsers
			case true:
			  var _object = node.dataset;
			  
			  for(i in _object){
			  	value = _convertDataType(_object[i]);
				object[i] = value;
			  }
			break;
			case false:
			  var attrs = node.attributes,
			      name = '';
			  
			  function parseName(name){
			  	var data = '';
			  	for(i = 1,nameL = name.length;i<nameL;i++){
					if(i !== 1){
						data += name[i].charAt(0).toUpperCase() + name[i].slice(1).toLowerCase();
					}else{
						data += name[i];
					}
				}
				return data;
			  }
			  
			  for(i = 0,l = attrs.length;i<l;i++){
			      name  = attrs[i]['name'].split('-');
				  parseName(name) && parseName(name).length > 0 ? object[parseName(name)] = _convertDataType(attrs[i]['value']) : '';
			  }
			break;
		}
		
		return node.nodeType > 0 ? object : null;
}