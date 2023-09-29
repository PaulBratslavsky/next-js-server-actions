"use server";
import { session } from "@/app/utils/session";

import { revalidatePath } from "next/cache";

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const url = `${process.env.STRAPI_URL}/api/auth/local`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });

    const data = await res.json();

    if (data.error) return { message: data.error.message };
    else {
      const current = await session().get('counter');

      const newValue = current ? Number(current) + 1 : 1;
      await session().set('counter', newValue);
      await session().set('user', data);
      revalidatePath("/");
      return { message: "success" };
    }
  } catch (error) {
    console.error(error);
    return { message: "error" };
  }
}
