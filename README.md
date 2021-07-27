
# Technology stack
* [React](https://ru.reactjs.org/)
* [React-router-dom](https://reactrouter.com/web/guides/quick-start)
* [Styled-components](https://styled-components.com/)
* [Prop-types](https://www.npmjs.com/package/prop-types)
* [Axios](https://github.com/axios/axios)
* [ESlint](https://eslint.org/)
* [Prettier](https://prettier.io/)

## Table of contents
1. [First start](#first-start)
2. [Project structure](#structure)
3. [Routing](#routing)
4. [Components](#components)
7. [Utils](#utils)
8. [Axios](#axios)
9. [Styles](#styles)
11. [Formatting](#formatting)
12. [JSDoc](#jsdoc)
13. [Running in production](#running-in-production)
17. [Tricks](#tricks)



# Using npm dependencies
If you can't or don't want to use `docker` you can use the default method for starting your project using [Node.JS and npm(yarn)](https://nodejs.org/en/)

1. Install dependencies
```bash
  yarn # or npm i
```
2. Start the project
```bash
  yarn start # or npm start
```
The application is available on [http://localhost:3000](http://localhost:3000)

[![asciicast](https://asciinema.org/a/HovYHVCh9SEVi1cIoGOqKziow.svg)](https://asciinema.org/a/HovYHVCh9SEVi1cIoGOqKziow)

# Structure
```
.
├── README.md
├── package.json
├── .stylelintrc
├── .gitignore
├── .eslintrc
├── .env.example
├── public
├── src
│   ├── assets
│   │   ├── images
│   │   └── fonts
│   │   └── icons
│   ├── components
│   │   └── [ComponentName]
│   │   │   └── index.js
│   │   │   └── [ComponentName].jsx
│   │   │   └── [ComponentName].styles.js
│   ├── config
│   ├── pages
│   ├── index.js
│   ├── Router.jsx
│   ├── store
│   │   ├── configure.js
│   │   ├── index.js
│   │   ├── localStorage.js
│   │   ├── store.utils.js
│   │   ├── [storeName]
│   │   │   ├── actions.js
│   │   │   └── reducer.js
│   │   │   └── selectors.js
│   ├── utils
```

- **README.md** - Project description
- **package.json** - Npm configuration file
- **package.lock** - Dependencies lockfile
- **.env.example** - environment examples file
- **.eslintrc** - ESLint config
- **.stylelintrc** - Stylelint config


- **public** - Folder with static files

- **src** - Main development folder
- **src/assets** - Static assets (images, fonts, icons etc.)
  
- **src/components** - Components folder
- **src/components/[ComponentName]** - A single component folder
- **src/components/[ComponentName]/index.jsx** - Core file(logic, default export)
- **src/components/[ComponentName]/[ComponentName].jsx** - View(markup)

- **src/config** - Configuration files(axios, theme, etc.)
- **src/pages** - Pages folder(routes)
- **src/index.js** - Core application file(entry point)
- **src/Router.jsx** - Main router
- **src/utils** - Utils folder(additional small reusable functions)

# Routing
We use [`react-router-dom`](https://reactrouter.com/web/guides/quick-start) for routing in the application.

All the routes are stored in the `src/Router.jsx` file.

```javascript
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// pages
import { Main, Todo } from './pages'

function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/todo' component={Todo} />
    </Switch>
  )
}

export default Router
```

### Adding a new route
1. Create the new file in the `src/pages` folder:

```javascript
// NewPage.jsx
import React from 'react'

export default function NewPage() {
  return (
    <div>New page</div>
  )
}
```

2. Add the new page in `src/pages/index.js` file for better import:

```javascript
import Main from './Main'
import Todo from './Todo'
import NewPage from './NewPage'

export {
  Main,
  Todo,
  NewPage,
}
```

3. Add the new page in `src/Router.jsx` file

```javascript
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// pages
import { Main, Todo, NewPage } from './pages'

function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/todo' component={Todo} />
      <Route exact path='/new-page' component={NewPage} />
    </Switch>
  )
}

export default Router
```

### Additional information
* [Documentation](https://reactrouter.com/web/guides/quick-start)
* **Important** The pages are used only to logically separate different parts of the application. You don't need to use the pages as components. You can use [`react-helmet`](https://www.npmjs.com/package/react-helmet) to set up the page's meta-tags (title, description, etc.)

# Components
When you work with the components, it's recommended to use a modern approach with functional components and hooks.
**It's not recommended to use class components because they work too slowly (performance) and won't be supported**

### Creating
To create the component, you can use the following `CLI-script`:
```bash
  yarn create:component MyComponent
```
After using this script, the folder with your component's name will appear in your `src/components` folder. In this case, it will be the `src/components/MyComponent` folder.

### Component's files description

**index.jsx** - core file with logic. Example:

```javascript
import React, { useState } from 'react'
import { useMount, useUpdateEffect } from 'react-use'

// view
import TodoList from './TodoList'

function Wrapper() {
  const [todos, setTodos] = useState([])

  const getInitialTodos = () => {
    // ...some logic to get initialTodos from localStorage
  }

  const saveTodos = () => {
    // ...some logic to save todos from localStorage
  }

  const addTodo = todo => setTodos([...todos, todo])
  const removeTodo = todo => setTodos([...todos.filter(todo => todo === todo)]);

  // Use mount-hook for calling getInitialTodos() after mount
  useMount(() => getInitialTodos())

  // Watch todos and save it in localStorage after updating
  useUpdateEffect(() => saveTodos(), [todos])

  // return view with some props
  return <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
}

export default Wrapper
```

**[ComponentName].jsx** - view file (markup). Example:
```javascript
import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from '../TodoItem'

// prop-types
const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
}

function TodoList({ todos }) {
  if(!Boolean(todos.length)) return <div className="empty">No todos :)</div>
  return (
    <div className="todo-list">
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}

TodoList.propTypes = propTypes

export default TodoList
```

**[ComponentName].test.jsx** - unit tests
**[ComponentName].styles.js** - styles (styled-components by default)

### Useful links
* [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
* [Hooks](https://reactjs.org/docs/hooks-intro.html)

# LocalStorage
To work with localStorage, you can use additional utilities: `loadState` and `saveState`
Example:
```
import { saveState, loadState }  from '../utils/localStorage'
const save = data => saveState(data, 'key')
const load = () => loadState('key')
```


#### Custom hooks
Creating custom hooks is a very useful thing as it allows reusing large amounts of code. If you see code that will probably be reused in the future, hook it.

This is an example of using a simple custom hook implementing work with API:
```javascript
import { useState } from 'react'
import { useList, useToggle } from 'react-use'

import fetchImages from './fetchImages'

const useFetchImages = ({ source }) => {
    const [images, imagesActions] = useList([])
    const [isLoading, toggleLoading] = useToggle(false)
    const [error, setError] = useState(null)
    
    const fetchImages = async () => {
        toggleLoading(true)
        try {
            const data = await fetchImages(source)
            imagesActions.set(data)
        } catch(err) {
            setError(err)
        }
        toggleLoading(false)
    }
    
    return {
        images,
        isLoading,
        error,
        fetchImages,
    }
}

export default useFetchImages
```

# Utils
Utilities are stored in the `src/utils` folder in separate files.


# Axios
In working with API requests, the most useful library is [`axios`](https://github.com/axios/axios) with `async/await` syntax.

#### `axios` configuration
`axios` configuration is in the `src/config/api.js` file. 

#### Additional function `setApiHeader`
If you need to add a header in the existing axios instance, you can use `setApiHeader` function. Example:
```javascript
import { setApiHeader, api } from '../config'

async function authenticate() {
  // Authorization
  const response = await api.post('/auth')

  // Getting token from response
  const { token } = response

  // Set header for the next authenticated requests
  setApiHeader('Authorization', `Bearer ${token}`)
}

authenticate()
```

**Note: Always try to use [async/await](https://learn.javascript.ru/async-await) syntax**

# Environment variables
To work with environment variables, we need to use some config files:
* `.env.example` - for storing examples of variables
* `.env` - for variables

To add a new environment variable, you need to do the following steps:
1. Add variables into `.env.example` file with empty value
```
REACT_APP_API_BASE_URL=
```
2. Add variable with value into `.env` file.
```
REACT_APP_API_BASE_URL=https://google.com/api
```
3. Restart the project (required)
4. Add the variable into the config (`src/config/index.js`)
```javascript
export const config = {
  API_URL: process.env.REACT_APP_API_BASE_URL,
}
```
5. Use variable from config
```javascript
axios.get(config.API_URL)
```

**Note: Don't forget to restart the project after adding/updating any variables**
**Note 2: Environment variables should be ALWAYS started by `REACT_APP_`; otherwise, they won't work**

# Styles
To write styles, we can use several approaches:
* Css-In-JS ([styled-components](https://styled-components.com/docs/advanced#theming)) 


# Formatting
Linters are to keep code clean. They prevent shitcode from getting into a repository.
#### ESLint
[Eslint](https://eslint.org/) is used for linting Javascript code.
[Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) config is used as default.

To run a linter, you can use the following npm-scripts:
`yarn lint:js` - to run a linter
`yarn lint:js:fix` - to run a linter with autofix

#### CSS (styled-components)
To lint css code, [stylelint](https://stylelint.io/) is used.
The linter checks your code for typos and spelling mistakes.

To run the linter, you can use `yarn lint:css` script

### Airbnb styleguide links
- [Javascript](https://github.com/airbnb/javascript)
- [React](https://github.com/airbnb/javascript/tree/master/react)

**Note: To run both linters, you can use `yarn lint:all` script**

# JSDoc
The optimal solution to make your code more readable and cleaner is to use JSDoc. The project doen't use JSDoc by default, but you can easily add it using the following helpful links:
[Documentation](https://jsdoc.app/)
[eslint-plugin](https://www.npmjs.com/package/eslint-plugin-jsdoc)

# Running in production
To run the project in production, you can use `yarn docker:prod` script. This script does the following steps:
* Download dependencies
* Build the project(`yarn build`)
* Run nginx to serve static content
 
# Tricks

#### CLI

To create the component, you can use the following `CLI-script`:
```bash
  yarn create:component MyComponent
```
After using this script, the folder with your component's name will appear in your `src/components` folder. In this case, it will be the `src/components/MyComponent` folder.

[![asciicast](https://asciinema.org/a/sRLnKJsKhPqX8fseqxeghrkMa.svg)](https://asciinema.org/a/sRLnKJsKhPqX8fseqxeghrkMa)

#### VSCode-snippets
Here is a list of available snippets to quickly create some entities:
* `comp` - component
* `styledcomp` - styled-components file
* `rcpage` - page

These snippets are automatically available in your `VSCode` because they are set up for project. You can see and edit any snippet in the `.vscode/boiler-snippets.code-snippets` file

#### Useful VSCode extensions
* `vscode-styled-components` - styled-components support
* `Visual Studion IntelliCode` - intelliSense for VSCode(AI-assit)
* `TODO Highlight` - highlight your #todos
* `React PropTypes Intellisense` - intelliSense for PropTypes
* `Prettier` - for autoformatting
* `Path Intellisense` - intelliSense for imports
* `ESLint` - lint highlight
