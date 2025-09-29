
interface Props {
    capitular: string,
    narrative: string,
    cita: string
}

export const NarrativePrologue = ({ capitular, narrative, cita }: Props) => {
    return (
        <div className="space-y-6">
            <p className="text-lg font-merriweather text-zinc-200 leading-relaxed">
                <span className="text-4xl font-playfair text-emerald-500 float-left mr-2 leading-none">{capitular.slice(0, 1)}</span>
                {capitular.slice(1)}
            </p>

            <p className="text-lg font-merriweather text-zinc-300 leading-relaxed">
                {narrative}
            </p>

            <div className="border-l-4 border-emerald-600 pl-6 py-4 bg-zinc-800/50 rounded-r-lg">
                <p className="text-emerald-400 font-merriweather italic">
                    {cita}
                </p>
            </div>
        </div>
    )
}
