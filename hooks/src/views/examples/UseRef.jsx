import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (s1, s2) => {
	// var value = '';
	// for (var i = 0; i < s1; i++) {
	// 	value += (s1[i] || '')+(s2[i] || '');
	// }
	// return value;

	return [...s1].map((e, i) => `${e}${s2[i] || ''}`).join("")
}

const UseRef = (props) => {
  	const [value1, setValue1] = useState("");
  	const [value2, setValue2] = useState("");
	
	const count = useRef(0);
	const myInput1 = useRef(null);
	const myInput2 = useRef(null);

	console.log(myInput1.current);

	// When every rendering happen, it will increment
	// useRef wont trigger any rendering of this component when its useRef variable change
	// count.current = count.current + 1;

	// When value1 change
	useEffect(() => {
		count.current = count.current + 1;
		myInput2.current.focus();
	}, [value1])

	useEffect(() => {
		count.current = count.current + 1;
		myInput1.current.focus();
	}, [value2])

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
			  	ref={myInput1}
                value={value1} onChange={(event) => setValue1(event.target.value)} />
            </div>

			<SectionTitle title="Way #02" />
			<div className="center">
				<input type="text" className="input" 
					ref={myInput2}
					value={value2} onChange={(e) => {setValue2(e.target.value)}} />
				<span className="text red">{merge(value1, value2)}</span>
			</div>
        </div>
    )
}

export default UseRef
