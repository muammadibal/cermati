import React from 'react'

const Notification = ({onClick}) => {
    return (
        <div className='notification'>
            <button onClick={onClick} style={{ position: 'absolute', right: 10, top: 10, border: 'none', background: 'rgba(0,0,0,0)', color: 'white' }}>x</button>
            <h2>Get latest updates in web technologies</h2>
            <p  style={{ margin: '20px 0' }}>
                I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.
            </p>
            <div>
                <input placeholder='Email Address' style={{padding: '5px 10px', border: 'none', marginRight: 5, width: '70%'}}/>
                <button style={{ border: 'none', color: 'white', background: '#FBA200', padding: '5px 10px', cursor: 'pointer' }}>Count me in!</button>
            </div>
        </div>
    )
}

export default Notification