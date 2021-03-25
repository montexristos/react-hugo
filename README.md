# Getting Started with React Hugo

## Introduction

This repository offers a highly opinionated way to combine the raw performance of Hugo CMS https://github.com/gohugoio/hugo \
with the endless capabilities of React Javascript Library using https://github.com/facebook/create-react-app

## Overview

The main idea behind this integration is to use Hugo CMS for defining HTML elements
in pages/layouts/partials where React components will be rendered. 

This results in several React applications in the same HTML document allowing for a Multiple Frontend setup that can also be used as a base for a Micro-Frontend architecture

All the above are facilitated by a custom`component` HTML tag

The `id` attribute of the component will be matched with a React Component inside components directory and the component will be rendered inside this container using `ReactDOM.render` creating a separate React Application inside the component HTML element.

## Adding a `component` in Hugo

Hugo CMS uses markdown for editing content, so adding a custom HTML component is not trivial. However there is very simple way that allows adding raw HTML in a markdown document, which is described in details here https://anaulin.org/blog/hugo-raw-html-shortcode/

The main idea is to create a shortcode template by adding a new file layouts/shortcodes/rawhtml.html with content\
` <!-- raw html --> `\
` {{.Inner}} `

This will allow in a page or partial to add the following:\
`{{< rawhtml >}}`\
`<component id="MyComponent"></component>`\
`{{< /rawhtml >}}`

and render our React Component

## Available React Scripts

In the project directory, you can run:

### `npm test`

Launches the create react app test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

This method is changed to allow the integration of webpack generated scripts with Hugo generated pages\
In particular, the build/index.html which is the output of webpack build is used as a base for baseof.html layout which acts as the main layout for all pages

The script that runs is the following:\
`react-scripts build &&`\
`rm -rf static/* &&`\
`mv build/static static/static &&`\
`mv build/index.html layouts/_default/baseof.html`

## Render the React Spinning Logo page with React-Hugo

In order to see the create react app default spinning logo page you need to execute the following commands:\
`npm run build` \
`hugo server -D`

Access the default homepage at http://localhost:1313/ 

## How to add content

From now on follow Hugo CMS detailed documentation https://gohugo.io/content-management/ in order to add themes and content