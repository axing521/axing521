/***
 * @creater:ACBash
 * @create_time:23-5-11 16:24:32
 * @last_modify:ACBash
 * @modify_time:23-5-11 20:40:52
 * @line_count:36
 **/

// 在github仓库的actions中的yml文件里，怎么设置cron内容，以至于可以在每周一的北京时间早上6店自动运行？
// 我想在github的profile展示我的代码统计，应该如何设置actions以及在readme中如何编写？
// 如何让两个img标签的内容在同一行显示？
// 内部元素两端对齐的样式
// 测试以下wakatime的功能
const a = 1;
// 写一个快速排序算法
const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left = [], right = [];
    arr.forEach(item => {
        if (item < pivot) left.push(item);
        else right.push(item);
    });
    return quickSort(left).concat([pivot], quickSort(right));
}

let arr = [1, 3, 2, 5, 4, 7, 6, 9, 8];

console.log(quickSort(arr));

// 写一个javascript数组的foreach方法
Array.prototype.myForEach = function (fn) {
    for (let i = 0; i < this.length; i++) {
        fn(this[i], i, this);
    }
}

let arr2 = [1, 2, 3, 4, 5];
arr2.myForEach((item, index, arr) => {
    console.log(item, index, arr);
}
);
