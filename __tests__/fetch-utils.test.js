import fetchRequest from '../src/fetchUtils.js';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const pokemonURL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
import mockPokeResults from '../__mocks__/mockPokeRes.json';

describe('fetch utils tests', () => {
    const server = setupServer(
        rest.get(pokemonURL, (req, res, ctx) => {
            const query = req.url.searchParams;
            const pokemon = query.get('pokemon');

            if (pokemon === 'pikachu') {
                return res(ctx.status(200), ctx.json(mockPokeResults));
            }
        })
    );

    beforeAll(() => {
        server.listen({ onUnhandledRequest: 'warn' });
    });

    afterEach(() => server.resetHandlers);

    afterAll(() => server.close());

    it('should perform a GET request', async () => {
        const request = {
            url: pokemonURL,
            params: { pokemon: 'pikachu' },
            method: 'GET',
        };

        const result = await fetchRequest(request);

        expect(result).toEqual(mockPokeResults);
    });
});
