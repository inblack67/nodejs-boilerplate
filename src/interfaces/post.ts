export interface IPost {
  title: string;
  author: string;
  hide: boolean;
  description?: string;
}

export interface IResponseDetails<T> {
  status: number;
  success: boolean;
  message?: string;
  data?: T;
}
