classDiagram
    ScooterApp <|-- Scooter
    ScooterApp <|-- User
    ScooterApp : -obj stations 
    ScooterApp : -obj registeredUsers
    ScooterApp: +registerUser(username, password, age) 
    ScooterApp: +loginUser(username, password)
    ScooterApp: +logoutUser(username)
    ScooterApp: +createScooter(station)
    ScooterApp: +dockScooter(scooter, station)
    ScooterApp: +rentScooter(scooter, user)
    ScooterApp: +print()

    class Scooter{
      -String station
      -user User
      -int serial
      -int nextSerial
      -int charge
      -bool isBroken
      +rent(user)
      +dock(station)
      +recharge()
      +requestRepair()

    }
    class User{
        -String username
        -String password
        -int age
        -bool loggedIn
        +login(password)
        +logout() 


    }
