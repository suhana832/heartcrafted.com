from flask import Flask, render_template, request
import csv

app = Flask(__name__)

@app.route('/submit_form', methods=['GET', 'POST'])
def submit():
    if request.method == "POST":
        data = request.form.to_dict()
        write_data_csv(data)
        return render_template("submit.html")
    else:
        return "Failed to Place your order!"

@app.route("/")
def hello_world():
    return render_template("index.html")

def write_data_csv(data):
    name = data.get('name', '')
    email = data.get('email', '')
    contact = data.get('contact', '')
    product = data.get('product', '')
    deadline = data.get('deadline', '')
    message = data.get('message', '')
    with open('orders.csv', 'a', newline='') as csvfile:
        orders_writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        orders_writer.writerow([name, email, contact, product, deadline, message])

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
