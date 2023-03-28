# Harnessing the Power of Meta Frameworks and Microservices on Azure Serverless Infrastructure

Meta Frameworks have made frontend development fun with support for layouts, nested routing, server components, data fetching and mutation, error handling, and so much more.

Building on Azure Container Apps, you can create serverless applications with containers and integrate them with your preferred programming language and framework. When you combine Meta Framework frontend features with frameworks like Dapr, it enables your microservices and server-based UI components to coexist effortlessly. As a result, your UI components can communicate directly with microservices within a secure network boundary, leading to faster, more secure, and more scalable service-to-service communications.

## Introduction

This repo is an example e-commerce application that is built with the following technologies.

### Frontend:

- [**Next.js 13**](https://beta.nextjs.org/docs) enables you to create full-stack web applications by extending the latest React features
- [**Tailwind CSS**](https://tailwindcss.com/) is a utility-first CSS framework that provides a series of predefined classes that can be used to style each element by mixing and matching

### Backed:

- [**PocketBase**](https://pocketbase.io/) is an open-source backend consisting of embedded database (SQLite) with built-in auth management, convenient dashboard UI and simple REST API.

## Getting started

### Setup PocketBase.

To set up PocketBase, we recommend using a docker container that includes preloaded products and associated images for your convenience. Firstly, navigate to the "product-cms" folder and execute the following command to build the docker image:

`docker build --pull --rm -f "Dockerfile" -t shop-products:latest "product-cms"`

Then, start PocketBase by running the command:

`docker run --rm -it -p 7000:7000/tcp shop-products:latest`

Next, go to http://localhost:7000/_ to access the admin login page, where you can log in using the provided credentials:

username: admin@admin.com

password: admin@admin.com

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1679977889604/a9bdb909-57d2-4d58-9609-edd22c8e5be6.png)

Once you've logged in, you'll be able to view the preloaded products and images under the "products collections" section.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1679977957356/a237d6f4-2c82-4af3-927f-97adfce3014f.png)

Additionally, you can access the products via REST at http://localhost:7000/api/collections/products/records 

It's worth noting that all APIs are currently public for demonstration purposes. However, for production use, we recommend setting up API keys per API operation, which can be accomplished using this guide:[https://pocketbase.io/docs/api-rules-and-filters/](https://pocketbase.io/docs/api-rules-and-filters/)

