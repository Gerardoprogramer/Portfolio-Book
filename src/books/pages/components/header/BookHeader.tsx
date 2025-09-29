interface Props {
    title: string,
    subtitle?: string
}

export const BookHeader = ({ title, subtitle }: Props) => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-zinc-100 mb-4 chapter-marker">
                {title}
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl font-merriweather text-zinc-400 max-w-2xl mx-auto">
                {subtitle}
            </p>
        </div>
    )
}
