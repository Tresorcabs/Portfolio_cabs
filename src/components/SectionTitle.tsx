interface SectionTitleProps{
    title: string
}

const SectionTitle = ({title}: SectionTitleProps) => {
    return (
        <h1 className="mb-5 text-3xl font-bold text-center uppercase">
            {title}
        </h1>
    )
}

export default SectionTitle