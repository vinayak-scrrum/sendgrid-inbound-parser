# npm-sendgrid-inbound-parser

## Install

```sh
$ npm install --save @scrrum-labs/sendgrid-inbound-parser
```

## Functions
```js
getBody(data){} // It will return whole body: String

```
```js
getTo(data){} // It will return email ID & name of receiver: Array of object, example: [{email:"xyz@scrrum.com", name:"scrrum"}]

```
```js
getFrom(data){} // It will return email ID & name of sender: Array of object, example: [{email:"xyz@scrrum.com", name:"scrrum"}]

```

```js
getSubject(data){} // It will return subject of incomming email: String

```
```js
getSenderIP(data){} // It will return IP address of incomming email: String

```
```js
getAttachmentsNumber(data){} // It will return number of attachments: Number

```
```js
getAttachmentInfo(data){} // It will return info of attachments: JavaScript object, 
Example: 
{
  "attachment1": {
    "filename": "46568986193797146.csv",
    "name": "46568986193797146.csv",
    "charset": "UTF-8",
    "type": "text/csv",
    "content-id": "f_lhj3sxzx1"
  },
  "attachment2": {
    "filename": "react.png",
    "name": "react.png",
    "type": "image/png",
    "content-id": "f_lhj3sxzq0"
  }
} 

```
```js
getAttachment(data){} // It will return attachments: Array of object, example: [{content:"",contentType:""}] 

```
```js
getHtmlBody(data){} // It will return whole html body : String
