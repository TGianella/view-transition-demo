import {Address} from "@/components/Address";

export default function MainLayout({children}: React.PropsWithChildren) {
    return (
        <>
            <Address />
            {children}
        </>
    )
}