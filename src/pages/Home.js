import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../container/ListOfPhotocards'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgranm puedes ver fotos de animales domesticos muy bonitas'>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </Layout>
  )
}

export const Home = React.memo(HomePage)
