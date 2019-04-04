# basic template from python image README
# Runs a simple Python application
FROM python:3

WORKDIR /usr/src/app

# copy requirements into image
COPY app/requirements.txt ./

# install requirements
RUN pip install --no-cache-dir -r requirements.txt

# copy application code into image
COPY ./app .

# start server daemon
CMD [ "python", "./server.py" ]