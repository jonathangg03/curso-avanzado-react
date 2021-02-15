import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { GlobalStyles } from './GlobalStyles'

const App = () => (
  <div>
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCard />
  </div>
)

export default App
