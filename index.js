/**
 * Sort A Given Array
 *
 * @param {*} value
 * @returns {*}
 */
function SortFuntion(value) {
  //   console.log(value.sort((a, b) => a - b)); Inbuit Function
  for (let i = 0; i < value.length; i++) {
    for (let j = i + 1; j < value.length; j++) {
      let temp;
      if (value[i] > value[j]) {
        temp = value[i];
        value[i] = value[j];
        value[j] = temp;
      }
    }
  }
  return value;
}

function RemoveDuplicates(value) {
  //   var uniqueArray = [...new Set(value)];
  //   return uniqueArray;
  //   ------------------------
  //   var uniqueArray = value.filter((value, index, self) => {
  //     return self.indexOf(value) === index;
  //   });
  //   return uniqueArray;
  //   -------------------------
  //   let uniqueArray = [];
  //   value.forEach((element) => {
  //     if (!uniqueArray.includes(element)) {
  //       uniqueArray.push(element);
  //     }
  //   });
  //   return uniqueArray;
  //   ----------------------
  var uniqueArray = [];
  for (let i = 0; i < value.length; i++) {
    var isDuplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (value[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArray.push(value[i]);
    }
  }

  return uniqueArray;
}

console.log(SortFuntion([1, 3, -1, 11, 10, 2, 1, 4]));

console.log(RemoveDuplicates([1, 1, -1, 2, 33, 3, 33]));
