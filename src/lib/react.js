/*
 * @Author: power_840
 * @Date: 2021-01-15 13:16:23
 * @Last Modified by: power_840
 * @Last Modified time: 2021-01-15 13:59:39
 */

function reactElement(type, props) {
  const element = { type, props };
  return element;
}

function createElement(type, config = {}, children) {
  let propName;
  const props = {};
  for (propName in config) {
    props[propName] = config[propName];
  }
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    props.children = Array.from(arguments).slice(2);
  }
  return reactElement(type, props);
}

const result = {
  createElement,
};

export default result;
