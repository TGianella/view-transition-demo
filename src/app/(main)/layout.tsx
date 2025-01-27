import {Address} from "@/components/Address";
import {Header} from "@/components/Header";

export default function MainLayout({children}) {
    return (
        <>
            <Address />
            {children}
        </>
    )
}