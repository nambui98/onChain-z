With an execution limit of 50 milliseconds, Edge Functions are typically better suited for shorter, performance-critical operations running at the very beginning of the request chain, with the power to modify any aspect of the request before it’s processed further, or the response before it’s delivered to the client. On the other hand, serverless functions can perform longer computations of up to 10 seconds (or even 15 minutes for Background Functions!), making them ideal to render entire applications or perform long-running asynchronous jobs.


Netlify Edge Functions can 
* take request and context
* transform to response
* get response text, transform it again with customized personalized content (based on request query/param/header, ...)
* serve personalized content to user


Add personalization to static HTML with Netlify Edge Functions — no browser JavaScript required

https://www.netlify.com/blog/add-personalization-to-static-html-with-edge-functions-no-browser-javascript/

