/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Newsletter = ({setShowTos}) => {
    return (
        <div className='newsletter-wrapper'>
            <div className='newsletter'>
                <div style={{ marginRight: 10 }}>
                    By accessing and using this website, you acknowledge that you have read and
                    understand our <a href='#'>Cookie Policy</a>, <a href='#'>Privacy Policy</a>, and our <a href='#' >Terms of Service</a>.
                </div>
                <button onClick={() => setShowTos(false)} className="btn">Got it</button>
            </div>
        </div>
    )
}

export default Newsletter