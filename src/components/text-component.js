import 'animate.css'

export default function TextComponent(){
    return (
        <div className="text animate__animated animate__backInLeft">
            <h1><span>Make</span> remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button>Learn more</button>
            <div className="brands">
                <img src="/images/client-databiz.svg" alt="" />
                <img src="/images/client-audiophile.svg" alt="" />
                <img src="/images/client-meet.svg" alt="" />
                <img src="/images/client-maker.svg" alt="" />
            </div>
        </div>
    )
}