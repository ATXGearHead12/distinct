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
       .distinct((x) => return x.state)
     ;
  }    
```