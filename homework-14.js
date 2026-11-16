export default class Modal {
  constructor(id, buttonId, shouldCloseOverlay = true) {
    this.modal = document.getElementById(id)
    this.openBtn = document.getElementById(buttonId)
    this.overlay = document.getElementById('overlay')
    this.#initOpen(buttonId)
    this.#initClose(shouldCloseOverlay)
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose(shouldCloseOverlay) {
    const closeButton = this.modal.querySelector('.modal-close')

    closeButton.addEventListener('click' , () => {
      this.close();
    })
    if (shouldCloseOverlay) {
      this.overlay.addEventListener('click', () => {
        if(this.isOpen()) {
          this.close();
        }
      })
    }
  }
  addOverlayListener() {
    this.overlay.addEventListener('click', () => {
      this.close();
    })
  }

  open() {
    document.querySelectorAll('.modal-showed').forEach(modal => {
    modal.classList.remove('modal-showed');
    });
    this.modal.classList.add('modal-showed')
    this.overlay.classList.add('overlay-showed')
  };
  close() {
    this.modal.classList.remove('modal-showed')
    this.overlay.classList.remove('overlay-showed')
  };

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  addOpenListener() {
    this.openBtn.addEventListener('click', () => {
      this.open()
    })
  }

  addCloseListener() {
    const closeBtn = this.modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
      this.close();
    });
  }
  
};