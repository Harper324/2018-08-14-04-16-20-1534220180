var arr = [6, 9, 15, -2, 92, 11];
var i, ave, total = arr[0], num = arr.length, min = arr[0], max = arr[0];
for (i=1; i<arr.length; i++) {
        total = total + arr[i];
        if (max < arr[i] {
                max = arr[i];
        } else if (min > arr[i]) {
                min = arr[i];
        } else {
                max = max;
                min = min;
        }
}
ave = total/num;
console.log('最小值 =' + min);
console.log('最大值 =' + max);
console.log('元素数量 =' + num);
console.log('平均值 =' + ave.toFixed(2));
