import { redirect } from "next/navigation";

export default function Home() {
  redirect("/fr");
  return null;
}
