import React,{ Component } from 'react';

import './main.css';
function Header() {
	return(
		<div className="header__container">
			<h2 className="name">Иванов Иван</h2>
		</div>
	)
};

class Main extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props.answer) // каждое сообщение - массив объектов
		return(
			<ul className="main__container">
				{this.props.valueOfMsg}
			</ul>			
		)
	}
	
}

class Form extends Component {
	handleSubmit(event){
		event.preventDefault();
		this.props.newMessage(event.target.input.value)
	}

	render() {	
		return(
			<form className="textOfMsg__container" onSubmit={this.handleSubmit.bind(this)}>
				<input id="input"  type="text"/>
				<input type="submit" value="отправить" className="send"/>
			</form>			
		)
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			messages: []
		}
		this.newMessage = this.newMessage.bind(this);

	}
	newMessage(msg) {
			this.setState({
	    	messages: this.state.messages.concat({
	        id: Date.now(),
	        name: 'Nikita',
	        text: msg,
	        isOutgoing: true
	    })
	 })
    }
	valueOfMsg(){
		var mappedForFindText = this.state.messages.map(function(element) {
        	return element.text;
        })
        
     	let helpVar = mappedForFindText.map((value,index) => {
			return <li className="main__msg" key={index}>{value}</li>
     	})
     	return helpVar
   }


	render(){
		return(
			<div>
				<Header/>
				<Main answer ={this.state.messages} valueOfMsg = {this.valueOfMsg()}/>
				<Form newMessage = {this.newMessage}/>
			</div>

		)
	}
}
export default App;