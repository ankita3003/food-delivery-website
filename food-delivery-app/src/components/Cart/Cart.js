import React from 'react';

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orderList: []
		}
	}

	componentDidMount() {
		this.trimmed(this.props.cart);
	}

	trimmed(cart) {
		cart.sort(this.compare);
		let newCart = [];
		cart.forEach((item,index) => {
			if ( index !== cart.length-1) {
				if ( item.name !== cart[index+1].name )
					newCart.push(item);
			}	
		});
		this.setState({orderList:newCart})
	}
 
	compare(a,b) {
	  if (a.name < b.name)
	    return -1;
	  if (a.name > b.name)
	    return 1;
	  return 0;
	}

	render() {
		const { orderList } = this.state;
		console.log(orderList);
		return (
			<div className="db center">
			{ ( orderList.length === 0 )  ?
				<h1> Cart Empty! </h1> :
				<div>
				<h1 className="f2 lh-copy">Orders</h1>
				<table className="debug-grid collapse center br5 b--black pv2 ph3">
				<tbody>
			  <tr className="striped--light-gray "><th className="ba tc pv2 ph3 tl f6 fw6 ttu">Item Name</th><th className="ba tr f6 ttu fw6 pv2 ph3">Quantity</th></tr>
			  { orderList.map((order,i) => (
			  		<tr key={i} className="striped--light-gray ">
			  			<td className="ba pv2 ph3">{orderList[i].name}</td>
			  			<td className="ba pv2 ph3">{orderList[i].qty}</td>
			  		</tr>
			  	)
			  )}

			  <tr className="striped--light-gray "><td className="ba pv2 ph3">Jurassic Park</td><td className="ba pv2 ph3">5 stars</td></tr>
			  <tr className="striped--light-gray "><td className="ba pv2 ph3">Back to the Future</td><td className="ba pv2 ph3">5 stars</td></tr>
			  <tr className="striped--light-gray "><td className="ba pv2 ph3">Primer</td><td className="ba pv2 ph3">5 stars</td></tr>
			  <tr className="striped--light-gray "><td className="ba pv2 ph3">Sunshine</td><td className="ba pv2 ph3">5 stars</td></tr>
			  <tr className="striped--light-gray "><td className="ba pv2 ph3">Moon</td><td className="ba pv2 ph3">5 stars</td></tr>
			</tbody>
			</table>
			</div>
		}
			</div>
		)
	}
}

export default Cart;