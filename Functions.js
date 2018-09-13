// 时间切割函数

// 这个东东我的小伙伴也写出来了.我的是在它的解答方式上加以注释和对参数的判断做了考虑
// 他的解法方案在他的 github 上 https://github.com/lyh2668/blog/issues/1 , by lyh2668
// 方便一些小伙伴的理解,以下代码包含ES6的姿势(参数默认值,剪头函数)

let inputDateRange = (date, step = 30, separator = '-') => {
  let startTime, endTime; // 开始时间和结束时间

  if (Object.prototype.toString.call(date) === '[object String]') {
    date = date.trim(); // 去除两边的空格
    var tempDate = '';
    if (separator) {
      tempDate = date.split(separator);
    } else {
      if (date.indexOf('-') !== -1) {
        tempDate = date.split('-');
      } else if (date.indexOf('~')) {
        tempDate = date.split('~');
      } else {
        console.log('您传入的也许不是一个时间段!!!');
      }
    }
    startTime = time2min(tempDate[0]); // 传入的开始时间
    endTime = time2min(tempDate[1]); //传入的结束时间
  } else if (Object.prototype.toString.call(date) === '[object Array]') {
    if (date.length === 2) {
      startTime = time2min(date[0]); // 传入的开始时间
      endTime = time2min(date[1]); //传入的结束时间
    }
  } else {
    console.log('您传入的也许不是一个时间段!!!');
  }

  // 传入的 step 是否为数字,否则截图数字部分转化
  // 为什么和 NaN 比较(自身不等性),若是传入的连正则都没法识别,那只能给默认值了
  Object.prototype.toString.call(step) === '[object Number]'
    ? (step = parseInt(step, 10))
    : parseInt(step.replace(/[W\s\b]/g, ''), 10) === NaN
      ? (step = parseInt(step.replace(/[W\s\b]/g, ''), 10))
      : (step = 30);

  // 若是开始时间大于结束时间则结束时间往后追加一天
  startTime > endTime ? (endTime += 24 * 60) : '';

  let transformDate = []; // 储存转换后的数组,时间分段

  // 开始遍历判断,用 while
  while (startTime < endTime) {
    // 如果开始时间+步长大于结束时间,则这个分段结束,否则结束时间是步长递增
    let right = startTime + step > endTime ? endTime : startTime + step;
    transformDate.push(`${min2time(startTime)}-${min2time(right)}`);
    startTime += step; // 步长递增
  }
  return transformDate;
};

// 时间转化为分钟
let time2min = time => {
  // 获取切割的
  time.indexOf(':') ? (time = time.trim().split(':')) : '';
  return time[0] * 60 + parseInt(time[1]); // 返回转化的分钟
};

// 分钟转会字符串时间
let min2time = minutes => {
  let hour = parseInt(minutes / 60); // 返回多少小时
  let minute = minutes - hour * 60; // 扣除小时后剩余的分钟数

  hour >= 24 ? (hour = hour - 24) : ''; // 若是大于等于24小时需要扣除一天得到所剩下的小时
  minute < 10 ? (minute = '0' + minute) : ''; // 小于10的都要补零
  hour < 10 ? (hour = '0' + hour) : ''; // 小于10的都要补零
  return `${hour}:${minute}`;
};


// // test ,支持字符串传入时间段
// inputDateRange('3:00-5:00','20d'); // ["03:00-03:20", "03:20-03:40", "03:40-04:00", "04:00-04:20", "04:20-04:40", "04:40-05:00"]

// // 亦或者数组传入
// inputDateRange(['3:00','5:00'],'45df.3d'); // ["03:00-03:45", "03:45-04:30", "04:30-05:00"]

// // step 支持数字亦或者带特殊字符的数字
// inputDateRange(['6:00','8:00'],'55df.3d'); // ["06:00-06:55", "06:55-07:50", "07:50-08:00"]

// inputDateRange('3:00-5:00',60); // ["03:00-04:00", "04:00-05:00"]