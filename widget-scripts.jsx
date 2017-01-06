var products = [
	{
		category: 'Sporting Goods',
		price: '$49.99',
		name: 'Football',
		inStock: true
	},
	{
		category: 'Sporting Goods',
		price: '$9.99',
		name: 'Baseball',
		inStock: true
	},
	{
		category: 'Sporting Goods',
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},

	{
		category: 'Electronics',
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
		category: 'Electronics',
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true
	},
]

function ProductCategoryRow(props) {
	return (
		<tr>
			<td>{props.category}</td>
		</tr>
	)
}

function ProductRow(props) {
	if (props.product.inStock === true) {
			var productClass = "text-success"
		}
	else {
			var productClass = "text-danger"
		}
	return (
		<tr>
			<td className={productClass}>{props.product.name}</td>
			<td>{props.product.price}</td>
		</tr>
	)
}

function ProductTable(props) {
	// Init a local var to hold all our rows
	var rows = [];

	// Init a local var to keep track of what category we are on
	var lastCategory = '';
	products.forEach(function(product, index) {
		if (product.category !== lastCategory) {
			//we need to add this to our rows array because it's a new cat
			//this part of the if statement only runs if the current product category doesn't match the previous
			//when looping in React, you need a key to manage the DOM effectively (don't need one if dealing with one element) - key needs to be unique so React can see what was there before, and what needs to be there now
			rows.push(<ProductCategoryRow key={product.category} category={product.category} />)
			lastCategory = product.category;
		}
		//this runs regardless - we need the whole product pushed
		rows.push(<ProductRow key={index} product={product} />)
	});
	console.log(rows)

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}

function SearchBar(props) {
	return (
		<form className="search-bar">
			<input type="text" placeholder="Search..."/>
			<div>
				<input type="checkbox" />&nbsp;Only show products in stock
			</div>
		</form>
	)
}

function FilterableProductTable(props) {
	return (
		<div className="filterable-product-table">
			<SearchBar />
			<ProductTable />
		</div>
	)
}

// We aren't using a class (yet) - we have to include props as a param because there is no 'this'
function Application(props) {
	// Must return a single virtual DOM element!
	return (
		<FilterableProductTable products={props.products} />
	)
}

//2 args, the what and the where (no semicolons, just a comma separating the application and the document)
ReactDOM.render(
	<Application />,
	document.getElementById('container')
)