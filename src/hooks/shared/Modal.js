import React, { Component, Fragment } from 'react'
// import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class MyModal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }
  render () {
    if (!this.props.show) {
      return null
    }
    return (
      <Fragment>
        <div>
          <div>Hello Modal</div>
          <div className='content'>
            {this.props.children}
          </div>
        </div>
      </Fragment>
    )
  }
}

// function MyModal () {
//   const [open, setOpen] = React.useState(false)
//
//   return (
//     <Modal
//       closeIcon
//       open={open}
//       trigger={<Button>Show Modal</Button>}
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//     >
//       <Header icon='archive' content='Archive Old Messages' />
//       <Modal.Content>
//         <p>
//           Your inbox is getting full, would you like us to enable automatic
//           archiving of old messages?
//         </p>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button color='red' onClick={() => setOpen(false)}>
//           <Icon name='remove' /> No
//         </Button>
//         <Button color='green' onClick={() => setOpen(false)}>
//           <Icon name='checkmark' /> Yes
//         </Button>
//       </Modal.Actions>
//     </Modal>
//   )
// }
//
// export default MyModal
