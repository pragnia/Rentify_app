// // src/pages/api/auth.ts
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import prisma from "@/lib/prisma";

// export default async function handler(req, res) {
//   const { isAuthenticated, getUser } = await getKindeServerSession(req, res);
//   if (await isAuthenticated()) {
//     const user = await getUser();
//     const dbUser = await prisma.user.findUnique({
//       where: {
//         id: user?.id,
//       },
//     });
//     res.status(200).json({ isAuthenticated: true, user: dbUser });
//   } else {
//     res.status(200).json({ isAuthenticated: false });
//   }
// }
