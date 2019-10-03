var QODurl = "https://quotes.rest/qod";

var recepientsEmails = []; //enter email IDs

var quoteObject = { quote:"", author: ""}
function sendQOD() {
  MailApp.sendEmail(recepientsEmails, 'Quote of the Day', '', {htmlBody: buildMailBody()});
}

function buildMailBody() {
  var quoteData = getQOD();
  var quoteBody = "";
  quoteBody= "<p><b><i>\""+ quoteData.quote + "\"</i> - " + quoteData.author +"</b></p>";
  
  return quoteBody + getAttributionHTML();
}

function getQOD() {

  var responseData = UrlFetchApp.fetch(QODurl); 
  var JSONData =JSON.parse(responseData.getContentText());
  var quoteData = JSONData.contents.quotes[0];
  
  return quoteData;
}


function getAttributionHTML() {
  
  return '<span style="z-index:50;font-size:0.9em;"><img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/><a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style="color: #9fcc25; margin-left: 4px; vertical-align: middle;">theysaidso.com</a></span>';
}
