// @flow

type LookUp = {[key: string]: number | string};

let items: LookUp = {'red': 'red'};

// Flow doesn't know what's in items 

let something: number | string = items.someThingNotInCollection;

