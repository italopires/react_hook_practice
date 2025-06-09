import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
  	const [value1, setValue1] = useState("");
	const count = useRef(0);

	// When every rendering happen, it will increment
	// useRef wont trigger any rendering of this component when its useRef variable change
	// count.current = count.current + 1;

	// When value1 change
	useEffect(() => {
		count.current = count.current + 1;
	}, [value1])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Returns an mutable object with .current property"
            />

            <SectionTitle title="Way #01" />
            <div className="center">
				<div>
					<span className="text">Value: </span>
					<span className="text">{value1}[</span>
					<span className="text red">{count.current}</span>
					<span className="text">]</span>
				</div>
              <input type="text" className="input" 
                value={value1} onChange={(event) => setValue1(event.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
