import { createRef } from 'react';
import Triangle from '/assets/images/bg-triangle.svg'
import Pentagon from '/assets/images/bg-pentagon.svg'
import OriginalHeader from '/public/assets/images/logo.svg'
import BonusHeader from '/public/assets/images/logo-bonus.svg'
import OriginalRules from '/public/assets/images/image-rules.svg'
import BonusRules from '/public/assets/images/image-rules-bonus.svg'

export interface Mode {
    options: string[];
    rules: string;
    img: string;
    rulesAlt: string;
    background: string;
    original: boolean;
}

export let original: Mode = {
    options: ['rock', 'paper', 'scissors'],
    rules: OriginalRules,
    img: OriginalHeader,
    rulesAlt: 'rock beats scissors, paper beats rock, scissors beats paper',
    background: Triangle,
    original: true
}

export let bonus: Mode = {
    options: ['rock', 'paper', 'scissors', 'spock', 'lizard'],
    rules: BonusRules,
    img: BonusHeader,
    rulesAlt: 'rock beats scissors and lizard, paper beats rock and spock, scissors beats paper and lizard, spock beats scissors and rock, lizard beats spock and paper',
    background: Pentagon,
    original: false
}

export interface Item {
    name: string,
    nodeRef: any
}

export function createItemsArray(arr: string[]) {
    const itemsArr: Item[] = []
    arr.forEach(item => itemsArr.push({ name: item, nodeRef: createRef() }))
    return itemsArr
}

export const gameModes = [original, bonus]
