## Escape-room
React application for searching and booking entertainment quests in St. Petersburg.
## Description
This application contains several screens: the main page with the list of available entertainment quests, the page with additional information about each quest, the page with the form for signing up for the application, the page for booking the quest, and the page with the list of booked quests.

On the main page of the application is a list of cards with brief information about each quest.
![Main-screenshot](https://github.com/LenaKorsakov/escape-room/blob/main/screens/main-screen.png)

The user has the ability to apply two types of sorting: by type of quest and by degree of difficulty.
![Sort-screenshot](https://github.com/LenaKorsakov/escape-room/blob/main/screens/sort-screen.png)

The other screen available to the user has information about the contact information of the company-provider of entertaining quests The address of the company is dynamically displayed as a marker on the map.
![Contacts-screenshot](https://github.com/LenaKorsakov/escape-room/blob/main/screens/contacts-screen.png)

When user click on any of the cards quests page appears with a detailed description: the quest story, complexity, number of participants, etc.
![Quest-screenshot](https://github.com/LenaKorsakov/escape-room/blob/main/screens/quest-screen.png)

To successfully book the quest, the user only needs to click on the big orange button. However, if the user is not authorized, the app will redirect him to the registration page, where he will have to enter his email and password.
![Log-in-screenshot](https://github.com/LenaKorsakov/escape-room/blob/main/screens/log-in-screen.png)

When the user successfully registers, he will be redirected to a page with a very convenient booking form!
This form provides a choice of the quest location by clicking on the marker on the interactive map, the choice of the quest time by clicking on the checkbox. In addition, the user will need to leave their contact information, but be very careful, because the criteria for valid entered data is quite strict :)
![Booking-screenshot](https://github.com/LenaKorsakov/escape-room/blob/main/screens/booking-screen.png)

Another private page, which is only available to registered users, is the page with the list of bookings. On it, the user can quietly see his upcoming events and, if necessary, cancel the quest.
![My-quests-screenshot](https://github.com/LenaKorsakov/escape-room/blob/main/screens/my-quests.png)

## Stack
- ReactJS,
- Typescript,
- React Router Dom,
- Redux Toolkit,
- React Hook Form
- Axios
- Leaflet-map
- Toast

All errors are intercepted.
## Demo site
https://escape-room-korsakova.vercel.app/

## How to run app:

- Clone repository:
```bash
git clone git@github.com:LenaKorsakov/six-city.git
```

- Install dependencies repository:

```bash
npm install
```

- Run application:

```bash
npm start
```

- Check tests
```bash
npm test
```
