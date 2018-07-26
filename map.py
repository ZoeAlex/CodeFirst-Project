from flask import Flask, render_template, request
from datetime import datetime

app = Flask("MyApp")

@app.route("/")
def map():
	return render_template("map.html")

@app.route("/african")
def african():
	return render_template("african.html")

@app.route("/asian")
def asian():
	return render_template("asian.html")

@app.route("/european")
def european():
	return render_template("european.html")

@app.route("/search", methods=["POST"])
def read_form_data():
	form_data = request.form
	print form_data
	restaurant = form_data['restuarants']
	print restaurant
	return render_template("african.html", restuarant='african')


app.run(debug=True)

