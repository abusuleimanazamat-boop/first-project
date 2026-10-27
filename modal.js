export default class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.addCloseListener();
  }
  open() {
    this.modal.classList.add('modal-showed')
  };
  close() {
    this.modal.classList.remove('modal-showed')
  };

  isOpen(){
    return this.modal.classList.contains('modal-showed');
  }

  addCloseListener() {
    const closeBtn = this.modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
      this.close();
    });
  }
  
};