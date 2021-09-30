// package: emailservice
// file: src/app/protos/emailservice.proto

import * as jspb from "google-protobuf";

export class SubmitRequest extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getReceiver(): string;
  setReceiver(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitRequest): SubmitRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitRequest;
  static deserializeBinaryFromReader(message: SubmitRequest, reader: jspb.BinaryReader): SubmitRequest;
}

export namespace SubmitRequest {
  export type AsObject = {
    sender: string,
    receiver: string,
    subject: string,
    body: string,
  }
}

export class SubmitResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitResponse): SubmitResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitResponse;
  static deserializeBinaryFromReader(message: SubmitResponse, reader: jspb.BinaryReader): SubmitResponse;
}

export namespace SubmitResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

