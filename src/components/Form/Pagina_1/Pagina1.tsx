import React, { useState, useEffect, ChangeEvent,  } from 'react';
import {
  SimpleGrid,
  Text,
  Input,
  Select,
  Button,
  Flex,
  Img,
  Box,
} from '@chakra-ui/react';
import data from './json_prefijos.json';
import { center } from '@antv/g2plot/lib/plots/sankey/sankey';

export default function Pagina1({ nextPage, prevPage, formData, updateFormData }) {
  const [page, setPage] = useState(1);

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [pais, setPais] = useState('');
  const [codigoTelefono, setCodigoTelefono] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [curriculum, setCurriculum] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const countries = [
    { value: 'spain', label: 'España' },
    { value: 'usa', label: 'Estados Unidos' },
    { value: 'canada', label: 'Canadá' },
    { value: 'mexico', label: 'México' },
    { value: 'uk', label: 'Reino Unido' },
    { value: 'germany', label: 'Alemania' },
    { value: 'france', label: 'Francia' },
    { value: 'italy', label: 'Italia' },
    { value: 'china', label: 'China' },
  ];

  const options = data;
  const handleNextClick = () => {
    if (validateForm()) {
      nextPage(); // Llama a nextPage aquí para avanzar a la siguiente página
    }
  };
  const validateForm = () => {
    setFileError(null);

    // Validar nombre
    if (!nombre.trim()) {
      return setFileError('Nombre es obligatorio');
    }

    // Validar que el nombre no contenga números
    if (/\d/.test(nombre)) {
      return setFileError('Nombre no puede contener números');
    }

    // Validar apellidos
    if (!apellidos.trim()) {
      return setFileError('Apellidos es obligatorio');
    }

    // Validar que los apellidos no contengan números
    if (/\d/.test(apellidos)) {
      return setFileError('Apellidos no pueden contener números');
    }

    // Validar email
    if (!email.trim()) {
      return setFileError('Email es obligatorio');
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return setFileError('Formato de email no válido');
    }

    // Validar país
    if (!pais.trim()) {
      return setFileError('País es obligatorio');
    }

    // Validar código de teléfono y número de teléfono
    if (!codigoTelefono.trim() || !numeroTelefono.trim()) {
      return setFileError('Teléfono es obligatorio');
    }

    // Validar que el número de teléfono solo contenga dígitos
    if (!/^\d+$/.test(numeroTelefono)) {
      return setFileError('Número de teléfono solo puede contener dígitos');
    }

    return true;
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const maxSize = 500 * 1024; // 500 KB

      if (selectedFile.size > maxSize) {
        setFileError('El archivo adjunto no puede superar los 500 KB');
      } else {
        setFileError(null);
        setCurriculum(selectedFile);
      }
    }
  };



  return (
    <Flex>
      <Img src="img/Ninja_sentado.jpg" width={500} height={700}></Img>
      <SimpleGrid minChildWidth={'310px'} gap={1} margin={4} >
        <Text fontSize="xl" fontWeight="bold">
          Datos personales
        </Text>
        <Input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <Input
          placeholder="Apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          required
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Select
          placeholder="País de residencia"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          required
        >
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </Select>
        <Flex>
          <Select
            placeholder="34"
            value={codigoTelefono}
            onChange={(e) => setCodigoTelefono(e.target.value)}
            required
          >
            {options.map((option, index) => (
              <option key={index} value={option.phone_code}>
                {option.phone_code}
              </option>
            ))}
          </Select>
        </Flex>
        <Input
          placeholder="Número de teléfono"
          type="tel"
          value={numeroTelefono}
          onChange={(e) => setNumeroTelefono(e.target.value)}
          required
        />
        <Input
          placeholder="Linkedin"
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <Input
          placeholder="Currículum"
          type="file"
          accept=".pdf,.jpg"
          required
          onChange={handleFileChange}
          
        />
        {fileError && <Text color="red">{fileError}</Text>}
        <Button
          bg={'redBrand.900'}
          color="white"
          textAlign="center"
          onClick={prevPage}
          
        >
          Anterior
        </Button>
        <Button
          bg={'redBrand.900'}
          color="white"
          textAlign="center"
          onClick={handleNextClick}
        >
          Siguiente
        </Button>
      </SimpleGrid>
    </Flex>
  );
}
