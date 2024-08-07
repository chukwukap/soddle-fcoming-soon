import Image from "next/image";

export default function AccountDetails() {
    return (
        <div className="custom-gradient p-5 grid gap-5 border-[#2A342A] border  " style={{
            clipPath: 'polygon(5% 0%, 100% 0, 100% 80%, 95% 100%, 0 100%, 0 20%)'

        }}>
            <div className="flex items-center ">
                <Image src="/user-icon.svg" width={25} height={25} alt="user" className="mr-2 w-10 h-10 cursor-pointer" />
                <p className=" text-2xl">{shortenAddress("0x1234567890123456789012345678901234567890", 4)}</p>


                <Image src={"/logout.svg"} width={25} height={25} alt="Logout" className="ml-auto w-10 h-10" />
            </div>
            <div className="flex gap-3">
                <div className="flex items-center justify-center">
                    <Image src={"/ethereum.svg"} width={25} height={25} alt="ethereum icon" />
                    <span>ETH</span>
                </div>
                <div className="flex items-center justify-center">
                    <span className=" text-3xl font-bold">
                        2
                    </span>
                    <span>
                        ~ $
                    </span>
                    <span>5000</span>
                </div>
            </div>
        </div>
    )
}

export function shortenAddress(address: string, chars = 4): string {
    if (!address) return '';

    const prefix = address.slice(0, 2) === '0x' ? '0x' : '';
    const start = prefix.length;

    return `${address.slice(0, start + chars)}...${address.slice(-chars)}`;
}