/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const navData = [
  {
    route: '/home',
    label: 'Home'
  },
  {
    route: '/about',
    label: 'About'
  },
  {
    route: '/faq',
    label: 'FAQ'
  }
]

function Home () {
  return (
    <section className='home'>
      <Navbar
        color='#40826D'
        navlinks={navData}
        brand='PAPA "LEONEL"'
      />
      <Banner
        image={process.env.PUBLIC_URL + '/images/banner.jpg'}
        title='El futbol es mi Pasión'
        description='En el fútbol como en la relojería, el talento y la elegancia
        no significan nada sin rigor y precisión'
        button='Acerca de'
      />
    </section>
  )
}

export default Home
