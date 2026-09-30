import React, { useState } from 'react'

const EmailSignup = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email submitted:', email)
        // Add email submission logic here
    }

    return (
        <>
        <div className="email-signup-section">
            <div className="email-content">
                <h1 className="email-title">
                    Your inbox deserves <span className="highlight-yellow">better.</span>
                </h1>
                <p className="email-subtitle">
                    New drops, odd ideas, and the occasional very good wallpaper. No daily noise.
                </p>
                <form className="email-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="you@somewhere.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="email-input"
                    />
                    <button type="submit" className="email-submit">
                        →
                    </button>
                </form>
                <p className="email-consent">
                    By signing up, you agree to receive the occasional overhyped email.
                </p>
                <div className="email-links">
                    <a href="#" className="email-link">Talk to a human</a>
                    <a href="#" className="email-link">Find a store</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default EmailSignup
