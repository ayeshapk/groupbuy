export interface ErrorMessage {
  status: any;
  message: any;
  response: {
    body: {
      messages: any;
      message: any;
    };
  };
}
export interface ResponseMessage<T> {
  text: string;
  body: {
    data: T;
    success: boolean,
    errror: {
      message: string
    }
  };
}

export interface AddDataResponseMessage<T> {
  req:{
    _data: T
  }
}


export interface Payload<T> {
  text: string;
  playload:T;
}