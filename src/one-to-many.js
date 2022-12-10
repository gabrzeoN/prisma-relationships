import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

prisma.user.findMany({
  include: {
    posts: true
  }
});

/*

{
  id: 1,
  email: "test@prisma.io",
  posts: []
}

*/