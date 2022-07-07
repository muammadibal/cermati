import React from 'react'
import HeroBanner from '../assets/img/hero.jpg'

const Hero = () => {
    return (

        <div style={{ height: 500, background: `url(${HeroBanner}) no-repeat`, backgroundSize: 'cover' }}>
            <div style={{ height: 500, background: 'linear-gradient(rgb(3, 72, 109,0.7), rgb(3, 72, 109,0.7))', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Hello! I'm Muhammad Iqbal</h1>
                <h2>Consult, Design, And Develop Websites</h2>
                <div style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ fontWeight: 200 }}>Have something great in mind? Feel free to contact me.</p>
                    <p style={{ fontWeight: 200 }}>I'll help you to make it happen</p>
                </div>

                <a href='#' style={{ border: '2px solid white', color: 'white', background: 'transparent', padding: 10, borderRadius: 10, textDecoration:'none' }}>Let's Make Contact</a>
            </div>
        </div>
    )
}

export default Hero