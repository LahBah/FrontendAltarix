import React from 'react';
import {render} from 'react-dom';

function Header() {
	return(
		<h2 className="name">Иванов Иван</h2>
	)
}
function Main() {
	return(
		<div className="main__container">
			 <div className="main__msg">Привет</div>
			 <div className="main__msg">Как дела с JavaScript</div>
		</div>
	)
}
function Text() {
	return(
		<div className="textOfMsg__container">
			<textarea className="text" placeholder="Поле для ввода текста сообщения"></textarea>
			<button className="send">Отправить</button>
		</div>
	)
}



render(<Header />, document.querySelector('.header__container'));
render(<Main />, document.querySelector('.main'));
render(<Text />, document.querySelector('.textOfMsg'));



