import { useState, useEffect, ChangeEvent } from 'react';
import { SimpleGrid, Text, Input, Select, Checkbox, Button, Flex, Img } from '@chakra-ui/react'
import data from './json_prefijos.json';



export default function FormInscription() {
  const StatusBar = ({ totalPages, currentPage }) => {
    return (
      <Flex justify="center" mb={4}>
        {[...Array(totalPages)].map((_, index) => (
          <Text
            key={index}
            fontSize="lg"
            mx={1}
            color={currentPage === index ? "redBrand.900" : "gray.500"}
          >
            ●
          </Text>
        ))}
      </Flex>
    );
  };
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    pais: '',
    telefono: '',
    linkedin: '',
    buscoEmpleo: false,
    expectativaSalarial: '',
    modalidadTrabajo: [],
    movilidad: '',
    ubicacion: [],
    aceptoPoliticas: false,
  });
  type OptionType = {
    nombre: string;
    name: string;
    nom: string;
    iso2: string;
    iso3: string;
    phone_code: number;
  };
  const [options, setOptions] = useState<OptionType[]>(data);

  interface Country {
    value: string;
    label: string;
  }
  const countries: Country[] = [
    { value: 'usa', label: 'Estados Unidos' },
    { value: 'canada', label: 'Canadá' },
    { value: 'mexico', label: 'México' },
    { value: 'uk', label: 'Reino Unido' },
    { value: 'germany', label: 'Alemania' },
    { value: 'france', label: 'Francia' },
    { value: 'spain', label: 'España' },
    { value: 'italy', label: 'Italia' },
    { value: 'china', label: 'China' },
  ];
  
  const [fileError, setFileError] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const maxSize = 500 * 1024; // 500 KB

      if (selectedFile.size > maxSize) {
        setFileError("El archivo adjunto no puede superar los 500 KB");
        // Puedes realizar acciones adicionales, como deshabilitar el botón de enviar
      } else {
        setFileError(null);
        // Puedes realizar acciones adicionales si es necesario
      }
    }
  };
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);
  



  return (
    <>
    <StatusBar totalPages={5} currentPage={page} />
    <SimpleGrid as="form" bg={"black"} color="white" p={10} borderRadius={"lg"} minChildWidth={"150px"} gap={5} >

      {page === 0 && (
        <>
          <Button bg={"redBrand.900"} color="white" textAlign="center" onClick={nextPage}>Formulario de registro</Button>
        </>
      )}

      {page === 1 && (
        
        <Flex>
            <Img src="img/Ninja_sentado.jpg" width={450} height={700}></Img>

            
            <SimpleGrid minChildWidth={"310px"} gap={5}>

              <Text fontSize="xl" fontWeight="bold">Datos personales</Text>
              <Input placeholder="Nombre" required />
              <Input placeholder="Apellidos" required />
              <Input placeholder="Email" type="email" required />
              <Select placeholder="País de residencia" required>
              {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))}
              </Select>
              <Select placeholder="Prefijo" required>
              {options.map((option, index) => (
        <option key={index} value={option.phone_code}>
          {option.phone_code}
        </option>
      ))}
              </Select>
              <Input placeholder="Número de teléfono" type="tel" required />
              <Input placeholder="Linkedin" type="url" />
              <Input placeholder="Currículum" type="file" accept=".pdf,.jpg" required onChange={handleFileChange}/>
              {fileError && <Text color="red">{fileError}</Text>}
              <Button bg={"redBrand.900"} color="white" textAlign="center" onClick={prevPage}>Anterior</Button>
              <Button bg={"redBrand.900"} color="white" textAlign="center" onClick={nextPage}>Siguiente</Button>
            </SimpleGrid>
          </Flex>
      )}

      {page === 2 && (
        <Flex>
          <Img src="img/_d23039a4-b4ef-4dcf-b1be-2b3efaad5863.jpeg" width={500} height={500}></Img>

          <SimpleGrid minChildWidth={"310px"} gap={5}>
          <Text fontSize="xl" fontWeight="bold">Empleo</Text>
          <Checkbox defaultChecked>Busco empleo</Checkbox>
          <Input placeholder="Expectativa salarial" type="range" min="10000" max="50000" required />
          <Select placeholder="Modalidad de trabajo" multiple required>
            {/* Aquí puedes agregar las opciones para las modalidades de trabajo */}
          </Select>
          <Select placeholder="Movilidad" required>
            <option>Si</option>
            <option>No</option>
          </Select>
          <Select placeholder="Ubicación" multiple required>
            {/* Aquí puedes agregar las opciones para las ciudades */}
          </Select>

          <Checkbox required>Acepto las políticas de privacidad y uso de la aplicación</Checkbox>

          <Button bg={"redBrand.900"} color="white" textAlign="center" onClick={prevPage}>Anterior</Button>
          <Button bg={"redBrand.900"} color="white" textAlign="center" onClick={nextPage}>Siguiente</Button>
          </SimpleGrid>
        </Flex>
      )}
      {page === 3 && (
        <Flex>
        <Img src="img/_7a98cf39-6b79-4365-8442-423e5ff61d8c.jpg" width={500} height={600}></Img>

        <SimpleGrid minChildWidth={"310px"} gap={5}>
          <Text fontSize="xl" fontWeight="bold">Resumen</Text>
          <Text>Nombre: {formData.nombre}</Text>
          <Text>Apellidos: {formData.apellidos}</Text>
          <Text>Email: {formData.email}</Text>
          <Text>País de residencia: {formData.pais}</Text>
          <Text>Número de teléfono: {formData.telefono}</Text>
          <Text>Linkedin: {formData.linkedin}</Text>
          <Text>Busco empleo: {formData.buscoEmpleo ? 'Sí' : 'No'}</Text>
          <Text>Expectativa salarial: {formData.expectativaSalarial}</Text>
          <Text>Modalidad de trabajo: {formData.modalidadTrabajo}</Text>
          <Text>Movilidad: {formData.movilidad}</Text>
          <Text>Ubicación: {formData.ubicacion}</Text>
      
          <Button bg={"redBrand.900"} color="white" textAlign="center" onClick={prevPage}>Anterior</Button>
          <Button bg={"redBrand.900"} color="white" textAlign="center" type="submit" onClick={nextPage}>Guardar</Button>
          </SimpleGrid>
          </Flex>
    )}
      {page === 4 && (
        <Flex>
          <Img src="img/Ninja_negro.jpg" width={400} height={400}></Img >

        <SimpleGrid minChildWidth={"310px"} gap={5}>
          <Text fontSize="xl" fontWeight="bold">¡EHORABUENA!</Text>
          <Text fontSize="xl" fontWeight="bold">Ya eres parte de la comunidad NINJA</Text>
          <Button bg={"redBrand.900"} color="white" textAlign="center" onClick={prevPage}>Anterior</Button>
        </SimpleGrid>
        
      </Flex>
    )}
  </SimpleGrid >
  </>
  )
}
