"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttachment = exports.getAttachmentInfo = exports.getHtmlBody = exports.getAttachmentsNumber = exports.getSenderIP = exports.getSubject = exports.getFrom = exports.getBody = exports.getTo = exports.getContact = void 0;
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
    return from;
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
    return attachmentInfo;
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
            attachment.push({ content: content, contentType: contentType });
        }
        return attachment;
    }
    else {
        return "No Attachments found";
    }
}
exports.getAttachment = getAttachment;
