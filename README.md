# 3D Printer Invoice Service
> made by Donovan Adrian in JavaScript, HTML, and CSS
 A quick website to help me calculate the costs of 3D prints with various filament types


## ***Task List***
- [x] Add Basic Elements To Pages
- [x] Add Input Modals To Pages
- [ ] Add JavaScript
  - [ ] main.js
  - [x] passOp.js
- [x] Add CSS
- [x] Add Example Config


## Welcome!
This website is meant to be a simple algorithm that 
calculates the approximate cost of each 3D print that 
I make. This will help streamline the process of 
creating invoices for people who order 3D prints from 
me. Please note that this website will utilize Google 
Firebase, so if you wish to use another database service
(or a custom one), then you will need to do that on your
own.


## How Will Do I Set This Up?
First and foremost, you may want to plan on finding 
some way to host these files - whether you host it on
your own on a local computer or if you find some third
party to do it for you - hosting these files is the 
first step! Next, create a Google Firebase (Realtime 
Database) with any name, id, url, etc. Be sure to catch
the config information, which consists of an apiKey,
authDomain, databaseURL, projectID, storageBucket,
messagingSenderID, appID, and measurementID. WHEW!
By the way, KEEP THIS DATA PRIVATE! This data can be
used to access your database and I do not use Google's
login system. Anyway, you can input all that information 
into the config.txt file as its listed, just replace the 
example information with your own! Viola! That should 
be it! Happy invoicing!


## Why Don't You Use Google's Login System?
For starters, I don't use Google's Login System because 
much of the data I "collect" in my websites aren't 
sensitive data like credit card info, addresses, etc. 
If I were to begin asking for more sensitive data, then 
I would adjust my websites accordingly. Secondly, I feel
that using a pin makes for simple login to my simple 
websites. In doing so, I'm also able to create a simple
algorithm that can "encrypt" the pins to be more secure, 
at least to the human eye.


## How Well Does This Work?
I'm not sure yet! This is still being created. In the
meantime, feel free to peruse my work here and in my 
other repositories.


## Website Structure
- index
  - *USER LOGGED IN*
  - (USER LOGIN)
    - home
    - settings
    - sign out
  - (ADMIN LOGIN)
    - home
    - filament
    - settings
        - admin
    - sign out


## Data Structures
- Users/Guests
  - UID
  - Name (Unavailable For Guests)
  - User Name
  - Pin
  - Prints (uid)
  - Admin (integer 1/0, Unavailable For Guests)
- Filament
  - UID
  - Title
  - Type
  - Weight
  - Thickness
  - Cost Per Roll
  - Cost Per Gram
- Prints
  - UID
  - Title
  - Filament (uid)
  - Time
  - Size
  - Infill
  - Supports
  - Price
  - Status (Ordered/Printing/Complete)
  - Creation Date