import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './container/ListOfPhotocards'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

const App = () => {
  const urlPrams = new window.URLSearchParams(window.location.search)
  const detailId = urlPrams.get('detail')
  console.log(detailId)
  return (
    <div>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <><ListOfCategories /><ListOfPhotoCard categoryId={2} /></>
      }
    </div>
  )
}

export default App
