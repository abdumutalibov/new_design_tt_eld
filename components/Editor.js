// import EditorJS from "@editorjs/editorjs";
import React, {useEffect} from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/TestiMonials.module.css'

export default function Editor() {
    const initEditor = () =>{
        new OwlCarousel({
            holder: 'car',
        });
    };
    useEffect(()=>{
        initEditor();

    }, [])
  return (
    <div id='car'>  <section id="testimonial" className="testimonials pt-70 pb-70">
    <div className="container mt-5">
        <h4 className="miniTitle text-center">TESTIMONIALS</h4>
        <div className="text-center ">
            <h3 className="sectionTitle">What Our Clients are Saying?</h3>
        </div>
        <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        <div className="row">
            <div className="col-md-12">
                <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                    {
                        testiMonials.length === 0 ?
                            <div class="item">
                                <div class="shadow-effect">
                                    <img class="img-circle"  />

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                </div>
                                <div class="testimonial-name">
                                    <h5>Rajon Rony</h5>
                                    <small>ITALY</small>
                                </div>
                            </div> :
                            testiMonials.map(testiMonialDetail => {
                                // return (
                                //     <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                // )
                            })
                    }
                </OwlCarousel>
            </div>
        </div>
    </div>
</section></div>
  )
}

