 import ContainerModal from '../ContainerModal/ContainerModal'
import './App.css'
 // import React from 'react'
 // import ButtonModal from '../ButtonModal/ButtonModal'
 // import Modal from '../Modal/Modal'
 // import Title from '../Title/TitleModal'
 

const App = () => {
 return(
 <section className='container'>
  <ContainerModal textButton='Button01' textModal='Modal 01'/>
  <ContainerModal textButton='Button02' textModal='Modal 02'/>
  <ContainerModal textButton='Button02' textModal='Modal 03'/>
 </section>
  )
}

export default App
