import styled, { css, keyframes } from 'styled-components';

export const changeColor = keyframes`
  from {
    background: linear-gradient(45deg, #a8ff56 0%, #f3b60e 100%);
  } to {
    background: linear-gradient(45deg, #ffff00, #ff00ff);
  }
`;

export const Container = styled.div`
	height: 100%;
	display: flex;
	font-size: 20px;
	font-weight: bold;
	align-items: center;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const Square = styled.div`
	gap: 15px;
	display: grid;
	padding: 10px;
	border-radius: 20px;
	grid-template-columns: repeat(3, 1fr);
`;

export const BoxContent = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	font-size: 1.75em;
	max-width: 300px;
	max-height: 300px;
	border-radius: 10px;
	justify-content: center;
	flex-direction: column;
  	background-color: grey;
`;

export const Item = styled.div`
	padding: 15px;
	color: white;
	cursor: pointer;
	background: linear-gradient(45deg, #a8ff56 0%, #f3b60e 100%);
	border-radius: 10px;

	${(props) =>
		props.active &&
		css`
			animation: ${changeColor} 2s ease forwards;
		`}
`;


