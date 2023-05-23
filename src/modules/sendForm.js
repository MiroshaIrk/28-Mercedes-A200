const sendForm = (formClass) => {
  const formTestDrive = document.querySelector(formClass);

  formTestDrive.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {};
    for (let { name, value } of formTestDrive.elements) {

      if (name) {
        data[name] = value;
      }
    }


    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),

    })
      .then(res => {

        if (res.status === 200 || res.status === 201) {
          return res.json();
        } else {
          throw new Error(res.status)
        }
      })
      .then(data => {
        alert('Данные успешно сохранены!');
        console.log(data);
        formTestDrive.reset();
      })
      .catch(err => {
        alert('Произошла ошибка статуса ' + err.message);
        console.log(err)
      })
  });

}


export default sendForm;

// https://jsonplaceholder.typicode.com