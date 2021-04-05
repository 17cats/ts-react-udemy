const carMakers = ['Ford', 'Toyota', 'Chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

//help with inference when extracting values
//const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values```

//carMakers.push(100);

//Help with map, foreach, reduce

carMakers.map((car: string): string => {
    return car;
});

//Flexible types

const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];

importantDates.push('2020');
importantDates.push(new Date());
