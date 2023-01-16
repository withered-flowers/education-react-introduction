import * as fs from "node:fs/promises";
import { faker } from "@faker-js/faker";

let output = [];

for (let i = 0; i < 20; i++) {
  output.push({
    id: i + 1,
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
  });
}

await fs.writeFile("../db.json", JSON.stringify(output, null, 2));
