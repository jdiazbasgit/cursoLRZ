import React, { Component, useContext, useState } from 'react'
//import { renderMatches } from 'react-router-dom'
import screenshot from './captura_pantalla.avif'

const Intro = () => {

    return(
  

            <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:'66%', textAlign:"left",fontWeight:"light"}}>
              
            <h1 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light"}}>¿Qué es <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a>?
              </h1>
              <br></br>
              <br></br>
              <h5 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light",lineHeight: 1.5}}>
                <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a> es la plataforma para calcular automáticamente las dietas de los conductores de camión y autobús, tanto en el transporte nacional como internacional por carretera. Simplemente sube los archivos del tacógrafo, del vehículo o del conductor, y <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a> te dará un reporte de las actividades, del cumplimiento de jornadas, y un desglose de las dietas</h5>
              <br></br>
              <br></br><br></br>
              <br></br>
              <img src={screenshot} className="d-inline-block" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%",height:"100%"}} alt="" />
              <br></br><br></br>
              <br></br>
            <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light"}}>¿Quién está detrás de <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a>?</h2>
            <br></br>
              <br></br>
              <h5 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light",lineHeight: 1.5}}><a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a> es uno de los productos ofrecidos por <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://traxain.com'>Traxain</a>. Traxain S.L es una Startup española dedicada a solucionar los problemas del transpote por carretera a través del uso de la tecnología. Trabajamos constantemente para mejorar la vida de todos los implicados en este sector, que es el corazón de toda la economía moderna</h5>
              <br></br>
              <br></br><br></br>
              <br></br>
            <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light"}}>¿Por qué creamos <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a>?</h2>
            <br></br>
              <br></br>
              <h5 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light",lineHeight: 1.5}}>La escasez internacional de conductores de camión ha provocado aumentos significativos en los costes de las empresas de transporte. En este contexto es más necesario que nunca optimizar nuestro flujo de efectivo, y hacer el mejor uso posible de nuestros recursos.
        
              <br></br><br></br>
              Para ello <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a> ofrece 5 capacidades clave:
              <br></br>
              + Un dashboard para analizar la productividad de cada empleado.
              <br></br>
              + Previsión y cálculo automático de dietas.
              <br></br>
              + Previsión y cálculo automático de Complementos por desplazamiento.
              <br></br>
              + Detección de actividades anómalas en el tacógrafo y aclaración por SMS.
              <br></br>
              + Cálculo y alertas de cumplimiento de jornadas.<br></br>
              <br></br><br></br>
              <br></br> </h5>
            <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light"}}>¿Qué hace especial a <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a>?</h2>
            <br></br>
              <br></br>
              <h5 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light",lineHeight: 1.5}}>Lo que hace especial a <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a> es que utiliza directamente los datos del Tacógrafo digital de las unidades, para lo que trabajamos con nuestro socio Continental. Contar con los datos del Tacógrafo nos permite calcular exactamente los costes en los que tendrá que incurrir la empresa utilizando los datos que son legalmente vinculantes.
              <br></br><br></br>
        
                  Así garantizamos no sólo ahorramos tiempo y problemas a nuestros clientes, sino que aseguramos que en el futuro no vendrá un exempleado reclamando tiempo que no ha trabajado.
              </h5>
              
            <br></br>
              <br></br><br></br>
              <br></br>
             <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light"}}>¿Cómo lo hacemos?</h2>
             <br></br>
              <br></br>
              <h5 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light",lineHeight: 1.5}}>Nuestro objetivo es que tanto las empresas de transporte como los conductores puedan saber por anticipando cuanto van a cobrar, y saber que este cálculo se ha realizado de manera imparcial utilizando los datos del Tacógrafo, que es imposible falsificar.
        
              <br></br>
              <br></br>
        Para ello ofrecemos un Dashboard que permite ver en tiempo real las actividades de los empleados, y comprobar el tiempo de conducción descanso, otros trabajos, y disponibilidad. Con este Dashboard se pueden ver comparar los tiempos de trabajo de los distintos empleados, y se puede ver una estimación de salario que habrá que pagar a final de mes.
        
        <br></br>
              <br></br>
        Adicionalmente nuestro sistema permite, tanto al conductor como al administrador, introducir datos relativos a cada actividad, e introducir los datos de origen y destino de cada viaje.
        
        <br></br>
              <br></br>
        En caso de detectar actividades inusuales como tiempos de Disponibilidad u otros trabajos demasiado largos, la plataforma envía un SMS automático al conductor, mandándole un enlace especial en el que puede introducir los detalles de esta actividad. La empresa puede exigir al empleado aportar el detalle de estas actividades en caso de que sospeche de un posible fraude.
        
        </h5>
              
             <br></br>
              <br></br><br></br>
              <br></br>
            <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light"}}>¿Es complicado de instalar?</h2>
            <br></br>
              <br></br>
              <h5 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light",lineHeight: 1.5}}>Para nada, basta con tener un usuario y una contraseña, y acceder a <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a> para usarlo.</h5>
              
             <br></br>
              <br></br><br></br>
              <br></br>
            <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light"}}>¿No estás convencido aún?</h2>
            <br></br>
              <br></br>
              <h5 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light",lineHeight: 1.5}}>No hay problema. Ponte en contacto con nosotros escribiendo a <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='mailto:ignacio@traxain.com'> ignacio@traxain.com</a>, en <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://traxain.com'>Traxain.com</a> o al teléfono <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='tel:+34638269633'> +34 638269633 </a> y podrás probar <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a> sin compromiso.</h5>
              
             <br></br>
              <br></br><br></br>
              <br></br>
            <h2 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light"}}>¿No es lo que buscabas?</h2>
            <br></br>
              <br></br>
              <h5 nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica",fontWeight:"light",lineHeight: 1.5}}>Si <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color:"#5A5A5A",fontFamily:"Helvetica"}} href='https://drive-team.es'>Drive-Team.es</a>  no es lo que buscas, ¡Dinos qué buscas! Podemos ponerte en contacto con otros proveedores, o diseñar una solución para tí sin compromiso.
        
        </h5>
              
             <br></br>
              <br></br><br></br>
              <br></br></td>
        )


}

export default Intro