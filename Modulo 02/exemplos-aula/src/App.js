import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import getAgeFrom from "./helpers/DateHelpers";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";

export default function App() {
  const [name, setName] = useState('Murillo Filho');
  const [birthDate, setBirthDate] = useState('Murillo Filho');
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    document.title = name;
  }, [name])

  function toogleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }
  function handerNameChange(newName) {
    setName(newName);
  };

  function handerBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }
  return (
    <div>
      <Header>
        Casa
      </Header>

      <Main>
        {
          showTimer &&
          (
            <div className="text-right mt-1">
              <Timer />
            </div>
          )
        }


        <TextInput
          id="textInput"
          labelInput="Digite o seu nome:"
          inputValue={name}
          onInputChange={handerNameChange} />

        <CheckboxInput 
        id="checkboxInput"
        labelDescription="Mostrar cronômetro"
        onChackboxChange={toogleShowTimer}/>

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
