<h1 style="color: yellow;">A & G Properties Website</h1>

## `Commands necessary to run my seed 2 project` ##
* npm i
* npm start

## `To view, navigate to localhost:4545` ##

### You will also need to run a mongo server

### A database will automatically load from hard data ###
* _see_ lib/populateAssociates.js
* _see_ lib/populateOffices.js
* _see_ lib/populateProperties.js

## `Using Site as a User`

A user can fill out an application to rent one of the properties<br>
    
* (to use this, you can automatically populate the form by clicking on the application form heading "Residential Lease Application." Just hover over it and you should see it come up with a tooltip)


## `Using Site as an Administrator`

### There is an administrative page to update the site
> To view and use this page, navigate to "localhost:4545/admin"
    You will get a login page.<br> 
    
> To login, you need to use one of the administrator names and passwords<br>
    
* (or automatically populate by clicking on the login form heading, "Administrative Login." Just hover over it and you should see a tooltip).

> The Administrator name and passwords are:

*  _Admin Name:_ Anne<br>  _Password:_ Anne 

*  _Admin Name:_ Amber<br>  _Password:_ Amber

*  _Admin Name:_ Greg<br>  _Password:_ Greg

*  _Admin Name:_ Steve<br>  _Password:_ Steve

*  _Admin Name:_ Andrew<br>  _Password:_ Andrew

> You can view any contacts made and applications submitted from the admin page. 

> You can also add a new property to the database and cause it to be displayed on the site. To do so, login as an administrator, click on 'View Properties' and then 'Add Property'<br>
    
* (or you can automaticaly populate this form by clicking on the login form heading, "Add a New Property." Just hover over it and you should see a tooltip).

> If you want to add a property yourself, I have included an asset that is not currently in the database. To load and use it, Enter the following into the form:

* _location of property:_ 'Any string you choose'

* _image Path:_ '/assets/test-house.jpeg'

* _thumbnail image path:_ '/assets/test-house-small.jpeg'
* _inside image path 1:_ '/assets/insidePhotoCarousel/test-bedroom.jpeg'
* _inside image path 2:_ '/assets/insidePhotoCarousel/test-living-room.jpeg'
* _inside image path 3:_ '/assets/insidePhotoCarousel/test-kitchen.jpeg'

* _number of rooms:_ Any number you choose

* _number of baths:_ Any number you choose

* _tag line:_ Any string you choose

* _rent amount:_ Any amount you choose

* _featured:_ Enter 'True' or 'False'


> A featured property (entered as 'true') will display in the main carousel on the home page.







