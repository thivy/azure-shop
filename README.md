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

in this example, we are going to be setting up PocketBase inside a docker container. The docker example includes preloaded products and associated images for each product.

Navigate to `product-cms` folder and build the docker image by running the following command

`docker build --pull --rm -f "Dockerfile" -t shop-products:latest "product-cms"`

Once the command is executed you should now be able to run PocketBase by using the following command

`docker run --rm -it -p 7000:7000/tcp shop-products:latest`

Now navigate http://localhost:7000/\_ and you should be presented with the admin login

use the following credentials to log in:

username: admin@admin.com

password: admin@admin.com

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1679977889604/a9bdb909-57d2-4d58-9609-edd22c8e5be6.png)

Once you've logged in you should be able to view the preloaded products and images under the products collections

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1679977957356/a237d6f4-2c82-4af3-927f-97adfce3014f.png)

You can also access these products via REST http://localhost:7000/api/collections/products/records

Note for demo purposes all APIs are made public, you can setup API keys per API operations using the following [https://pocketbase.io/docs/api-rules-and-filters/](https://pocketbase.io/docs/api-rules-and-filters/)
