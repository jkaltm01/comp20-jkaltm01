Josh Kaltman
Lab 6: Messages

1. All aspects of the work have been correctly implemented. The JSON data is opened by using XMLHttpRequest, the JSON data is parsed, and the output is posted in the "messages" section of the HTML.
2. I did not collaborate with anyone on this assignment.
3. I spent about three hours on this assignment, including the reading.

Question: It is possible to request the data from a different origin, but it is not possible to request the data from your local machine from using XMLHttpRequest. For security reasons, XMLHttpRequest requests will only succeed if they are made to the host that served the original web page, which is why data from your local machine cannot be requested. The same origin policy restricts how a document or script loaded from one origin can interact with a resource from another origin, due to security reasons.