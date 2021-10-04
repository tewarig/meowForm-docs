# Sending Request to MeowForms😸 (Python)

⚠️Make sure you have registered to the MeowForms😸

The endpoint to submit a response will be in the format:
```
https://server.meowform.xyz/form/<your_registered_email>&<your_form_name>
```
along with the data from the HTML form created by the user!

If the POST request is made sucessfully the endpoint will return status 200 😁 otherwise it will result in some error 😕

We will make use of the ```requests``` module in Python to work with HTTPS methods.

# Talk is cheap show me the code!

## Saving Credientials
```python
MEOWFORM_NAME = '<your_form_name>'
USER_EMAIL = '<your_registered_email>'
SERVER_URL = 'https://server.meowform.xyz/form/{}&{}'.format(USER_EMAIL,MEOWFORM_NAME)
```

Now for the interesting part, let's make a POST request to MeowForms😸!

## POST Request to MeowForms😸

Here's how you can simply make a post request to the server and MeowForms😸 would save it.

```python
data = {
    '<column_1>' : '<value_1>',
    '<column_2>' : '<value_2>',
    '<column_3>' : '<value_3>'
}
r = requests.post(url=SERVER_URL,data=data)
if r.status_code == 200:
    print("Form Submitted! :)")
else:
    print("Some Error Occured :(")
```

If you want to have a look at a simple coding example you can refer the link: [Replit Code](https://replit.com/@BasudevTyagi/MeowFormsPythonDocs)
