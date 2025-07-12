"use server";

import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";
import { LATES_PRODUCTS_LIMIT } from "../constants";

// Get lates products
export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATES_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}
