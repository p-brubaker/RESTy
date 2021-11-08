import fetchRequest from '../src/fetchUtils.js';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

// For now we're making sure all the fetch
// methods work, and then mocking them. This isn't strictly
// necessary, but I want more practice with msw and we can
// certainly reuse all the mocked behavior later.

const pokemonURL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
const arbuckleURL = 'https://immense-plateau-42063.herokuapp.com/';
import arbuckleToken from '../__mocks__/arbuckleToken.json';
import arbuckleRes from '../__mocks__/arbuckleRes.json';
import mockPokeResults from '../__mocks__/mockPokeRes.json';

describe('fetch utils tests', () => {
    const server = setupServer(
        rest.get(pokemonURL, (req, res, ctx) => {
            const query = req.url.searchParams;
            const pokemon = query.get('pokemon');

            if (pokemon === 'pikachu') {
                return res(ctx.status(200), ctx.json(mockPokeResults));
            }
        }),
        rest.post(arbuckleURL + 'auth/signin', (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(arbuckleToken));
        }),
        rest.post(arbuckleURL + 'api/purchases', (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(arbuckleRes));
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

        const res = await fetchRequest(request);

        expect(res).toEqual(mockPokeResults);
    });

    it('should perform a signin request', async () => {
        const request = {
            method: 'POST',
            url: arbuckleURL + 'auth/signin',
            body: JSON.stringify({
                email: 'john@arbuckle.com',
                password: '1234',
            }),
        };

        const res = await fetchRequest(request);

        expect(res).toEqual(arbuckleToken);
    });

    it('should perform a POST request with bearer auth', async () => {
        const timestamp = Date.now();
        const request = {
            method: 'POST',
            url: arbuckleURL + 'api/purchases',
            auth: {
                token: arbuckleToken.token,
            },
            body: JSON.stringify({
                user_id: 1,
                description: 'pizza rolls',
                category_id: 2,
                timestamp,
                cost: 599,
            }),
        };

        const res = await fetchRequest(request);

        expect(res).toEqual(arbuckleRes);

        // There's really no point in testing the rest of the route
        // possibilities right now, we have effectively covered all
        // the use cases of the fetchRequest function that RESTy will
        // use to make fetch requests. We'll focus our testing effort
        // on the UI from now on.
    });
});
