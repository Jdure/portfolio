---
title: "Barelens Photography"
author: "Jonathan D."
description: "Photography website with a custom CMS to manage client request"
category: "Client Website"
date: "2023-02-12"
bannerImage: "https://res.cloudinary.com/dhfp2qscl/image/upload/v1676564609/portfolio/barelens_banner_t66qp8.jpg"
tags:
    - CMS
    - Next.js
    - Tailwind 
---

## Overview

I had a lot of fun creating this project. I made a custom photography website for a photographer who wanted a simple minimalist website to display their work, show their service fees and, more importantly, manage client requests.

I built this website with the following Tech Stack (**skip** this if you don't care, I won't judge you 😁)

<table style="background-color:snow;">
  <tr>
    <td align="center" valign="center"><img alt="Logo for Next.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="100" height="100"/></td>
    <td align="center" valign="center"><img alt="Logo for Tailwind" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" width="100" height="100"/></td>
    <td align="center" valign="center"><img alt="Logo for PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" width="100" height="100"/></td>
    </tr>
    <tr>
    <td align="center" valign="center"><img alt="Logo for Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" width="100" height="100"/></td>
    <td align="center" valign="center"><img alt="Logo for Azure" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg" width="100" height="100"/></td>
    <td align="center" valign="center"><img alt="Logo for Directus CMS" src="https://user-images.githubusercontent.com/522079/43096167-3a1b1118-8e86-11e8-9fb2-7b4e3b1368bc.png" width="100" height="100"/></td>
    </tr>
</table>

**Do** check out the repo on [Github](https://github.com/Jdure/Barelens) and [Barelens Photography](https://barelens.vercel.app/)'s site.

## Purpose and Goal

The photographer wanted a minimalist website allowing clients to view their service and schedule photoshoots.

Basically, the site had two goals:

1. Provide clients with a look at the photographer's work
2. Allow clients to send a request to the photographer

For the first goal, I was inspired by magazines and photo catalogues. I wanted the clients to see the photographer's best pictures quickly and get a feel for their artistic style. With Tailwind, I could design the page's content without a hitch. Although, I used some third-party libraries for a few components, like the carousel.

![carousel](https://res.cloudinary.com/dhfp2qscl/image/upload/v1676564609/portfolio/barelens_banner_t66qp8.jpg)

As for the second goal, it was important for both the photographer and me that they're able to manage most of the content (more on this later…) and all of the upcoming requests. So I looked for a user-friendly CMS that had robust features.

I choose Directus; it's open source, plays nice with several databases, generates either a REST or GraphQL API and comes with excellent features out of the box, like roles, permissions, webhooks and flows that can be triggered by different events in the database.

## Spotlight

![directus](https://res.cloudinary.com/dhfp2qscl/image/upload/v1676565443/portfolio/directus_zo64c5.jpg)

Directus is definitely a top CMS because of all the features it comes with out of the box (email, role base authentication, webhooks), plus it's visually pleasing (to me, at least). As I said, you can use its REST API to pull all the data you need (text, images and component pieces) and guard the data you don't want to share publicly.

The only hiccup came when trying to self-host it. When I began testing it,  the documentation contained different self-hosting alternatives like AWS, Digital Ocean, Heroku, and others. Yet, a few days later, they took those guides down and provided only one option…

![docker](https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png)

I had to wrap my head around using Docker, Dockerfiles and docker-compose. Still, I found some excellent guides on Youtube, and the Docker docs were pretty good. I then created my Docker image of Directus and hosted it on the cloud. 

I can go on and on about Directus, but the integration you can achieve with Next.js is incredible. Things like :

- On-Demand Incremental Static Regeneration with Directus Webhooks allows the photographer to make changes that get pushed immediately on the website.

- Automated Flows for when a request comes in. In other words, sending confirmation emails to clients and alert messages to the photographer whenever they receive a new request.

- Role base permissions and API route protection so that the database isn't vulnerable to specific attacks

I can't stress enough how I really enjoyed using this CMS.

Tailwind handled most design elements, but I had to rely on a few third-party libraries for specific use cases. For example, the request form required clients to select specific dates and times. In contrast, the UI had to reflect the database and omit timeslots that were no longer available. This was challenging since the HTML date-time input needed more attributes to do this dynamically without large chunks of code, so I opted for a third-party library named react-datetime. It worked flawlessly. It allowed me to omit dates and timeslots while staying true to the site's overall design.

## Wrap up

On a technical level, getting familiar with Docker and containerized applications was thrilling. The learning curve was steep at first, but it made the deployment process for this project a breeze.

The biggest challenge that I faced was putting myself in the photographer's shoes and building an application that was easy to manage for them. The UI is simple for site visitors, but my priority was ensuring the photographer could view their content, make necessary changes and manage their photoshoot requests. Again, Directus was perfect for our needs as it offered so much with minimal setup.

I had an excellent time building this project.
