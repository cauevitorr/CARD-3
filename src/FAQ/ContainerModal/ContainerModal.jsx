import React from 'react'
import ButtonModal from '../ButtonModal/ButtonModal'
import Modal from '../Modal/Modal'
//import nome da imagem from 'caminho da imagem'

const ContainerModal = ({textButton, textModal}) => {

 const [modal,setModal] = React.useState(false)

 return(
  <>
  <ButtonModal img={modal ? image1 : image2} text={textButton} modal={modal} setModal={setModal}/>
  <Modal modal={modal} text={textModal}/>
  </>
 )
 
}

export default ContainerModal
