import React from 'react'

export default function Ozlusöz({ ozlusoz }) {
    return (
        <section className="section section-background section-text-light section-center mt-xl mb-none" style={{ backgroundImage: 'url("img/parkimg/block.png")', backgroundPosition: '50% -100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <h2><strong>{ozlusoz.title}</strong></h2>
                        <div className="owl-carousel owl-theme nav-bottom rounded-nav mb-none" data-plugin-options="{'items': 1, 'loop': false}">
                            {
                                ozlusoz.contents.map((content, index) => (

                                    <div key={index} >
                                        <div className="col-md-12">
                                            <div className="testimonial testimonial-style-2 testimonial-with-quotes mb-none">
                                                <blockquote>
                                                    <p>{content.text}</p>
                                                </blockquote>
                                                <div className="testimonial-author">
                                                    <p><strong>{content.auther}</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )

                                )
                            }


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
