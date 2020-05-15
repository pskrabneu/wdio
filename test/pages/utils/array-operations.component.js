class ArrayOperationsComponent {
  // takes an array of elements and
  // find one element that is visible.
  // returns 'false' in case more than one element
  // is visible or array doesn't contain
  // visible elements
  oneVisible(array) {
    const steps = array.length;
    const infoText = 'Array Operations: Element ';
    if (steps > 0) {
      console.log('Array size = ' + steps);
      for (let i = 0; i < steps; i++) {
        if (array[i].isDisplayed()) {
          console.log(infoText + i + ' is displayed\n');
          return array[i];
        } else {
          console.log(infoText + i + ' is not displayed\n');
        }
      }
    } else {
      return console.log('Array with selector = ' + array.selector + '\nis empty');
    }
  }

  // takes an array of web-elements and an element
  // and return 'true' if array contains this element
  containsElement(array, textValue) {
    const size = array.length;

    // rule
    const isContains = (currentValue) => currentValue.getText().isEqual(textValue);
    let x;

    if (size > 0) {
      x = array.every(isContains);
      return !x;
    } else {
      x = true;
      return x;
    }
  }
}

export default new ArrayOperationsComponent();
