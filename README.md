# Distinct

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Summary

This is an angular 2 project.   I am trying to learn more about the Http.Get.  I am using a json file to 
mock the HTTP call.   After the call I want to limit the rows to unique states. I know there is an 
Rxjs command called distinct (http://reactivex.io/documentation/operators/distinct.html).  However I do not understand the syntax for the distinct.   

```typescript
public getStates(): Observable<IState[]> {
    return this._http.get(this.stateUrl)
      .map((res: Response) => <IState[]>res.json())
      // distinct by state name
       //.distinct((x) => return x.state)
       .distinct(function (x) { return x.state; })
     ;
  }    
```

## Conclusion

The Rxjs distinct is about limiting the number of marbles that come accross the wire.   Since there is only one marble IState[] object it is not the right time to do data shaping.   The subscribe method is where this should occur.   By the time it reaches subscribe method it is a normal array.  By adding lodash utility this becomes as easy as...

```typescript
ngOnInit() {
    this._stateServce.getStates()
    .subscribe((stateData) => this.allStates = _.uniqBy(stateData, 'state')
    
    );
  }
```
  