import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(value) {
    const num = parseInt(value);

    if (num < 0) return -1
    if (num === 0) return 1
    return calcFactorial(num - 1) * num
}

function calcOddEven(value) {
    const num = parseInt(value);

    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [factorial, setFactorial] = useState(1);

    useEffect(() => {
        setFactorial(calcFactorial(number));
    }, [number])

    useEffect(() => {
        if (factorial > 1000000) {
            document.title = "Yay";
        }
    }, [factorial])

    useEffect(() => {
        setStatus(calcOddEven(number));
    }, [number])

    const [status, setStatus] = useState("Odd")

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Allow to execute Side effects in functional components"
            />

            <SectionTitle title="Way #01" />

            <div className="center">
                <div>
                    <span className="text">Factorial: </span>
                    <span className="text red">{factorial >= 0 ? factorial : "does not exist!"}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Way #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
