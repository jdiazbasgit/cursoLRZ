import { useState } from 'react';
import { SimpleGrid, Button, Flex, Img, background } from '@chakra-ui/react'
import Pagina1 from '../Pagina_1/Pagina1';
import Pagina2 from '../Pagina_2/Pagina2';
import Pagina3 from '../Pagina_3/Pagina3';
import Pagina4 from '../Pagina_4/Pagina4';



export default function FormInscription() {
  
    
  const [page, setPage] = useState(0);
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);
  
  return (
    <div>
    
    <SimpleGrid as="form" bg={"none"} color="white" p={5} borderRadius={"lg"} minChildWidth={"150px"} gap={5} margin={0} >

      {page === 0 && (
        
        <div style={{ justifyContent: "center", alignItems: "center" }}>
        <Img src="img/Logo_Ninja_Form_1.png" width={1500} height={600}></Img>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button bg={"redBrand.900"} color="white" textAlign="center" onClick={nextPage}>Formulario de registro</Button>
          </div>
          </div>
      )}
      {page === 1 && (
        <Pagina1 nextPage={nextPage} prevPage={prevPage} formData={undefined} updateFormData={undefined}   />
      )}
      {page === 2 && (
        <Pagina2 nextPage={nextPage} prevPage={prevPage} />
      )}
      {page === 3 && (
        <Pagina3 nextPage={nextPage} prevPage={prevPage}  />
      )}
      {page === 4 && (
      <Pagina4 prevPage={prevPage}/>
    )}
  </SimpleGrid >
  </div>
  )
}
