import _ from 'lodash'
import './style.css'
import Img from './img/下载.jpg'
import printMe from './print'

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button')
	
	// Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	
	btn.innerHTML = 'click me'
	btn.onclick = printMe
	
	element.appendChild(btn)
	
	return element;
}

document.body.appendChild(component());

if (module.hot) {
	module.hot.accept('./print.js', function () {
		console.log('accepting the updated printMe module!');
		printMe()
	})
}
