import { SetupServer } from '@src/server';
import supertest from 'supertest';


let server: SetupServer;

jest.setTimeout(20000);

beforeAll(async () => {

    server = new SetupServer();
    await server.init();
    global.testRequest = supertest(server.getApps());
});

// afterAll(async () => {
//   await server.close();
// });
