import { CustomStatusCode } from '@/common/messages/custom-status.code';
import { Messages } from '@/common/messages/succuss';

export type SuccessPayload<T = undefined> = {
  status: CustomStatusCode;
  success: true;
  message: string;
  data?: T;
};

export function successResponse(): SuccessPayload {
  return {
    status: CustomStatusCode.OK,
    success: true,
    message: Messages.success.opt,
  };
}

export function successResponseWithData<T>(data: T): SuccessPayload<T> {
  return {
    status: CustomStatusCode.OK,
    success: true,
    message: Messages.success.opt,
    data,
  };
}

// export function successOptWithPagination(data, price?, details?) {
//   return {
//     status: 200,
//     success: true,
//     message: Messages.success.opt,
//     data: data.docs || '',
//     total: data.total || 0,
//     limit: data.limit || '',
//     page: parseInt(data.page) || '',
//     pages: data.pages || '',
//     price: price,
//     details: details,
//   };
// }
