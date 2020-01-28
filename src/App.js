import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Client as Styletron } from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {StatefulInput} from 'baseui/input';
import {Button} from 'baseui/button';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
});



export default function App() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <StatefulInput />
          <Button onClick={() => alert("hola mundo")}>Enviar</Button>
          <Modal
      onClose={() => setIsOpen(false)}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
    >
      <ModalHeader>Hello world</ModalHeader>
      <ModalBody>
        Proin ut dui sed metus pharetra hend rerit vel non
        mi. Nulla ornare faucibus ex, non facilisis nisl.
        Maecenas aliquet mauris ut tempus.
      </ModalBody>
      <ModalFooter>
        <ModalButton>Cancel</ModalButton>
        <ModalButton>Okay</ModalButton>
      </ModalFooter>
    </Modal>
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}

