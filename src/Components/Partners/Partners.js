import "./Partners.css"

function Partners({general,logoless,media}){
    return (
        <section className="Partners">
            <h1>Partnerzy projektu:</h1>

            {general &&
            <div className="partners-container">
                {general}
            </div>
            }
            {logoless &&
                <>
                    <div id="divider"/>
                    <div className="partners-container">
                        {logoless}
                    </div>
                </>

            }

            {media &&
                <div>
                    <h3>Patronaty medialne</h3>
                    <div className="partners-container">
                        {media}
                    </div>
                </div>
            }
        </section>
    );
}
export default Partners;