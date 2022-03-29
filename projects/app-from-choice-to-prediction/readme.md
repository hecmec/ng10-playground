# From Choice to Prediction (POC)

Make a category prediciton from user answers to questions

This is used in funny apps like: Which Hogwarts House Do You Belong In?
Or in more serious ones like: Which political party would is close to you ? Where do you fit in the political typology?

https://www.pewresearch.org/politics/quiz/political-typology/
If you had to choose, would you rather have…

- A smaller government providing fewer services
- A bigger government providing more services

## build serve test projects

    npm run build appFromChoiceToPrediction

    ng serve appFromChoiceToPrediction

## cli stuff

    ng g c expression --project=appFromChoiceToPrediction --flat=false --change-detection=OnPush

# Tech stuff

There is one json file for the data

There are some categories and n questions with answers that have each an affinity to categories.

{
categories: [
{
"name":"green"
"affinities"
}
]
}
