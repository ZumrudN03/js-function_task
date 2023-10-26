// ? 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.
// Example [12,32,44,56,45] = >45 =>4-cu indeksdir.

// function find_index(arr) {
//     let element=45;
//     let index=0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             index=i
//             return index;
//         }
//     }
// }
// const array=[12,32,44,56,45];
// console.log(find_index(array));


// ? 2. Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.
// Example: const arr =  [3,2,1,4,3,1,5,6,9,3,2,52,3,2]   let num = 3   ->     4  tekrar

// function count_element(arr) {
//     let count=0;
//     let num = 3;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             count++
//         }

//     }
//     return count
// }
// const array=[3,2,1,4,3,1,5,6,9,3,2,52,3,2]
// console.log(count_element(array));


// ? 3. arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function.
//  Example : [2,1,3,4,6]     -> 9

// function findminmax(arr) {
//   let min = arr[0];
//   let max = arr[0];
//   let sum_all = 0;
//   let sum_min_max= 0;
//   let ferq = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//     sum_all = sum_all + arr[i];
//   }
//   sum_min_max=min+max
//   ferq= sum_all- sum_min_max

//   return ferq

// }
// const array = [12, 32, 44, 56, 45];
// console.log(findminmax(array));


// ? 4.Verilmis n ededinin son reqemini onun evveline getirerek yeni bir eded duzelden function.
//     (misalcun daxil edilen eded 475 olarsa, geriye 547 qaytarsin)
