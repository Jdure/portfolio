---
title: "Nouveau Threads "
author: "Jonathan D."
description: "An accessible Shopify store built with Next.js"
category: "Demo"
date: "2023-02-24"
bannerImage: "https://res.cloudinary.com/dhfp2qscl/image/upload/v1677269910/Nouveau-Threads.png"
tags:
    - Next.js
    - Tailwind 
    - Shopify
---

## Introduction

Nouveau threads is an e-commerce site I built with Next.js, Tailwind, and Shopify's Storefront API. The site has been designed to offer accessibility and ease of navigation, with an emphasis on mobile responsiveness. While the Shopify backend makes inventory and payment management a cinch. I created this site as a starting point for upcoming e-commerce projects that I'll be building in the future.

Checkout the [Github repo](https://github.com/Jdure/nouveau-threads) and the [Nouveau threads](https://nouveau-threads.vercel.app/).

## Purpose and Goal

I built this project because I wanted to create a foundation for future e-commerce sites that I plan on building. This site will serve as a solid base for me to build upon, enabling me to focus on the specifics of each new project rather than starting from scratch each time. I believe, using Next.js, Tailwind, and Shopify Storefront API is a winning combination.

My goal with this project was to create an e-commerce site that was easy to use and provided an exceptional shopping experience. To achieve this, I designed the site with accessibility and mobile responsiveness in mind. For accessability, I followed the [a11y checklist](https://www.a11yproject.com/checklist/) along with [Google's Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). For mobile responsiveness I used a Tailwind library called [DaisyUI](https://daisyui.com/) to quickly design UI components. Although there are some quirks with this component library.

## Spotlight

During the development of my this e-commerce site, I faced a few technical hurdles. 

One significant issue I encountered was related to the third-party library DaisyUI, which provided excellent components for the site's frontend. 

However, I noticed that most of the color schemes used by DaisyUI were not accessible, which could potentially impact the site's accessibility score.

To solve this problem, I researched accessible color schemes and found an array of accessible colors that I could use instead. 

Since DaisyUI is an extension of Tailwind, I was able to integrate these accessible colors easily into my project. 

By making this small change, I was able to ensure that the site was highly accessible while still utilizing the benefits of DaisyUI's excellent components. 

Overall, this solution allowed me to maintain the site's accessibility score of 100 while still providing a visually appealing and user-friendly experience for all users. 

## Lessons Learned

I learned to manage different tools and libraries. 

I used react-query for data fetching, which had many benefits when fetching data client-side. 

At times, I found that it was insufficient in inferring GraphQL types when using TypeScript, which made the development process more challenging.

In addition, I used Shopify's GraphQL API for inventory data fetching, and while it provided excellent functionality, there were some minor inconsistencies that could be improved. 

I wish that Shopify had a proper JavaScript SDK for inventory management, which would make the integration even smoother.

One of my main goals for the project was to make it as accessible as possible. I learned a lot about accessibility during the development process and made sure to prioritize it throughout the project. While no site can be 100% accessible, I am glad that I made a strong effort to make it as accessible as possible from the start. Overall, the project taught me a lot about using various tools and libraries, as well as the importance of prioritizing accessibility in web development.
