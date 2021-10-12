import { Component, AfterContentInit } from '@angular/core';
import { GreeterClient } from './generated/src/app/protos/helloworld_pb_service';
import { HelloRequest } from './generated/src/app/protos/helloworld_pb';
import { EmailSubmitClient, SubmitEmailClient } from './generated/src/app/protos/emailservice_pb_service';
import { SubmitRequest } from './generated/src/app/protos/emailservice_pb';
import { grpc } from "@improbable-eng/grpc-web";
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'angular-grpc';

  greeterClient: GreeterClient;
  emailSubmitClient: EmailSubmitClient;
  submitEmailClient: SubmitEmailClient;
  sender: string;
  receiver: string;
  subject: string;
  body: string;

  constructor() {
    this.greeterClient = new GreeterClient(environment.apiProxy);
    // this.get();

    this.emailSubmitClient = new EmailSubmitClient(environment.apiProxy);
    // this.sendEmail();

    this.submitEmailClient = new SubmitEmailClient(environment.apiProxy);
    // this.submitAsSpamVirusPhish();
  }

  ngAfterContentInit() {
    // var itemId = Office.context.mailbox.item;
    // console.log(itemId);

    this.sender = Office.context.mailbox.item.sender.emailAddress;
    // this.receiver = "avijitmondal38@gmail.com";
    this.subject = Office.context.mailbox.item.subject;
    console.log(Office.context.mailbox.item.attachments);
    // this.getBody();
    console.log("sender " + this.sender);
    console.log("subject " + this.subject);
    console.log("body " + this.body);
  }

  async getBody(){
    this.body = await new Promise((resolve, reject) => {
      var item = Office.context.mailbox.item;
      var options = {asyncContext: {currentItem: item}};
  
    Office.context.mailbox.item.body.getAsync(
      Office.CoercionType.Html,
      options,
          function callback(result) {
            if (result.status !== Office.AsyncResultStatus.Succeeded) {
              console.error("Error retrieving email body " + result.error.message);
              reject("Error retrieving email body");
        } else {
          resolve(result.value)
        }
      });
  })
  
  }

  submitAsSpamVirusPhish(event): any {
    return new Promise((resolve, reject) => {
      console.log('submiting as SpamVirusPhish');
      const request = new SubmitRequest();
      request.setSender('avijitmondal0@yahoo.com');
      request.setReceiver('avimonda@cisco.com');
      request.setSubject(this.subject);
      request.setBody('this contains body of email');

      let metadata = new grpc.Metadata();

      this.submitEmailClient.submitAsSpamVirusPhish(request, metadata, (err, response) => {
        console.log('response   ', response);
        if (err) {
          console.log(err);
          return;
        }
        console.log(response);
      });
    });
  }

  submitAsLegitimate(event): any {
    return new Promise((resolve, reject) => {
      console.log('submiting as Legitimate');
      const request = new SubmitRequest();
      request.setSender('avijitmondal0@yahoo.com');
      request.setReceiver('avimonda@cisco.com');
      request.setSubject(this.subject);
      request.setBody('this contains body of email');

      let metadata = new grpc.Metadata();

      this.submitEmailClient.submitAsLegitimate(request, metadata, (err, response) => {
        console.log('response   ', response);
        if (err) {
          console.log(err);
          return;
        }
        console.log(response);
      });
    });
  }

  submitAsMarketing(event): any {
    return new Promise((resolve, reject) => {
      console.log('submiting as Marketing');
      const request = new SubmitRequest();
      request.setSender('avijitmondal0@yahoo.com');
      request.setReceiver('avimonda@cisco.com');
      request.setSubject(this.subject);
      request.setBody('this contains body of email');

      let metadata = new grpc.Metadata();

      this.submitEmailClient.submitAsMarketing(request, metadata, (err, response) => {
        console.log('response   ', response);
        if (err) {
          console.log(err);
          return;
        }
        console.log(response);
      });
    });
  }

  sendEmail(event): any {
    return new Promise((resolve, reject) => {
      console.log('calling grpc method');
      const request = new SubmitRequest();
      request.setSender('avijitmondal0@yahoo.com');
      request.setReceiver('avimonda@cisco.com');
      request.setSubject(this.subject);
      request.setBody('this contains body of email');

      let metadata = new grpc.Metadata();

      this.emailSubmitClient.submitEmail(request, metadata, (err, response) => {
        console.log('response   ', response);
        if (err) {
          console.log(err);
          return;
        }
        console.log(response);
      });
    });
  }


  get(event): any {
    return new Promise((resolve, reject) => {
      console.log('calling grpc method');
      const request = new HelloRequest();
      request.setName('Avijit');

      let metadata = new grpc.Metadata();

      this.greeterClient.sayHello(request, metadata, (err, response) => {
        console.log('ApiService.get.response', response);
        if (err) {
          console.log(err);
          return;
        }
        console.log(response);
      });
    });
  }
}
