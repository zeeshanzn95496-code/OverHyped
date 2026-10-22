const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get("/health", (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get("/tagline", (req, res)=>{
    res.json({
        tagline : "Make a ",
        bold: "Entrance",
        productName: "iPhone 11"
    })
})

const top4 = [
  { name: 'iPhone 12', price: '$699', image: 'phone-12', description: 'A14 Bionic chip, 5G capable, Super Retina XDR display' },
  { name: 'iPhone 13', price: '$799', image: 'phone-13', description: 'A15 Bionic chip, improved battery life, Cinematic mode' },
  { name: 'Galaxy S23', price: '$799', image: 'galaxy-s23', description: 'Snapdragon 8 Gen 2, 50MP camera, 120Hz display' },
  { name: 'Samsung S24', price: '$899', image: 'samsung-s24', description: 'Galaxy AI, titanium frame, advanced camera system' }
]

app.get("/top4", (req, res)=>{
    res.json(top4);
})

const accessories = [
  { name: 'Wireless Earbuds', price: '$129', category: 'Audio' },
  { name: 'Phone Case', price: '$29', category: 'Protection' },
  { name: 'Screen Protector', price: '$19', category: 'Protection' },
  { name: 'Wireless Charger', price: '$49', category: 'Power' },
  { name: 'Car Mount', price: '$39', category: 'Accessories' },
  { name: 'Portable Battery', price: '$59', category: 'Power' }
]

app.get("/accessories", (req, res)=>{
    res.json(accessories);
})

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(3000, ()=>{
    console.log("Server running on 3000")
})