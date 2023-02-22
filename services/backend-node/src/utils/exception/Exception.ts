/**
 * 例外クラス
 */
class Exception extends Error {
  private readonly _status: number;

  constructor(message: string, status: number = 500) {
    super(message);

    this._status = status;

    // instanceof演算子が有効になるよう設定
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  get status() {
    return this._status;
  }

  get isInternalError() {
    return this._status >= 500;
  }
}

export default Exception;
