export function getCSSPropertyValue(className, propertyName) {
  const element = document.createElement("div");
  element.className = className;
  document.body.appendChild(element);
  const computedStyle = getComputedStyle(element);
  const propertyValue = computedStyle.getPropertyValue(propertyName);
  document.body.removeChild(element);
  return propertyValue;
}
