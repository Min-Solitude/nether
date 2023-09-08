
type LogoProps = {
    className?: string
}

const Logo = ({ className }: LogoProps) => {
    return (
        <h1 className={`font-bold ${className}`}>Nether</h1>
    )
}

export default Logo