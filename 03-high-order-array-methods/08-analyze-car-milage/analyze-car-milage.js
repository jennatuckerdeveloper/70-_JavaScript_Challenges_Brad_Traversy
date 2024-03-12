const analyzeCarMileage = (cars) => {
	const carData = cars.reduce(
		(carData, car) => {
			if (carData.highestMileageCar.mileage < car.mileage)
				carData.highestMileageCar = car
			if (carData.lowestMileageCar.mileage > car.mileage)
				carData.lowestMileageCar = car
			carData.totalMileage = carData.totalMileage + car.mileage
			return carData
		},
		{
			highestMileageCar: cars[0],
			lowestMileageCar: cars[0],
			totalMileage: 0
		},
		0
	)
	return {
		...carData,
		averageMileage: Math.round((carData.totalMileage / cars.length) * 100) / 100
	}
}

module.exports = analyzeCarMileage
