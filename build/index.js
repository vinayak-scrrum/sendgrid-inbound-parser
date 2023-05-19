"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttachment = exports.getAttachmentInfo = exports.getHtmlBody = exports.getAttachmentsNumber = exports.getSenderIP = exports.getSubject = exports.getFrom = exports.getBody = exports.getTo = exports.getContact = void 0;
const data = `--xYzZY
Content-Disposition: form-data; name="headers"

Received: by mx0111p1iad2.sendgrid.net with SMTP id W3zVyzDWiG Fri, 19 May 2023 07:14:31 +0000 (UTC)
Received: from mail-yb1-f169.google.com (unknown [209.85.219.169]) by mx0111p1iad2.sendgrid.net (Postfix) with ESMTPS id 1780E5E12E2 for <expense@track.scrrum.com>; Fri, 19 May 2023 07:14:31 +0000 (UTC)
Received: by mail-yb1-f169.google.com with SMTP id 3f1490d57ef6-ba81deea9c2so2585631276.2 for <expense@track.scrrum.com>; Fri, 19 May 2023 00:14:31 -0700 (PDT)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=scrrum-com.20221208.gappssmtp.com; s=20221208; t=1684480470; x=1687072470; h=to:subject:message-id:date:from:mime-version:from:to:cc:subject :date:message-id:reply-to; bh=NQN47wxM0vQU4xqFZAFTOqSt1KVQxwx4TrzmcFjwyxA=; b=W6a0yRaqx6cdaEdyUAL+ec1ip6E0eFtz2d6IRfY+ULqUzimK/06v9/vi1bhvEPhF+K MrR+6fivC8nCCLSPXWjjnactqbVZsXqMsfaD7iFzmdln1lMptAVpDmTDYdgK9tbr6Yi2 06Plwv6avJGj0iJMUyVvEhcDP4GvV8BjScBjz/4qxJTpIfMaNP//4Uc7FGWTrcUPbhgS HaShFblMG29DpqX7PthZzIU1mdWPi6DP1VS2Der6Kk3vIxAeFNVl2EqHDcGXhmlSZwJm 8GwBnQWPcaKBLsS4TI+y+nGiwJ4cIU0AnlWJ1JeAZb1My3h5orxP0Z4TqBL3MiOGFkAz 7Ehg==
X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=1e100.net; s=20221208; t=1684480470; x=1687072470; h=to:subject:message-id:date:from:mime-version:x-gm-message-state :from:to:cc:subject:date:message-id:reply-to; bh=NQN47wxM0vQU4xqFZAFTOqSt1KVQxwx4TrzmcFjwyxA=; b=kOZT89+/1YKJoY+ATcNjAzoJ97SQL3gyVCdiy9PlyAcaSwOZ07uPW1fTckKWJEIRaF fwU33n7K/S+P7O8C6ca7nJj3MvPyeKOo5NM1npKRFozo6zx5VqKKLGmheEProzk3hOsA PnK47EQo5lmYuImA8GZqti7qZCOdVEDoI3Aj4OFO4fuaZwa93UC6QYN8iVOEpyuIWsJN sXlevcZxgp0qu3l8rnoDTMilMkiU0galo/AjR5oAuxMlUVNCClrxKykKxjZKD9axktYb bzWrwaxvxgbDJlEwEEJNfBVZGUKhbV3N6cKmTcL7AmK04x2jFhaKPnB45L8bX8bhy/XE iwDQ==
X-Gm-Message-State: AC+VfDxcYf+9pi9Yqpni/0amHetCly0C74R+tHw/jbBS1jlB1LS29xjv al2RCq9PJzhdLcPdYNuSmNU2pHCBLJNfJg8YJZfAx3pEEv6S+IHFT2yfyg==
X-Google-Smtp-Source: ACHHUZ4O94XgK+gZY89Dtf1Z/ScPvFNoUG68vj09mfFQ5O6jOvdwgIaKUxRntp8ZLsJzcuI/+yAVdKAClIu0nonNKeI=
X-Received: by 2002:a25:cfc2:0:b0:ba2:ca56:7204 with SMTP id f185-20020a25cfc2000000b00ba2ca567204mr823853ybg.5.1684480470487; Fri, 19 May 2023 00:14:30 -0700 (PDT)
MIME-Version: 1.0
From: Vinayak Sharma <vinayak@scrrum.com>
Date: Fri, 19 May 2023 12:44:20 +0530
Message-ID: <CAEcza8P5U6PaPfwf_EAHgV=WG7+yxie+wejzRzQ0JS_Vz3qqHA@mail.gmail.com>
Subject: Test
To: Scrrum Expenses <expense@track.scrrum.com>
Content-Type: multipart/mixed; boundary="000000000000133c8705fc06ac00"

--xYzZY
Content-Disposition: form-data; name="dkim"

{@scrrum-com.20221208.gappssmtp.com : pass}
--xYzZY
Content-Disposition: form-data; name="content-ids"

{"f_lhu867kv0":"attachment1"}
--xYzZY
Content-Disposition: form-data; name="to"

Scrrum Expenses <expense@track.scrrum.com>
--xYzZY
Content-Disposition: form-data; name="html"

<div dir="ltr">Test<br clear="all"><div><br></div><span class="gmail_signature_prefix">-- </span><br><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><span><div dir="ltr" style="margin-left:0pt" align="left"><table style="border:none;border-collapse:collapse"><colgroup><col width="289"><col width="226"></colgroup><tbody><tr style="height:36pt"><td colspan="2" style="border-bottom:0.75pt solid rgb(27,189,54);vertical-align:top;padding:0pt 0pt 8pt;overflow:hidden"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="font-size:10pt;font-family:Arial;color:rgb(67,67,67);background-color:transparent;font-weight:700;vertical-align:baseline;white-space:pre-wrap">Vinayak Sharma</span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="font-size:10pt;font-family:Arial;color:rgb(135,135,135);background-color:transparent;vertical-align:baseline;white-space:pre-wrap">Full Stack Developer Intern</span></p></td></tr><tr style="height:79.5pt"><td colspan="2" style="border-top:solid #1bbd36 0.75pt;vertical-align:top;padding:8pt 0pt 0pt 0pt;overflow:hidden"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="font-size:10pt;font-family:Arial;color:rgb(44,44,44);background-color:transparent;font-weight:700;vertical-align:baseline;white-space:pre-wrap">Scrrum Labs</span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="font-size:10pt;font-family:Arial;color:rgb(44,44,44);background-color:transparent;vertical-align:baseline;white-space:pre-wrap">New Delhi, India</span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="font-size:10pt;font-family:Arial;color:rgb(44,44,44);background-color:transparent;font-weight:700;vertical-align:baseline;white-space:pre-wrap">M</span><span style="font-size:10pt;font-family:Arial;color:rgb(44,44,44);background-color:transparent;vertical-align:baseline;white-space:pre-wrap">: (+91) 8467-814-647</span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="font-size:10pt;font-family:Arial;color:rgb(44,44,44);background-color:transparent;font-weight:700;vertical-align:baseline;white-space:pre-wrap">E</span><span style="font-size:10pt;font-family:Arial;color:rgb(44,44,44);background-color:transparent;vertical-align:baseline;white-space:pre-wrap">: <a href="mailto:vinayak@scrrum.com" target="_blank">vinayak@scrrum.com</a></span></p></td></tr><tr style="height:27.75pt"><td style="vertical-align:top;padding:8pt 0pt 8pt 0pt;overflow:hidden"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><a href="https://scrrum.com" target="_blank"><span style="font-size:10pt;font-family:Arial;color:rgb(0,0,0);background-color:transparent;font-weight:700;vertical-align:baseline;white-space:pre-wrap">www.scrrum.com</span></a></p></td><td style="vertical-align:top;padding:8pt 0pt 8pt 0pt;overflow:hidden"><p dir="ltr" style="line-height:1.38;text-align:right;margin-top:0pt;margin-bottom:0pt"><a href="https://www.linkedin.com/company/scrrum/" target="_blank"><span style="font-size:10pt;font-family:Arial;color:rgb(17,85,204);background-color:transparent;vertical-align:baseline;white-space:pre-wrap"><span style="border:none;display:inline-block;overflow:hidden;width:32px;height:32px"><img alt="LinkedIn icon" src="https://lh3.googleusercontent.com/5TQHwVos0MqQojZnm3iro_Fs_ROv39JgsaQth8msR3QUXThTw2xbzoDC3PXvW0x0f7YSGcp2NFSvkiD7Zw49lYLfW76EBblgfzumUAnzKAHLSrMVT-j92To9z68IBty2GWoSIisAQg6fHGCkylsNegM" width="32" height="32" style="margin-left:0px;margin-top:0px"></span></span></a><span style="font-size:10pt;font-family:Arial;color:rgb(68,68,68);background-color:transparent;vertical-align:baseline;white-space:pre-wrap">  </span><a href="https://www.instagram.com/scrrumlabs/" target="_blank"><span style="font-size:10pt;font-family:Arial;color:rgb(17,85,204);background-color:transparent;vertical-align:baseline;white-space:pre-wrap"><span style="border:none;display:inline-block;overflow:hidden;width:32px;height:32px"><img alt="Instagram icon" src="https://lh3.googleusercontent.com/5GxwPtp60zvKCX6LBLqRx91ggAPJdOcSTLRFHSX75TPOd0c7MlyvjbiKdpUEW6WkZZJrDhX6M91h7N-78QVLF7EjhuZc1gC6TrTXZWRGWHQP6kZ__IhVQ-6qKu1H-6ZoqER9AIP4uSmLrkejclHmsIU" width="32" height="32" style="margin-left:0px;margin-top:0px"></span></span></a><span style="font-size:11pt;font-family:Arial;color:rgb(0,0,0);background-color:transparent;vertical-align:baseline;white-space:pre-wrap">  </span><a href="https://www.facebook.com/scrrum" target="_blank"><span style="font-size:10pt;font-family:Arial;color:rgb(17,85,204);background-color:transparent;vertical-align:baseline;white-space:pre-wrap"><span style="border:none;display:inline-block;overflow:hidden;width:32px;height:32px"><img alt="Facebook icon" src="https://lh3.googleusercontent.com/Kt7vKi87oyNj2JN09OIIl_3Nr8XfTbfQvgKaHr1NXKyac1V73rYC-Q3T2T0mMn4p1uPhYYXNkmBlqShs5zskeCo3o4DCxaQn766n0_Sd8lm2OXrsdGMGHQ3yNoR02C52Yg7r4_Xs5aN6d0-LR_m-1do" width="32.21052631578947" height="32" style="margin-top:0px"></span></span></a><span style="font-size:10pt;font-family:Arial;color:rgb(68,68,68);background-color:transparent;vertical-align:baseline;white-space:pre-wrap">  </span><a href="https://www.youtube.com/channel/UCSZIJLP3GQZv3CbixjfH4xA" target="_blank"><span style="font-size:10pt;font-family:Arial;color:rgb(17,85,204);background-color:transparent;vertical-align:baseline;white-space:pre-wrap"><span style="border:none;display:inline-block;overflow:hidden;width:32px;height:32px"><img alt="Youtube icon" src="https://lh3.googleusercontent.com/BGq_YUS5cx-w9m3HtbkOABwoZcB5pTy3KWwXhovHJndrAtvDT_6CMbriM4Oxb6lF2H4csDSRxXdFX8btS4hiQQjB8VGoCdSlfjMo3yTi_ZOIlKeG64OLsl5rYw95flNHnQRCApt7KtqHueQcInvF1oA" width="32" height="32" style="margin-left:0px;margin-top:0px"></span></span></a><span style="font-size:10pt;font-family:Arial;color:rgb(68,68,68);background-color:transparent;vertical-align:baseline;white-space:pre-wrap"> </span></p></td></tr><tr style="height:15pt"><td colspan="2" style="vertical-align:top;padding:8pt 0pt 8pt 0pt;overflow:hidden"><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="font-size:9pt;font-family:Arial;color:rgb(68,68,68);background-color:transparent;vertical-align:baseline;white-space:pre-wrap"><span style="border:none;display:inline-block;overflow:hidden;width:515px;height:97px"><img src="https://lh3.googleusercontent.com/qnxXevBG-nZtqgazPa1ikLfzClo5o0SXfkbqWUilIjtpjn_ZsOy4wjm2WU_vyyk3NH0xzMuPEJnTVmuiaLtqr2_B8oSFTE3j0tYmNqWZHPb7nYSUadJqpKZCRqHfPglCGo2VESP-k56pGqU8EJbi5GE" width="515" height="98.69928872497366" style="margin-left:0px"></span></span></p></td></tr><tr style="height:48.75pt"><td colspan="2" style="vertical-align:top;padding:8pt 0pt 0pt 0pt;overflow:hidden"><p dir="ltr" style="line-height:1.38;text-align:justify;margin-top:0pt;margin-bottom:0pt"><span style="font-size:9pt;font-family:Arial;color:rgb(44,44,44);background-color:transparent;vertical-align:baseline;white-space:pre-wrap">The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.</span></p></td></tr></tbody></table></div><br></span></div></div></div>

--xYzZY
Content-Disposition: form-data; name="from"

Vinayak Sharma <vinayak@scrrum.com>
--xYzZY
Content-Disposition: form-data; name="text"

Test

-- 

Vinayak Sharma

Full Stack Developer Intern

Scrrum Labs

New Delhi, India

M: (+91) 8467-814-647

E: vinayak@scrrum.com

www.scrrum.com <https://scrrum.com>

[image: LinkedIn icon] <https://www.linkedin.com/company/scrrum/>  [image:
Instagram icon] <https://www.instagram.com/scrrumlabs/>  [image: Facebook
icon] <https://www.facebook.com/scrrum>  [image: Youtube icon]
<https://www.youtube.com/channel/UCSZIJLP3GQZv3CbixjfH4xA>

The content of this email is confidential and intended for the recipient
specified in message only. It is strictly forbidden to share any part of
this message with any third party, without a written consent of the sender.
If you received this message by mistake, please reply to this message and
follow with its deletion, so that we can ensure such a mistake does not
occur in the future.

--xYzZY
Content-Disposition: form-data; name="sender_ip"

209.85.219.169
--xYzZY
Content-Disposition: form-data; name="attachment1"; filename="sample (1).pdf"
Content-Type: application/pdf

%PDF-1.3
%����

1 0 obj
<<
/Type /Catalog
/Outlines 2 0 R
/Pages 3 0 R
>>
endobj

2 0 obj
<<
/Type /Outlines
/Count 0
>>
endobj

3 0 obj
<<
/Type /Pages
/Count 2
/Kids [ 4 0 R 6 0 R ] 
>>
endobj

4 0 obj
<<
/Type /Page
/Parent 3 0 R
/Resources <<
/Font <<
/F1 9 0 R 
>>
/ProcSet 8 0 R
>>
/MediaBox [0 0 612.0000 792.0000]
/Contents 5 0 R
>>
endobj

5 0 obj
<< /Length 1074 >>
stream
2 J
BT
0 0 0 rg
/F1 0027 Tf
57.3750 722.2800 Td
( A Simple PDF File ) Tj
ET
BT
/F1 0010 Tf
69.2500 688.6080 Td
( This is a small demonstration .pdf file - ) Tj
ET
BT
/F1 0010 Tf
69.2500 664.7040 Td
( just for use in the Virtual Mechanics tutorials. More text. And more ) Tj
ET
BT
/F1 0010 Tf
69.2500 652.7520 Td
( text. And more text. And more text. And more text. ) Tj
ET
BT
/F1 0010 Tf
69.2500 628.8480 Td
( And more text. And more text. And more text. And more text. And more ) Tj
ET
BT
/F1 0010 Tf
69.2500 616.8960 Td
( text. And more text. Boring, zzzzz. And more text. And more text. And ) Tj
ET
BT
/F1 0010 Tf
69.2500 604.9440 Td
( more text. And more text. And more text. And more text. And more text. ) Tj
ET
BT
/F1 0010 Tf
69.2500 592.9920 Td
( And more text. And more text. ) Tj
ET
BT
/F1 0010 Tf
69.2500 569.0880 Td
( And more text. And more text. And more text. And more text. And more ) Tj
ET
BT
/F1 0010 Tf
69.2500 557.1360 Td
( text. And more text. And more text. Even more. Continued on page 2 ...) Tj
ET
endstream
endobj

6 0 obj
<<
/Type /Page
/Parent 3 0 R
/Resources <<
/Font <<
/F1 9 0 R 
>>
/ProcSet 8 0 R
>>
/MediaBox [0 0 612.0000 792.0000]
/Contents 7 0 R
>>
endobj

7 0 obj
<< /Length 676 >>
stream
2 J
BT
0 0 0 rg
/F1 0027 Tf
57.3750 722.2800 Td
( Simple PDF File 2 ) Tj
ET
BT
/F1 0010 Tf
69.2500 688.6080 Td
( ...continued from page 1. Yet more text. And more text. And more text. ) Tj
ET
BT
/F1 0010 Tf
69.2500 676.6560 Td
( And more text. And more text. And more text. And more text. And more ) Tj
ET
BT
/F1 0010 Tf
69.2500 664.7040 Td
( text. Oh, how boring typing this stuff. But not as boring as watching ) Tj
ET
BT
/F1 0010 Tf
69.2500 652.7520 Td
( paint dry. And more text. And more text. And more text. And more text. ) Tj
ET
BT
/F1 0010 Tf
69.2500 640.8000 Td
( Boring.  More, a little more text. The end, and just as well. ) Tj
ET
endstream
endobj

8 0 obj
[/PDF /Text]
endobj

9 0 obj
<<
/Type /Font
/Subtype /Type1
/Name /F1
/BaseFont /Helvetica
/Encoding /WinAnsiEncoding
>>
endobj

10 0 obj
<<
/Creator (Rave \(http://www.nevrona.com/rave\))
/Producer (Nevrona Designs)
/CreationDate (D:20060301072826)
>>
endobj

xref
0 11
0000000000 65535 f
0000000019 00000 n
0000000093 00000 n
0000000147 00000 n
0000000222 00000 n
0000000390 00000 n
0000001522 00000 n
0000001690 00000 n
0000002423 00000 n
0000002456 00000 n
0000002574 00000 n

trailer
<<
/Size 11
/Root 1 0 R
/Info 10 0 R
>>

startxref
2714
%%EOF

--xYzZY
Content-Disposition: form-data; name="envelope"

{"to":["expense@track.scrrum.com"],"from":"vinayak@scrrum.com"}
--xYzZY
Content-Disposition: form-data; name="attachments"

1
--xYzZY
Content-Disposition: form-data; name="subject"

Test
--xYzZY
Content-Disposition: form-data; name="attachment-info"

{"attachment1":{"filename":"sample (1).pdf","name":"sample (1).pdf","type":"application/pdf","content-id":"f_lhu867kv0"}}
--xYzZY
Content-Disposition: form-data; name="charsets"

{"to":"UTF-8","filename":"UTF-8","html":"UTF-8","subject":"UTF-8","from":"UTF-8","text":"UTF-8"}
--xYzZY
Content-Disposition: form-data; name="SPF"

permerror
--xYzZY--
`;
getAttachment(data);
function getContact(data) {
    const emailBody = data.toString();
    const arrayBody = emailBody.split("--xYzZY");
    let to = arrayBody.find((t) => t.includes("Content-Disposition: form-data; name=\"to\""));
    to = to === null || to === void 0 ? void 0 : to.split("\"to\"")[1].trim();
    const contacts = [];
    const parts = to === null || to === void 0 ? void 0 : to.split(",");
    for (const part of parts ? parts : "") {
        const match = part === null || part === void 0 ? void 0 : part.trim().match(/^(.+?)?\s*<(.+?)>$/);
        if (match) {
            const [, name, email] = match;
            contacts.push({ name: (name === null || name === void 0 ? void 0 : name.trim()) || null, email: email === null || email === void 0 ? void 0 : email.trim() });
        }
        else {
            contacts.push({ name: null, email: part === null || part === void 0 ? void 0 : part.trim() });
        }
    }
    return contacts;
}
exports.getContact = getContact;
function getTo(data) {
    const emailBody = data.toString();
    const arrayBody = emailBody.split("--xYzZY");
    let to = arrayBody.find((t) => t.includes("Content-Disposition: form-data; name=\"to\""));
    to = to === null || to === void 0 ? void 0 : to.split("\"to\"")[1].trim();
    return to;
}
exports.getTo = getTo;
function getBody(data) {
    const emailBody = data.toString();
    const arrayBody = emailBody.split("--xYzZY");
    let body = arrayBody.find((t) => t.includes("Content-Disposition: form-data; name=\"text\""));
    body = body === null || body === void 0 ? void 0 : body.split("\"text\"")[1].trim();
    return body;
}
exports.getBody = getBody;
function getFrom(data) {
    const emailBody = data.toString();
    const arrayBody = emailBody.split("--xYzZY");
    let from = arrayBody.find((t) => t.includes("Content-Disposition: form-data; name=\"from\""));
    from = from === null || from === void 0 ? void 0 : from.split("\"from\"")[1].trim();
    const contacts = [];
    const parts = from === null || from === void 0 ? void 0 : from.split(",");
    for (const part of parts ? parts : "") {
        const match = part === null || part === void 0 ? void 0 : part.trim().match(/^(.+?)?\s*<(.+?)>$/);
        if (match) {
            const [, name, email] = match;
            contacts.push({ name: (name === null || name === void 0 ? void 0 : name.trim()) || null, email: email === null || email === void 0 ? void 0 : email.trim() });
        }
        else {
            contacts.push({ name: null, email: part === null || part === void 0 ? void 0 : part.trim() });
        }
    }
    return contacts;
}
exports.getFrom = getFrom;
function getSubject(data) {
    const emailBody = data.toString();
    const arrayBody = emailBody.split("--xYzZY");
    let subject = arrayBody.find((t) => t.includes("Content-Disposition: form-data; name=\"subject\""));
    subject = subject === null || subject === void 0 ? void 0 : subject.split("\"subject\"")[1].trim();
    return subject;
}
exports.getSubject = getSubject;
function getSenderIP(data) {
    const emailBody = data.toString();
    const arrayBody = emailBody.split("--xYzZY");
    let senderIP = arrayBody.find((t) => t.includes("Content-Disposition: form-data; name=\"sender_ip\""));
    senderIP = senderIP === null || senderIP === void 0 ? void 0 : senderIP.split("\"sender_ip\"")[1].trim();
    return senderIP;
}
exports.getSenderIP = getSenderIP;
function getAttachmentsNumber(data) {
    const emailBody = data.toString();
    const arrayBody = emailBody.split("--xYzZY");
    let attachments = arrayBody.find((t) => t.includes("Content-Disposition: form-data; name=\"attachments\""));
    attachments = attachments === null || attachments === void 0 ? void 0 : attachments.split("\"attachments\"")[1].trim();
    const attachmentsNumber = parseInt(attachments ? attachments : "0");
    return attachmentsNumber;
}
exports.getAttachmentsNumber = getAttachmentsNumber;
function getHtmlBody(data) {
    const emailBody = data.toString();
    const arrayBody = emailBody.split("--xYzZY");
    let html = arrayBody.find((t) => t.includes("Content-Disposition: form-data; name=\"html\""));
    html = html === null || html === void 0 ? void 0 : html.split("\"html\"")[1].trim();
    return html;
}
exports.getHtmlBody = getHtmlBody;
function getAttachmentInfo(data) {
    const emailBody = data.toString();
    const arrayBody = emailBody.split("--xYzZY");
    let attachmentInfo = arrayBody.find((t) => t.includes("Content-Disposition: form-data; name=\"attachment-info\""));
    attachmentInfo = attachmentInfo === null || attachmentInfo === void 0 ? void 0 : attachmentInfo.split("\"attachment-info\"")[1].trim();
    return JSON.parse(attachmentInfo);
}
exports.getAttachmentInfo = getAttachmentInfo;
function getAttachment(data) {
    const emailBody = data.toString();
    const arrayBody = emailBody.split("--xYzZY");
    let attachments = arrayBody.find((t) => t.includes("Content-Disposition: form-data; name=\"attachments\""));
    attachments = attachments === null || attachments === void 0 ? void 0 : attachments.split("\"attachments\"")[1].trim();
    const attachmentsNumber = parseInt(attachments ? attachments : "0");
    let attachment = [];
    if (attachments) {
        for (let i = 1; i <= attachmentsNumber; i++) {
            const attachmentDataArray = arrayBody.find((t) => t.includes(`Content-Disposition: form-data; name="attachment${i}"`));
            const attachmentDataAll = attachmentDataArray === null || attachmentDataArray === void 0 ? void 0 : attachmentDataArray.split(`"attachment${i}"`)[1].trim();
            const fileRegex = /filename="(.*?)"/;
            const fileMatch = fileRegex.exec(attachmentDataAll ? attachmentDataAll : "");
            const filename = fileMatch && fileMatch[1];
            const contentTypeMatch = attachmentDataAll === null || attachmentDataAll === void 0 ? void 0 : attachmentDataAll.match(/Content-Type:\s*([^\n\r]+)/i);
            const contentType = contentTypeMatch ? contentTypeMatch[1] : "";
            const content = attachmentDataAll === null || attachmentDataAll === void 0 ? void 0 : attachmentDataAll.split(`Content-Type: ${contentType}`)[1].trim();
            attachment.push({ content: content, contentType: contentType, fileName: filename });
        }
        console.log(attachment);
        return attachment;
    }
    else {
        return "No Attachments found";
    }
}
exports.getAttachment = getAttachment;
