const { of, forkJoin, combineLatest }  = require('rxjs');
const { delay, mergeMap, concatMap, switchMap } = require('rxjs/operators');

// Example 1: mergeMap (Concurrent inner observables)
const mergeMapExample = () => {
  const source$ = of('A', 'B', 'C');
  
  source$.pipe(
    mergeMap(value => of(`${value} transformed`).pipe(delay(1000)))
  ).subscribe(result => console.log('mergeMap result:', result));
  
  // Output:
  // After 1 second: "A transformed"
  // After 1 second: "B transformed"
  // After 1 second: "C transformed"
};

// Example 2: concatMap (Sequential inner observables)
const concatMapExample = () => {
  const source$ = of('A', 'B', 'C');
  
  source$.pipe(
    concatMap(value => of(`${value} transformed`).pipe(delay(1000)))
  ).subscribe(result => console.log('concatMap result:', result));
  
  // Output:
  // After 1 second: "A transformed"
  // After 2 seconds: "B transformed"
  // After 3 seconds: "C transformed"
};

// Example 3: switchMap (Cancel previous inner observables)
const switchMapExample = () => {
  const source$ = of('A', 'B', 'C');
  
  source$.pipe(
    switchMap(value => of(`${value} transformed`).pipe(delay(1000)))
  ).subscribe(result => console.log('switchMap result:', result));
  
  // Output:
  // After 1 second: "C transformed"
};

// Example 4: forkJoin (Wait for all observables to complete)
const forkJoinExample = () => {
  const obs1$ = of('A').pipe(delay(1000));
  const obs2$ = of('B').pipe(delay(2000));
  const obs3$ = of('C').pipe(delay(3000));
  
  forkJoin([obs1$, obs2$, obs3$]).subscribe(result => console.log('forkJoin result:', result));
  
  // Output after 3 seconds: ["A", "B", "C"]
};

// Example 5: combineLatest (Emit latest values when any observable emits)
const combineLatestExample = () => {
  const obs1$ = of('A').pipe(delay(1000));
  const obs2$ = of('B').pipe(delay(2000));
  const obs3$ = of('C').pipe(delay(3000));
  
  combineLatest([obs1$, obs2$, obs3$]).subscribe(result => console.log('combineLatest result:', result));
  
  // Output after 3 seconds: ["A", "B", "C"]
};

// Run the examples
mergeMapExample();
concatMapExample();
switchMapExample();
forkJoinExample();
combineLatestExample();
