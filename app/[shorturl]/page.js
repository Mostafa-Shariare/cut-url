import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const shorturl = (await params).shorturl;
  const client = await clientPromise;
  const db = client.db("cuturl");
  const collection = db.collection("url");

  const existingUrl = await collection.findOne({ shorturl: shorturl });
  if (existingUrl) {
    redirect(existingUrl.url); // Redirect to the original URL if it exists
  } else {
    redirect(`${NEXT_PUBLIC_HOST}`); // Redirect to the original URL
  }

  return <div>My Post: {url}</div>;
}
