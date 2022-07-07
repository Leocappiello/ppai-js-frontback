import React from 'react'
import { useForm } from "react-hook-form";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import Calendar from '../Calendar/Calendar';
import { Link } from 'react-router-dom';

const Turnos = (recurso) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = data => {
        console.log(data);
        
    
    };
    console.log(recurso)

    const handleDateClick = (dateClickInfo) => { // bind with an arrow function
        console.log(dateClickInfo)
      }

    // const SelectRecurso = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    //     <>
    //       <label>{label}</label>
    //       <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
    //         {/* {Array.map(elemento=>{
    //             return(
    //                 <option value={elemento}>{elemento}</option>
    //             )
    //         })} */}

    //         <option value="1">1</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>

    //       </select>
    //     </>
    //   ));


  return (
    <>
    <div className='ms-3 mt-5'><h1>Selección de turnos</h1></div>
    <div >
    
        <div className='ms-5' style={{width:'800px',height:'500px'}}>
           {recurso? <Link to={'/calendar'}/>:<></>}
            {/* <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin  ]}
               
                weekends={false}
                dateClick={handleDateClick()}
                events={[
                    { title: 'event 1', date: '2022-07-03' },
                    { title: 'event 2', date: '2022-07-04' }
                ]}
            /> */}
           

            <div>
            {/* <form onSubmit={handleSubmit(onSubmit)} className='ms-4 mt-5'>
      
                    
                    <input type='date'></input>

                    <button className='btn btn-info ms-3' type='submit'> Tomar selección</button>

                </form> */}
            </div>
        </div>
        


    
    </div>
    
    </>
  )
  
}

export default Turnos