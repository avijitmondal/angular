import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public http: HttpClient) { }

  mail: any;
  data = {};

  async func(){
    this.mail = Office.context.mailbox.item;
    // console.log(this.mail);
    this.data["id"] = this.mail.itemId;
    this.data["subject"] = this.mail.subject;
    this.data["num_attachments"] = this.mail.attachments.length;
    await this.getBody().then((value) => {
      this.data["body"] = value;
      this.getAttachments();
      });
  }

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
              return "failed to retrieve attachment";
              reject("Error retrieving email attachment");
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
        });

      })
    }
    Promise.all(promise).then((values) => {
      this.data["attachment"] = values;
      this.send_to_server();
    })
  }

  send_to_server(){
    console.log('send_to_server called');
    var maildata = JSON.stringify(this.data);
    // console.log(maildata);
    this.http.post("https://localhost:8080/mail", maildata, {responseType: 'text' as 'json'}).subscribe(data => {
      var res = data;
      console.log(res);
    });
  }

}

// interface Mail{
//   id: string;
//   subject: string;
//   body: string;
//   num_attachments: number;
//   attachment: any[];
// }

class Attachment{
  id: string;
  name: string;
  attachment_type: string;
  content_type: string;
  content: string;
  attachment_format: string;
  size: number;
}