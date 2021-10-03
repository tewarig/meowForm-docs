# How to use MeowForms with Node.js

First, make sure you have signed up at [MeowForms](https://meowform.xyz) and created a form.

## Requirements

- Node.js
- Express.js
- Axios

To handle your form data with Node.js, you must send them from the frontend by using a POST request. A basic HTML form could look like this:

```html
<!-- "/handleform" is the name of the route that will process the form data -->
<form action="/handleform" method="POST">
  <label for="email">E-Mail</label>
  <input type="email" name="email" id="email" />

  <label for="name">E-Mail</label>
  <input type="text" name="name" id="name" />

  <button type="submit">Send</button>
</form>
```

When you use Express.js, you need to add the following code to add a route that serves the HTML file with the form:

```javascript
/* "/form" is the name of the route that serves the form  */
app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/form.html') /* form.html is the name of your HTML file */
})
```

Next, you need to enable Express.js to parse JSON bodies and URL-encoded bodies:

```javascript
app.use(express.json())
app.use(express.urlencoded())
```

Finally, add the code for the route to process the form data and send it to MeowForm:

```javascript
app.post('/handleform', async (req, res) => {
  /* Destructure form values from the request body */
  const { name, email } = req.body

  /* Send the values to MeowForm with another POST request */
  const request = await axios({
    method: 'post',
    /* Replace foo@example.com with your email and SomeForm with the name of your form */
    url: 'https://server.meowform.xyz/form/foo@example.com&SomeForm',
    data: {
      name,
      email,
    },
  })

  if (request.status === 200) {
    res.status(200).json({ message: 'success' })
  } else {
    res.status(500).json({ message: 'an error occured' })
  }
})
```
