/**
 * Return an iterable that assigns a default value to given property name
 * @param  {String} prop Name of property to give default value
 * @param  {*} defaultVal Default value to assign
 * @return {Function}
 */
function defaultProp(prop, defaultVal) {
  return function(obj) {
    obj[prop] = obj[prop] != null ? obj[prop] : defaultVal
  }
}

exports = module.exports = defaultProp
