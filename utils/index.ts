import { CarProps, FilterProps } from "@/types"


export async function fetchCars(filters : FilterProps) {
    const { manufacturer, model, year, fuel, limit } = filters;

    const headers = {
        'x-rapidapi-key': 'e30250500cmshe5aab37f4511adcp10fcbajsn1449bb7c8713',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}` , {
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

export const generateCarImageUrl = (car : CarProps , angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer','hrjavascript-mastery')
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return `${url}`;
}