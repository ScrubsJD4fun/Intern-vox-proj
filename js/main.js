let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.select'),
          currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');
  }

};

document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('burger').addEventListener('click', function() {
    document.getElementById('header').classList.toggle('open')
  });

  document.getElementById('filter').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hide')
  });

  document.getElementById('modal-close').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hide')
  });

  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      document.getElementById('modal').classList.remove('hide')
    }
  });

  document.getElementById('search-slim').addEventListener('click', function() {
    document.getElementById('search-slide').classList.toggle('slide')
  })



  select();
})
