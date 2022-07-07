import React from 'react'

const Notification = ({onClick}) => {
    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            background: 'rgb(3, 72, 109,0.7)',
            width: '40%',
            padding: 20,
            color: 'white'
        }}>
            <button onClick={onClick} style={{ position: 'absolute', right: 10, top: 10 }}>x</button>
            <h2>Get latest updates in web technologies</h2>
            <p>
                I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.
            </p>
            <div>
                <input placeholder='Email Address' />
                <button style={{ border: 'none', color: 'white', background: '#FBA200' }}>Count me in!</button>
            </div>
        </div>
    )
}

export default Notification