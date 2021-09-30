// package: emailservice
// file: src/app/protos/emailservice.proto

import * as src_app_protos_emailservice_pb from "../../../src/app/protos/emailservice_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EmailSubmitsubmitEmail = {
  readonly methodName: string;
  readonly service: typeof EmailSubmit;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_emailservice_pb.SubmitRequest;
  readonly responseType: typeof src_app_protos_emailservice_pb.SubmitResponse;
};

export class EmailSubmit {
  static readonly serviceName: string;
  static readonly submitEmail: EmailSubmitsubmitEmail;
}

type SubmitEmailsubmitAsSpamVirusPhish = {
  readonly methodName: string;
  readonly service: typeof SubmitEmail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_emailservice_pb.SubmitRequest;
  readonly responseType: typeof src_app_protos_emailservice_pb.SubmitResponse;
};

type SubmitEmailsubmitAsLegitimate = {
  readonly methodName: string;
  readonly service: typeof SubmitEmail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_emailservice_pb.SubmitRequest;
  readonly responseType: typeof src_app_protos_emailservice_pb.SubmitResponse;
};

type SubmitEmailsubmitAsMarketing = {
  readonly methodName: string;
  readonly service: typeof SubmitEmail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_emailservice_pb.SubmitRequest;
  readonly responseType: typeof src_app_protos_emailservice_pb.SubmitResponse;
};

export class SubmitEmail {
  static readonly serviceName: string;
  static readonly submitAsSpamVirusPhish: SubmitEmailsubmitAsSpamVirusPhish;
  static readonly submitAsLegitimate: SubmitEmailsubmitAsLegitimate;
  static readonly submitAsMarketing: SubmitEmailsubmitAsMarketing;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class EmailSubmitClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  submitEmail(
    requestMessage: src_app_protos_emailservice_pb.SubmitRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_emailservice_pb.SubmitResponse|null) => void
  ): UnaryResponse;
  submitEmail(
    requestMessage: src_app_protos_emailservice_pb.SubmitRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_emailservice_pb.SubmitResponse|null) => void
  ): UnaryResponse;
}

export class SubmitEmailClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  submitAsSpamVirusPhish(
    requestMessage: src_app_protos_emailservice_pb.SubmitRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_emailservice_pb.SubmitResponse|null) => void
  ): UnaryResponse;
  submitAsSpamVirusPhish(
    requestMessage: src_app_protos_emailservice_pb.SubmitRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_emailservice_pb.SubmitResponse|null) => void
  ): UnaryResponse;
  submitAsLegitimate(
    requestMessage: src_app_protos_emailservice_pb.SubmitRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_emailservice_pb.SubmitResponse|null) => void
  ): UnaryResponse;
  submitAsLegitimate(
    requestMessage: src_app_protos_emailservice_pb.SubmitRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_emailservice_pb.SubmitResponse|null) => void
  ): UnaryResponse;
  submitAsMarketing(
    requestMessage: src_app_protos_emailservice_pb.SubmitRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_emailservice_pb.SubmitResponse|null) => void
  ): UnaryResponse;
  submitAsMarketing(
    requestMessage: src_app_protos_emailservice_pb.SubmitRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_emailservice_pb.SubmitResponse|null) => void
  ): UnaryResponse;
}

