import { Box, Button, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '..';
// import firebase from 'firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
	const { auth } = useContext(Context)

	const login = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	};

	return (
		<Grid container
			style={{ height: window.innerHeight - 50 }}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<Grid style={{ width: '400px', background: 'lightgray' }}
				container
				alignItems={'center'}
				direction={'column'}
			>
				<Box p={5}>
					<Button onClick={login} variant={'outlined'}>Войти с помощью Google</Button>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Login;