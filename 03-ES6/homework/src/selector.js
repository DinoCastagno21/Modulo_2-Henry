const traverseDomAndCollectElements = function(matchFunc, startEl) {
  let resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ 
  if(matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    let traver = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...traver];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector.charAt(0) === '#') return 'id';
  else if(selector.charAt(0) === '.') return 'class';
  else if(!selector.includes('.')) return 'tag';
  else if (selector.includes('.')) return 'tag.class';
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

const matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    
    matchFunction = function (el) {
      let id = selector.slice(1)
      return el.id && (el.id.toLowerCase() === id.toLowerCase());
    }

  } else if (selectorType === "class") {

    matchFunction = function (el) {
      let clase = selector.slice(1)
     for (let i = 0; i < el.classList.length; i++) {
       if(el.classList[i] === clase){
        return true;
       }
      }
       return false;
    }
  } else if (selectorType === "tag.class") {
    
    matchFunction = (el) => {
      let [tag, clase] = selector.split(".");
      return (
        matchFunctionMaker(tag)(el) &&
        matchFunctionMaker(`.${clase}`)(el)
      );
    } 

  } else if (selectorType === "tag") {
    
    matchFunction = function (el) {
      return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
    };
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
