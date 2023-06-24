const btn = document.querySelector(`.btn-dark`);
      const bgSuccess = document.querySelector(`.bg-success`);

      btn.addEventListener(`click`, (e) => {
        console.log(`Diste click`);
        e.stopPropagation()
      });
      bgSuccess.addEventListener(`click`, (e) => {
        console.log(`Diste click a bgSuccess`);
      });

      const container = document.querySelector(`.container`);
      const span = document.getElementById(`span`);
      let contador = 0;

      container.addEventListener(`click`, (e) => {
        console.log(e.target.classList.contains(`btn-info`));
        console.log(e.target.classList.contains(`btn-danger`));
        if (e.target.classList.contains(`btn-danger`)) {
          contador--;
          span.textContent = contador;
        }
        if (e.target.classList.contains(`btn-info`)) {
          contador++;
          span.textContent = contador;
        }
        e.stopPropagation();
      });

      document.body.addEventListener(`click`, () => {
        console.log(`Diste click`);
      });
      // const btnAumentar = document.querySelector(`.btn-info`);
      // const btnDisminuir = document.querySelector(`.btn-danger`);

      // btnAumentar.addEventListener(`click`, () => {
      //     console.log(`Me diste click en aumentar`);
      //     contador++
      //     span.textContent = contador;

      // })

      // btnDisminuir.addEventListener(`click`, () => {
      //     console.log(`Me diste click en disminuir`);
      //     contador--
      //     span.textContent = contador;

      // })