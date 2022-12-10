import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

prisma.user.findMany({
  include: {
    profile: true
  }
});

/*

{
  id: 1,
  email: "test@prisma.io",
  profile: {
    name: "Sabin",
    age: "20",
    gender: "male"
  }
}

*/