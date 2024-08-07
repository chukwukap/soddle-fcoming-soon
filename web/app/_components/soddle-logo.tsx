import Image from "next/image";

export default function SoddleLogo() {
    return <div>
        <Image src={"/soddle-logo.svg"} alt="Soddle Logo" width={503} height={52} />
    </div>
}