# Live Demo

**Demo Link:** https://subscription-dashboard.netlify.app/

## Setup

This project was setup using **Vite**.

## Brain storming

When I first got this task, I spent some time thinking about where to start. I decided to focus on the UI first. I checked out Dribbble and other design websites, and also used some AI tools to get ideas for the layout and look.

Once the UI was finalized, I created the components and started fetching data, mapping it to the UI.

## Concepts I learned

Even though I had some prior knowledge, this project helped me understand several concepts more deeply, including: **reduce**, **useMemo**, **Pagination**, **Sorting** etc.

It was a good chance to practice and strengthen these skills.

## What could have been better

There’s still room for optimization. For example, I ended up passing the same props like _Users_ and _Subscriptions_ multiple times. I had planned to refactor the code and use **Zustand** for state management, but personal commitments delayed it. I plan to revisit this in the future.

## Challenge I faced

One of the trickiest parts was working on the subscription table. Initially, I merged two JSON files, _user.json_ and _subscription.json_, and mapped the data along with user details.

But when I started implementing the **filter functionality**, React caused some unexpected issues, and the filter didn’t work correctly. I spent a whole day trying to fix it without success.

In the end, I removed the merged data approach and used a different method, keeping users and subscriptions in separate states, which worked smoothly.

## THANK YOU
