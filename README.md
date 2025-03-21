# Creative Story Challenge

A mobile web interface for a creative writing challenge where users connect two images in a story.

## Features

- User name input form
- Two-image creative writing challenge
- 8-minute timer that starts when the user begins typing
- Automatic submission when time runs out
- Local storage for submitted content

## Setup

1. Clone or download this repository
2. Place your images in the root directory:
   - `image1.jpeg` - The image of a child with a key by a tree
   - `image2.jpeg` - The image of a child opening a door
3. Open the `index.html` file in a web browser, or host the files on a web server

## How It Works

1. Users enter their name on the first screen
2. After submitting their name, they see the story challenge page with:
   - Two images to connect creatively
   - Evaluation criteria
   - A text area for writing their story
   - An 8-minute timer
3. The timer starts automatically when the user begins typing
4. The user can submit their story manually or it will be submitted automatically when time runs out
5. All data is stored in the browser's local storage

## Storage

For a production environment, you would need to set up a backend server to store the submitted data. Currently, the application stores data in the browser's localStorage, which is sufficient for demonstration purposes.

## Customization

- Edit the HTML and CSS files to change the appearance
- Modify the JavaScript to change the timer duration or add additional functionality
- Replace the images by keeping the same filenames or updating the image paths in the HTML 