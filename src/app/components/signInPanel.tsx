import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button, Modal, useModal } from "@nextui-org/react";
import React, { useState } from "react";
import UserProfilePanel from "./UserProfilePanel";
import prisma from "@/lib/prisma";

const SignInPanel = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();
  if (await isAuthenticated()) {
    const user = await getUser();
    const dbUser = await prisma.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    return <>{dbUser && <UserProfilePanel user={dbUser} />}</>;
  }

  return (
    <div className="flex gap-3">
      <Button style={{ backgroundColor: "#6e188b", color: "white" }}>
        <LoginLink>Log In</LoginLink>
      </Button>
      <Button style={{ backgroundColor: "#adb5bd", color: "white" }}>
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
};

export default SignInPanel;
