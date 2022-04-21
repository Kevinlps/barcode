import { createCanvas } from 'canvas'
import { writeFileSync } from 'fs'
import JsBarcode from 'jsbarcode'
import { join } from 'path'

import { findCompanyByCode } from './controllers/CompanyController'
import { findCountryByName } from './controllers/CountryController'
import products from './data/products.json'
import { calculateCheckDigit } from './utils/EAN13Utils'

products.forEach((p) =>{
    const company = findCompanyByCode(p.company)
    const country = findCountryByName(company.country)
    let barCode = `${country.code}${company.code}${p.code}`
    const checkDigit = calculateCheckDigit(barCode)
    barCode = `${barCode}${checkDigit}`
    
    const canvas = createCanvas(200, 200)
    JsBarcode(canvas, barCode, {format: 'EAN13'})
    const buffer = canvas.toBuffer('image/png')
    const barcodePath = join(__dirname, 'barcodes' , `${barCode}.png`)
    writeFileSync(barcodePath, buffer)
})
console.log('Mal feito desfeito')