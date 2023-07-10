const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Помилка при збереженні даних у сховище:', error);
  }
};

const load = key => {
  try {
    const savedData = localStorage.getItem(key);
    return JSON.parse(savedData);
  } catch (error) {
    console.error('Помилка при отриманні даних зі сховища:', error);
    // return null;
  }
};

// export default { save, load };
export { save, load };
