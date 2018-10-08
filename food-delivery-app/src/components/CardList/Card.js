import React from 'react';
import img1 from './images/img1.jpg'; // command option ] or [
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';


class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orderList: [],
			qty: 0
		}
	}

	onAdding = () => {
		let x = this.state.qty + 1;
		this.setState({qty: x});
		console.log('item added');
	}

	onRemove = () => {
		let x = this.state.qty - 1;
		if ( x >= 0 ) {
			this.setState({qty: x});
			console.log('item added');
		}
	}

	render() {
		const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
		const { id, name, price, onRouteChange } = this.props;
		return (
			<div className='tc bg-lightest-blue dib br3 pa3 ma2 bw2 shadow-5'>
				<img className="grow" alt='pic' src={images[id-1]} height='240' width='auto' />
				<div>
					<h2> {name} </h2>
					<p> Rs. {price} </p>
					<input 
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib" 
				      	type="submit"
				      	value="Add To Cart"
				      	onClick={ this.onAdding } 
				     />
				     <input 
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib" 
				      	type="submit"
				      	value="Remove"
				      	onClick={ this.onRemove } 
				     />
				     <p> Quantity : {this.state.qty} </p>
				</div>
			</div>
		)
	}
}

export default Card;