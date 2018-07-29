let winSetItem = localStorage.setItem;
localStorage.setItem = function (key, value) {
	// 抛出自定义事件
	let event = new Event('setItem');
	event.newValue = value;
	window.dispatchEvent(event);
	// 实现原方法
	winSetItem.apply(this, arguments)
}

window.addEventListener('setItemEvent', function (e) {
	console.log('本地存储变化,修改为' + e.newValue)
})