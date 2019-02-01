import jquery from 'jquery';

// 判断对象是否相似
// obj：被判断对象
// query：用作判断的对象
// all：是否完全相同
// 返回：相似返回true，否则返回false
function as(obj, query, all) {
	var bl = true;
	if (all) {
		for (var k in obj) {
			if (obj[k] != query[k]) {
				bl = false;
				break;
			}
		}
	} else {
		for (var k in query) {
			if (obj[k] != query[k]) {
				bl = false;
				break;
			}
		}
	}
	return bl;
}

/// 排序
function newSort(key) {
	var field = key;
	return {
		/// 升序
		/// obj1：对象1
		/// obj2：对象2
		/// 返回顺序值
		asc: function(obj1, obj2) {
			var val1 = obj1[field];
			var val2 = obj2[field];
			if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
				val1 = Number(val1);
				val2 = Number(val2);
			}
			if (val1 < val2) {
				return -1;
			} else if (val1 > val2) {
				return 1;
			} else {
				return 0;
			}
		},
		asc_cn: function(obj1, obj2) {
			return obj1[field].localeCompare(obj2[field], 'zh-CN');
		},
		/// 倒序
		/// obj1：对象1
		/// obj2：对象2
		/// 返回顺序值
		desc: function(obj1, obj2) {
			var val1 = obj1[field];
			var val2 = obj2[field];
			if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
				val1 = Number(val1);
				val2 = Number(val2);
			}
			if (val1 > val2) {
				return -1;
			} else if (val1 < val2) {
				return 1;
			} else {
				return 0;
			}
		},
		desc_cn: function(obj1, obj2) {
			return obj2[field].localeCompare(obj1[field], 'zh-CN');
		}
	}
}

function ascNum(a, b) {
	return a - b
}

function descNum(a, b) {
	return b - a
}

/* == 数字拓展函数 == */
Number.prototype.toTime = function() {
	return new Date(this * 1000);
};

/* == 时间拓展函数 == */
/// 时间格式化
/// fmt: 指定格式
/// 返回: 时间字符串
Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds()
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return fmt;
};

/// 获取当前时间戳
Date.prototype.stamp = function() {
	var timestamp = Date.parse(this);
	return timestamp / 1000;
};

/// 获取本月
Date.prototype.month = function() {
	return this.format("yyyy-MM");
};

/// 获取当前日期
Date.prototype.date = function() {
	return this.format("yyyy-MM-dd");
};

/// 获取当前日期时间
Date.prototype.dateTime = function() {
	return this.format("yyyy-MM-dd hh:mm:ss");
};

/// 获取当前时间
Date.prototype.time = function() {
	return this.format("hh:mm:ss");
};

/// 计算时间差——时间间隔
/// endTime：结束时间
/// time_unit：时间单位（day天、hours小时、minutes分钟）
Date.prototype.interval = function(endTime, time_unit) {
	var startTime = this; // startTime：开始时间
	var stime = Date.parse(new Date(startTime));
	var etime = Date.parse(new Date(endTime));
	var usedTime = etime - stime; //两个时间戳相差的毫秒数
	if (time_unit == "day") {
		return Math.floor(usedTime / (24 * 3600 * 1000));
	} else {
		//计算出小时数
		var leave1 = usedTime % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
		if (time_unit == "hours") {
			return Math.floor(leave1 / (3600 * 1000));
		} else {
			//计算相差分钟数
			var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数  
			return Math.floor(leave2 / (60 * 1000));
		}
	}
	return 0;
};

/* == 字符串拓展函数 == */
/// 验证开头字符串
/// 返回：验证成功返回true，失败返回false
String.prototype.startWith = function(startStr) {
	var d = this.length - startStr.length;
	if (d >= 0 && this.indexOf(startStr) == 0) {
		return true;
	}
	return false;
};

/// 验证结束字符串
/// 返回：验证成功返回true，失败返回false
String.prototype.endWith = function(endStr) {
	var d = this.length - endStr.length;
	if (d >= 0 && this.lastIndexOf(endStr) == d) {
		return true;
	}
	return false;
};

/// 是否含字符串
/// 返回：验证成功返回true，失败返回false
String.prototype.has = function(str) {
	return this.indexOf(str) != -1;
};

/// 替换字符串——所有
/// txt：被替换的文本
/// oldStr：替换的字符串
/// newStr：替换为字符串
/// 返回：替换后的字符串
String.prototype.replaceAll = function(oldStr, newStr) {
	var txt = this;
	if (!newStr) {
		newStr = ''
	}
	while (txt.indexOf(oldStr) != -1) {
		txt = txt.replace(oldStr, newStr);
	}
	return txt;
};

/// 替换字符串——所有
/// txt：被替换的文本
/// oldStr：替换的字符串
/// newStr：替换为字符串
/// 返回：替换后的字符串
String.prototype.toTime = function() {
	var str = this.replace(/-/g, "/").replace('T', ' ').replace('Z', '');
	return new Date(str);
};

/* == 字符串拓展函数 == */
/// 获取值
/// key：比较键名
/// value：比较值
/// name：获取指定属性值,为空则返回对象
/// 返回：返回对象或属性值
Array.prototype.get = function(key, value, name) {
	var val;
	var arr = this;
	for (var i = 0; i < arr.length; i++) {
		var o = arr[i];
		if (o[key] === value) {
			if (name) {
				val = o[name];
			} else {
				val = o;
			}
			break;
		}
	}
	return val;
};

/// 遍历添加对象
/// newArr：被添加的数组（对象型数组）
/// key：附加属性
/// value：附加属性值
/// 返回: 添加后的数组
Array.prototype.eachPush = function(arr, key, value) {
	if (arr) {
		if (key) {
			for (var i = 0; i < arr.length; i++) {
				var o = arr[i];
				o[key] = value;
				this.push(o);
			}
		} else {
			for (var i = 0; i < arr.length; i++) {
				this.push(arr[i]);
			}
		}
	}
	return this;
};

/// 数组转字符串
/// arr：对象数组
/// splitStr：分隔符
/// key：对象属性
/// 返回:字符串
Array.prototype.toStr = function(splitStr, key) {
	var arr = this;
	var str = "";
	if (key) {
		for (var i = 0; i < arr.length; i++) {
			var o = arr[i];
			if (o[key]) {
				str += splitStr + o[key];
			}
		}
	} else {
		for (var i = 0; i < arr.length; i++) {
			var o = arr[i];
			str += splitStr + o;
		}
	}
	return str.replace(splitStr, "");
};

/// 清空数组
/// 返回: 清空的数组
Array.prototype.clear = function() {
	this.splice(0, this.length);
	return this;
};

/// 删除数组成员
/// arr：被删除成员的数组
/// key：搜索成员键
/// value：搜索匹配值
/// all: 是否删除所有
/// 返回: 删除后的数组
Array.prototype.del = function(key, value, all) {
	for (var i = this.length - 1; i > -1; i--) {
		var o = this[i];
		if (o[key] == value) {
			this.splice(i, 1);
			if (!all) {
				break;
			}
		}
	}
	return this;
};

/// 删除数组成员
/// arr：被删除成员的数组
/// key：搜索成员键
/// value：搜索匹配值
/// all: 是否删除所有
/// 返回: 删除后的数组
Array.prototype.has = function(key, value) {
	var bl = false;
	for (var i = 0; i < this.length; i++) {
		var o = this[i];
		if (o[key] == value) {
			bl = true;
			break;
		}
	}
	return bl;
};

/// 修改数组成员
/// key：搜索成员键
/// value：搜索匹配值
/// all: 是否删除所有
/// 返回: 删除后的数组
Array.prototype.set = function(query, obj) {
	for (var i = 0; i < this.length; i++) {
		var o = this[i];
		for (var k in query) {
			if (as(o, query)) {
				this[i] = obj;
			};
		}
	}
	return this;
};

/// 对象列表排序
/// key：用来判断排序的对象属性
/// method：排序方式, asc升序, desc降序
Array.prototype.sortBy = function(method, key) {
	if (key) {
		var isCN = typeof(this[0][key]) == "string";
		var fun = newSort(key);
		if (method && method.toLowerCase() == "desc") {
			if (isCN) {
				this.sort(fun.desc_cn);
			} else {
				this.sort(fun.desc)
			}
		} else {
			if (isCN) {
				this.sort(fun.asc_cn);
			} else {
				this.sort(fun.desc)
			}
		}
	} else {
		if (method && method.toLowerCase() == "desc") {
			this.sort(descNum)
		} else {
			this.sort(ascNum)
		}
	}
	return this;
};

(function($) {
	/* == 对象 == */
	$.obj = {
		/// 遍历赋值到对象
		/// objA: 被赋值对象
		/// objB: 来源对象
		eachPush: function(objA, objB, bl) {
			if (!objA || !objB) {
				return objA;
			}
			if (bl) {
				for (var k in objB) {
					objA[k] = objB[k];
				}
			} else {
				for (var k in objA) {
					var value = objB[k];
					if (value != undefined) {
						var type = typeof(objA[k]);
						if (type == "number") {
							objA[k] = parseInt(value);
						} else if (value == "true") {
							objA[k] = true;
						} else if (value == "false") {
							objA[k] = false;
						} else {
							objA[k] = value;
						}
					}
				}
			}
		},
		/// 清除空值
		/// obj：对象
		clear: function(obj) {
			if (obj) {
				for (var k in obj) {
					var val = obj[k];
					if (val) {
						var name = typeof(val);
						switch (name) {
							case "string":
								obj[k] = "";
								break;
							case "number":
								obj[k] = 0;
								break;
							case "array":
								obj[k].clear();
								break;
							case "object":
								$.obj.clear(obj[k]);
								break;
							case "function":
								break;
							case "symbol":
								obj[k] = "";
								break;
						}
					}
				}
			}
			return obj;
		},
		/// json对象转字符串
		/// 返回url参数格式字符串
		toUrl: function(obj) {
			var url = "";
			for (var key in obj) {
				var value = obj[key];
				if (typeof(value) == 'number') {
					if (value > 0) {
						url += "&" + key + "=" + obj[key];
					}
				} else if (value) {
					url += "&" + key + "=" + encodeURI(obj[key]);
				}
			}
			return url.replace('&', '');
		},
		/// 判断对象是否相似
		/// obj: 用作判断的对象
		/// all: 是否判断所有成员
		/// 返回: 相似返回true,否则返回false
		as: as,
		/// 拷贝对象
		/// obj：被拷贝的对象（对象型）
		/// has：是否非空拷贝，如果含有数据才拷贝，不含数据不拷贝
		/// 返回：新对象
		copy: function(obj, has) {
			var newobj = {};
			if (has) {
				for (var attr in obj) {
					var o = obj[attr];
					if (o) {
						newobj[attr] = o;
					}
				}
			} else {
				for (var attr in obj) {
					newobj[attr] = obj[attr];
				}
			}
			return newobj;
		},
		toStr: function(obj) {
			return JSON.stringify(obj);
		}
	};

	/* == 数组 == */
	$.arr = {

	};

	/* == 时间 == */
	$.time = {

	};

	/* == 字符串 == */
	$.str = {

	};

	/* == 网络请求 == */
	$.http = {
		get: function(url, fun, headers) {
			var json;
			$.ajax({
				type: 'GET',
				url: url,
				async: fun == true,
				beforeSend: function(xhr) {
					if (headers) {
						for (var k in headers) {
							xhr.setRequestHeader(k, headers[k]);
						}
					}
				},
				success: function success(data, status) {
					if (fun) {
						fun(data, status);
					} else {
						json = {
							data,
							status
						};
					}
				},
				complete: function complete(XHR, TS) {
					XHR = null;
				}
			});
			return json;
		},
		post: function(url, param, fun, headers) {
			var json;
			$.ajax({
				type: 'POST',
				url: url,
				async: fun == true,
				data: JSON.stringify(param),
				contentType: "application/json;charset=utf-8;",
				dataType: "json",
				beforeSend: function(xhr) {
					if (headers) {
						for (var k in headers) {
							xhr.setRequestHeader(k, headers[k]);
						}
					}
				},
				success: function success(data, status) {
					if (fun) {
						fun(data, status);
					} else {
						json = {
							data,
							status
						};
					}
				},
				complete: function complete(XHR, TS) {
					XHR = null;
				}
			});
			return json;
		}
	};

	/* 缓存 */
	$.cookies = {
		/// 设置缓存
		/// key：缓存对象
		/// value：缓存值
		/// minutes: 缓存时长， 单位：分钟
		set: function(name, value, minutes) {
			var time = new Date();
			if (minutes) {
				time.setTime(time.getTime() + minutes * 60000);
				document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + time.toGMTString();
			} else {
				time.setTime(time.getTime() + 7 * 24 * 3600 * 60000);
				document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + time.toGMTString();
			}
		},

		/// 获取cookie
		/// name: 名称
		get: function(name) {
			var value = null;
			var str = document.cookie;
			var arr = str.split("; ");
			for (var i = 0; i < arr.length; i++) {
				var ar = arr[i].split("=");
				if (ar[0] == name) {
					value = decodeURIComponent(ar[1]);
					break;
				}
			}
			return value;
		},
		/// 删除cookie
		del: function(name) {
			this.set(name, "", -1)
		}
	};

	/// 设置缓存
	/// key：缓存对象
	/// value：缓存值
	/// minutes: 缓存时长，单位：分钟
	$.cookie = function(key, value, minutes) {
		if (value != undefined) {
			if (!minutes) {
				if (value == null) {
					minutes = 0;
				} else {
					minutes = 120;
				}
			}
			$.cookies.set(key, value, minutes);
		} else {
			return $.cookies.get(key);
		}
	};
})(jquery);
