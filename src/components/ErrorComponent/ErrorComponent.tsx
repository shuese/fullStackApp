import React, { PureComponent } from 'react';
import { ErrorMessage } from 'formik';

export interface ErrorComponentProps {
  name: string;
}

class ErrorComponent extends PureComponent<ErrorComponentProps> {
  public render() {
    const { name } = this.props;
    return (
      <ErrorMessage name={name}>
        {msg => <i style={{ border: '1px solid red' }}>{msg}</i>}
      </ErrorMessage>
    );
  }
}

export default ErrorComponent;
