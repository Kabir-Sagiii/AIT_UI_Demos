function fnTask() {
  var inputDomElement = document.querySelector("input");
  var content = inputDomElement.value;

  var pDomElement = document.getElementById("content");
  pDomElement.innerText = content;
}
