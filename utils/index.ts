

export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'e30250500cmshe5aab37f4511adcp10fcbajsn1449bb7c8713',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , {
        headers : headers
    })

    const result = await response.json()

    return result
}

export const calculateCarRent = (city_mpg : number , year : number) => {
    const basePricePerDay = 50;

    const mileageFactor = 0.1;

    const ageFactor = 0.05;

    const milageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + milageRate + ageRate;

    return rentalRatePerDay.toFixed(0)
}