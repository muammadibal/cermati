import React, { useState } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Notification from '../components/Notification'
import dummyServices from '../data/dummyService.json'

const Home = () => {
  const [showTos, setShowTos] = useState(true)
  const [showSubscription, setShowSubscription] = useState(true)

  return (
    <>
      {showTos && <Newsletter setShowTos={setShowTos}/>}
      <div style={{
        position: 'relative'
      }}>
        <Navbar />
        <Hero />

        <div style={{
          height: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div className='highlight'>
            <h2 style={{ marginBottom: 20 }}>How Can I Help You?</h2>
            <p>Our work then targeted, best practices outcomes social innovation synergy.
              Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
              program areas scale.</p>
          </div>
        </div>

        <div className='services'>
          {dummyServices.data.map((item, index) => {
            return <div key={index} className="card">
              <img src={item.icon} alt={`icon-${index}`} style={{
                width: 30, height: 30,
                position: 'absolute',
                right: 15,
                top: 15
              }} />
              <h2 style={{ marginBottom: 10 }}>{item.title}</h2>
              <p style={{ fontWeight: 200 }}>{item.description}</p>
            </div>
          })}
        </div>
        {/* <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0 2rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: 50 }}>
          {dummyServices.data.map((item, index) => {
            return <div key={index} style={{ width: '32%', height: 190, marginBottom: '2rem', border: '1px solid grey', padding: 15, borderRadius: 20, position: 'relative' }}>
              <img src={item.icon} alt={`icon-${index}`} style={{
                width: 30, height: 30,
                position: 'absolute',
                right: 15,
                top: 15
              }} />
              <h2 style={{ marginBottom: 10 }}>{item.title}</h2>
              <p style={{ fontWeight: 200 }}>{item.description}</p>
            </div>
          })}
        </div> */}

        <Footer />

      </div>
      {showSubscription && <Notification onClick={() => setShowSubscription(false)} />}

    </>
  )
}

export default Home