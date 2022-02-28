from flask import Flask, jsonify, redirect, url_for
import requests
import datetime
import dateutil.relativedelta as relativedelta


app = Flask(__name__)

@app.route('/')
def get_homepage():
    return redirect(url_for('static',filename='ZGF2aWR5dWh3Ng==.html'))

@app.route('/hw6/api/info/<symbol>', methods=['GET'])
def get_info(symbol):
    api_key="c8bh0qqad3ieig9p7ujg"
    jprofile = requests.get('https://finnhub.io/api/v1/stock/profile2?symbol='+symbol+'&token='+api_key)
    jquote = requests.get('https://finnhub.io/api/v1/quote?symbol='+symbol+'&token='+api_key)
    jrecommend = requests.get('https://finnhub.io/api/v1/stock/recommendation?symbol='+symbol+'&token='+api_key)
    today = datetime.datetime.now()
    six_months = today - relativedelta.relativedelta(months=6, days=1)
    jcandle = requests.get('https://finnhub.io/api/v1/stock/candle?symbol='+symbol+'&resolution=D&from='+str(round(six_months.timestamp()))+'&to='+str(round(today.timestamp()))+'&token='+api_key)
    today2 = datetime.date.today()
    thirty_days = today2 - relativedelta.relativedelta(days=30)
    jnews = requests.get('https://finnhub.io/api/v1/company-news?symbol='+symbol+'&from='+str(thirty_days)+'&to='+str(today2)+'&token='+api_key)
    return jsonify(profile=jprofile.json(), quote=jquote.json(),recommend=jrecommend.json(),candle=jcandle.json(),news=jnews.json())


if __name__ == '__main__':
    app.run(port=8080, debug=True)
