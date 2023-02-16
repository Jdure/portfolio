---
title: "Barelens Photography"
author: "Jonathan D."
description: "Photography website with an custom CMS to manage client request"
category: "Client Website"
date: "2022-03-13"
bannerImage: "https://via.placeholder.com/1080x720"
tags:
    - CMS
    - Next.js
    - Tailwind 
---

# Introduction

I had a lot of fun creating with project, I created a custom photography website for a client who wanted a simple minimalist website to display their work, show their service fees and more importantly manage client request. 

I built this website with the following tech stack (skip this if you don't care, I won't judge you :grin:): 

    - Next.js 
    - Tailwind
    - Postgres (Supabase)
    - Directus CMS
    - Azure Storage
    - Docker 

Check out the repos on [Github](https://github.com/Jdure/Barelens) and [Barelens Photography](https://barelens.vercel.app/)'s site.

## Purpose and Goal

The photographer wanted a minimalist website that allowed their clients to view their service and schedule photoshoots. 

Basically, the site had two goals:

1. Provide clients a look at the photographers work
2. Allow clients to send request to the photographer

For the first goal, I was inspired to by magazines and photo catalogs. I wanted the clients to quickly see the photographers best pictures and get a feel for their artistic style. With Tailwind I was able to very quickly design the content of the page without a hitch. Although, I used some third party libraries for a few components like the carousel. 

![carousel](image.jpg)

As for the second goal, it was important for both me and the photographer that they're able to manage *most* of the content (more on this later..) and all of the upcoming request. So I looked for a CMS that could was user friendly but that had robust features. 

This is why I choose Directus, it's open source and plays nice with several databases creating either a REST of GraphQL API and it comes with roles, permissions, webhooks and flows that can be trigger by different events in the database.  

## Spotlight

![directus](image.jpg)

Directus is definitely a top CMS because of all the feature it comes with out of the box (email, role base authentication, webhooks), plus it's visually pleasing (to me at least). As I said before, you can use its REST API to pull the all the data you need (text, images and component pieces) and guard the date you don't want to share publicly. 

The only hiccup came when trying to self host it. It's not terrible but when I began testing it the documentation was full of different self hosting options. AWS, Digital Ocean, Heroku, anything really but a few days later they took those guides down and they provided only one option...

DOCKER!

![docker](image.jpg)

I had to wrap my head around using docker, Dockerfiles and docker-compose but I found some great guides on youtube plus the docker docs were pretty good. I then created my own docker image of Directus and hosted it on the cloud. 

I can go on and on about Directus but the integration you can achieve with Next.js is great. Things like :

- On-demand Incremental Static Regeneration with Directus Webhooks allowing the photographer to make changes in the backend with Directus and having these changes be reflected on a static website is so satisfying

- Automated Flows for when a request comes in. In other words, sending confirmation emails to clients and alert messages to the photographer whenever they received a new request 

- Role base permissions and API route protection, so that the database isn't vulnerable to certain attacks 

I can't stress enough how I really enjoyed using this CMS. 


- [] What is the “killer feature” of your project? What feature does it have that took the 
most work, or was the most technically impressive? Some possible examples: 
    - [x] User authentication 
    - [x] A feed of items fetched from a database 
    - [] A particularly tricky UI element (eg. autocomplete, calendar, drag-and-drop) 
    - [x] Anything you’re proud of! 
    - [] What were the technical hurdles that got in your way? Any major problems you hit 
      during development? 
    - [] How did you solve those problems? What was the solution? Go deep here, and write with a developer in mind. 

## Lessons Learned



- [] What did you learn doing this project? Feel free to list multiple things. Also feel free to 
cover non-technical lessons. It’s great to talk about how you learned to use an 
advanced feature of a framework or library, but it’s just as valuable to talk about 
project-management experience, or things you learned about shipping projects. 
- [] If you used a framework or other libraries/tools, was it a good choice? How did it 
help? In which ways was it insufficient? 
- [] Is your project accessible? What did you learn about accessibility, while building this 
project? Describing how you tested your project using keyboard navigation or a screen reader can make for a really compelling story! 
- [] How has this affected the work you’ve done since then? Real examples of how this 
project built your knowledge for future projects is fantastic.