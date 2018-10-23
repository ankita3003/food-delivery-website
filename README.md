 # FOOD DELIVERY WEBSITE
 
 This website allows user to choose food items from our menu and place an order.  
 This isn't commercial, so nothing happens practically, this is just a design.

## Installing Dependencies :  
1. Go into food-delivery-app and type : ``` npm install ```  
2. Go into food-delivery-api and type : ``` npm install ```

## Steps to run :  
You will need three terminals, one for the main app, one for the server and one to check the database, if you want to.  
1. Start the server.  
   Go into the directory  
   ``` cd food-delivery-api ``` .  
 Run using :  ``` npm start ``` . 
3. Start the app.  
Go back and go into the food-delivery-app directory using cd. And then,  
 Run using : ``` npm start ```
 ###### Note : Server and app run on different ports, start the server(3000) first then the app(3001). 
4. Working on database connectivity. If you want to manually build one, on MacOS :  
  ``` createdb <db_name> ```  
  ```    psql <db_name> . ```

## Further Work :
1. Glitches while searching, can be resolved by sending order data into database, for every increase/decrease and retrieving. 
2. Order history stored in database can be used for recommendation engines.
3. The biggest, add multiple restaurants with multiple menus.
4. Get a more well thought out design on the frontend.

