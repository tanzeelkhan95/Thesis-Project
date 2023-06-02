This project was developed as part of my thesis project, using Visual Studio Code IDE. The front-end components were built using HTML5, CSS, Bootstrap, and JavaScript. On the other hand, the back-end functionality was implemented using Node.js and Express.js to create the server, which is connected to the local host. To enable access to the database, a router was employed for routing purposes. Information such as login details, product information, order information, and cart information were stored and retrieved using the GET and POST methods, facilitated by the router.

This web application is an ecommerce website with a primary focus on selling men's fashion, aimed at promoting the latest trends in menswear. The website features several key pages and functionalities, including a login page with its corresponding functionality, a product page that showcases all available items, a cart page where users can manage their selected products, an order information page, a secure payment page, and a thank you page to acknowledge successful transactions.

Upon accessing the website, users are welcomed by an engaging home page that presents captivating interactive images. Additionally, the home page includes sections dedicated to displaying new arrival products and items currently on sale, both of which are fully functional. Lastly, a footer section is included, featuring links to the website's various social media handles.

Note: This web application may not include all features typically found in a fully developed commercial web application. It is important to acknowledge that this project was created solely for the purpose of fulfilling the requirements outlined by my thesis. Nevertheless, it has successfully met all the criteria specified by my thesis guidelines.

Welcome to version 1.00 of my project! The web application is now ready for testing by all of you. In the future, there will be updates to introduce new features. If you come across any issues or find that certain functionalities are not working properly, please don't hesitate to reach out to me via email at mohammadtanzeel.ur@gmail.com. I will promptly investigate and address the matter. Thank you for your support and valuable feedback!

-------------------- INSTRUCTION ON HOW TO USE THE WEB APP ---------------------

1. Start by installing Visual Studio Code IDE or any other IDE you are more comfortable with.
2. Then open Visual Studio Code and hit ' Ctrl + Shift + P " and click on " Shell Command: Install 'code' command in PATH "
3. Now install Mongo DB and Mongo DB Compass. If you are using macbook you have to install xcode and then install it through homebrew.
4. Make sure you have added mongodb in PATH.
5. Now go to terminal and type " mongod " and hit enter to run mongo DB.
6. Now open Compass and click on connect to the defualt server which is " localhost:27017 ". Create a Database of name " thesis_project "
7. Now download the code and extract it in a seperate directory
8. Opem terminal or cmd ( depending on the operating system ). Redirect to the directory of the project. you can use " cd PATH ".
9. type " code . ". The code is opened in visual studio code.
10. Make sure the dependancies are correctly installed. You can try to run " npm update " in the terminal to make sure.
11. Go to the app.js file and uncomment out the lines which are located below mongoose.connect.
12. Start the server by typing " npm start " in the terminal of VS Code.
13. Now head towards Compass. and refresh the database and see under thesis_project if you can see some collections.
14. If you can see collections and now simply comment the lines again in app.js and press " ctrl + s ". The server will restart.
15. Now go to the details collection. and copy the id.
16. Go to the main.js file and replace all the detail id's with the current copied id. This is because id can be different on different computers
17. Now press " ctrl + s " again to restart the server again.
18. Now you are good to go and test out the project.


@2023 TANZEEL TECH ALL RIGHT RESERVED 
