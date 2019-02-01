import jquery from 'jquery';

(function ($) {
	/* md5加密（开始） */
	var hexcase = 0;
    /* hex output format. 0 - lowercase; 1 - uppercase  */
    var b64pad = "";
    /* base-64 pad character. "=" for strict RFC compliance */
    var chrsz = 8;
    /* bits per input character. 8 - ASCII; 16 - Unicode  */

    /*
    * Perform a simple self-test to see if the VM is working
    */
    function md5_vm_test() {
        return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
    }
    /*
    * Calculate the MD5 of an array of little-endian words, and a bit length
    */
    function core_md5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << len % 32;
        x[(len + 64 >>> 9 << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);
    }
    /*
    * These functions implement the four basic operations the algorithm uses.
    */
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn(b & c | ~b & d, a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn(b & d | c & ~d, a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    /*
    * Calculate the HMAC-MD5, of a key and some data
    */
    function core_hmac_md5(key, data) {
        var bkey = str2binl(key);
        if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
        var ipad = Array(16),
            opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
        return core_md5(opad.concat(hash), 512 + 128);
    }
    /*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xFFFF;
    }
    /*
    * Bitwise rotate a 32-bit number to the left.
    */
    function bit_rol(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
    }
    /*
    * Convert a string to an array of little-endian words
    * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
    */
    function str2binl(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz) {
            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
        }return bin;
    }
    /*
    * Convert an array of little-endian words to a string
    */
    function binl2str(bin) {
        var str = "";
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < bin.length * 32; i += chrsz) {
            str += String.fromCharCode(bin[i >> 5] >>> i % 32 & mask);
        }return str;
    }
    /*
    * Convert an array of little-endian words to a hex string.
    */
    function binl2hex(binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
        }
        return str;
    }
    /*
    * Convert an array of little-endian words to a base-64 string
    */
    function binl2b64(binarray) {
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i += 3) {
            var triplet = (binarray[i >> 2] >> 8 * (i % 4) & 0xFF) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 0xFF) << 8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 0xFF;
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;else str += tab.charAt(triplet >> 6 * (3 - j) & 0x3F);
            }
        }
        return str;
    }

    $.hex_md5 = function hex_md5(s) {
        return binl2hex(core_md5(str2binl(s), s.length * chrsz));
    };
    $.b64_md5 = function b64_md5(s) {
        return binl2b64(core_md5(str2binl(s), s.length * chrsz));
    };
    $.str_md5 = function str_md5(s) {
        return binl2str(core_md5(str2binl(s), s.length * chrsz));
    };
    $.hex_hmac_md5 = function hex_hmac_md5(key, data) {
        return binl2hex(core_hmac_md5(key, data));
    };
    $.b64_hmac_md5 = function b64_hmac_md5(key, data) {
        return binl2b64(core_hmac_md5(key, data));
    };
    $.str_hmac_md5 = function str_hmac_md5(key, data) {
        return binl2str(core_hmac_md5(key, data));
    };
	
	$.md5 = $.hex_md5;
	/* md5加密（结束） */
	
	/// 插件
	$.plugins = {
        md5: {}, //MD5加密插件
        clipboard: {}, //复制粘贴插件
        kindEditor: {}, //富文本编辑器插件
		echarts: {} //echarts图表插件
	};
	
	/// 缓存类
	$.cache = {
		/// 城市
		address: {
			cityID: 0 //城市ID
		},
		account: {
			token: "",	  	// 临时访问牌
			openID: "",		// 用户开放ID
			unionID: ""	// 应用公用用户ID
		},
		oauth: {
			timestamp: "",
			nonce: "",
			signature: ""
		}
	};

	/// 获取签证信息
	$.sign = function(){
		return $.cache.oauth;
	};
	
    /// 验证开头字符串
    /// 验证成功返回true，失败返回false
    String.prototype.startWith = function (startStr) {
        var d = this.length - startStr.length;
        if (d >= 0 && this.IndexOf(startStr) == 0) {
            return true;
        }
        return false;
    };

    /// 验证结束字符串
    /// 验证成功返回true，失败返回false
    String.prototype.endWith = function (endStr) {
        var d = this.length - endStr.length;
        if (d >= 0 && this.lastIndexOf(endStr) == d) {
            return true;
        }
        return false;
    };

	
    // ****************** / 模态窗（开始） / ******************/
    /// 获取模态窗
    /// tpl：html模板
    /// hasMask：是否带遮罩
    /// tag：遮罩显示项
    $.modal = function (tpl, hasMask, tag) {
        if (!tpl)
        {
            return;
        }
        if (!tag)
        {
            tag = "body";
        }
        $(".modal-alert").remove();
        if (hasMask) {
            $(".mask-alert").remove();
            $(tag).append('<div class="mask mask-alert" style="display:block;"></div>');
            $(".mask").unbind('click');
            $(".mask").on('click', function () {
                $(".modal-alert").remove();
                $(".mask-alert").remove();
            });
        }
        $(tag).append('<div class="modal modal-alert">' + tpl + '</div>');
    };

    /// 提示窗
    $.alert = function (content, title, funcYes, funcNo, btnName) {
        if (!content && !title)
        {
            return;
        }
		var section = "";
		if(content){
			section = '<section>' + content + '</section>';
		}
		
         //创建头部
        var header = "";
        if (title)
        {
            header = '<header>' + title + '</header>';
        }

        var btns = "";
        var btnA = "确定";
        var btnB = "取消";
        if (btnName) {
			var type = typeof btnName
			if(type == "string"){
				var arr = btnName.split('|');
				if (arr.length > 1) {
					btnA = arr[0];
					btnB = arr[1];
				}
				else if (arr.length > 0) {
					btnA = arr[0];
				}
			}
			else if(type == "array" || type == "object"){
				if(btnName.length > 0){
					if (btnName.length > 1) {
						btnA = btnName[0];
						btnB = btnName[1];
					}
					else if (btnName.length > 0) {
						btnA = btnName[0];
					}
				}
			}
        }
        var btns = '<button class="btn-yes">' + btnA + '</button>';
        if (funcNo) {
            btns = '<button class="btn-no">' + btnB + '</button>' + btns;
        }
        var footer = '<footer>' + btns + '</footer>';
        $.modal(header + section + footer, true);
		
        if (funcNo) {
            $(".btn-no").unbind('click');
            $(".btn-no").on('click', function () {
                funcNo();
                $(".modal-alert").remove();
                $(".mask-alert").remove();
            });
        }
        //创建尾部
        if (funcYes) {
            $(".btn-yes").unbind('click');
            $(".btn-yes").on('click', function () {
                funcYes();
                $(".modal-alert").remove();
                $(".mask-alert").remove();
            });
        } else {
            $(".btn-yes").unbind('click');
            $(".btn-yes").on('click', function () {
                $(".modal-alert").remove();
                $(".mask-alert").remove();
            });
        }
    };
    // ****************** / 模态窗（结束） / ******************/
	
	
    // ****************** / 数据处理（开始） / ******************/
	$.rand = {
		num: function() 
		{
			var num = ""; 
			for(var i = 0; i < 6; i++) 
			{ 
				num += Math.floor(Math.random()*10);
			}
			return num;
		}
	};
	
	 
	
	// 替换字符串——所有
	// txt：被替换的文本
	// oldStr：替换的字符串
	// newStr：替换为字符串
	$.replace = function (txt, oldStr, newStr) {
		while (txt.indexOf(oldStr) != -1){
			txt = txt.replace(oldStr, newStr);
		}
		return txt;
	}
	
    /// 转为ID
    /// arr：用作匹配的数组
    /// key：键名
    /// value：被转换的值
    /// name：名称字段
    $.toID = function (arr, key, value, name) {
        var id = 0;
        if (arr) {
            if (!name) {
                name = "name";
            }
            for (var i = 0; i < arr.length; i++) {
                var o = arr[i];
                if (o[name] === value) {
                    id = o[key];
                    break;
                }
            }
        }
        return id;
    };

    /// 转为名称
    /// arr：用作匹配的数组
    /// key：键名
    /// value：被转换的值
    /// field：名称字段
    $.toName = function (arr, key, value, field) {
        var name = "";
        if (arr) {
            if (!field) {
                field = "name";
            }
            for (var i = 0; i < arr.length; i++) {
                var o = arr[i];
                if (o[key] === value) {
                    name = o[field];
                    break;
                }
            }
        }
        return name;
    };

    /// 获取错误提示模型
    /// 返回错误提示模型
    $.errorAlert = function () {
        return {
            required: "这个字段是必需的.",
            remote: "请补充完整该项.",
            email: "请输入正确的电子邮件地址.",
            url: "请输入正确的URL.",
            date: "请输入正确的日期.",
            dateTime: "请输入正确的日期和时间.",
            time: "请输入正确的时间.",
            number: "请输入正确的数字.",
            tel: "请输入正确的电话号码",
            username: "请输入仅由数字和英文字母、下横线组成的字符",
            password: "请输入仅由数字和英文字母、可见符号组成的字符",
            digits: "只能输入整数.",
            creditcard: "请输入正确的信用卡号码.",
            equalTo: "请再次输入相同的值.",
            accept: "请输入正确的扩展名.",
            maxLength: "请输入不超过{0}字符.",
            minLength: "请输入至少{0}字符.",
            rangeLength: "请输入长度在{0}-{1}之间的字符.",
            range: "请输入在{0}-{1}之间的数值.",
            max: "请输入小于或等于{0}的数值.",
            min: "请输入大于或等于{0}的数值.",
			telLength: "{0}号码必须{1}位数字",
			zh: "请输入中文字符",
			address: "需仅由数字和英文字母、中文、横线组成的字符，且必须中文字符开头"
        };
    };

    /// 获取错误类型
    /// value：值
    /// r：判断模型
    /// 返回文本型。错误类型
    $.checkErrorType = function (value, r) {
        var errorMsg = $.errorAlert();
        var msg = "";
        if (!value) {
            if (r.required && value !== 0) {
                return errorMsg["required"];
            }
			else{
				return "";
			}
        }
        if (r.type) {
            switch (r.type) {
                case "number":
                    if (isNaN(value) && !/^[0-9]+(\.)?[0-9]+$/.test(value)) {
                        msg = errorMsg["number"];
                    } else {
                        var n = 0;
						if(isNaN(value)){
							 n = Number(value);
						}else{
							n = value;
						}
                        if (r.range) {
                            if (r.range.length === 2) {
                                if (n <= r.range[0] || n >= r.range[1]) {
                                    msg = errorMsg["range"].replace("{0}", r.min).replace("{1}", r.max);
                                }
                            }
                        } else {
                            if (r.max) {
                                if (n >= r.max) {
                                    msg = errorMsg["max"].replace("{0}", r.max);
                                }
                            }
                            if (msg == "" && r.minLength) {
                                if (n <= r.min) {
                                    msg = errorMsg["min"].replace("{0}", r.min);
                                }
                            }
                        }
                    }
                    break;
                case "digits":
                    if (!/^[0-9]+$/.test(value)) {
                        msg = errorMsg["digits"];
                    }
                    break;
                case "tel":
					var len = value.length;
					 if (!/^[0-9]+$/.test(value)) {
                        msg = errorMsg["tel"];
                    }
					if(value.indexOf("1") == 0){
						if(len != 11){
							msg = errorMsg["telLength"].replace("{0}", "手机").replace("{1}", "11");
						}
					}
					else if(value.indexOf("400") == 0){
						if(len != 10){
							msg = errorMsg["telLength"].replace("{0}", "400").replace("{1}", "10");
						}
					}
					else{
						if(len != 8){
							msg = errorMsg["telLength"].replace("{0}", "固话").replace("{1}", "8");
						}
					}
                    break;
                case "username":
                    if (!/^[A-Za-z0-9_]+$/.test(value)) {
                        msg = errorMsg["username"];
                    }
                    break;
                case "password":
                    if (!/^\S+$/.test(value)) {
                        msg = errorMsg["password"];
                    }
                    break;
                case "email":
                    if (!/^[A-Za-z0-9_\-]+@[A-Za-z0-9]+\.[A-Za-z]+$/.test(value)) {
                        msg = errorMsg["email"];
                    }
                    break;
                case "date":
                    if (!/^(\d{2}|\d{4})(?:\-)?([0]{1}\d{1}|[1]{1}[0-2]{1})(?:\-)?([0-2]{1}\d{1}|[3]{1}[0-1]{1})+$/.test(value)) {
                        msg = errorMsg["date"];
                    }
                    break;
                case "dateTime":
                    if (!/^(\d{2}|\d{4})(?:\-)?([0]{1}\d{1}|[1]{1}[0-2]{1})(?:\-)?([0-2]{1}\d{1}|[3]{1}[0-1]{1})(?:\s)?([0-1]{1}\d{1}|[2]{1}[0-3]{1})(?::)?([0-5]{1}\d{1})(?::)?([0-5]{1}\d{1})$/.test(value)) {
                        msg = errorMsg["dateTime"];
                    }
                    break;
                case "time":
                    if (!/^([0-1]{1}\d{1}|[2]{1}[0-3]{1})(?::)?([0-5]{1}\d{1})(?::)?([0-5]{1}\d{1})$/.test(value)) {
                        msg = errorMsg["time"];
                    }
                    break;
                case "creditcard":
                    if (!/^((?:4\d{3})|(?:5[1-5]\d{2})|(?:6011)|(?:3[68]\d{2})|(?:30[012345]\d))[ -]?(\d{4})[ -]?(\d{4})[ -]?(\d{4}|3[4,7]\d{13})$/.test(value)) {
                        msg = errorMsg["creditcard"];
                    }
                    break;
                case "url":
                    if (!/^((https|http|ftp|rtsp|mms|\/)?:\/\/)[^\s]+$/.test(value)) {
                        msg = errorMsg["url"];
                    }
                    break;
                case "zh":
                    if (!/^[\u4e00-\u9fa5]+$/.test(value)) {
                        msg = errorMsg["zh"];
                    }
                    break;
                case "en":
                    if (!/^[A-Za-z]+$/.test(value)) {
                        msg = errorMsg["en"];
                    }
                    break;
				case "address":
					if (!/^[A-Za-z0-9\-\u4e00-\u9fa5 —]+$/.test(value) || !/^[\u4e00-\u9fa5]+/.test(value)) {
                        msg = errorMsg["address"];
                    }
                    break;
                default:
                    msg = "";
                    break;
            }
        }
        if (msg == "") {
            var l = value.length;
            if (r.rangeLength) {
                if (r.rangeLength.length === 2) {
                    var min = r.rangeLength[0];
                    var max = r.rangeLength[1];
                    if (l < min || l > max) {
                        msg = errorMsg["rangeLength"].replace("{0}", min).replace("{0}", max);
                    }
                }
            } else {
                if (r.maxLength) {
                    if (l > r.maxLength) {
                        msg = errorMsg["maxLength"].replace("{0}", r.maxLength);
                    }
                }
                if (msg == "" && r.minLength) {
                    if (l < r.minLength) {
                        msg = errorMsg["minLength"].replace("{0}", r.minLength);
                    }
                }
            }
        }
        return msg;
    };

    /// 测试验证模型
    $.testCheckModel = function () {
        return {
            test: {
                required: true,
                name: "号码",
                type: "",
                minLength: 0,
                maxLength: 0,
                min: 0,
                max: 0,
                range: [0, 1000]
            }
        };
    };

    /// 检查参数是否合法
    /// obj：被检查的参数模型
    /// checkModel：验证模型
    /// otherMsg：附加参数
    /// 验证成功返回空，失败返回错误信息
    $.checkParam = function (obj, checkModel, otherMsg) {
        if (!otherMsg){
            otherMsg = "填写有误,";
        }
        var msg = "";
        var check = $.checkErrorType;
        for (var k in checkModel) {
            var vm = checkModel[k];
            if (vm) {
				//console.log(k);
                msg = check(obj[k], vm);
                if (msg) {
                    msg = vm.name + otherMsg + msg;
                    break;
                }
            }
        }
        return msg;
    };

    /// 判断对象是否为空
    /// obj：判断对象（对象型）
    /// 返回布尔型。为空返回true，非空返回false
    $.isNull = function (obj) {
        return obj === null || typeof(obj) === 'undefined' || obj === '' ? true : false;
    };

    /// 取对象数组最大值
    /// arr：数组
    /// key：键
    /// 返回最大值
    $.getMax = function (arr, key) {
        if (!arr) {
            return 0;
        }
        if (arr.length == 0) {
            return 0;
        }
        var n = arr[0][key];
        for (var i = 0; i < arr.length; i++) {
            var o = arr[i];
            if (n < o[key]) {
                n = o[key];
            }
        }
        return n;
    };

    /// 取对象数组最小值
    /// arr：数组
    /// key：键
    /// 返回对象最小值
    $.getMin = function (arr, key) {
        if (!arr) {
            return 0;
        }
        if (arr.length == 0) {
            return 0;
        }
        var n = arr[0][key];
        for (var i = 0; i < arr.length; i++) {
            var o = arr[i];
            if (n > o[key]) {
                n = o[key];
            }
        }
        return n;
    };

    /// 遍历添加对象
    /// newArr：被添加的数组（对象型数组）
    /// oldArr：旧数组（对象型数组）
    /// key：附加属性
    /// value：附加属性值
    $.eachPush = function (newArr, oldArr, key, value) {
        if (newArr && oldArr) {
            if (key) {
                for (var i = 0; i < oldArr.length; i++) {
                    var o = oldArr[i];
                    o[key] = value;
                    newArr.push(o);
                }
            }
            else {
                for (var i = 0; i < oldArr.length; i++) {
                    newArr.push(oldArr[i]);
                }
            }
        }
    };

    /// 数组转字符串
    /// arr：对象数组
    /// splitStr：分隔符
    /// key：对象属性
    /// 返回字符串
    $.arrToStr = function (arr, splitStr, key) {
        var str = "";
        if (key) {
            for (var i = 0; i < arr.length; i++) {
                var o = arr[i];
                if (o[key]) {
                    str += splitStr + o[key];
                }
            }
        }
        else {
            for (var o in arr) {
                str += splitStr + o;
            }
        }
        return str.replace(splitStr, "");
    };

    /// 遍历赋值到对象
    /// objA: 被赋值对象
    /// objB: 来源对象
    $.eachObj = function (objA, objB, bl) {
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
                    }
                    else if(value == "true"){
						objA[k] = true;
					}
					else if(value == "false"){
						objA[k] = false;
					}
					else {
                        objA[k] = value;
                    }
                }
            }
        }
    };

    /// 清除空值
    /// obj：对象
    $.clearNull = function (obj) {
        var oj = new Object();
        if (obj) {
            for (var k in obj) {
                if (obj[k]) {
                    oj[k] = obj[k];
                }
            }
        }
        return oj;
    };

    /// 重置对象
    /// obj：对象
    $.resetObj = function (obj) {
        for (var key in obj) {
            var type = typeof(obj[key]);
            switch (type) {
                case "string":
                    obj[key] = "";
                    break;
                case "number":
                    obj[key] = 0;
                    break;
                case "boolean":
                    obj[key] = false;
                    break;
                case "function":
                    obj[key] = function () { };
                    break;
                default:
                    obj[key] = null;
                    break;
            }
        }
    };

    /// 清空数组
    /// arr：被清空的数组（对象型数组）
    $.clearArr = function (arr) {
        if (arr) {
            arr.splice(0, arr.length);
        }
    };

    /// 删除数组成员
    /// arr：被删除成员的数组
    /// key：搜索成员键
    /// value：搜索匹配值
    $.delArr = function (arr, key, value) {
        var idx = 0;
        for (var i in arr) {
            var o = arr[i];
            if (o[key] == value) {
                idx = i;
                arr.splice(i, 1);
                break;
            }
        }
        return idx;
    };

    /// 删除数组其他成员
    /// arr：被删除成员的数据
    /// key：搜索成员键
    /// value：搜索匹配值
    $.delOtherArr = function (arr, key, value) {
        var obj;
        for (var i in arr) {
            var o = arr[i];
            if (o[key] == value) {
                obj = o;
                break;
            }
        }
        if (obj) {
            arr.splice(0, arr.length);
            arr.push(obj);
        }
    }

    /// 修改数组成员
    /// arr：被修改成员的数组
    /// key：数据对象名
    /// obj：新的成员
    $.addOrSetArr = function (arr, key, obj) {
        var noVal = true;
        for (var i in arr) {
            var o = arr[i];
            if (o[key] == obj[key]) {
                arr[i] = obj;
                noVal = false;
                break;
            }
        }
        if(noVal){
            arr.push(arr);
        }
    };

    /// 修改数组成员
    /// arr：被修改成员的数组
    /// key：数据对象名
    /// obj：新的成员
    /// bl：是否添加新属性
    $.setArr = function (arr, key, obj, bl) {
        for (var i in arr) {
            var o = arr[i];
            if (o[key] == obj[key]) {
                if (bl) {
                    arr[i] = obj;
                }
                else {
                    $.eachObj(arr[i], obj);
                }
                break;
            }
        }
    };

    /// 获取数组成员
    /// arr：被修改成员的数组
    /// key：数据对象名
    /// obj：新的成员
    $.getArr = function (arr, key, value) {
        var obj = {};
        for (var i in arr) {
            var o = arr[i];
            if (o[key] == value) {
                obj = o;
                break;
            }
        }
        return obj;
    };

    /// 判断数组成员是否存在
    /// arr：被删除成员的数组
    /// key：数据对象名
    /// value： 对象值
    $.hasArr = function (arr, key, value) {
        var bl = false;
        for (var i in arr) {
            var o = arr[i];
            if (o[key] == value) {
                bl = true;
                break;
            }
        }
        return bl;
    };

    function NumDescSort(a, b) {
        return b - a;
    }

    function NumAscSort(a, b) {
        return a - b;
    }

    /// 数组排序
    /// arr：被排序的数组
    /// method：排序方式
    $.sortArr = function (arr, method) {
        if (method == "desc") {
            arr.sort(NumDescSort);
        }
        else {
            arr.sort(NumAscSort);
        }
    };

    /// 排序字段
    $.sortField = "";

    /// 升序
    /// obj1：对象1
    /// obj2：对象2
    /// 返回顺序值
    function ascSort(obj1, obj2) {
        var key = $.sortField;
        var val1 = obj1[key];
        var val2 = obj2[key];
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
    }

    /// 倒序
    /// obj1：对象1
    /// obj2：对象2
    /// 返回顺序值
    function descSort(obj1, obj2) {
        var key = $.sortField;
        var val1 = obj1[key];
        var val2 = obj2[key];
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
    }
    
    /// 对象列表排序
    /// list：被排序的对象列表
    /// method：排序方式
    /// key：用来判断排序的对象属性
    $.sortList = function (list, method, key) {
        if (!key) {
            return;
        }
        $.sortField = key;
        if (method.toLowerCase() == "asc") {
            list.sort(ascSort)
        }
        else
        {
            list.sort(descSort)
        }
    };

    /// 拷贝对象
    /// obj：被拷贝的对象（对象型）
    /// has：是否非空拷贝，如果含有数据才拷贝，不含数据不拷贝
    /// 返回对象型
    $.copyTo = function (obj, has) {
        var newobj = {};
        if (has) {
            for (var attr in obj) {
                var o = obj[attr];
                if (o) {
                    newobj[attr] = o;
                }
            }
        }
        else {
            for (var attr in obj) {
                newobj[attr] = obj[attr];
            }
        }
        return newobj;
    };

    ///	批量替换字符串
    /// str：被替换的字符串（文本型）
    /// zf： 用作匹配的字符串（文本型）
    /// zfNew： 用作替换的字符串（文本型）
    /// 返回替换后的字符串
    $.eachReplace = function (str, zf, zfNew) {
        while (str.indexOf(zf) != -1) {
            str = str.replace(zf, zfNew);
        }
    };

    /// json对象转字符串
    /// 返回url参数格式字符串
    $.toUrl = function (json) {
        var url = "";
        for (var key in json) {
            var value = json[key];
            if (typeof(value) == 'number') {
                if (value > 0) {
                    url += "&" + key + "=" + json[key];
                }
            } else if (value) {
                url += "&" + key + "=" + encodeURI(json[key]);
            }
        }
        return url.replace('&', '');
    };
	
	/// url编码解码类
	$.url = {
		encode: encodeURI,
		decode: decodeURI
	};
	
    /// 连接地址和参数
    /// url：请求地址
    /// param：参数
    $.linkUrl = function (url, param) {
        if (param) {
            if (url.indexOf("?") != -1) {
                url = url + "&" + param;
                url = url.replace('?&', '');
            }
            else {
                url = url + "?" + param;
            }
        }
        return url
    };

    //遍历添加属性
    $.eachAdd = function (list, name, value) {
        for (var i = 0; i < list.length; i++) {
            list[i][name] = value;
        }
    };

    /// 拷贝数据
    /// obj：拷贝的对象
    /// bl：是否格式化。格式化后的数据会以 键：值（换行）形式显示
    $.copyData = function (obj, bl) {
        var text = "";
        if (bl) {
            if (typeof(obj) == "object") {
                for (var k in obj) {
                    var name = k;
                    var value = obj[k];
                    text += "\n" + name + "：" + value;
                }
                text = text.replace("\n", "");
            }
            else {
                text = obj;
            }
        }
        else {
            if (typeof(obj) == "object") {
                text = JSON.stringify(obj);
            }
            else {
                text = obj;
            }
        }
        $.plugins.clipboard.copy(text); // 复制Ctrl + C
    };

    /// 富文本编辑器
    /// tag：复制的对象
    /// css：样式表路径
    $.editor = function (tag, css) {
        if (!tag) {
            tag = '#editor';
        }
        if (!css) {
            css = '/css/mm.css'
        }
        $.plugins.kindEditor.ready(function (K) {
            var editor = K.create(tag, {
                themeType: 'default', //simple简洁风格，//默认风格default
                cssPath: css,
                uploadJson: '/File/Upload',
                fileManagerJson: '/File/Manager',
                allowFileManager: true,
                afterCreate: function () {
                    var self = this;
                    K.ctrl(document, 13, function () {
                        self.sync();
                        K('form[name=example]')[0].submit();
                    });
                    K.ctrl(self.edit.doc, 13, function () {
                        self.sync();
                        K('form[name=example]')[0].submit();
                    });
                }
            });
            prettyPrint();
            return editor;
        });
        return null;
    };
    // ****************** / 数据处理（结束） / ******************


    // ****************** / 时间处理（开始） / ******************
    /// 时间格式化
    Date.prototype.format = function (fmt) {
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
    $.timestamp = function () {
        var timestamp = Date.parse(new Date());
        return timestamp / 1000;
    };

    /// 获取本月
    $.getMonth = function () {
        return new Date().format("yyyy-MM");
    };

    /// 获取当前日期
    $.getDate = function () {
        return new Date().format("yyyy-MM-dd");
    };

    /// 获取当前日期时间
    $.getDateTime = function () {
        return new Date().format("yyyy-MM-dd hh:mm:ss");
    };

    /// 获取当前时间
    $.getTime = function () {
        return new Date().format("hh:mm:ss");
    };

    /// 计算时间差——时间间隔
    /// startTime：开始时间
    /// endTime：结束时间
    /// time_unit：时间单位（day天、hours小时、minutes分钟）
    $.interval = function (startTime, endTime, time_unit) {
        var stime = Date.parse(new Date(startTime));
        var etime = Date.parse(new Date(endTime));
        var usedTime = etime - stime;  //两个时间戳相差的毫秒数
        if (time_unit == "day") {
            return Math.floor(usedTime / (24 * 3600 * 1000));
        }
        else {
            //计算出小时数
            var leave1 = usedTime % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
            if (time_unit == "hours") {
                return Math.floor(leave1 / (3600 * 1000));
            }
            else {
                //计算相差分钟数
                var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数  
                return Math.floor(leave2 / (60 * 1000));
            }
        }
        return 0;
    };

    /// 是否今天
    /// 是返回true,否则返回false
    $.isToday = function (timeStr) {
       var bl = false;
        var timeStr = timeStr.replace("T", " ").replace("Z", "");
        var upTime = timeStr.substring(0, timeStr.indexOf(" "));
        if (upTime == $.getDate()) {
            bl = true;
        }
        return bl;
    };

    // 转为日期
    /// timeStr：时间字符串
    $.toDate = function (timeStr) {
        var de = timeStr.replace("T", " ");
        var index = de.indexOf(" ");
        if (index != -1) {
            de = de.substring(0, index);
        }
        return de;
    };
    // ****************** / 时间处理（结束） / ******************


    // ****************** / 设备处理（开始） / ******************
    /// 获取IP地址信息
    /// func：异步获取时调用函数
    $.getIP = function (func) {
        var ret = {};
        if (func) {
            $.postAsync('/api/service?cmd=ip', null, function(json){
				if(json.data)
				{
					func(json.data);
				}
				else{
					func({});
				}
			});
        }
        else
        {
            var jobj = $.postApi('/api/service?cmd=ip');
			if(jobj.data)
			{
				ret = jobj.data;
			}
        }
        return ret;
    };

    /// 获取IP地址
    /// func：要获取的IP地址
    $.getIP_address = function () {
        var json = $.getIP();
        return json.ip;
    };

    /// 获取当前所在城市
    /// func：要获取的IP地址
    $.getCity = function (func) {
		var ret = {};
        if (func) {
            $.postAsync('/api/service?cmd=city', null, function(json){
				if(json.data)
				{
					func(json.data.city);
				}
				else{
					func({});
				}
			});
        }
        else
        {
            var jobj = $.postApi('/api/service?cmd=city');
			if(jobj.data)
			{
				ret = jobj.data.city;
			}
        }
		return ret;
    };

    /// 获取浏览器类型
    $.getClientType = function () {
        var ct = "pc";
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            ct = "wechat";
        } else if (ua.match(/ucweb/i) == "ucweb") {
            ct = "uc";
        } else if (ua.match(/iphone os/i) == "iphone os") {
            ct = "iphone";
        } else if (ua.match(/android/i) == "android") {
            ct = "android";
        } else if (ua.match(/ipad/i) == "ipad") {
            ct = "ipad";
        } else if (ua.match(/windows mobile/i) == "windows mobile") {
            ct = "winphone";
        } else if (ua.match(/windows ce/i) == "windows ce") {
            ct = "winpad";
        } else if (ua.match(/rv:1.2.3.4/i) == "rv:1.2.3.4") {
            ct = "rv";
        } else if (ua.match(/midp/i) == "midp") {
            ct = "midp";
        }
        return ct;
    };

    /// 获取客户端类型
    /// 返回文本型。phone、pc、pad
    $.getClient = function () {
        var ret = "phone";
        var type = $.getClientType();
        if (type == "pc") {
            ret = "pc";
        } else if (type == "winpad" || type == "ipad") {
            ret = "pad";
        }
        return ret;
    };

    /// 判断用户是手机平板访问，还是电脑访问
    /// 返回布尔型。是电脑返回true，否则返回false
    $.isPc = function () {
        if ($.getClientType() == 'pc') {
            return true;
        } else {
            return false;
        }
    };

    ///获取用户标识码
    $.getUuid = function () {
        var uuid = $.cookie('uuid');
        if (!uuid) {
            var appVersion = navigator.appVersion; //浏览器的版本号
            var mimmsg = navigator.mimmsgs; // 浏览器支持的所有MIME类型的数组
            var platform = navigator.platform; // 浏览器正在运行的操作系统平台，包括Win16(windows3.x)  
            $.getIP(function(ip){
				if(ip){
					uuid = $.md5(appVersion + mimmsg + platform + ip);
					var ms = 60 * 24 * 10; //存储时长为10天
					$.cookie('uuid', uuid, ms);
				}
			});
        }
        return uuid;
    };
    // ****************** / 设备处理（结束） / ******************


    // ****************** / http请求（开始） / ******************
    // 进行URL编码
    // text：要进行Url编码的
    $.enUrl = function (text) {
        return encodeURI(text);
    };

    // 进行URL编码
    // text：要进行Url编码的
    $.deUrl = function (url) {
        return decodeURI(text);
    };

    /// 异步执行函数
    /// fun：函数
    $.asyncFun = function (fun) {
        setTimeout(fun, 100);
    };

    /// get请求获取数据
    /// url：提交网址（文本型）
    /// identity：是否附加身份（用于oauth身份验证）
    /// 返回json对象
    $.getApi = function (url, identity) {
        var json = {};
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            beforeSend: function (xhr) {
                if (identity) {
                    var o = $.sign();
                    xhr.setRequestHeader("timestamp", o.timestamp);
                    xhr.setRequestHeader("nonce", o.nonce);
                    xhr.setRequestHeader("signature", o.signature);
                }
            },
            success: function success(data, status) {
                if (status == 'success' && data) {
                    json = data;
                }
            },
            complete: function complete(XHR, TS) {
                XHR = null;
            }
        });
        return json;
    };

    /// get请求获取数据——异步
    /// url：提交网址（文本型）
    /// fun：回调方法
    /// identity：是否附加身份（用于oauth身份验证）
    $.getAsync = function (url, fun, identity) {
        if (fun) {
            $.ajax({
                type: 'GET',
                url: url,
                beforeSend: function (xhr) {
                    if (identity) {
                        var o = $.sign();
                        xhr.setRequestHeader("timestamp", o.timestamp);
                        xhr.setRequestHeader("nonce", o.nonce);
                        xhr.setRequestHeader("signature", o.signature);
                    }
                },
                success: function success(data, status) {
                    if (fun) {
                        fun(data);
                    }
                },
				error: function (err) {
					if (fun) {
                        fun({});
                    }
				},
                complete: function complete(XHR, TS) {
                    XHR = null;
                }
            });
        }
    };

    /// post请求获取数据
    /// url：提交网址（文本型）
    /// param：传递参数（Json对象）
    /// identity：是否附加身份（用于oauth身份验证）
    /// 返回json对象
    $.postApi = function (url, param, identity) {
        var json = {};
        $.ajax({
            type: 'POST',
            url: url,
            data: JSON.stringify(param),
            contentType: "application/json;charset=utf-8;",
            dataType: "json",
            async: false,
            beforeSend: function (xhr) {
                if (identity) {
                    var o = $.sign();
                    xhr.setRequestHeader("timestamp", o.timestamp);
                    xhr.setRequestHeader("nonce", o.nonce);
                    xhr.setRequestHeader("signature", o.signature);
                }
            },
            success: function success(data, status) {
                if (status = "success" && data) {
                    json = data;
                }
            },
            complete: function complete(XHR, TS) {
                XHR = null;
            }
        });
        return json;
    };

    /// post请求获取数据——异步
    /// url：提交网址（文本型）
    /// param：传递参数（Json对象）
    /// identity：是否附加身份（用于oauth身份验证）
    /// fun：回调方法
    $.postAsync = function (url, param, fun, identity) {
        $.ajax({
            type: 'POST',
            url: url,
            data: JSON.stringify(param),
            contentType: "application/json;charset=utf-8;",
            dataType: "json",
            beforeSend: function (xhr) {
                if (identity) {
                    var o = $.sign();
                    xhr.setRequestHeader("timestamp", o.timestamp);
                    xhr.setRequestHeader("nonce", o.nonce);
                    xhr.setRequestHeader("signature", o.signature);
                }
            },
            success: function success(data, status) {
                if (fun) {
                    fun(data);
                }
            },
			error: function (err) {
				if (fun) {
                    fun({});
                }
			},
            complete: function complete(XHR, TS) {
                XHR = null;
            }
        });
    };

    /// post请求获取列表
    /// url：提交网址（文本型）
    /// param：传递参数（Json对象）
    /// identity：是否附加身份（用于oauth身份验证）
    /// 返回json列表
    $.postList = function (url, param, identity) {
        var list = [];
        var json = $.postApi(url, param, identity);
        if (json) {
            if (data.list) {
                list = data.list;
            }
        }
        return list;
    };

    /// post请求获取列表 —— 异步
    /// url：提交网址（文本型）
    /// param：传递参数（Json对象）
    /// identity：是否附加身份（用于oauth身份验证）
    /// fun：回调方法
    $.postListAsync = function (url, param, fun, identity) {
        $.postAsync(url, param, function (json) {
            if (json) {
                if (data.list) {
                    list = data.list;
                    fun(list);
                }
            }
        }, identity);
    };

    /// http请求
    /// url：提交网址（文本型）
    /// param：传递参数（文本型）
    /// type：请求方式（文本型），GET 或 POST
    /// dataType：传递数据的类型（文本型） json、text
    /// 返回对象型
    $.http = function (url, param, type, dataType) {
        if (!type) {
            type == 'GET';
        }
        var ret = null;
        $.ajax({
            type: type,
            url: url,
            data: param,
            dataType: dataType,
            async: false,
            success: function success(data, status) {
                ret = data;
            },
            complete: function complete(XHR, TS) {
                XHR = null;
            }
        });
        return ret;
    };

    /// 获取http请求的Referrer
    $.getReferrer = function () {
        var referrer = document.referrer;
        if (!referrer) {
            try {
                if (window.opener) {
                    // ie下如果跨域则抛出权限异常
                    // safari和chrome下window.opener.location没有任何属性 
                    referrer = window.opener.location.href;
                }
            }
            catch (e) { }
        }
        return referrer;
    };

    /// 获取URL中的路由路径
    /// url：链接
    /// 返回链接
    $.getUrlPath = function (url) {
        var arr = url.split('/');
        arr.splice(arr.length - 1, 1);
        var path = "";
        for (var o in arr) {
            path += "/" + o;
        }
        return path;
    };

    /// 获取URL中的域名
    /// url：链接
    /// 返回链接
    $.getDomainName = function (url) {
        var domainName = "";
        if (url) {
            var arr = url.split('/');
            if (arr.length > 2) {
                domainName = arr[2];
            }
        }
        return domainName;
    };

    /// 获取URL的参数
    $.getQuery = function (url) {
        var param = {};
        var arr = url.match(/[?].*/);
        if (arr) {
            if (arr.length > 0) {
                var query = arr[0].replace('?', '');
                var qs = query.split('&');
                for (var i = 0; i < qs.length; i++) {
                    var o = qs[i];
                    var ar = o.split('=');
                    if (ar.length > 1) {
                        var key = ar[0];
                        param[key] = ar[1];
                    }
                }
            }
        }
        return param;
    };

    /// 获取url中的参数
    /// name：参数名
    $.getQueryOne = function (name) {
        if (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); // 匹配目标参数
            var result = location.search.substr(1).match(reg); // 对querystring匹配目标参数
            if (result != null) {
                return decodeURIComponent(result[2]);
            } else {
                return null;
            }
        }
        else {
            return $.getQuery(location.href);
        }
    };

    

    /// 上传文件
    /// file：文件信息
    /// name：文件名
    /// func：函数
    /// fileType：文件类型image、file、flash、media
    $.upLoad = function (file, name, func, fileType) {
        var formData = new FormData();
        formData.append("name", name);
        formData.append("file", file);
        $.ajax({
            type: 'POST',
            url: "/File/Upload?dir=" + fileType,
            data: formData,
            processData: false,
            contentType: false,
            async: false,
            success: function (json, status) {
                if (!$.isNull(json) && func) {
					json["file"] = file.name;
                    func(json);
                }
            },
            complete: function (XHR, TS) {
                XHR = null
            }
        });
    };

    /// 上传图片
    /// tag：用来上传对象
    /// func：函数文件
    $.upLoadImg = function (tag, func) {
		$.upLoadFile(tag, func, "image");
    };

	
    /// 上传图片
    /// tag：用来上传对象
    /// func：函数文件
    $.upLoadFile = function (tag, func, type) {
		if(!type){
			type = "file";
		}
        if ($(tag).length > 0) {
            $(tag).unbind("change");
            $(tag).change(function (e) {
                var file = this.files[0];
                if (file){
                    var fileName = file.name;
                    if (fileName) {
                        var json = $.upLoad(file, fileName, func, type);
                        if (json) {
                            if (func) {
                                func(json);
                            }
                        }
                    }
                }
            });
        }
    };
	
    /// 导出数据
    /// url：提交地址
    /// param：请求的参数
    /// func：回调函数
    $.exportData = function (url, param, func) {
        $.postAsync(url, param, function (json) {
            if (func) {
                func(json);
            }
            else {
                if (json.data != null) {
                    var file = json.data.file;
                    if (file != null) {
                        window.open(file);
                        return;
                    }
                }
                else {
                    if ($.alert) {
                        $.alert(json.msg);
                    }
                    else {
                        alert(json.msg);
                    }
                }
            }
        });
    };
	
	
	// 提示框
	$.prompt = function(contet, title, func){
		
	};

$.cookies = {
		/// 设置缓存
		/// key：缓存对象
		/// value：缓存值
		/// minutes: 缓存时长， 单位：分钟
        set: function (name, value, minutes) {
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
		get: function (name){
		   var value = null;
		   var str = document.cookie;
		   var arr = str.split("; ");
		   for(var i = 0; i < arr.length; i++){
			  var ar = arr[i].split("=");
			  if(ar[0] == name){
				  value = decodeURIComponent(ar[1]);
				  break;
			  }
		   }
		   return value;
		},
		/// 删除cookie
        del: function (name) {
            this.set(name, "", -1)
        }
    };
	
	/// 设置缓存
	/// key：缓存对象
	/// value：缓存值
	/// minutes: 缓存时长，单位：分钟
	$.cookie = function(key, value, minutes){
		if(value != undefined)
		{
			if(!minutes)
			{
				if(value == null){
					minutes = 0;
				}
				else{
					minutes = 120;
				}
			}
			$.cookies.set(key, value, minutes);
		}
		else {
			return $.cookies.get(key);
		}
    };
	
	/* seo类 */
	$.seo = {
		domain:{
			"localhost": "",
			"baidu.com": "百度",
			"sm.cn": "神马",
			"360.cn": "360",
			"sogou.com": "搜狗"
		},
		filter: function(url)
		{
			var source = "";
			var has = false;
			for(var k in this.domain){
				if(url.indexOf(k) != -1){
					source = this.domain[k];
					has = true;
					break;
				}
			}
			if(!has)
			{
				source = "其他";
			}
			return source;
		},
		/// 发送访问来源数据
		/// 用于判断推广来源、关键词和平台
		send: function (data) {
			var uuid = $.getUuid();
			var param = { referrer: $.getReferrer(), client: $.getClient(), data: data, uuid: uuid };
			$.postAsync('/api/seo', param);
		},
		/// SEO信息
		info: function () {
			var fo = {};
			var infoStr = $.cookie('seo');
			if(infoStr){
				fo = JSON.parse(infoStr);
			}
			else{
				var referrer = $.getReferrer();
				var host = $.getDomainName(referrer);
				var source = this.filter(host);
				if(source != "")
				{
					var keyword = "";
					var query = $.getQuery(referrer);
					if (query.wd) {
						keyword = decodeURIComponent(query.wd);
					}
					fo = {
						platform: $.getClientType(),   // 平台。phone、pc、pad、wechat
						keyword: keyword,   // 关键词。例如：手机号码
						source: source,     // 访问来源。如：baidu、360、sougou。为空表示直接通过链接访问
					};
					$.cookie('seo', JSON.stringify(fo), 10);
				}
			}
			return fo;
		}
	};

    // ****************** / http请求（结束） / ******************

	
    // ****************** / 通讯（开始） / ******************
    /* 手机API */
    /// 拨打电话
    /// phone：拨打电话
    $.tel = function (phone) {
        if (phone) {
            window.location.href = "tel://" + phone;
        }
    };

    /// 发送短信
    /// phone：拨打电话
    /// message：短信正文
    $.sendMsg = function (phone, message) {
        if (phone && message) {
            window.location.href = "sms://" + phone + "?body=" + escape(message);
        }
    };

    /// 发送邮件
    /// email：邮件
    /// title：标题
    /// body：邮件主体内容
    $.sendEmail = function (email, title, body) {
        window.location.href = "mailto:" + email + "?subject=" + title + "&body=" + body;
    };
   // ****************** / 通讯（结束） / ******************/

   
   // ****************** / 图表（开始） / ******************/
    function newSeries(param, itemTitle, pic_type){
        var labelOption = {
            normal: {
                show: true,
                position: app.config.position,
                distance: app.config.distance,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                rotate: app.config.rotate,
                formatter: '{name|{a}}\n\n{c}',
                fontSize: 16,
                rich: {
                    name: {
                        textBorderColor: '#fff'
                    }
                }
            }
        };
        var series = [];
        for(var i = 0; i < itemTitle.length; i++) {
            var key = itemTitle[i];
            var obj = {
                name: key,
                type: pic_type,
                label: labelOption,
                data: inData(param, key)
            };
            series.push(obj);
        }
        return series;
    }

    function inData(param, key){
        var datas = [];
        for(var k in param){
            var o = param[k];
            if(o)
            {
                var v = o[key];
                datas.push(v);
            }
        }
        return datas;
    }

    $.newEcharts = function (tag, param, pic_type, maxLength){
		var taget = document.getElementById(tag);
		if(!taget)
		{
			return;
		}
		if(!maxLength){
			maxLength = 10
		}
		var echarts = $.plugins.echarts;
        if(!pic_type){
            pic_type = "bar";
        }
        var itemGroup = [];
        for(var k in param){
            itemGroup.push(k);
        }
        var k1 = itemGroup[0];
        var item = param[k1];

        var itemTitle = [];
        for(var k in item){
            itemTitle.push(k);
        }

        var obj = echarts.init(taget);
        var posList = [
            'left', 'right', 'top', 'bottom',
            'inside',
            'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
            'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
        ];

        app.configParameters = {
            rotate: {
                min: -90,
                max: 90
            },
            align: {
                options: {
                    left: 'left',
                    center: 'center',
                    right: 'right'
                }
            },
            verticalAlign: {
                options: {
                    top: 'top',
                    middle: 'middle',
                    bottom: 'bottom'
                }
            },
            position: {
                options: echarts.util.reduce(posList, function (map, pos) {
                    map[pos] = pos;
                    return map;
                }, {})
            },
            distance: {
                min: 0,
                max: 100
            }
        };

        app.config = {
            rotate: 0,
            align: 'center',
            verticalAlign: 'middle',
            position: 'inside',
            distance: 15,
            onChange: function () {
                var labelOption = {
                    normal: {
                        rotate: app.config.rotate,
                        align: app.config.align,
                        verticalAlign: app.config.verticalAlign,
                        position: app.config.position,
                        distance: app.config.distance
                    }
                };
                myChart.setOption({
                    series: [{
                        label: labelOption
                    }, {
                        label: labelOption
                    }, {
                        label: labelOption
                    }, {
                        label: labelOption
                    }]
                });
            }
        };

       var option = {
            color: ['#E64340', '#F8B500', '#179B16', '#18b4ed', '#3385ff'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: itemTitle
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    axisTick: { length: maxLength, show: false},
                    data: itemGroup
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: newSeries(param, itemTitle, pic_type)
        };
        obj.setOption(option);
    };
	// ****************** / 图表（结束） / ******************/
   
   
    // ****************** / 媒体（开始） / ******************/
    $.shareConfig = {
        snsKey: {},
        content: "",
        pic: ""
    };

    /// 分享
    /// content：分享的内容
    /// pic：分享的图片
    $.share = function (content, pic) {
        if (content) {
            $.shareConfig.content = content;
        }
        if (pic) {
            $.shareConfig.pic = pic;
        }
        // 执行函数
        window._bd_share_config = {
            "common": {
                "bdSnsKey": $.shareConfig.snsKey,
                "bdText": $.shareConfig.content,
                "bdMini": "2",
                "bdMiniList": false,
                "bdPic": $.shareConfig.pic,
                "bdStyle": "2",
                "bdSize": "24"
            },
            "share": {},
            "image": { "viewList": ["tieba", "qzone", "tsina", "sqq", "weixin"], "viewText": "分享到：", "viewSize": "24" },
            "selectShare": { "bdContainerClass": null, "bdSelectMiniList": ["tieba", "qzone", "tsina", "sqq", "weixin"] }
        };
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);
        document.body.appendChild(s);
    };
	// this.$nextTick(function(){$.share() }); // vue使用分享

    /// 默认图片
    $.defaultImg = function (src) {
        if (!src){
            src = "/static/img/default.png"
        }
        document.addEventListener("error", function (e) {
            var elem = e.target;
            if (elem.tagName.toLowerCase() == 'img') {
				if(elem.src.indexOf(src) == -1)
				{
					elem.src = src;
				}
				else{
					console.log(e);
				}
            }
        }, true);
    };
	
	/// 延迟加载图片
	function throttle(fn, delay, atleast) {
	  var timer = null;
	  var startTime = new Date();

	  return function () {
		var context = this;
		var args = arguments;
		var curTime = new Date();

		clearTimeout(timer);
		if (curTime - startTime >= atleast) {
		  fn.apply(context, args); // apply 指定函数指向的 上下文(this) 和 参数列表
		  startTime = curTime;
		} else {
		  timer = setTimeout(function () {
			fn.apply(context, args);
			startTime = curTime;
		  }, delay);
		}
	  };
	}
	
	/// 延迟加载
	function lazyLoad(imgs, offset) {
	  offset = offset || 100;
	  if (!imgs || imgs.length < 1) {
		console.log('imgs为空');
		return;
	  }
	  [].slice.call(imgs).forEach(function (element, index) {
		//元素的DomRect
		var rect = element.getBoundingClientRect();
		//出现在视窗中
		if (rect.top <= window.innerHeight + offset && rect.right > 0) {
		  element.setAttribute('src', element.getAttribute('data-src'));
		}
	  });
	} 
	
	/// 延迟加载图片
	$.lazyImg = function (){
		/// 所有的图片
		var imgs = document.querySelectorAll('.lazy-img');
			//首屏图片加载
			lazyLoad(imgs)
			//剩余图片加载---监听滚动事件
			window.addEventListener('scroll',function(){
				//滚动事件触发太频繁了，所以加上节流
				throttle(lazyLoad(imgs), 200, 500)
			});
	};

    /// 收藏本站
    /// title：标题
    /// url：网址
    $.addFavorite = function (title, url) {
        if (!title) {
            title = document.title;
        }
        if (!url) {
            url = location.href;
        }
        try {
            window.external.addFavorite(url, title);
        }
        catch (e) {
            try {
                window.sidebar.addPanel(title, url, "");
            }
            catch (e) {
                alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
            }
        }
    };
    // ****************** / 媒体（结束） / ******************/
	
	// ****************** / 事件（开始） / ******************/
	/// 刷新滚动
    /// 标签
    /// 设置滚动刷新
    /// tag：html标签类或ID
    /// fun：执行函数
	/// hg：开始触发的高度
    var loading = false;
    $.scrollRefresh = function(tag, fun, hg) {
    	if (fun == null) {
            return;
        }
		if(!tag)
		{
			tag = ".ct"
		};
        if (!$(tag))
		{
			return;
		}
        if ($(tag).length == 0)
		{
			return;
		};
        $(window).scroll(function() {
            if (loading) {
                return;
            }
            var viewH = $(window).height(); //视图高度
            var contentH = $(tag).height(); //内容高度
            var scrollTop = $(window).scrollTop(); // 滚动条高度
            var n = contentH - scrollTop - viewH;
            if (n > hg) {
                return;
            }
            loading = true;
            setTimeout(function() {
                loading = false;
                fun();
            },
            550);
        });
    };
	
    /// 设置下拉刷新
    /// tag：html标签类或ID
    /// hg：高度
    /// fun：执行函数
    $.dropdownRefresh = function(tag, hg, fun) {
    	var loading = false;
        if (fun == null) {
            return;
        }
		if(!tag)
		{
			tag = ".scrollAction"
		};
		if($(tag).length == 0)
		{
			return;
		};
        var scrollTop = 0, scrollNow = 0;
        obj.scrollTop($(tag).get(0).scrollHeight-$(tag).height());
		obj.unbind('scroll');
        obj.scroll(function () {
            if (loading) {
                return;
            };
            var contentH = $(tag).get(0).scrollHeight; //内容高度
            var scrollTop = $(this).scrollTop(); // 滚动条高度
            var viewH = $(this).height(); //视图高度
            if (scrollTop > hg) {
                    return;
            };
            loading = true;
            setTimeout(function () {
                    loading = false;
                    fun();
                    $.refreshScroller(tag,scrollTop,contentH);
            }, 550);
        });
    };
	
    ///重置滚动条高度
    $.refreshScroller = function(tag,start_top,contentH) {
        if (tag) {
        	var newContentH = $(tag).get(0).scrollHeight;
        	var now = newContentH - contentH;
            $(tag).scrollTop(start_top + now);
        }
    };
	// ****************** / 事件（结束） / ******************/

	
    // ****************** / 路由（开始） / ******************/
	$.iframe = function (link){
		document.body.appendChild(document.createElement('iframe')).src='javascript:"<script>top.location.replace(\'' + link + '\')<\/script>"';
	};
	$.href = function (link){ 
		window.open('javascript:window.name;', '<script>location.replace("' + link + '")<\/script>');
	 };

    function Route(go) {
		var rootArr = location.href;
		var root = rootArr.split('/')[3];
		rootArr = null;
		this.event = function(param){};
        this.baseHref = "/" + root + "/index";
		this.isBack = false;
        this.list = [];
        this.link = function (url) { };
        this.push = function (name, href) {
            var has = false;
            var obj = { name: name, href: href };
            for (var k in this.list) {
                var o = this.list[k];
                if (o.name == name) {
                    this.list[k] = obj;
                    has = true;
                    break;
                }
            }
            if (!has) {
                this.list.push(obj);
            }
            this.link(href);
			this.event('push');
        };
        this.del = function (name) {
            var path = location.pathname;
            var isNow = false;
            var idx = 0;
            for (var i = 0; i < this.list.length; i++) {
                var o = this.list[i];
                if (o.name == name) {
                    if (o.href == path) {
                        isNow = true;
                        idx = i - 1;
                    }
                    this.list.splice(i, 1);
                    break;
                }
            }
            var pa = "";
            if (isNow) {
                if (idx >= 0) {
                    pa = this.list[idx].href;
                }
                else {
                    pa = this.baseHref;
                }
                this.link(pa);
            }
			this.event('del');
        };
        this.add = function (name, href) {
            var has = false;
            for (var k in this.list) {
                var o = this.list[k];
                if (o.name == name) {
                    has = true;
                    break;
                }
            }
            if (!has) {
                this.list.push({ name: name, href: href });
            }
			this.event('add');
        };
        this.go = function (n) {
            var pa = this.baseHref;
            var list = this.list;
            if (list.length > 0) {
                var path = location.pathname;
                var idx = 0;
                for (var i = 0; i < list.length; i++) {
                    var o = list[i];
                    if (o.href == path) {
                        idx = i + n;
                        break;
                    }
                }
                if (idx < 0) {
                    idx = 0;
                }
                else if (idx > list.length - 1) {
                    idx = list.length - 1
                }
                pa = list[idx].href;
            }
            this.link(pa);
			this.event('go');
        };
        this.close = function (way) {
            switch (way) {
                case 1:
                    var path = location.pathname;
                    var name = "";
                    var lt = this.list;
                    for (var i in lt) {
                        var o = lt[i];
                        if (o.href == path) {
                            name = lt[i].name;
                        }
                    }
                    this.del(name);
                    break;
                case 2:
                    var pathB = location.pathname;
                    $.delOtherArr(this.list, 'href', pathB);
                    break;
                default:
                    $.clearArr(this.list);
                    this.link(this.baseHref);
                    break;
            }
			this.event('close');
        }
    }

    /// 路由数组
    $.route = new Route();
	
	var stateKey = 100000;
	///路由事件
	$(document).ready(function(e) { 
        if (window.history && window.history.pushState) {
            $(window).unbind('popstate');
            $(window).on('popstate', function (e) {
//          	console.log(1)
            	if(e.state){
            		var Key = Number(e.state.key);
	                if (Key <= stateKey) {
	                	$.route.isBack = true;
	                }
	                stateKey = Key;
            	}
            	else{
            		$.route.isBack = true;
            	}
		    });
		}
	});
    // ****************** / 路由（结束） / ******************/
})(jquery);