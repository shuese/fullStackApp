import React, { PureComponent } from 'react';
import { ErrorMessage } from 'formik';
import Error from './ErrorControl.style';

export interface ErrorComponentProps {
  name: string;
}

class ErrorControl extends PureComponent<ErrorComponentProps> {
  public render() {
    const { name } = this.props;
    return (
      <Error>
        <ErrorMessage name={name}>
          {msg => <i>{msg}</i>}
        </ErrorMessage>
      </Error>
    );
  }
}

export default ErrorControl;
