import { ERROR_MESSAGE } from '../../src/constants/Messages.js';

class DefaultError extends Error {
  /**
   * @param {string} message - 에러메시지
   */
  constructor(message) {
    super(message);
    this.message = `${ERROR_MESSAGE.ERROR} ${message}`;
    this.name = this.constructor.name;
  }
}

export default DefaultError;
