function outputAttributes(element){
  var pairs = new Array(),
  attrName,
  attrValue,
  i,
  len;

  for (i = 0, len = element.attributes.length; i < len; i++){
    attrName = element.attributes[i].nodeName;
    attrValue = element.attributes[i].nodeValue;
    pairs.push(attrName + "=\"" + attrValue + "\"");
  }
  return pairs.join(" ");
}