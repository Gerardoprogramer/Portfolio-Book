interface Props {
    capitular: string,
    narrative: string,
    cita: string
}

export const EpilogueHistory = ({ capitular, narrative, cita }: Props) => {
    return (
        <>
            <p className="text-2xl font-playfair text-zinc-100 leading-relaxed">
                {capitular}
            </p>

            <p className="text-lg font-merriweather text-zinc-300 leading-relaxed">
                {narrative}
            </p>

            <div className="border-l-4 border-emerald-600 pl-6 py-4 bg-zinc-800/50 rounded-r-lg text-left">
                <p className="text-emerald-400 font-merriweather italic text-lg">
                    {cita}
                </p>
            </div>
        </>
    )
}
