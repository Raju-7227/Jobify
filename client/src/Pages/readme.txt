Note --> Normalize css is same like your Reset css.
In Normalize Css have css some default property and values for your All html tags  

To use Normalize Css use command in react terminal
npm install normalize.css
import "normalize.css" in .js file.


To use styled components use command in react terminal
syntax:-npm install styled-components
import styled from "styled-components" in js file.
You also install styled components extension in vs-code
This extension help you to show the syntax error in styled components. 

Wrappers Folder
Wrapper is use to style the components 
Wrapper contain css, it does not contain any logic(javascript)
You Export these Wrapper and import these Wrapper in your .js file 

To use React Router Dom use command in react terminal 
syntax:- npm install react-router-dom@6
This command give you Error  --> 6 high severity vulnerabilities (you ignore these Error).
import BrowserRouter,Routes,Route,Link  from 'react-router-dom' in .js file.
React router dom work fine without fix these error.
In Route Element we use Two Attribute
1.Path
2.Element
In React router dom path = "*" these value is use to redirect the user to default page when he search undefined page.
In React router dom path = "/" these value is use to redirect the user to Home page.
In React router dom path = "/PageName" these value is use to redirect the user to those page. which Path (PageName) you defined.
In React router dom (Element) - is use to show your page to the web browser

To use the bootstrap in react use command in react terminal
syntax:-npm install bootstrap@5.2.3
This command give you Error  --> 6 high severity vulnerabilities (you ignore these Error).
Bootstrap work fine without fix these error.
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css" in your .js file

OR

You can Copy bootstrap link in your index.html file.

bootstrap link :- 
    
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    /> -->
    <!--     
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
      integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
      crossorigin="anonymous"
    ></script>


In AppContext file we use custom hook. 
custom hook name -> (useAppContext)
when we use AppContext hook  in any another .js file we import two things.
1.AppContext
2.useContext

but when we use custom hook with AppContext hook we import only one thing (That is custom hook ).
1.custom hook name --> (useAppContext)

