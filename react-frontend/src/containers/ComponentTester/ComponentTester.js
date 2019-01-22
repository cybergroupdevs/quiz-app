import React, { Component } from 'react'
import styles from './ComponentTester.module.css'
// import Card from '../../components/UI/Card/Card'
// import Backdrop from '../../components/UI/Backdrop/Backdrop'
import Modal from '../../components/UI/Modal/Modal'

class ComponentTester extends Component {
  render() {
    return (
      <div className={styles.ComponentTester}>
        {/* <Backdrop show={true} />
        <Card /> */}
        <Modal show={true}>
          Hellow 
          World<br></br>
          sdf<br></br>
          sdfsdf
          sdfsdf
          dsfsd
        </Modal>
      </div>
    )
  }
}

export default ComponentTester
