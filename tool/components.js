/**
 * 下拉菜单组件
 *
 **/
!function(){
	var $dropmenu = {
		parent: null,
		options: null,
		input: null
	};
	$.fn.show = function(callback){
		var $this = $(this);
		$dropmenu.parent = $this.closest('.gb-selector');
		$dropmenu.options = $dropmenu.parent.find('.options');
		$dropmenu.input = $dropmenu.parent.find('.input>input');
		var $item = $dropmenu.options.find('li');
		var height = $item.eq(0).height() * $item.length;
		$dropmenu.options.css('height', height);
		callback && callback.call(this);
	};
	$.hide = function(that, callback){
		that && function(){
			var $this = $(that);
			$dropmenu.parent = $this.closest('.gb-selector');
			$dropmenu.options = $dropmenu.parent.find('.options');
			$dropmenu.input = $dropmenu.parent.find('.input>input');
		}(that);
		$dropmenu.options.css('height', 0);
		callback && (that ? callback.call(that) : callback());
	};
	$(document)
	.on('click', function(){
		$.hide()
	});

	$(document.body)
	.on('click', '.gb-selector', function(e){ e.stopPropagation(); })
	.on('click', '.gb-selector>.input', function(){
		$(this).show();
	})
	.on('click', '.gb-selector>.options>li', function(){
		var val = $(this).text();
		$.hide(this, function(){
			$dropmenu.input.val(val);
		});
	});
}();