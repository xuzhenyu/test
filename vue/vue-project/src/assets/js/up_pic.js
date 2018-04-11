$(function() {
	//carinfo start
	// 图片
	$("#file-1").fileinput({
		uploadUrl : uploadurl,
		showUpload: false,
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 5242880,//5M
		maxFilesNum : 8,
		maxFileCount : 8,
		msgFilesTooMany : '文件数量过多 <b>({n})</b> 最多不超过 <b>{m}</b>张. 请重新添加!',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		browseLabel : '添加图片',
		uploadLabel : '上传',
		dropZoneTitle : '请添加图片，最多8张',
		//地址初始化
		initialPreview: initPic(carpics),
		//文件名初始化
		initialPreviewConfig: initFile(carpics,deleteurl),
		deleteExtraData :{loactionkey: uploadkeys[0]},
		showRemove:true,
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	}).on('fileuploaded', function(event, data, previewId, index) {
	    var form = data.form, files = data.files, extra = data.extra,
        response = data.response, reader = data.reader;
	    $("button[deletecid="+previewId).attr("data-url",response.singleResult);
	    $("button[deletecid="+previewId).on("click",function(){
			var url = $(this).attr("data-url");
			$.ajax({
				url:deleteurl,
				type:"post",
				dataType:'json',
				data:{loactionkey:uploadkeys[0],key:url},
				success:function(data) {
					$("#"+previewId).remove();
				}
			})
		})
	}).on("filebatchselected", function(event, files) {
		//自动上传
        $(this).fileinput("upload");
    });
	
	// 视频
	$("#file-2").fileinput({
		uploadUrl : uploadurl,
		showUpload: false,
		allowedFileExtensions : [ 'mp4', 'rmvb', 'mkv', 'avi', 'mov' ],
		overwriteInitial : false,
		maxFileSize : 52428800,//50M
		browseLabel : '添加视频',
		dropZoneTitle : '请添加视频！',
		msgFilesTooLess : '您至少传 <b>{n}</b>个视频. 请重新上传!',
		uploadLabel : '上传',
		initialPreview: initPic(carmovies),
		initialPreviewConfig: initFile(carmovies,deleteurl),
	    deleteExtraData :{loactionkey: uploadkeys[1]},
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	}).on('fileuploaded', function(event, data, previewId, index) {
	    var form = data.form, files = data.files, extra = data.extra,
        response = data.response, reader = data.reader;
	    $("button[deletecid="+previewId).attr("data-url",response.singleResult);
	    $("button[deletecid="+previewId).on("click",function(){
			var url = $(this).attr("data-url");
			$.ajax({
				url:deleteurl,
				type:"post",
				dataType:'json',
				data:{loactionkey:uploadkeys[1],key:url},
				success:function(data) {
					$("#"+previewId).remove();
				}
			})
		})
	}).on("filebatchselected", function(event, files) {
		//自动上传
        $(this).fileinput("upload");
    });
	// 行驶证
	$("#file-3").fileinput({
		uploadUrl : uploadurl,
		showUpload: false,
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 5242880,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加行驶证图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		initialPreview: initPic(carlicense),
		initialPreviewConfig: initFile(carlicense,deleteurl),
	    deleteExtraData :{loactionkey: uploadkeys[2]},
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	}).on('fileuploaded', function(event, data, previewId, index) {
	    var form = data.form, files = data.files, extra = data.extra,
        response = data.response, reader = data.reader;
	    if(undefined!=response.singleResult && ''!=response.singleResult) { 
		    $("button[deletecid="+previewId).attr("data-url",response.singleResult);
		    $("button[deletecid="+previewId).on("click",function(){
				var url = $(this).attr("data-url");
				$.ajax({
					url:deleteurl,
					type:"post",
					dataType:'json',
					data:{loactionkey:uploadkeys[2],key:url},
					success:function(data) {
						$("#"+previewId).remove();
					}
				})
			})
	    }
	}).on("filebatchselected", function(event, files) {
		//自动上传
        $(this).fileinput("upload");
    });
	// 车产证
	$("#file-4").fileinput({
		uploadUrl : uploadurl,
		showUpload: false,
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 5242880,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加车产证图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		initialPreview: initPic(carcertificate),
		initialPreviewConfig: initFile(carcertificate,deleteurl),
	    deleteExtraData :{loactionkey: uploadkeys[3]},
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	}).on('fileuploaded', function(event, data, previewId, index) {
	    var form = data.form, files = data.files, extra = data.extra,
        response = data.response, reader = data.reader;
	    $("button[deletecid="+previewId).attr("data-url",response.singleResult);
	    $("button[deletecid="+previewId).on("click",function(){
			var url = $(this).attr("data-url");
			$.ajax({
				url:deleteurl,
				type:"post",
				dataType:'json',
				data:{loactionkey:uploadkeys[3],key:url},
				success:function(data) {
					$("#"+previewId).remove();
				}
			})
		})
	}).on("filebatchselected", function(event, files) {
		//自动上传
        $(this).fileinput("upload");
    });
	// 身份证
	$("#file-5").fileinput({
		uploadUrl : '#',
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 100000,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加身份证图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	});
	// 个人征信授权书
	$("#file-6").fileinput({
		uploadUrl : '#',
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 100000,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加个人征信授权书图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	});
	// 驾照
	$("#file-7").fileinput({
		uploadUrl : '#',
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 100000,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加驾照图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	});
	// 车产证
	$("#file-8").fileinput({
		uploadUrl : '#',
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 100000,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加车产证图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	});
	// 房产证
	$("#file-9").fileinput({
		uploadUrl : '#',
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 100000,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加房产证图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	});
	// 房产证人员身份证
	$("#file-10").fileinput({
		uploadUrl : '#',
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 100000,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加房产证人员身份证图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	});
	// 离/结婚证
	$("#file-11").fileinput({
		uploadUrl : '#',
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 100000,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加离/结婚证图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	});
	// 户口本
	$("#file-12").fileinput({
		uploadUrl : '#',
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 100000,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加户口本图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	});
	// 居住证明
	$("#file-13").fileinput({
		uploadUrl : '#',
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 100000,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加居住证明图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	});
	// 个人6个月流水
	$("#file-14").fileinput({
		uploadUrl : '#',
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 100000,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加个人六个月流水图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	});
	// 其他证件
	$("#file-15").fileinput({
		uploadUrl : '#',
		allowedFileExtensions : [ 'jpg', 'jpeg', 'png', 'gif' ],
		overwriteInitial : false,
		maxFileSize : 100000,
		browseLabel : '添加图片',
		dropZoneTitle : '请添加其他证件图片！',
		msgFilesTooLess : '您至少传 <b>{n}</b>张图片. 请重新上传!',
		uploadLabel : '上传',
		slugCallback : function(filename) {
			return filename.replace('(', '_').replace(']', '_');
		}
	});
})
