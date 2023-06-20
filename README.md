# EcoSavvy

# "Sort Smarter,recycle better - lets keep our planet greener!"
Ecosavvy is a waste segregator based on ML model built using CNN and trained over 8000 data samples which segregates waste into 11 different categories.
It uses computer vision to enable efficient waste management and recycling practices.

## Demo

[ https://github.com/Altafalam3/EcoSavvy/blob/main/assets/Demo.mp4
](https://github.com/Altafalam3/EcoSavvy/assets/102013452/479ced28-66e4-4ed7-bbbd-da58a6a0a5a7
)

## Installation (Clone)

open terminal and type

```
git clone https://github.com/Altafalam3/EcoSavvy.git
```

or you can download using the url below

```
https://github.com/Altafalam3/EcoSavvy.git
```
## Frontend ( React )

#### To install dependency

```
npm install
```

#### To start the server

```
npm start
```

#### For Production Build

```
npm run build
```


## Backend ( Django )

To run the program in local server use the following command in backend folder

```
python manage.py runserver
```

To migrate the database open terminal in project directory and type

```
python manage.py makemigrations
python manage.py migrate
```


Server will be available at `http://127.0.0.1:8000` in your browser

Don't Forget to whitelist your host origin using `django-cors-header` when using in production<br>
[See Documentation](https://pypi.org/project/django-cors-headers/)

By Team Debuggers <br>
========Thank You !!!=========
