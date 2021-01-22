//https://khalilstemmler.com/articles/enterprise-typescript-nodejs/handling-errors-result-class/

/**
 * This allows to return a validation result like isSuccess/isFailure and a list of error codes
 */
export class ChrValidationResult<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public errors: string[];
  private _value: T;

  private constructor(isSuccess: boolean, errors?: string[], value?: T) {
    if (isSuccess && errors) {
      throw new Error(`InvalidOperation: A result cannot be 
          successful and contain an error`);
    }
    if (!isSuccess && !errors) {
      throw new Error(`InvalidOperation: A failing result 
          needs to contain an error message`);
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.errors = errors;
    this._value = value;

    Object.freeze(this);
  }

  /**
   * On successful validation we might get the valid value
   */
  public getValue(): T {
    if (!this.isSuccess) {
      throw new Error(`Cannot retrieve the value from a failed result.`);
    }

    return this._value;
  }

  /**
   * Creates a success result with the given value
   * @param value
   */
  public static ok<U>(value?: U): ChrValidationResult<U> {
    return new ChrValidationResult<U>(true, null, value);
  }

  /**
   * Creates a failure result with the given error
   * @param error
   */
  public static fail<U>(errors: string[]): ChrValidationResult<U> {
    return new ChrValidationResult<U>(false, errors);
  }

  /**
   * combine all validation results in the array
   * @param results
   */
  public static combine(
    results: ChrValidationResult<any>[]
  ): ChrValidationResult<any> {
    let isSuccess = true;
    let errors: string[] = [];
    let validationResult: ChrValidationResult<any> = ChrValidationResult.ok<any>();

    for (let result of results) {
      if (result.isFailure) {
        isSuccess = false;
        errors = errors.concat(result.errors);
      }
    }
    if (!isSuccess) {
      validationResult = ChrValidationResult.fail(errors);
    }
    return validationResult;
  }
}
