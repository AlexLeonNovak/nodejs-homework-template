const login = require('./login');
const UserModel = require('../../model/users');

jest.mock('../../model/users');

describe('Login test', () => {

	const req = {
		body: {
			email: 'test@test.com',
			password: 'password'
		}
	};
	const res = {OK: jest.fn((res) => res)};
	const next = jest.fn();


	it('should be return userData if correct data', async () => {
		const userData = {
			user: {
				id: 1,
				email: '',
				avatarUrl: ''
			},
			token: 'asdfasdfasd'
		}
		UserModel.login = jest.fn(() => (userData))
		const result = await login(req, res, next);
		expect(res.OK).toHaveBeenCalled();
		expect(result).toEqual(userData)
	});

	it('should be return error', async () => {
		UserModel.login = jest.fn(() => {
			throw new Error('Error');
		})
		await login(req, res, next);
		expect(next).toHaveBeenCalled();
	});
})
