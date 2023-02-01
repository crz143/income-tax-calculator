import { TaxStructure } from "./types"

export const oldTax: TaxStructure = {
    deductionsApplicable: true,
    taxRebate: 500000,
    slabs: [
        {
            incomeFrom: 0,
            incomeTo: 250000,
            taxPercent: 0,
        },
        {
            incomeFrom: 250000,
            incomeTo: 500000,
            taxPercent: 5,
        },
        {
            incomeFrom: 500000,
            incomeTo: 750000,
            taxPercent: 15,
        },
        {
            incomeFrom: 750000,
            incomeTo: 1000000,
            taxPercent: 20,
        },
        {
            incomeFrom: 1000000,
            taxPercent: 30,
        },
    ]
}

export const newTax: TaxStructure = {
    deductionsApplicable: false,
    taxRebate: 700000,
    slabs: [
        {
            incomeFrom: 0,
            incomeTo: 300000,
            taxPercent: 0,
        },
        {
            incomeFrom: 300000,
            incomeTo: 600000,
            taxPercent: 5,
        },
        {
            incomeFrom: 600000,
            incomeTo: 900000,
            taxPercent: 10,
        },
        {
            incomeFrom: 900000,
            incomeTo: 1200000,
            taxPercent: 15,
        },
        {
            incomeFrom: 1200000,
            incomeTo: 1500000,
            taxPercent: 20,
        },
        {
            incomeFrom: 1500000,
            taxPercent: 30,
        },
    ]
}