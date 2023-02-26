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

I had a lot of fun creating with project, I created a custom photography website for a photographer who wanted a simple minimalist website to display their work, show their service fees and more importantly manage client request. 

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

**DO** check out the repo on [Github](https://github.com/Jdure/Barelens) and the [Barelens Photography](https://barelens.vercel.app/)'s site.

## Purpose and Goal

The photographer wanted a minimalist website that allowed their clients to view their service and schedule photoshoots. 

Basically, the site had two goals:

1. Provide clients a look at the photographers work
2. Allow clients to send request to the photographer

For the first goal, I was inspired to by magazines and photo catalogs. I wanted the clients to quickly see the photographers best pictures and get a feel for their artistic style. With Tailwind I was able to very quickly design the content of the page without a hitch. Although, I used some third party libraries for a few components like the carousel. 

![carousel](https://res.cloudinary.com/dhfp2qscl/image/upload/v1676564609/portfolio/barelens_banner_t66qp8.jpg)

As for the second goal, it was important for both me and the photographer that they're able to manage *most* of the content (more on this later..) and all of the upcoming request. So I looked for a CMS that was user friendly but that had robust features. 

This is why I choose Directus, it's open source, it plays nice with several databases, it generates either a REST of GraphQL API and it comes with very good features out of the box. Like roles, permissions, webhooks and flows that can be trigger by different events in the database.  

## Spotlight

![directus](https://res.cloudinary.com/dhfp2qscl/image/upload/v1676565443/portfolio/directus_zo64c5.jpg)

Directus is definitely a top CMS because of all the feature it comes with out of the box (email, role base authentication, webhooks), plus it's visually pleasing (to me at least). As I said before, you can use its REST API to pull the all the data that you need (text, images and component pieces) and guard the data you don't want to share publicly. 

The only hiccup came when trying to self-host it. It's not terrible but when I began testing it the documentation was full of different self hosting options. AWS, Digital Ocean, Heroku, anything really but a few days later they took those guides down and they provided only one option...

![docker](https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png)

I had to wrap my head around using Docker, Dockerfiles and docker-compose but I found some great guides on Youtube, plus the docker docs were pretty good. I then created my own docker image of Directus and hosted it on the cloud. 

I can go on and on about Directus but the integration you can achieve with Next.js is great. Things like :

- On-demand Incremental Static Regeneration with Directus Webhooks allowing the photographer to make changes in the backend and having these changes be reflected on a static website is so satisfying

- Automated Flows for when a request comes in. In other words, sending confirmation emails to clients and alert messages to the photographer whenever they received a new request 

- Role base permissions and API route protection, so that the database isn't vulnerable to certain attacks 

I can't stress enough how I really enjoyed using this CMS. 

Tailwind handled most of the design elements but I had to rely on a few third party libraries for certain use cases. For example the request form needed to allow clients to select specific dates and time while the UI needed to omit timeslots that were no longer available. This was bit challenging since the html date-time input didn't have enough attributes to do this dynamically with out large chunks of code, so I opted for a third-party library react-datetime and it worked flawlessly. It allowed me to omit both dates and time slots while  

## Wrap up

On a technical level, getting familiar with docker and containerized applications was thrilling. The learning curve was a bit steep at first but it made the deployment process for this project a breeze. 

The biggest challenge that I faced was putting myself in the photographer's shoes and building an application that was easy to manage for them. I believe I built a very simple UI for visitors of the site but my priority was to ensure that the photographer had the ability to view their content, make necessary changes and manage their photoshoot request. Again, I think choosing Directus was perfect for both our needs as it offered so much with minimal setup. 

Overall, I had a great time building this project.
