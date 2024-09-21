const { Observable } = require("rxjs");

const {map} = require("rxjs/operators")

const user = {
  data: [
    {
      status: "active",
      age: 30,
    },
    {
      status: "inactive",
      age: 11,
    },
    {
      status: "active",
      age: 34,
    },
    {
      status: "active",
      age: 25,
    },
    {
      status: "active",
      age: 27,
    },
    {
      status: "inactive",
      age: 33,
    },
    {
      status: "active",
      age: 34,
    },
  ],
};

const user2 = {
    data: [
      {
        status: "active",
        age: 18,
      },
      {
        status: "inactive",
        age: 11,
      },
      {
        status: "active",
        age: 34,
      },
      {
        status: "active",
        age: 25,
      },
      {
        status: "active",
        age: 27,
      },
      {
        status: "inactive",
        age: 33,
      },
      {
        status: "active",
        age: 34,
      },
    ],
  };

const observable = new Observable((subscriber) => {
  subscriber.next(user);
  subscriber.next(user);

  subscriber.complete();

  subscriber.next(user2);
  subscriber.next(user);
}).pipe(
    map((value)=>{
        // console.log("1. Got data from observable",value)
        return value.data
    }),
    map((value)=>{
        // console.log("2. Got data from first operator",value)
        return value.filter(user => user.status === 'active')
    }),
    map((value)=>{
        // console.log("3. Got data from second operator",value)
        return (value.reduce((sum,user)=> sum + user.age,0)/value.length)
    }),
    map((value)=>{
        // console.log("4. Got data from third operator",value)
        if(value<30){
            throw new Error('Age is less than 30')
        }else{
            return value
        }
    })
)

const observer = {
  next: (value) => {
    console.log(`Observer got a value of ${value}`);
  },
  error: (err) => {
    console.log(`Observer got a error of ${err}`);
  },
  complete: () => {
    console.log(`Observer got a complete notification`);
  },
};

observable.subscribe(observer);



