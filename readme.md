# PROJECT 2: THE TASTIES APP


- **TASTIES**
- **Aubrey Robillard**
- [**LINK TO GITHUB**](https://github.com/aubreyrobillard/unit2project.git)
- [**LINK TO DEPLOYED WEBSITE**](https://aubreyunit2project.onrender.com/)
- **List of technologies used: html, JS, CSS, Node, Express, EJS, Mongo**
- [**LINK TO TRELLO**](http://url.com)


## DESCRIPTION:
"Do you struggle remembering that restaurant you went to with your friend last week? When someone asks you where you want to eat, is your response often something like "umm, well, I'm not sure, what are some good places? I have no memory of eating at a restaurant in my entire life!" Well, I have a simple solution for you. With the TASTIES app, users will be able to collect information about their favorite restaurants and store that information in one convenient list. Enjoyed that new sushi place that just opened around the corner? Log it in the app! Add details including the restaurant name, the dishes you ordered, best drinks from the bar, the price range, and a link to the restaurant's website. Also a place to add any notes such as 'celebrated dad's birthday here'."

## MOCK UP OF UI:

- ![desktop view](/images/project%202%20wireframe.png)


## List of Backend Endpoints:

| ENDPOINT | METHOD | PURPOSE |
|----------|--------|---------|
| /restaurant     | get    | list all restaurants |
| /restaurant/:id | get    | show one restaurant from list |
| /restaurant/:id | delete | delete one restaurant by id|
| /restaurant/new | get    | render form to add new restaurant |
| /restaurant     | post   | add the new restaurant to main list |
| /restaurant/:id/edit | get | edit a restaurant from the list by id |
| /restaurant/:id | put    | add edited changes to restaurant by id |


## ERD (entitity relationship diagram):

![picture of ERD](/images/ER%20Diagram.png)