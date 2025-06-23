import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {
    const [count, inc, dec] = useCounter();

    const url = 'http://files.cod3r.com.br/curso-react/estados.json';
    const response = useFetch(url)

    function showStates(states) {
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Your Hook"
                subtitle="Creating my own hook!"
            />

            <SectionTitle title="Way #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={(e) => dec()}>-1</button>
                    <button className="btn" onClick={(e) => inc()}>+1</button>
                </div>
            </div>

            <SectionTitle title="Way #02"/>
            <div className="center">
                <ul>
                    {!response.loading ? showStates(response.data) : false}
                </ul>

            </div>

        </div>
    )
}

export default UseRef
