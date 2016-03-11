import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx'
import Scorebox from './quiz/Scorebox.jsx'
import Results from './quiz/Results.jsx'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			questions:[
				{
					id: 1,
					text: 'What is your name?',
					choices: [
						{
							id: 'a',
							text: 'Hao and Tearsmonson'
						},
						{
							id: 'b',
							text: 'Niu Hao'
						},
						{
							id: 'c',
							text: 'Hao'
						},
						{
							id: 'd',
							text: 'Niu'
						},
					],
					correct: 'b'
				},
				{
					id: 2,
					text: 'What is your id name?',
					choices: [
						{
							id: 'a',
							text: 'Tearsmonson'
						},
						{
							id: 'b',
							text: 'Niu and Tearsmonson'
						},
						{
							id: 'c',
							text: 'Hao'
						},
						{
							id: 'd',
							text: 'Niu'
						},
					],
					correct: 'a'
				},
				{
					id: 3,
					text: 'What is your last name?',
					choices: [
						{
							id: 'a',
							text: 'Hao and Tearsmonson'
						},
						{
							id: 'b',
							text: 'Niu and Tearsmonson'
						},
						{
							id: 'c',
							text: 'Hao'
						},
						{
							id: 'd',
							text: 'Niu'
						},
					],
					correct: 'd'
				},
				{
					id: 4,
					text: 'What is your first name?',
					choices: [
						{
							id: 'a',
							text: 'Hao and Tearsmonson'
						},
						{
							id: 'b',
							text: 'Niu and Tearsmonson'
						},
						{
							id: 'c',
							text: 'Hao'
						},
						{
							id: 'd',
							text: 'Niu'
						},
					],
					correct: 'c'
				},
			],
			score: 0,
			current: 1
		}
	}

	setCurrent(current){
		this.setState({current});
	}

	setScore(score){
		this.setState({score});
	}

	render(){
		if(this.state.current > this.state.questions.length){
			var scorebox = '';
			var results = <Results {...this.state} />
		} else {
			var scorebox = <Scorebox {...this.state} />
			var results = '';
		}
		return(
			<div>
				{scorebox}
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
				{results}
			</div>
		)
	}
}

export default App