import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TopProducts = () => {
    const [top4, setTop4] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getTop4 = async ()=>{
            try {
                const response = await axios.get("http://localhost:3000/top4")
                setTop4(response.data)
            } catch (error) {
                console.error("Error fetching top products:", error)
                setTop4([
                    { name: 'iPhone 12', price: '$699', image: 'phone-12', description: 'A14 Bionic chip, 5G capable' },
                    { name: 'iPhone 13', price: '$799', image: 'phone-13', description: 'A15 Bionic chip, improved battery' },
                    { name: 'Galaxy S23', price: '$799', image: 'galaxy-s23', description: 'Snapdragon 8 Gen 2, 50MP camera' },
                    { name: 'Samsung S24', price: '$899', image: 'samsung-s24', description: 'Galaxy AI, titanium frame' }
                ])
            } finally {
                setLoading(false)
            }
        }
        getTop4()
    }, [])

    const handleViewDetails = (phone) => {
        console.log("View details for:", phone.name)
        // Add functionality to show product details
    }

    if (loading) {
        return (
            <div className="top-prod">
                <div className="title-container">
                    <h1 className='title'>Top 4 Products</h1>
                </div>
                <div className="loading">
                    <div className="loading-spinner"></div>
                </div>
            </div>
        )
    }

  return (
    <>
    <div className="top-prod">
        <div className="title-container">
            <h1 className='title'>Top 4 Products</h1>
        </div>
        <div className="cards">
            {top4.map((phone, index) =>(
                <div key={index} className="card">
                    <div className="card-image"></div>
                    <h3 className="card-name">{phone.name}</h3>
                    <p className="card-price">{phone.price}</p>
                    <button className="card-button" onClick={() => handleViewDetails(phone)}>View Details</button>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default TopProducts