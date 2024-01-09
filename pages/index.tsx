import type { NextPage } from 'next'
import Home from 'src/views/Home'
import ViewInscription from 'src/views/Home/ViewInscription/ViewInscription'

const FormNinja: NextPage = () => {
  return (
    <Home>
      <ViewInscription />
    </Home>
  )
}

export default FormNinja
