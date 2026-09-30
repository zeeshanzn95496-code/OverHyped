import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            quote: "I have been asked what phone this is every single day. Finally.",
            author: "Mara K.",
            product: "Halo One in Coral",
            bgColor: "#F5E6D3"
        },
        {
            quote: "It feels like a design object that happens to know all my passwords.",
            author: "Theo R.",
            product: "Halo Ultra",
            bgColor: "#2d2d2d",
            textColor: "white"
        },
        {
            quote: "The color is ridiculous. The camera is even better.",
            author: "Jia L.",
            product: "Halo Mini in Tide",
            bgColor: "#4ecdc4"
        }
    ]

    return (
        <>
        <div className="testimonials-section">
            <div className="testimonials-header">
                <h1 className="testimonials-title">People are <span className="highlight">talking.</span></h1>
            </div>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className="testimonial-card"
                        style={{ 
                            backgroundColor: testimonial.bgColor,
                            color: testimonial.textColor || '#1a1a1a'
                        }}
                    >
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-author">
                            <span className="author-name">{testimonial.author}</span>
                            <span className="product-name">{testimonial.product}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="testimonials-rating">
                <div className="stars">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                </div>
                <div className="rating-text">
                    <span className="rating-value">4.9</span>
                    <span className="rating-count">/ 2,841 owners</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimonials
