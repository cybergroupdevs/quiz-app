import React, { Component } from 'react'
import styles from './ComponentTester.module.css'
// import Card from '../../components/UI/Card/Card'
// import Backdrop from '../../components/UI/Backdrop/Backdrop'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'

class ComponentTester extends Component {
  render() {
    return (
      <div className={styles.ComponentTester}>
        {/* <Backdrop show={true} />
        <Card /> */}
        <Modal show={true}>
          <Spinner></Spinner>
        </Modal>
      </div>
    )
  }
}

export default ComponentTester
