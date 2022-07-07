import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction'
import Swal from 'sweetalert2'
import { Link, useNavigate  } from 'react-router-dom';

const Calendar = () => {
  let navigate = useNavigate();
  const [fecha,setFecha]=useState()
    const handleDateClick = dateClickInfo => { 
        console.log(dateClickInfo.dateStr)
        let date = dateClickInfo.dateStr;
        setFecha(date)
        Swal.fire('Fecha seleccionada', dateClickInfo.dateStr)
        localStorage.setItem('fechaSeleccion', date)


      }

      const confirmarReserva = ()=>{
        var tipo = localStorage.getItem('tipoRecurso')
        var recu = localStorage.getItem('recurso')
        var fecha = localStorage.getItem('fechaSeleccion')
        console.log(tipo,recu,fecha)

        setReserva(...eventos, {title:'Reserva',date:fecha})
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Recurso guardado con éxito',
          showConfirmButton: false,
          timer: 1000
        })
        setTimeout(() => {
          alert( 'Datos del registro: ' 
                 + 'Tipo registro: ' + tipo + 
                 ' Recurso seleccionado: ' + recu + 
                 ' Fecha seleccionada: ' + fecha)
        }, 500);

      }
      const clear = ()=>{
        localStorage.removeItem('tipoRecurso','recurso','fechaSeleccion')
        
        navigate('/')
      }
      const [reserva,setReserva]=useState(eventos)
      var eventos = [
        { title: 'Reservado', date: '2022-07-05' },
        { title: 'Reservado', date: '2022-07-04' },
        { title: 'Reservado', date: '2022-07-12' }
      ]
  return (
    <>
    <h1 className='mt-5 ms-5' style={{fontSize:'35px'}}>Seleccione una fecha </h1>
    <div  style={{width:'500px', margin:'0 auto'}}>
    <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin  ]}
               
                weekends={false}
                dateClick={handleDateClick}
                events={eventos}
            />
            <div className='mt-3'>

            {fecha?<button className='btn btn-success'  onClick={()=>confirmarReserva()}>Confirmar registro </button>:<></>}       
                <button className='btn btn-danger' style={{marginLeft:'5px'}} onClick={()=>clear()}> Regresar</button>
            </div>
            </div>

   </>
  )
}

export default Calendar