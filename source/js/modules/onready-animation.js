export default () => {
  window.addEventListener(`load`, () => {
    const body = document.querySelector(`body`);
    body.classList.add(`active`);
  });
};
