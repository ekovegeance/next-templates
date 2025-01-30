<p><a target="_blank" href="https://app.eraser.io/workspace/9ppQVuj0eZZOmlQ6gopG" id="edit-in-eraser-github-link"><img alt="Edit in Eraser" src="https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&amp;token=968381c8-a7e7-472a-8ed6-4a6626da5501"></a></p>

## Next.js Overview
![nextjs overview](/.eraser/9ppQVuj0eZZOmlQ6gopG___Q8zgz5esN4Mg1mTXQabpGytoPCA3___---figure---cGa8K4DK50phEdpGjqnaT---figure---y9a-eZAaIkFWrcWJ-bukeA.png "nextjs overview")



## Project Structure and Organization
### UI Components
This folder contains small components (atoms) that are basic, independent, and reusable.
These components are usually used as building blocks for larger components.

#### example
- Button
- Input
- Icon
- Label
#### how to use
Import components as needed, for example:

```tsx
import Button from '../components/ui/Button';
```
### Components Blocks
This folder contains components which are a combination of several UI components (atoms).
Components in this folder are usually used to form UI functional units.

#### Example
- Card
- LoginForm
- PostLists
#### How to use
Import components as needed, for example:

```tsx
import { LoginForm } from "@/components/auth/login-form"



### Layouts
This folder contains the page structure or framework (templates).
This component helps organize page layouts consistently.

#### Example
- MainLayout
- DashboardLayout
- AuthLayout
![img](/.eraser/9ppQVuj0eZZOmlQ6gopG___Q8zgz5esN4Mg1mTXQabpGytoPCA3___hjrj-IASDsE05_88gioXL.png "")

[﻿See docs](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) 



### Pages
This folder contains files managed by Next.js as representations of application pages.
Every file in this folder is automatically generated as a route by Next.js.

#### Structure
- `app/page.tsx` : main page (root).
- Other folders according to route requirements.
#### How to use
![img](/.eraser/9ppQVuj0eZZOmlQ6gopG___Q8zgz5esN4Mg1mTXQabpGytoPCA3___dLyaQVhrhrrB7yHRdw7Qx.png "")





<!--- Eraser file: https://app.eraser.io/workspace/9ppQVuj0eZZOmlQ6gopG --->