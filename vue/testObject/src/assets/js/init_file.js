/**initialPreviewConfig 地址初始化
 * @param tmpcontent
 * @returns {Array}
 */
function initFile(tmpcontent,deleteurl) {
	var picArr = [];
	if(null==tmpcontent) {
		return  [];
	}
	$.each(tmpcontent,function(n,value){
		for ( var key in value) {
			picArr.push(new picObject(value[key], deleteurl, value[key]));
		}
	})
	return picArr;
}

/**
 * 名字初始化
 * initialPreview
 * @param tmpcontent
 */
function initPic(tmpcontent) {
	var picArr = [];
	if(null==tmpcontent) {
		return  [];
	}
	$.each(tmpcontent,function(n,value){
		for ( var key in value) {
			var opt = value[key];
//			opt = opt.substr(opt.lastIndexOf("/")+1);
			picArr.push("<img src='"+opt+"' class='file-preview-image' alt='Desert' title='Desert'>");
		}
	})
	return picArr;
}

/**
 * 文件名、删除地址
 * @param caption 文件名
 * @param deleteurl
 * @param key
 */
function  picObject(caption,deleteurl,key) //声明对象
{
   this.caption = caption;
   this.url= deleteurl;
   this.key= encodeURI(key);
}