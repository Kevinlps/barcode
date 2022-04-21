import countries from '../data/countries.json'

export const findCountryByName = (name:string) => {
    const country = countries.find(
        c => c.country.toLowerCase() == name.toLowerCase().trim()
    )
    return country
}