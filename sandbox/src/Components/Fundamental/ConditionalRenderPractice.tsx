import React, { useState } from 'react';
/* TODO: 
    1. Create some data on guitars and thier price
    2. Create data on amps and their prices
    3. Create a UI that will allow the user to switch between amps and guitars
    4. Create a UI that will display the data based on the user's selection
    5 Apply a filter for price based on user input
*/
import GuitarListHelper from "./GuitarListHelper";
import { render } from '@testing-library/react';
type Guitar = {
    name: string,
    price: number,
    origin: string
}
type Amp = {
    name: string,
    price: number,
    type: string
}

const GuitarList = [
{name: "Fender", price: 1000, origin: "Mexico"},
{name: "Gibson", price: 2000, origin: "USA"},
{name: "Ibanez", price: 3000, origin: "Japan"},
{name: "Epiphone", price: 4000, origin: "Canada"},
{name: "Martin", price: 5000, origin: "Germany"},
{name: "PRS", price: 6000, origin: "Sweden"},
{name: "Ludwig", price: 7000, origin: "Germany"},
{name: "Yamaha", price: 8000, origin: "Japan"},
{name: "Gretsch", price: 9000, origin: "USA"},
{name: "Taylor", price: 10000, origin: "Canada"}
]

const AmpList = [
{name: "Marshall 0x11", price: 500, type: "tube"},
{name: "Fender Amp", price: 100, type: "digital"},
{name: "Peavey", price: 200, type: "tube"},
{name: "Boss", price: 300, type: "tube"},
{name: "Mesa", price: 400, type: "digital"},
{name: "Vox", price: 500, type: "tube"},
{name: "Orange", price: 600, type: "tube"},
{name: "Squire", price: 700, type: "tube"},
{name: "Mesa", price: 800, type: "digital"},
{name: "Vox", price: 900, type: "tube"}
]


function GuitarListUI({ items }: { items: Guitar[] }) {
    return (
        <ul>
            {GuitarList.map((guitar: Guitar, index: number) => (
                <li key={index}>
                    <GuitarListHelper guitars={guitar} />
                </li>
            ))}
        </ul>
    )
}

function AmpListUI({ items }: { items: Amp[] }) {
    return (
        <ul>
           Work in progress....
        </ul>
    )
}



export default function ConditionalRenderPractice() {
    const [selection, setSelection] = React.useState<"guitar" | "amp" | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelection(e.target.value as "guitar" | "amp");
    };

    return ( 
        <>
        <form>
            <label>
                <input 
                    type="radio" 
                    name="instrument" 
                    value="guitar" 
                    checked={selection === "guitar"}
                    onChange={handleChange}/>
                Guitars
            </label>
            <label>
                <input 
                    type="radio" 
                    name="instrument" 
                    value="amp" 
                    checked={selection === "amp"}
                    onChange={handleChange}/>
                Amps
            </label>
        </form>
        {selection === null && <p>Please choose an instrument.</p>}

        {selection === "guitar" && <GuitarListUI items={GuitarList} />}
        {selection === "amp" && <AmpListUI items={AmpList} />}
        </>
    )
}