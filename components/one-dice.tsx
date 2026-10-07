import Image from "next/image"

type OneDiceProps = {
    side: number;
};

export function OneDice({side}: OneDiceProps) {
    return <Image src={`/images/dice/side_${side}.png`}
                  width={100}
                  height={100}
                  alt={"side " + side} priority={true}/>;
}