
![thumbNailSuperSmall](https://user-images.githubusercontent.com/65863230/200182191-8c29c2d9-071b-4e66-a7d4-8a5f30cba533.png)

https://youtu.be/qkD0u_x7S84


## Inspiration
We looked at transportation as a whole in the US and were grateful for the benefit truck drivers have on the nation, so we looked at helping improve their daily lives.

## What it does
The program allows users to either sign in or make an account. Once they have done so, they can add a route to their dashboard with the origin and destination information. Users can also see the list of routes that currently exist. A rest stop owner can add their rest spot to that specific location with the maximum amount of space for sleeper trucks, providing truckers with an idea of the availability of parking spots at a given rest stop. The app will tell the user this information and calculate the amount of room left based on how many users are there. All data is stored in supabase.

## How we built it
Figma for mock-ups and designs, Github for code updates, and VSCode for code editor. We used React as a framework, with Ionic as our UI cross-platform toolkit. We used Capacitor by Ionic, a cross-platform native runtime for web apps. We used Supabase for database management, and the Mapbox API for map data and visualization

## Challenges we ran into
With Mapbox, it would crash, because the application would try to render it before passing it to the server. Routing the application to the different pages was something we spent many of our 36 hours on. We eventually discovered that we had a dependency conflict with Capacitor and our ionic routing library.

## Accomplishments that we're proud of
Getting the GPS API integration to work was time consuming, but that made it more rewarding when we finally made it work. Using Capaitor and Ionic to create a native mobile app and a responsive website was rewarding. Another highlight is the use of persistent storage for long-term data and user authentication for login and session management.

## What we learned
How to build a native mobile application that is cross platform. Also, utilization of API's, such as GPS and weather data. We also enjoyed learning serverless database user authentication and management. We also learned the value of reverting code and version control to help fix broken code.

## What's next for Transportal
Adding more features for the user, such as data of locations along the route and allowing map interaction. Also, the addition of more styling to provide uniformity.
