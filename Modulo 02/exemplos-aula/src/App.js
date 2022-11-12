import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import getAgeFrom from "./helpers/DateHelpers";


export default function App() {
  const [name, setName] = useState('Murillo Filho');
  const [birthDate, setBirthDate] = useState('Murillo Filho');

  function handerNameChange(newName) {
    setName(newName);
  }

  function handerBirthDateChange(newBirthDate) {
    console.log(newBirthDate);
    setBirthDate(newBirthDate);
  }
  return (
    <div>
      <Header>
        Casa
      </Header>

      <Main>
        <TextInput
          id="textInput"
          labelInput="Digite o seu nome:"
          inputValue={name}
          onInputChange={handerNameChange} />

        <DateInput
          id="dateInput"
          labelInput='Informe a sua data de aniversário'
          inputValue={birthDate}
          onInputChange={handerBirthDateChange} />
        <p>
          O seu nome é {name}, com {name.length} e você possui {getAgeFrom(birthDate)} anos
        </p>
      </Main>

    </div>
  );
}


//Exemplo de utilização de PROPS

// <Test
//   number={10}
//   string="tste"
//   visible
//   data={{ a: 1, b: 2 }}
//   onClick={() => console.log('click')}
// ></Test>
