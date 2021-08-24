const Header = () => (
    <div className="slider-wrapper">
        <div className="slider">
            {Array.from(Array(500).keys()).map((item, key) => (
                <div key={key} className={"slider-item"}> Footprint </div>
            ))}
        </div>
    </div>

)

export default Header;