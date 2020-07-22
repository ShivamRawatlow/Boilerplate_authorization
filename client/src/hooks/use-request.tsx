import React from 'react';
import { useState } from 'react';
import { IUser } from '../interfaces/i_user';
import axiosextension from '../utils/axiosextension';

interface IUseRequest {
  url: string;
  method: string;
  body: IUser | {};
  onSuccess(data: any): any;
}

export default ({ url, method, body, onSuccess }: IUseRequest) => {
  const [errors, setErrors] = useState<JSX.Element | null>(null);

  const doRequest = async () => {
    try {
      setErrors(null);

      //@ts-ignore
      const response = await axiosextension[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      console.log(err);
      if (!err.response) {
        setErrors(
          <div className='alert alert-danger'>
            <h4>Ooops....</h4>
            <span className='my-0'>something went wrong</span>
          </div>
        );
      } else {
        setErrors(
          <div className='alert alert-danger'>
            <h4>Ooops....</h4>
            <ul className='my-0'>
              {err.response.data.errors.map((err: Error) => (
                <li key={err.message}>{err.message}</li>
              ))}
            </ul>
          </div>
        );
      }
    }
  };

  return { doRequest, errors };
};
