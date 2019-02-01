import $ from 'jquery';

var test_str = "2019-11-15T01:15:30Z";
var test_time = test_str.toTime().format('yyyy-MM-dd hh:mm:ss');
console.log(test_time);

console.log(test_str.has('T'));
console.log(test_str.startWith('2'));
console.log(test_str.replaceAll('-', ''));

var test_list = [{ name: '张三', age: 21 }, { name: '李四', age: 35 }, { name: '阿珂', age: 28 }, { name: '比特', age: 28 }];

console.log(test_list.get('name', '张三'));
console.log(test_list.get('name', '张三', 'age'));

console.log(test_list.eachPush([{ name: '王五', age: 31 }, { name: '李四', age: 31 }], 'phone', '13585718**'));
console.log(test_list.toStr('、', 'name'));

var list = test_list.del('name', '李四');
console.log(JSON.stringify(list));

list = test_list.del('name', '李四', true);
console.log(JSON.stringify(list));

list = test_list.set({ name: '张三', age: 21 }, { name: '张三丰', age: 108 });
console.log(JSON.stringify(list));


list = test_list.sortBy('desc', 'age');
console.log(JSON.stringify(list));

list = test_list.sortBy('asc', 'age');
console.log(JSON.stringify(list));

list = test_list.sortBy('desc', 'name');
console.log(JSON.stringify(list));

list = test_list.sortBy('asc', 'name');
console.log(JSON.stringify(list));


// 数组转字符串
var test_arr = [35, 21, 28];
console.log(test_arr.toStr('、'));
 // 排序
console.log(test_arr.sortBy('desc'));
console.log(test_arr.sortBy('asc'));


// 判断对象是否相似
var test_obj = { name: '王五', age: 31, phone: '13585718**', account: { username: "admin", password: "asd123" } };
var test_obj2 = { name: '王五', age: 31 };


// 拷贝对象
var obj_ret = $.obj.copy(test_obj2);

// 添加属性
$.obj.eachPush(test_obj2, test_obj, true);
console.log(obj_ret);
console.log(test_obj2);

// 相似度
console.log($.obj.as(test_obj, test_obj2)); // 相似
console.log($.obj.as(test_obj, test_obj2, true)); //完全相同

setTimeout(function(){console.log(test_obj);}, 1000);
console.log($.obj.clear(test_obj));

// 转url请求参数
console.log($.obj.toUrl(obj_ret));
console.log($.obj.toStr(obj_ret));

var dateTime = new Date();
console.log(dateTime.format('yyyy-MM-dd hh:mm:ss'));
var stamp = dateTime.stamp();
console.log(stamp);
var dateTime_new = stamp.toTime();
console.log(dateTime_new.dateTime());
console.log(dateTime_new.date());
console.log(dateTime_new.time());

console.log($.http.get('/lang/english.json'));
//console.log($.http.post('/lang/chinese.json'));