# Sending Request to MeowForms😸 (Flask)

⚠️Make sure you have registed to the MeowForms😸

The endpoint to submit a response will be in the format:
```
https://server.meowform.xyz/form/<your_registered_email>&<your_form_name>
```
along with the data from the HTML form created by the user!

If the POST request is made sucessfully the endpoint will return status 200 😁 otherwise it will result in some error 😕

We will make use of the ```requests``` module in Python to work with HTTPS methods.<br><br>

# Talk is cheap show me the code!

## Saving Credientials
```python
MEOWFORM_NAME = '<your_form_name>'
USER_EMAIL = '<your_registered_email>'
SERVER_URL = 'https://server.meowform.xyz/form/{}&{}'.format(USER_EMAIL,MEOWFORM_NAME)
```

## Setting Up Flask Application
Copy the below code to set up a simple Flask Application:
```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello Flask!"

if __name__ == "__main__":
    app.run(debug=True)
```

The above code creates a simple Flask app which runs on ```http://127.0.0.1:5000```

Now for the interesting part, let's setup MeowForms😸!

## Setting Up Route for MeowForms😸

Here's how you can simply make a post request to the server and MeowForms😸 would save it.

```python
@app.route('<you_app_route>',methods=['GET','POST'])
def meowforms():
    if request.method == 'POST':
        form_data = request.form
        data = dict(form_data.lists())
        r = requests.post(url=SERVER_URL,data=data)
        if r.status_code == 200:
            return render_template('meowforms.html',message="Form Submitted! :)")
        else:
            return "Some Error Occured :("
    else:
        return render_template('meowforms.html')
```

If you want to have a look at a simple coding example you can refer the link: [Replit Code](https://replit.com/@BasudevTyagi/MeowFormsFlaskDocs)
