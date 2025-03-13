import { db } from "@/db";
import { categories } from "@/db/schema";

const categoriesNames = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "Music",
  "News and politics",
  "Sports",
  "Travel and events",
  "Pets and animals",
  "People and blogs",
];

async function main() {
  console.log("seeding categories");

  try {
    const values = categoriesNames.map((name) => ({
      name,
      description: `videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);

    console.log("categories seeded successfully🎉");
  } catch (error) {
    console.error("error seeding categories: ", error);
    process.exit(1);
  }
}

main();
