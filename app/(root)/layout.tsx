import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

 export default async function SetupLayout ({
 children
 }: {
    children: React.ReactNode
 }) {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }
//Load the first store of the logged in user
    const store = await prismadb.store.findFirst({
        where: {
            userId: userId
    }

    });
    //if store exists, re-route to the store page
    if (store) {
        redirect(`/${store.id}`);
    }
    return (
        <>
        {children}
        </>
    );
 };