var sainsburyOrders = [
		{ id: 'sbury', sale:2 },
		{ id: 'sbury', sale:2.33 }, 
		{ id: 'sbury', sale:'qae3' },
		{ id: 'sbury', sale:'aaa' },
		{ id: 'sbury', sale:12.3 },
		{ id: 'sbury', sale:'3r4.'},
		{ id: 'sbury', sale:76.8 },
		{ id: 'sbury', sale:11 },
		{ id: 'sbury', sale:'33s' },
		{ id: 'sbury', sale:'rty' },
		{ id: 'sbury', sale:1345.1 },
	];

	var msOrders = [
		{ id: 'm&s', sale:12 },
		{ id: 'm&s', sale:45 },
		{ id: 'm&s', sale:88 },
		{ id: 'm&s', sale:'aaa' },
		{ id: 'm&s', sale:12.3 },
		{ id: 'm&s', sale:'3r4.' },
		{ id: 'm&s', sale:56.8 },
		{ id: 'm&s', sale:11 },
		{ id: 'm&s', sale:'33s' },
		{ id: 'm&s', sale:'rty' },
		{ id: 'm&s', sale:134.1 },
	];
	
	var orderList = msOrders.concat(sainsburyOrders);
	console.log(orderList);
	var validOrders = []; // new Array()
	var minDiscountOrders = 15;
	
	function isOrderValid (order) {
		return (typeof order == "number");
	}
	

	orderList.forEach((currentOrder) => {
			
		if (isOrderValid(currentOrder.sale)) {
			
			if (currentOrder.id == 'm&s' &&  currentOrder.sale >= minDiscountOrders){
		
				var msCurrentOrderAfterDiscount = currentOrder.sale - currentOrder.sale * 0.2;
		
				validOrders.push({ id:currentOrder.id, sale:Math.round(msCurrentOrderAfterDiscount) });
					
			} else {
				validOrders.push({id:currentOrder.id, sale:Math.round(currentOrder.sale) });

            }					   
		}
	});	
console.log(validOrders);