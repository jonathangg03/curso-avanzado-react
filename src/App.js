import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './container/ListOfPhotocards'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'

const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard categoryId={2} />
  </div>
)

export default App
