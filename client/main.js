import { getNode, getStorage, setStorage } from './lib/index.js';

const textField = getNode('#textField');

function handleTextField() {
  const value = this.value;

  setStorage('text', value);
}

textField.addEventListener('input', handleTextField);
