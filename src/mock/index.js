export const user = [
	{
		id: 1,
		name: 'Alysson',

		playing: {
			room: 1,
			symbol: 'x',
			status: false
		}
	},
	{
		id: 2,
		name: 'Guilherme',

		playing: {
			room: 1,
			symbol: 'x'
		}
	}
];

export const room = [
	{
		id: 1,
		status: 'waiting',

		players: {
			x: {
				id: 1,
				points: 0
			},
			o: {
				id: 2,
				points: 0
			}
		},
	}
];
