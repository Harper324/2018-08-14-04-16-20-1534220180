var arr = [12, 15, 7, 9, 7, 11, 20];
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
console.log('最大值为：' + max);
console.log('最小值为：' + min);
console.log('序列中元素个数为：' + num);
console.log('平均值为：' + ave.toFixed(2));
