import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <h1 style={{
                marginBottom: 30,
                fontSize: 40
            }}>404</h1>
            <h5 style={{ fontSize:32 }}>Ooppss..!</h5>
            <p style={{ fontSize:18 }}>Halaman tidak ditemukan</p>

            <Link style={{
                background: '#037ABC',
                padding: 10,
                borderRadius: 10,
                textDecoration: 'none',
                color: 'white',
                marginTop: 50
            }} to="/">Kembali ke Beranda</Link>
        </div>
    )
}

export default NotFound