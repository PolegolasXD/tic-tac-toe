import React from 'react';
import { BoxContent, Container, Item, Square } from './style';

const houses = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

function Game() {
	const [itemNumber, setItemNumber] = React.useState([]);

	function clicando(house) {
		const valorBotao = house;
		console.log(valorBotao);

		const oldNumbers = [...itemNumber];
		oldNumbers.push(house);
		setItemNumber(oldNumbers);
	}

	return (
		<Container>
			<BoxContent>
				{houses.map((line, index) => {
					return (
						<Square key={index}>
							{line.map((house, index) => {
								return (
									<Item
										active={itemNumber.includes(house) ? true : false}
										key={index}
										onClick={() => clicando(house)}>
										{house}
									</Item>
								);
							})}
						</Square>
					);
				})}
			</BoxContent>
		</Container>
	);
}

export default Game;
