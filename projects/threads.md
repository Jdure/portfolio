---
title: "Nouveau Threads "
author: "Jonathan D."
description: "An accessible Shopify store built with Next.js and Tailwind CSS"
category: "Demo"
date: "2023-02-24"
bannerImage: "https://res.cloudinary.com/dhfp2qscl/image/upload/v1677269910/Nouveau-Threads.png"
tags:
    - Next.js
    - Tailwind 
    - Shopify
    - E-commerce
---

## Overview

Nouveau threads is an e-commerce site I built with Next.js, Tailwind, and Shopify’s Storefront API. I built this site to offer an accessible website with easy navigation, emphasizing desktop and mobile responsiveness. In addition, the Shopify backend makes inventory and payment management a cinch. This site is a starting point for upcoming e-commerce projects that I’ll be building.

Here is the tech stack that I used :

<table style="background-color:snow;">
  <tr>
    <td align="center" valign="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="100" height="100"/></td>
    <td align="center" valign="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" width="100" height="100"/></td>
    <td align="center" valign="center"><img style="padding-bottom:2.5em;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" width="100" height="100"/></td>
    </tr>
</table>

Be sure to check out the [Github repo](https://github.com/Jdure/nouveau-threads) and the [Nouveau threads](https://nouveau-threads.vercel.app/).

## Purpose and Goal

![Cart](https://res.cloudinary.com/dhfp2qscl/image/upload/v1677345735/Screen_Shot_2023-02-25_at_12.18.18_PM_rvnjcr.png)

I built this project to create a foundation for future e-commerce sites I plan on building. This site will serve as a solid base for me to make, enabling me to focus on the specifics of each new project rather than starting from scratch each time. Using Next.js, Tailwind, and Shopify Storefront API is a winning combination 🚀.


My goal with this project was to create an e-commerce site that was easy to use and provided an exceptional shopping experience. To achieve this, I designed the site with accessibility and mobile responsiveness in mind. For accessibility, I followed the [a11y checklist](https://www.a11yproject.com/checklist/) along with [Google's Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). In addition, I used a Tailwind library called [DaisyUI](https://daisyui.com/) to quickly design UI components for mobile responsiveness. Although there are some quirks with this component library.

## Spotlight

![Item](https://res.cloudinary.com/dhfp2qscl/image/upload/v1677346170/Screen_Shot_2023-02-25_at_12.28.50_PM_eyhyp3.png)

While developing my e-commerce site, I faced a few technical hurdles. One significant issue I encountered was related to the third-party library DaisyUI, which provided excellent components for the site’s front end.

However, I noticed that most of the colour schemes used by DaisyUI were not accessible, which could potentially impact the site’s accessibility score. To solve this problem, I researched accessible colour schemes. I found an array of accessible colours that I could use instead.

Since DaisyUI is an extension of Tailwind, I was able to integrate these accessible colours easily into my project. By making this small change, I ensured that the site was highly accessible while still utilizing the benefits of DaisyUI’s excellent components. 

Overall, this solution allowed me to maintain the site’s accessibility score of 100 while providing all users with a visually appealing and user-friendly experience.

## Wrap up

I learned to manage different tools and libraries. For example, I used react-query for data fetching, which had many benefits when fetching data client-side.

At times, I found that more was needed to infer GraphQL types when using TypeScript, making the development process more challenging. In addition, I used Shopify’s GraphQL API for inventory data fetching. While it provided excellent functionality, some minor inconsistencies could be improved. I wish that Shopify had a proper JavaScript SDK for inventory management, making the integration smoother.

One of my main goals for the project was to make it as accessible as possible. I learned much about accessibility during the development process and prioritized it throughout the project. While no site can be 100% accessible, I am glad I made a solid effort to make it as accessible as possible. Overall, the project taught me a lot about using various tools and libraries and prioritizing accessibility in web development.
