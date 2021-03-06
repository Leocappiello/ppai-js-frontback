//componente para buscar todos los recursos, tomar la seleccion de uno de ellos y setear recurso seleccionado en localStorage
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Navigate } from "react-router-dom";
import RecursoSeleccionado from '../RecursoSeleccionado/RecursoSeleccionado';
import Select from 'react-select'
const Recurso = () => {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [tipoRecurso, SetTipoRecurso] = useState('')
  const [value, setValue] = useState();
  const [resource, setResource] = useState([])
  const [arrResource, setArrResource] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let url = `http://localhost:3000/tipos`
      const response = await fetch(url);
      const newData = await response.json();
      setResource(newData)
    };

    fetchData();
    extractValues(resource)
    console.log(arrResource);
  })

  function extractValues(resource){
    console.log("recurso",resource);
  }

  const onSelectChange = (value) => {
    SetTipoRecurso(value.value)
    console.log('Valor del tipo de recurso seleccionado', value.value)
    localStorage.setItem('tipoRecurso', value.value)
    setValue(value)
  }

  return (
    <>
      <h1 className='mt-5 ms-5' >Selección de tipo de recurso</h1>
      <div >
        <div style={{ width: '300px', margin: '0 auto' }}>
          {
            resource.map((elem) => {
              return (elem.map(resource => {
                <div>
                  <p>{resource.type}</p>
                </div>
              }))
            })
          }
        </div>
        <>
          {tipoRecurso ? <RecursoSeleccionado tipoRecurso={tipoRecurso} /> : <></>}
        </>
      </div>
    </>
  )
}

export default Recurso