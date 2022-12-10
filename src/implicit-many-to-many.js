import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

prisma.post.findMany({
  include: {
    tags: true
  }
});

/*

{
  id: 1,
  title: "Test Post",
  tags: []
}

*/