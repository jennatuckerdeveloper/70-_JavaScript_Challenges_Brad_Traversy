const calculateTotalSalesWithTax = (productInfo, taxRate) =>
	productInfo.reduce(
		(total, product) =>
			total + product.price * product.quantity * (1 + taxRate / 100),
		0
	)

module.exports = calculateTotalSalesWithTax
