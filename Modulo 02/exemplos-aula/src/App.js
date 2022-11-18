import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import getAgeFrom from "./helpers/DateHelpers";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";
import OnlineOffline from "./components/OnlineOffline";

export default function App() {
  const [name, setName] = useState('Murillo Filho');
  const [birthDate, setBirthDate] = useState('Murillo Filho');
  const [showTimer, setShowTimer] = useState(false);
  const [online, setIsOnline] = useState(true);

  useEffect(() => {
    function toggleIsOnline() {
      setIsOnline(true);
    }

    function toggleIsOffline() {
      setIsOnline(false);
    }


    window.addEventListener('online', toggleIsOnline);
    window.addEventListener('offline', toggleIsOffline);

    return () => {
      window.removeEventListener('online', toggleIsOnline);
      window.removeEventListener('offline', toggleIsOffline)
    }

  }, []);


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
    <>
      <Header>
        Casa
      </Header>

      <OnlineOffline isOnline={online} />
      <Main>
        {
          showTimer &&
          (
            <div className="text-right mt-5">
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
          onChackboxChange={toogleShowTimer} />

        <DateInput
          id="dateInput"
          labelInput='Informe a sua data de aniversário'
          inputValue={birthDate}
          onInputChange={handerBirthDateChange} />
        <p>
          O seu nome é {name}, com {name.length} e você possui {getAgeFrom(birthDate)} anos
        </p>
      </Main>

    </>
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
