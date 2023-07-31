# Meal Search and Favorite Meals App

This application allows users to search for meals using an API and display the search results on the frontend. The search functionality works similarly to Google's suggestions, where the results update in real-time as the user types. Additionally, users can add meals to their list of favorite meals, view more information about a particular meal on a separate page, and remove meals from their favorites list.

The app will be accessible in your browser at `https://ajazsakib.github.io/mealapp/`.

## Components

**SearchBar**: This component provides the search functionality to the user. As the user types, it sends requests to the API, and the search results update dynamically.

**SearchResult**: This component represents each search result meal item. It displays the meal name, a photo, and a favorite button. Clicking the favorite button adds the meal to the "My favourite meals" list.

**MealDetailPage**: This component is displayed when the user clicks on a particular search result. It shows more detailed information about the meal, such as its name, photo, instructions, etc.

**FavouriteMealsPage**: This page displays a list of all the favorite meals. The list is persistent and will have the same number of meals before and after closing/refreshing the browser.

## Persistent Favourite Meals List

To make the "My favourite meals" list persistent, we can use browser storage. In this application, we'll use `localStorage`. When a user adds a meal to their favorites, we store the meal information (such as name and ID) in `localStorage`. Upon revisiting the app, we retrieve the stored meal data from `localStorage` and populate the "My favourite meals" list accordingly.

## Remove from Favorites Button

Each meal item in the "My favourite meals" list should have a "Remove from favorites" button. When the user clicks this button, we remove the corresponding meal data from `localStorage`, and the list updates accordingly.

## API Integration

For this functionality, we will need to integrate with a meal API that provides meal data. You can use an existing public meal API like "TheMealDB API" (https://www.themealdb.com/api.php) to fetch meal details.
