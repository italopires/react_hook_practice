import React, { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Functional State Components!"
            />

            <SectionTitle title="Way #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(current => current + 1000)}>+1000</button>
                </div>
            </div>

            <SectionTitle title="Way #02" />
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)} />
            <span className="text">{name}</span>
        </div>
    )
}

export default UseState
