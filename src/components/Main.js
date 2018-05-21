import React,{ Component } from 'react';
import {db} from './firebase.js'
import './main.css';
function Header() {
	return(
		<div className="header__container">
			<h2 className="name">Naumov Nikita</h2>
		</div>
	)
};

class Main extends Component {
	render() {
		return(
			<ul className="main__container">
				{this.props.valueOfMsg}
			</ul>			
		)
	}
	
}

class Form extends Component {
	constructor(props) {
		super(props);
	}

	handleChange(event) {
		this.setState({ text: event.target.value })	
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.props.state)
		const now = Date.now();
		const message = {
			id: now,
			name: 'Naumov Nikita',
			text: this.state.text
		};

		db.ref(`/messages/${now}`).set(message);
		this.setState({ text: '' });

	}

	
	

	render() {	
		return(
			<form className="textOfMsg__container" onSubmit={this.handleSubmit.bind(this)}>
				<input id="input"  type="text" onChange={this.handleChange.bind(this)}/>
				<input type="submit" value="отправить" className="send"/>
			</form>			
		)
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			messages: [],
			text: '',
			date: '',
			name: ''
		}
	}
	componentDidMount() {
		const messagesRef = db.ref('messages');

		messagesRef.on('value', (snapshot) => {
			this.setState({ messages: Object.values(snapshot.val()) });
		});
	}
	valueOfMsg(){
		var mappedForFindText = this.state.messages.map(function(element) {
        	return element.text;
        })
        
     	let helpVar = mappedForFindText.map((value,index) => {
			return <li className="main__msg" key={index}>{value}</li>
     	})
     	return helpVar
     	var mappedForFindName = this.state.messages.map(function(element) {
        	return element.name;
        })
        
     	let helpVarName = mappedForFindName.map((value,index) => {
			return <li className="main__msg" key={index}>{value}</li>
     	})
     	console.log(helpVarName)

   }


	render(){
		return(
			<div>
				<Header/>
				<Main answer ={this.state.messages} valueOfMsg = {this.valueOfMsg()}/>
				<Form newMessage = {this.newMessage} state = {this.state}/>
			</div>

		)
	}
}
export default App;
