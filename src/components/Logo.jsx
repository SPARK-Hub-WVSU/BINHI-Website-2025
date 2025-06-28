import Image from 'next/image'
import logoHorizontal from '@/assets/logo-horizontal.svg'
import logoVertical from '@/assets/logo-vertical.svg'

export default function Logo({ version = 1, scale = 1 }) {
    const logoSrc = version === 1
        ? logoHorizontal  // horizontal logo path
        : logoVertical  // vertical logo path

    const dimensions = version === 1
        ? { width: 182, height: 43.75 }  // horizontal logo dimensions
        : { width: 201.23, height: 185.16 }

    return (
        <div className="relative">
            <Image
                src={logoSrc}
                alt={`BINHI Logo Version ${version}`}
                width={dimensions.width * scale}
                height={dimensions.height * scale}
                priority
            />
        </div>
    )
}