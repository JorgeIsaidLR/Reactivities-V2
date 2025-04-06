import { makeAutoObservable } from 'mobx'
import { ReactNode } from 'react';

export default class CounterStore {
    title = 'Counter store';
    count = 42;
    events: string[] = [
        `Initial count is ${this.count}`
    ]
    eventCount: ReactNode;
    constructor() {
        makeAutoObservable(this)
    }

    increment = (amount = 1 ) =>{
        this.count += amount; 
        this.events.push(`Incremented by ${amount} - count is now ${this.count}`);

    }

    decrement = (amount = 1) => {
        this.count -= amount;
        this.events.push(`Decremented by ${amount} - count is now ${this.count}`);
    }
}