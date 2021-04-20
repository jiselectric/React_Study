import React, { useEffect, useRef, useState } from 'react';

const field = { 
	user: '', 
	age: '', 
	email: '' 
};

function CreateUser() {
	const userRef = useRef();
	const [list, setList] = useState([]);
	const [info, setInfo] = useState(field);
	const { user, age, email } = info;

	const onChangeData = (ev) => {
		const { value, name } = ev.target;
		setInfo({
			...info,
			[name]: value
		});
	};

	const register = (ev) => {
		ev.preventDefault();
		const newList = list.concat(info);
		setList(newList);
		setInfo(field);
		userRef.current.focus();
	};

	const remove = (idx) => {
		const newList = list.filter((item, index) => index !== idx);
		setList(newList);
	};

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		console.log(list);
	}, [list]);

	return (
		<div>
            <h1> Create User Component </h1>
			<form onSubmit={register}>
				<input value={user} name="user" onChange={onChangeData} ref={userRef} placeholder="Name"/>
				<input value={age} name="age" onChange={onChangeData} placeholder="Age"/>
				<input value={email} name="email" onChange={onChangeData} placeholder="email"/>
				<button> Submit </button>
			</form>
			<ul>
				{list.map((item, idx) => (
					<li key={idx}>
						<div> Index : {idx + 1} </div>
						<div> Username : {item.user} </div>
						<div> Age : {item.age} </div>
						<div> Email : {item.email} </div>
						<button onClick={() => remove(idx)}> Remove </button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CreateUser;