export const Svg = (props) => {
    return (
        <div>
            <svg className="svg-container">
                <filter id="Gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                    <feColorMatrix values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 20 -10" />
                </filter>
            </svg>
        </div>


    )
}
