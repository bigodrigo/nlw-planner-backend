import fastify from "fastify";
import { prisma } from "./lib/prisma";
import { createTrip } from "./routes/create-trips";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";

const app = fastify()

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// app.get('/cadastrar', async () => {
//     await prisma.trip.create({
//         data: {
//             destination: 'Florianópolis',
//             start_at: new Date(),
//             ends_at: new Date(),
//         },
//     })

//     return 'Registro cadastrado com sucesso!'
// })

// app.get('/listar', async () => {
//     const trips = await prisma.trip.findMany()

//     return trips
// })

app.register(createTrip)

app.listen({ port: 3333 }).then(() => {
    console.log('Server running!')
})