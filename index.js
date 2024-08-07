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

// console.log(SortFuntion([1, 3, -1, 11, 10, 2, 1, 4]));

/*---------------------------------------------------------------------------*/

function arrayObjectvalue(value) {
  //ForEach
  value.forEach((value) => {
    console.log(value.b * 2);
  });

  let result = value.find((value) => value.a > 1);
  console.log(result);

  let filterarray = value.filter((value) => value.a > 1);
  console.log(filterarray);

  let mappedArray = value.map((value) => value.b);
  console.log(mappedArray);
}

// arrayObjectvalue([
//   { a: 1, b: 2, c: 3 },
//   { a: 3, b: 6, c: 9 },
//   { a: 5, b: 10, c: 15 },
// ]);

/*---------------------------------------------------------------------------*/

/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Constraints:

    nums1.length == m + n
    nums2.length == n
    0 <= m, n <= 200
    1 <= m + n <= 200
    -109 <= nums1[i], nums2[j] <= 109

Follow up: Can you come up with an algorithm that runs in O(m + n) time?

*/

/*
function merge(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
}
*/
function merge(nums1, m, nums2, n) {
  let n1 = [];
  for (let i = 0; i < m; i++) {
    if (nums1[i] > 0) {
      n1.push(nums1[i]);
    }
  }

  for (let j = 0; j < n; j++) {
    if (nums2[j] > 0) {
      n1.push(nums2[j]);
    }
  }
  n1.sort();

  nums1 = [];
  nums1.push(...n1);
  return nums1;
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));

/*---------------------------------------------------------------------------*/

/* 
Remove Duplicates From Sorted Array or Unsorted Array
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

function removeDuplicates(val) {
  // console.log([...new Set(val)].sort((a, b) => a - b));

  /* 
    var uniqueArray = [...new Set(val)];
    return uniqueArray;
    ------------------------
    var uniqueArray = val.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    return uniqueArray;
    -------------------------
    let uniqueArray = [];
    val.forEach((element) => {
      if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
      }
    });
    return uniqueArray;
    ---------------------- 
  */
  let result = [];
  for (let i = 0; i < val.length; i++) {
    var duplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (val[i] === result[j]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      result.push(val[i]);
    }
  }

  console.log(result);
}
// removeDuplicates([0, 0, 1, 1, 1, 4, 2, 2, 3, 3]);

/*---------------------------------------------------------------------------*/

// Capitalize and Space between a String (contact_details)

function test(value) {
  var val = value
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  console.log(val);
}

// test("contact_details");
