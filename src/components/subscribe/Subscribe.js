import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className="content">
                <h2>Join Our DeFi Community</h2>
                <form action="https://getform.io/f/b921d160-98ee-483a-bc94-df592810eb63" method="POST">
                    <div className="form-container display-col">
                        <input type="email" name='email' placeholder='Enter your email' />
                        <button className="btn">Sign Up</button>
                    </div>
                    <div className="form-container">
                        <input type="checkbox"/> <p>Yes, I agree to receive email communications from DeFi.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Subscribe