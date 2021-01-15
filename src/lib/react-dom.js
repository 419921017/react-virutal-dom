/*
 * @Author: power_840
 * @Date: 2021-01-15 13:18:36
 * @Last Modified by: power_840
 * @Last Modified time: 2021-01-15 15:12:53
 */

function render(element, parentNode) {
  console.log('parentNode', parentNode);
  if (typeof element === 'string' || typeof element === 'number') {
    return parentNode.appendChild(document.createTextNode(element));
  } 
    let type = element.type
    let props = element.props
    // 处理函数式组件
    if (typeof type === 'function') {
      let returnFunction = type(props)
      type = returnFunction.type
      props = returnFunction.props
    }
    const domElement = document.createElement(type);

    for (let propName in props) {
      if (propName === 'className') {
        domElement.className = props[propName];
      } else if (propName === 'style') {
        let styleObj = props[propName];
        let cssText = Object.keys(styleObj)
          .map((attr) => {
            return `${attr.replace(/([A-Z])/g, function () {
              return '-' + arguments[1].toLowerCase();
            })}:${styleObj[attr]}`;
          })
          .join(';');
        domElement.style.cssText = cssText;
      } else if (propName === 'children') {
        let children = Array.isArray(props.children)
          ? props.children
          : [props.children];
        children.forEach((child) => render(child, domElement));
      } else {
        domElement.setAttribute(propName, props[propName]);
      }
    }
    parentNode.appendChild(domElement);
}

const result = {
  render,
};

export default result;
