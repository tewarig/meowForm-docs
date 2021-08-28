# sending response

make sure you have registed to the meowform
we can submit response here ,

```html
https://server.meowform.xyz/form/gauravtewari111@gmail.com&React
```

this endpoint will return status 200 and response saved message in body . if your response is saved and if it not it will return error.
so you can use axios and send data in the body to the post request and meowform would save that data so you can see that response later in the Dashboard and also shoot an email in you inbox.

# Talk is cheap show me the code

here you simply have to make a post request to the server and MeowForm would save it.

```jsx
const makeRequest = async () => {
  let request = await axios({
    method: "post",
    url: "https://server.meowform.xyz/form/gauravtewari111@gmail.com&React",
    data: {
      name,
      email,
      catname,
    },
  });
  if (request.status == 200) {
    alert("reponse saved");
  } else {
    alert("some error have occured");
  }
};
```

and if you want to have a look at how the whole code sand box have a look in this codebase :)
This is a functional card and if you find it helpful do submit a response on it.
[CodeSand Box](https://codesandbox.io/s/meowform-react-mhj8x)
