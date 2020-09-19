# 3D Printer Invoice Service
> made by Donovan Adrian in JavaScript, HTML, and CSS
 A quick website to help me calculate the costs of 3D prints with various filament types


## ***Task List***
- [ ] Add Elements To Pages
  - [ ] admin.html
  - [x] home.html
  - [x] index.html
  - [x] settings.html
  - [ ] filament.html
- [ ] Add JavaScript
  - [ ] main.js
  - [ ] passOp.js
- [ ] Add CSS
  - [ ] login.css
  - [ ] main.css
- [ ] Add Example Config
  - [ ] config.txt

## Website Structure
- index
  - *USER LOGGED IN*
  - home (USER LOGIN)
    - settings
  - admin (ADMIN LOGIN)
    - filament
    - settings (different navigation bar)

## Data Structures
- Users
  - UID
  - Name
  - User Name
  - Pin
  - Prints (uid)
  - Admin (integer 1/0)
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

## Welcome!
This website is meant to be a simple algorithm that 
calculates the approximate cost of each 3D print that 
I make. This will help streamline the process of 
creating invoices for people who order 3D prints from 
me.


## How Well Does This Work?
I'm not sure yet! This is still being created.