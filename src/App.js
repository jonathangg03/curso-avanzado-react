import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'

const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard />
  </div>
)

export default App
