import css from '../css/main.css';
import API from './fetchCountries.js';
import countryCard from '../templates/country-template.hbs';
import countryList from '../templates/countries-list-tpl.hbs';
import debounce from 'lodash.debounce';
import getRefs from './refs.js';
import notification from './notification.js'
const refs = getRefs();

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  const inputValue = e.target.value.trim();
   
  if (inputValue !== '') {
   API.fetchCountry(inputValue).then(renderCountryCard);
    }
  else {
      refs.card.innerHTML = '';
    }

}

function renderCountryCard(country) {
  const markup = countryCard(country);
  const listMarkup = countryList(country);
  const length = country.length;

  if (length === 1) {
    refs.card.innerHTML = markup;
  } else if (length > 1 && length < 11) {
    refs.card.innerHTML = listMarkup;
  } else if (length > 10) {
       refs.card.innerHTML = '';
notification()
  }
}
