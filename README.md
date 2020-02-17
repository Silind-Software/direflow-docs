# direflow.io - official webpage

> This repository contains the source code for the official webpage of [direflow](https://direflow.io/).

### Contribute to the documentation

#### Get started
1. Fork this repository
2. Clone down your fork to your local machine
3. cd into the cloned repository using `cd direflow-docs`
4. Create a branch with a suitable name for the change you want to add
5. Start the project locally using `yarn start`  
   The project will be running at [https://localhost:8000](https://localhost:8000)

#### Overview
The page consists of two parts; a front page and a documentation section.  
All documentation page are written in markdown format, and is found in the folder `src/pages/docs`.  
Here, you can add an edit documentation.

#### Edit documentation
This part is simple - just edit the part of the documentation that you whish to be changed.

#### Adding new documentation pages
In order to add new documentation pages, follow this procedure:
1. Create a new folder under `src/pages/docs` reflecting the name of your documentation page.
2. Create an mdx-file under this new folder with the same name. `src/pages/docs/new-doc/new-doc.mdx`.
3. Make sure that the mdx-file contains the following front matter:  
   ```mdx
    ---
    name: 'New Doc'
    route: '/new-doc'
    edit: false
    ---
   ```
4. Make sure to add a button at the end of the page, pointing to the next documentation page:  
   Import the following on the top of the page:
   ```jsx
   import { Link } from '@reach/router';
   import { Button } from '../../../components/Jumbotron/Styles';
   ```
   Add the button at the end of the page
   ```jsx
   <span style="display: flex; justify-content: center">
      <Link to='/next-docs'>
         <Button>→ Next Docs</Button>
      </Link>
   </span>
   ```
5. Lastly, go to the file `doczrc.js` and add a menu item for your new documentation page:  
   This should be the same as the 'name' property in the front matter.
   ```javascript
   menu: [
    'Introduction',
    'Get started',
    'Properties',
    'Events',
    'Styling',
    'Plugins',
    'Additional',
    'Contributing',
    'New Doc'
   ]
   ```

### Submitting changes to the webpage

#### Push
When you're done with your changes, simply push these changes to the branch that you created.

#### Create PR
Go to the main direflow-docs repository and create a PR with your changes.
We will be reviewing shortly.
