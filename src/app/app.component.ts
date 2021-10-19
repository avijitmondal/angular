import { Component, AfterContentInit } from '@angular/core';
import { GreeterClient } from './generated/src/app/protos/helloworld_pb_service';
import { HelloRequest } from './generated/src/app/protos/helloworld_pb';
import { EmailSubmitClient, SubmitEmailClient } from './generated/src/app/protos/emailservice_pb_service';
import { SubmitRequest } from './generated/src/app/protos/emailservice_pb';
import { grpc } from "@improbable-eng/grpc-web";
import { environment } from '../environments/environment';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'angular-grpc';

  // greeterClient: GreeterClient;
  // emailSubmitClient: EmailSubmitClient;
  // submitEmailClient: SubmitEmailClient;
  // sender: string;
  // receiver: string;
  // subject: string;
  // body: any;

  mail: any;
  data = {};
  log = "";

  httpClient: HttpClient;

  constructor() {
    // this.greeterClient = new GreeterClient(environment.apiProxy);
    // this.get();

    // this.emailSubmitClient = new EmailSubmitClient(environment.apiProxy);
    // this.sendEmail();

    // this.submitEmailClient = new SubmitEmailClient(environment.apiProxy);
    // this.submitAsSpamVirusPhish();

    this.mail = Office.context.mailbox.item;

    this.httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));

  }

  async ngAfterContentInit() {
    // var itemId = Office.context.mailbox.item;
    // console.log(itemId);

    // this.sender = this.mail.sender.emailAddress;
    // this.subject = this.mail.subject;
    
    await this.getBody().then((value) => {
      this.data["body"] = value;
      console.log(value);
      this.getAttachments();
      });

    this.data['sender'] = this.mail.sender.emailAddress;
    this.data['subject'] = this.mail.subject;
    this.data["id"] = this.mail.itemId;
    this.data["num_attachments"] = this.mail.attachments.length;
    // console.log("sender " + this.sender);
    // console.log("subject " + this.subject);
    // console.log("body " + this.body);
  }

  // async ngOnInit() {
    // console.log('ngAfterViewInit');    
    // await this.getBody();
    // console.log(this.body);
  // }

  getBody(){
    return new Promise((resolve, reject) => {
      var item = Office.context.mailbox.item;
      var options = {asyncContext: {currentItem: item}};
      
      Office.context.mailbox.item?.body.getAsync(
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

  getAttachments(){
    var item = Office.context.mailbox.item;
    // var options = {asyncContext: {currentItem: item}};
    var attachments = item?.attachments;
    var email_attachments: Array<any> = [];
    var promise = [];
    for (let i=0;i<attachments.length;i++) {
      promise[i] = new Promise((resolve, reject) => {
        item.getAttachmentContentAsync(attachments[i].id, 
          function callback(result){
            if (result.status !== Office.AsyncResultStatus.Succeeded) {
              console.error("Error retrieving email attachment " + result.error.message);
              resolve("Error retrieving email attachment");
            } else {
              let email_attachment_obj = new Attachment();
              email_attachment_obj.id = item?.attachments[i].id;
              email_attachment_obj.name = item?.attachments[i].name;
              email_attachment_obj.attachment_type = item?.attachments[i].attachmentType;
              email_attachment_obj.content_type = item?.attachments[i].contentType;
              email_attachment_obj.content = result.value.content;
              email_attachment_obj.attachment_format = result.value.format;
              email_attachment_obj.size = item?.attachments[i].size;
              
              email_attachments.push(email_attachment_obj);
              switch (result.value.format) {
                case Office.MailboxEnums.AttachmentContentFormat.Base64:
                  console.log("base64");
                  break;
                case Office.MailboxEnums.AttachmentContentFormat.Eml:
                  console.log("eml");
                  break;
                case Office.MailboxEnums.AttachmentContentFormat.ICalendar:
                  console.log("Icalendar");
                  break;
                case Office.MailboxEnums.AttachmentContentFormat.Url:
                  console.log("url");
                  break;
                default:
                  console.log("default");
              }
              resolve(email_attachment_obj);

            }
            return null;
        });

      })
    }
    Promise.all(promise).then((values) => {
      this.data["attachment"] = values;
    })
  }

  submitAsSpamVirusPhish(event): any {
    console.log(this.data);

    this.send_to_server();

    // return new Promise((resolve, reject) => {
    //   console.log('submiting as SpamVirusPhish');
    //   const request = new SubmitRequest();
    //   request.setSender('avijitmondal0@yahoo.com');
    //   request.setReceiver('avimonda@cisco.com');
    //   request.setSubject(this.subject);
    //   request.setBody(this.body);

    //   let metadata = new grpc.Metadata();

    //   this.submitEmailClient.submitAsSpamVirusPhish(request, metadata, (err, response) => {
    //     console.log('response   ', response);
    //     if (err) {
    //       console.log(err);
    //       return;
    //     }
    //     console.log(response);
    //   });
    // });
    return "submitAsSpamVirusPhish";
  }

  submitAsLegitimate(event): any {
    console.log(this.data);

    this.send_to_server();

    // return new Promise((resolve, reject) => {
    //   console.log('submiting as Legitimate');
    //   const request = new SubmitRequest();
    //   request.setSender('avijitmondal0@yahoo.com');
    //   request.setReceiver('avimonda@cisco.com');
    //   request.setSubject(this.subject);
    //   request.setBody(this.body);

    //   let metadata = new grpc.Metadata();

    //   this.submitEmailClient.submitAsLegitimate(request, metadata, (err, response) => {
    //     console.log('response   ', response);
    //     if (err) {
    //       console.log(err);
    //       return;
    //     }
    //     console.log(response);
    //   });
    // });
    return "submitAsLegitimate";
  }

  submitAsMarketing(event): any {
    console.log(this.data);

    this.send_to_server();

    // return new Promise((resolve, reject) => {
    //   console.log('submiting as Marketing');
    //   const request = new SubmitRequest();
    //   request.setSender('avijitmondal0@yahoo.com');
    //   request.setReceiver('avimonda@cisco.com');
    //   request.setSubject(this.subject);
    //   request.setBody(this.body);

    //   let metadata = new grpc.Metadata();

    //   this.submitEmailClient.submitAsMarketing(request, metadata, (err, response) => {
    //     console.log('response   ', response);
    //     if (err) {
    //       console.log(err);
    //       return;
    //     }
    //     console.log(response);
    //   });
    // });
    return "submitAsMarketing";
  }

  // sendEmail(event): any {
  //   return new Promise((resolve, reject) => {
  //     console.log('calling grpc method');
  //     const request = new SubmitRequest();
  //     request.setSender('avijitmondal0@yahoo.com');
  //     request.setReceiver('avimonda@cisco.com');
  //     request.setSubject(this.subject);
  //     request.setBody('this contains body of email');

  //     let metadata = new grpc.Metadata();

  //     this.emailSubmitClient.submitEmail(request, metadata, (err, response) => {
  //       console.log('response   ', response);
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       console.log(response);
  //     });
  //   });
  // }


  // get(event): any {
  //   return new Promise((resolve, reject) => {
  //     console.log('calling grpc method');
  //     const request = new HelloRequest();
  //     request.setName('Avijit');

  //     let metadata = new grpc.Metadata();

  //     this.greeterClient.sayHello(request, metadata, (err, response) => {
  //       console.log('ApiService.get.response', response);
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       console.log(response);
  //     });
  //   });
  // }

  send_to_server(){
    console.log('send_to_server called');
    var maildata = JSON.stringify(this.data);
    // console.log(maildata);
    this.httpClient.post("https://grpc-server-1.herokuapp.com/submit", maildata, {responseType: 'text' as 'json'}).subscribe(data => {
      var res = data;
      console.log(res);
    });
  }

}

class Attachment{
  id: string;
  name: string;
  attachment_type: string;
  content_type: string;
  content: string;
  attachment_format: string;
  size: number;
}
