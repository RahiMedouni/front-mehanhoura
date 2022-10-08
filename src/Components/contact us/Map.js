import './ContactUs.css';

const Map = () => {
    return (
        <>
        {/* <iframe
              src="https://www.google.com/maps/embed?pb=!36.748447391193515, 2.9483486372742407"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}  //36.748447391193515, 2.9483486372742407
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            /> */}
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe class="gmap_iframe" width="50%" height="450" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=PWWX+5XX Ooredoo Algeria, Chéraga&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
            </div>
        </>
    )
}

export default Map;