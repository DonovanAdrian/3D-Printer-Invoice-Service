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

## Welcome!
This website is meant to be a simple algorithm that 
calculates the approximate cost of each 3D print that 
I make. This will help streamline the process of 
creating invoices for people who order 3D prints from 
me.


## How Well Does This Work?
I'm not sure yet! This is still being created.