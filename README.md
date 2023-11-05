# Test Project Two

This is a test project that I created for an application. I enjoyed working on this project and have decided to upload it to my GitHub.

However i was not able to finish this Project in the desired time frame.

You can see the deployed build [here](https://neon-moxie-6894f4.netlify.app/). (Nothing much to see here)

This project was bootstrapped with [Vite](https://vitejs.dev/) using the TypeScript + SWC preset.

## Getting Started

To run the project locally, follow these steps:

1. Install the dependencies by running `npm install`.
2. Start the development server with `npm start`. The project will be available at `localhost:5173`.

## Assignment

The assignment details can be found in the assignment folder.

## What i spent time on

As i was not able to finish the Project in the time frame, but i am still of the impression that i actually did a good job and that i am the right guy for the job, i list what i did and approximately how much time each step took me.

1. 25 minutes: Project analysis (Clarifying requirements and determining the implementation plan)
2. 05 minutes: Setting up Create React App
3. 10 minutes: Installing Material-UI and fonts
4. 20 minutes: Establishing folder structure (Determining needed files and grouping relevant areas into components)
5. 10 minutes: Setting up alias structure
6. 20 minutes: Realizing that Create React App is no longer maintained and Vite is now recommended. Re-setting up the project with Vite.
7. 30 minutes: Vectorizing header image (Logo vectorized with Inkscape, word mark (right part of logo) designed in Figma with Bebas Neue - although not the correct, but aesthetically fitting font)
8. 10 minutes: Integrating header image and making it responsive
9. 60 minutes: Setting up comprehensive localization including translations, date, time, and currency values
10. 40 minutes: Applying Material-UI theming and configuring all text settings, as well as customizing TextField for a consistent design
11. 10 minutes: Building a search field and realizing that the used icon is not a material ui icon.

After 4 hours of development i have stopped, because i am over the time. However i made a commit for the state of the project after 3 hours and one after 4 hours.

## Questions i would have asked the designer

1. For what reason is there no pagination on the grid view? should i add the one from the list view? Or should it be endless scroll?
   1. If the pagination would be on both views, should i keep the page number when switching between views?
2. Why is the icon in the search bar not the material design search icon? Can i just use the material design search icon?
3. Would you please make the bootshaus logo exportable or could you give it to me in another way?
4. Should the locations be clickable? (The design is pretty clear that they should not be but i would have proposed to do so)
5. What should i do for small screens with the lists? Is it okay if make the list elements cards on mobile? Do we need both views for mobile?

## What i would have done if i had more time and how i would have worked

1. Implement fonts correctly
2. Implement responsive behavior properly (With communication with the designer)
3. Put the Layout as a background image behind the finished product, to see if i implemented everything correctly
4. Change up the provided JSON:
   1. Add the special case from page one of the layout with the the info text and the text that 53 tickets are still remaining.
   2. The pictures i would have put into the repo, just so that i would not have to consider CORS in any way
5. The pictures i would have made static in the format using the padding-bottom and height 0 trick: https://css-tricks.com/aspect-ratio-boxes/
6. For longer texts (e.g. infotext and titles) i would have added "word-break: break-word" so that the customer cannot put in super big words which would break the layout
7. I would have implemented the switching backgrounds for the list view using nth-child
8. I would have reused the topbar and header image for both views
9. I would have added a loading circle or loading bar for the list view loading
10. For the pagination i would have made sure that the page does not jump up when switching the pages (Keeping the size consistent)
11. I would have cached the loading of the lists so that it can be reused in both views (using react-query if possible)
12. I would have added tests using React-Testing-Library and Jest. (That is what all the .test.tsx files are there for)
