export default class Modal {
  constructor(id, buttonId, shouldCloseOverlay = true) {
    this.modal = document.getElementById(id)
    this.openBtn = document.getElementById(buttonId)
    this.overlay = document.getElementById('overlay')
    this.shouldCloseOverlay = shouldCloseOverlay
    this.closeButton = this.modal.querySelector('.modal-close');
    this.handleCloseClick = () =>{
      this.close();
    }
    
    this.handleOverlayClick = () => {
      if(this.isOpen()) {
        this.close();
      }
    }

    this.#initOpen(buttonId)
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose() {
  
    this.closeButton.addEventListener('click', this.handleCloseClick);

    if (this.shouldCloseOverlay) {
     this.overlay.addEventListener('click', this.handleOverlayClick);
    }
   
  }

  open() {
    document.querySelectorAll('.modal-showed').forEach(modal => {
    modal.classList.remove('modal-showed');
    });
    this.modal.classList.add('modal-showed')
    this.overlay.classList.add('overlay-showed')

    this.#initClose();
  }

  close() {
    if (this.shouldCloseOverlay) {
      this.overlay.removeEventListener('click', this.handleOverlayClick);
    }

    this.closeButton.removeEventListener('click', this.handleCloseClick);
    this.modal.classList.remove('modal-showed')
    this.overlay.classList.remove('overlay-showed')
  }
  
  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }
  
};