from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('index.html')

# @app.route("/favicon.ico")
# def img():
#     return render_template('static/imgs/favicon')