import { useState } from 'react';
import Countries from '../components/Countries';
import Country from '../components/country';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';

import { allCountries } from '../data/countries';

export default function ReactCountriesPages() {

  const [countryFilter, setCounterFilter] = useState('Argentina')
  const [visitedCountries, setVisitedCountries] = useState([]);



  function handleCountryInputChange(newCountryFilter) {
    setCounterFilter(newCountryFilter);
  }

  function toogleVistedCountry(countryOrdem) {
    let newVisitedCountries = [...visitedCountries];

    if (newVisitedCountries.indexOf(countryOrdem) !== -1) {
      newVisitedCountries = newVisitedCountries.filter(visitedCountryOrdem => visitedCountryOrdem !== countryOrdem)
    } else {
      newVisitedCountries.push(countryOrdem);
    }

    setVisitedCountries(newVisitedCountries);
  }
  const countryFilterLowecase = countryFilter.toLocaleLowerCase();

  const filterCountries = countryFilterLowecase.trim().length >= 3 ?
    allCountries.filter(({ nomeLowerCase }) =>
      nomeLowerCase.toString().includes(countryFilterLowecase)) :
    allCountries;

  console.log(visitedCountries);
  return (
    <>
      <Header>React Countries</Header>
      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDiscription="Informe o nome do país (pelo menos 3 caracteres)"
          autoFocus
          onInputChange={handleCountryInputChange}
          valueInput={countryFilter}
        ></TextInput>

        {/* <Countries visitedCountries={visitedCountries} onContryClick={toogleVistedCountry}>{filterCountries}</Countries> */}

        <Countries>

          <h2 className="text-center font-semibold">{filterCountries.length} país(es)</h2>

          <h3 className="text-center font-semibold text-sm">{visitedCountries.length} país(es) visitados.</h3>
          {filterCountries.map(country => {
            const isVisited = visitedCountries.indexOf(country.ordem) !== -1;

            return (
              <Country
                isVisited={isVisited}
                onCountryClick={toogleVistedCountry}
                key={country.ordem}>{country}
              </Country>)
          })}
        </Countries>
      </Main>
    </>
  );
}