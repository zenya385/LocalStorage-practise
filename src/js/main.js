import throttle from 'lodash.throttle';
import * as serviseLocalSrorage from './serviseLocalSrorage.js';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedbackData';

const form = document.querySelector('.js-feedback-form');
// const textarea = document.querySelector('.js-feedback-form  textarea');
// const input = document.querySelector('.js-feedback-form  input');

// // ============= load, save ==================
// const save = (key, value) => {
//   try {
//     localStorage.setItem(key, JSON.stringify(value));
//   } catch (error) {
//     console.error('Помилка при збереженні даних у сховище:', error);
//   }
// };

// const load = key => {
//   try {
//     const savedData = localStorage.getItem(key);
//     return JSON.parse(savedData);
//   } catch (error) {
//     console.error('Помилка при отриманні даних зі сховища:', error);
//     // return null;
//   }
// };
const formData = {};

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  serviseLocalSrorage.save(STORAGE_KEY, formData);
}

function populateTextarea() {
  const saveData = serviseLocalSrorage.load(STORAGE_KEY);
  if (saveData) {
    for (const key in saveData) {
      form.elements[key].value = saveData[key];
    }
  }
}

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));
// form.addEventListener('input', throttle(onTextareaInput, 500));
// textarea.addEventListener('input', onTextareaInput);
// input.addEventListener('input', onTextareaInput);
populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// function onTextareaInput(e) {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//   console.log('formData:>>', formData);
// }

// function populateTextarea() {
//   // const savedMessage = localStorage.getItem(STORAGE_KEY);
//   // const parsedSavedMessage = JSON.parse(savedMessage);
//   const parsedSavedMessage = JSON.pars(localStorage.getItem(STORAGE_KEY));
//   //  if (JSON.parse(localStorage.getItem(STORAGE_KEY))) {
//   if (parsedSavedMessage) {
//     // input.value = parsedSavedMessage.name;
//     // textarea.value = parsedSavedMessage.message;

//     //2 анаалог коду вище (більш оригінальний не потрібно звертатись до input окремо)
//     //3 console.log('form.elements:>>', form.elements);
//     //3 form.elements[name];
//     for (const key in parsedSavedMessage) {
//       form.elements[key].value = parsedSavedMessage[key];
//     }
//   }
//   // console.error('Помилка при отриманні даних зі сховища:', error);

//   console.log('qwerty:>>');
// }

// // ========================== try catch ========================

// function onTextareaInput(e) {
//   formData[e.target.name] = e.target.value;
//   try {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//     console.log('formData:>>', formData);
//   } catch (error) {
//     console.error('Помилка при збереженні даних у сховище:', error);
//   }
// }

// function populateTextarea() {
//   try {
//     const parsedSavedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     if (parsedSavedMessage) {
//       for (const key in parsedSavedMessage) {
//         form.elements[key].value = parsedSavedMessage[key];
//       }
//     }
//   } catch (error) {
//     console.error('Помилка при отриманні даних зі сховища:', error);
//   }
// }
