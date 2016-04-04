# ClippR RESTful API

http://bizzbuz-linxin-li.herokuapp.com/api/

|HTTP Method|       URL             |Function|
|-----------|-------------------|------------------|
|GET|               /user-all|       List all userInfo|
|GET|              /user/:name  |   List one userInfo|
|POST|             /newuser      | Insert new userInfo|
|GET|              /shop-all     |  List all shopInfo|
|GET|               /shop/:username  |   List one shopInfo|
|POST|              /newshop          | Insert new shopInfo|
|GET|               /appointment-all| List all appointmentInfo|
|GET|               /appointment-username/:username| List one User's appointmentInfo|
|GET|               /appointment-barbername/:barbername| List one barber's appointmentInfo|
|POST|              /newappointment               |Insert new appointmentInfo|

## List all userInfo
- Example: get http://bizzbuz-linxin-li.herokuapp.com/api/user-all
```
[
  {
    "_id": "56f9e166e7a8e6ce729b6334",
    "name": "Jeff",
    "Age": 22,
    "LoyaltyPoints": 300,
    "FavoriteBarber": "Martin"
  },
  {
    "_id": "56faa3b6e4b05e6b92beab7e",
    "name": "Lucy",
    "Age": 23,
    "LoyaltyPoints": 180,
    "FavoriteBarber": "Bruce"
  },
  {
    "_id": "5701bba5176a6011006c4011",
    "FavoriteBarber": "Martin",
    "LoyaltyPoints": 300,
    "Age": 22,
    "name": "Jimmy001",
    "__v": 0
  },
  {
    "_id": "5701bbb1176a6011006c4012",
    "name": "Jimmy002",
    "Age": 22,
    "LoyaltyPoints": 300,
    "FavoriteBarber": "Martin",
    "__v": 0
  },
  {
    "_id": "5701c2530a42a91100d8b2d7",
    "name": "Jimmy003",
    "Age": 22,
    "LoyaltyPoints": 300,
    "FavoriteBarber": "Martin",
    "__v": 0
  }
]
```

## List one userInfo
- Example: get http://bizzbuz-linxin-li.herokuapp.com/api/user/Jeff
```
[
  {
    "_id": "56f9e166e7a8e6ce729b6334",
    "name": "Jeff",
    "Age": 22,
    "LoyaltyPoints": 300,
    "FavoriteBarber": "Martin"
  }
]
```

## Insert new userInfo
|Name|      Type             |
|-----------|-------------------|
| name|        String| 
| Age|         Number  |  
| LoyaltyPoints|    Number|      
| FavoriteBarber|   String | 

- Example: Post http://bizzbuz-linxin-li.herokuapp.com/api/newuser
- Post body
```
{
  "name": "Jimmy003",
  "Age": 25,
  "LoyaltyPoints": 100,
  "FavoriteBarber": "Martin"
}
```
- Response
```
{
  "__v": 0,
  "name": "Jimmy003",
  "Age": 25,
  "LoyaltyPoints": 100,
  "FavoriteBarber": "Martin",
  "_id": "5701cf220e29e91100856fde"
}
```

## List all shopInfo
- Example: get http://bizzbuz-linxin-li.herokuapp.com/api/shop-all
```
[
  {
    "_id": "56facc37e4b051a95b5c9dfb",
    "username": "Clinton",
    "name": "Clinton Street Barber Shop",
    "Address": "104 Clinton St Brooklyn, NY 11201",
    "Badge": [
      "Best Barbershop in Jan.",
      "Most popular in Brooklyn"
    ]
  },
  {
    "_id": "56faccdae4b051a95b5c9e00",
    "username": "Blueprint",
    "name": "Barbers Blueprint",
    "Address": "355 Atlantic Ave, Brooklyn, NY 11217",
    "Badge": [
      "Most popular in Brooklyn downtown"
    ]
  }
]
```

## List one shopInfo
- Example: get http://bizzbuz-linxin-li.herokuapp.com/api/shop/Clinton
```
[
  {
    "_id": "56facc37e4b051a95b5c9dfb",
    "username": "Clinton",
    "name": "Clinton Street Barber Shop",
    "Address": "104 Clinton St Brooklyn, NY 11201",
    "Badge": [
      "Best Barbershop in Jan.",
      "Most popular in Brooklyn"
    ]
  }
]
```

## Insert new shopInfo
- Example: post http://bizzbuz-linxin-li.herokuapp.com/api/newshop

## List all appointmentInfo
- Example: get http://bizzbuz-linxin-li.herokuapp.com/api/appointment-all
```
[
  {
    "_id": "57008193e4b0ab59d040aff1",
    "Username": "Jeff",
    "Barbername": "Clinton",
    "Time": "2015-04-03T00:00:00.000Z"
  },
  {
    "_id": "5701c9360e29e91100856fdd",
    "Username": "Jimmy002",
    "Barbername": "Clinton",
    "Time": "2016-12-25T18:00:20.000Z",
    "__v": 0
  }
]
```

## List one User's appointmentInfo
- Example: get http://bizzbuz-linxin-li.herokuapp.com/api/appointment-username/Jeff
```
[
  {
    "_id": "57008193e4b0ab59d040aff1",
    "Username": "Jeff",
    "Barbername": "Clinton",
    "Time": "2015-04-03T00:00:00.000Z"
  }
]
```

## List one barber's appointmentInfo
- Example: get http://bizzbuz-linxin-li.herokuapp.com/api/appointment-barbername/Clinton
```
[
  {
    "_id": "57008193e4b0ab59d040aff1",
    "Username": "Jeff",
    "Barbername": "Clinton",
    "Time": "2015-04-03T00:00:00.000Z"
  },
  {
    "_id": "5701c9360e29e91100856fdd",
    "Username": "Jimmy002",
    "Barbername": "Clinton",
    "Time": "2016-12-25T18:00:20.000Z",
    "__v": 0
  }
]
```

## Insert new appointmentInfo
|Name|      Type             |
|-----------|-------------------|
| username|        String| 
| Barbername|         String  |  
| Time|    Date|      
- Example: post http://bizzbuz-linxin-li.herokuapp.com/api/newappointment
- request body
```
  {
    "Username": "Jimmy003",
    "Barbername": "Clinton",
    "Time": "04-04-2015 16:00:00"
  }
```
- response 
```
{
  "__v": 0,
  "Username": "Jimmy003",
  "Barbername": "Clinton",
  "Time": "2015-04-04T16:00:00.000Z",
  "_id": "5701d22b0e29e91100856fdf"
}
```

