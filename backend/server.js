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

const products = [
  { id: 0, name: 'Halo One', category: 'Phones', description: 'The conversation starter', rating: '4.7', reviews: '3 owner reviews', price: '$799', image: '/images/halo-hero.png', theme: 'dark' },
  { id: 1, name: 'Halo tab', category: 'Phones', description: 'The 16 inch tab', rating: '4.7', reviews: '300 owner reviews', price: '$999', image: '', theme: 'coral' },
  { id: 2, name: 'Halo Mini', category: 'Phones', description: 'Small phone. Big entrance.', rating: '4.7', reviews: '3 owner reviews', price: '$649', image: '/images/halo-mini.png', theme: 'teal' },
  { id: 3, name: 'Halo Ultra', category: 'Phones', description: 'For the overachievers', rating: '4.8', reviews: '5 owner reviews', price: '$999', image: '/images/halo-ultra.png', theme: 'dark' },
  { id: 4, name: 'Foldline', category: 'Phones', description: 'Two screens. One point of view.', rating: '4.7', reviews: '3 owner reviews', price: '$1,299', image: '/images/foldline.png', theme: 'purple' },
  { id: 5, name: 'Triple Fold', category: 'Phones', description: 'Three screens. Infinite possibilities.', rating: '4.9', reviews: '2 owner reviews', price: '$1,499', image: '/images/foldline.png', theme: 'teal' },
  { id: 6, name: 'Quadra', category: 'Phones', description: 'Four screens. Ultimate multitasking.', rating: '5.0', reviews: '1 owner review', price: '$1,799', image: '/images/foldline.png', theme: 'dark' },
  { id: 7, name: 'Buds', category: 'Audio', description: 'Pocket-sized sound with character', rating: '4.9', reviews: '12 owner reviews', price: '$129', image: '/images/acc-buds.png', theme: 'teal' },
  { id: 8, name: 'Halo 80W Charger', category: 'Power', description: 'Super fast. Power delivery.', rating: '4.9', reviews: '15 owner reviews', price: '$79', image: '/images/acc-charge.png', theme: 'yellow' },
  { id: 9, name: 'Shell Case', category: 'Protection', description: 'Protective silhouette without the boring bulk', rating: '4.7', reviews: '19 owner reviews', price: '$29', image: '/images/acc-shell.png', theme: 'coral' },
  { id: 10, name: 'Halo Powerbank 100W', category: 'Power', description: 'Sleek anodized backup battery pack', rating: '4.9', reviews: '7 owner reviews', price: '$89', image: '/images/acc-charge.png', theme: 'yellow' },
  { id: 11, name: 'Halo Powerbank 3000W', category: 'Power', description: 'Massive power. Endless energy.', rating: '4.8', reviews: '5 owner reviews', price: '$149', image: '/images/acc-charge.png', theme: 'yellow' },
  { id: 12, name: 'Halo Powerbank 11000W Superfast', category: 'Power', description: 'Ultra fast. Lightning charge.', rating: '4.9', reviews: '8 owner reviews', price: '$199', image: '/images/acc-charge.png', theme: 'coral' },
  { id: 13, name: 'Halo Powerbank 6700W fast', category: 'Power', description: 'fast. Lightning charge.', rating: '4.4', reviews: '800 owner reviews', price: '$129', image: '/images/acc-charge.png', theme: 'coral' },
  { id: 14, name: 'Halo Wired Headphone', category: 'Audio', description: 'Pure sound. No compromise.', rating: '4.7', reviews: '10 owner reviews', price: '$89', image: '/images/acc-buds.png', theme: 'dark' },
  { id: 15, name: 'Halo Wireless Headphone', category: 'Audio', description: 'Freedom to move. Studio quality.', rating: '4.9', reviews: '14 owner reviews', price: '$199', image: '/images/acc-buds.png', theme: 'teal' },
  { id: 16, name: 'Halo Charger Cover Batman', category: 'Protection', description: 'Batman cartoon. Hero style.', rating: '4.8', reviews: '6 owner reviews', price: '$15', image: '/images/acc-shell.png', theme: 'dark' },
  { id: 17, name: 'Halo Superman Charger Cover', category: 'Protection', description: 'Superman cartoon. Man of steel.', rating: '4.9', reviews: '4 owner reviews', price: '$18', image: '/images/acc-shell.png', theme: 'coral' }
]

app.get("/products", (req, res) => {
  res.json(products)
})

app.get("/top4", (req, res) => {
  res.json(products.slice(0, 4))
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