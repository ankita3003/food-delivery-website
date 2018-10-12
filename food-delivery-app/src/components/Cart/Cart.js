import React from 'react';

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orderList: []
		}
	}

	componentDidMount() {
		this.setState({orderList:this.trimmed(this.props.cart)})
	}

	trimmed(cart) {
		cart.sort(this.compare);
		let newCart = [];
		cart.forEach((item,index) => {
			if ( index !== cart.length-1) {
				if ( item.name !== cart[index+1].name && item.qty !== 0 )
					newCart.push(item);
			}	
		});
		if (cart.length !== 0 ) if (cart[cart.length-1].qty !== 0 ) newCart.push(cart[cart.length-1]);
		if ( newCart.length !== 0 ) return newCart;
		else return []
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
		const sum = orderList.reduce(function (a,b) { return a + (b.price*b.qty); }, 0);
		const totalqty = orderList.reduce(function (a,b) { return a + (b.qty); }, 0);
		return (
			<div className="db center">
			{ ( orderList.length === 0 )  ?
				<h1> Cart Empty! </h1> :
				<div>
				<h1 className="f2 lh-copy">Orders</h1>
				<table className="collapse center br5 b--black pv2 ph3">
				<tbody>
			  <tr className="striped--light-gray ">
			  	<th className="ba tc pv2 ph3 tl f6 fw6 ttu">Item Name</th>
			  	<th className="ba tr f6 ttu fw6 pv2 ph3">Quantity</th>
			  	<th className="ba tc f6 ttu fw6 pv2 ph3">Cost</th>
			  </tr>
			  { orderList.map((order,i) => (
			  		<tr key={i} className="striped--light-gray ">
			  			<td className="ba pv2 ph3">{orderList[i].name}</td>
			  			<td className="ba pv2 ph3">{orderList[i].qty}</td>
			  			<td className="ba pv2 ph3">Rs. {orderList[i].qty * orderList[i].price}</td>
			  		</tr>
			  	)
			  )}
			  <tr className="striped--light-gray ">
			  	<th className="ba tc pv2 ph3 tl f6 fw6 ttu">Total</th>
			  	<th className="ba tc f6 ttu fw6 pv2 ph3">{totalqty}</th>
			  	<th className="ba tc f3 ttu fw6 pv2 ph3">Rs. {sum}</th>
			  </tr>
			</tbody>
			</table>
			<input 
				type="submit"
				value="Place Order"
				className="f6 link dim ba bw2 ph3 pv2 mb2 dib dark-blue"
				onClick={() => {
					alert("Order Placed")
					this.setState({'orderList': []})
					this.props.onOrder();
				}
				} 
			>
			</input>
			</div>
		}
			</div>
		)
	}
}

export default Cart;