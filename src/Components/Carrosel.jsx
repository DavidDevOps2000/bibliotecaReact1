
import React from 'react';
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';

export default function Carrosel() {
	return (
		<>
			<div>
				<div id="myCarousel" style={{ zIndex:1 }} className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-100 p3" style={{ height: 556 }} src={img1} alt="Primeiro Slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100 p3" style={{ height: 556 }} src={img2} alt="Segundo Slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100 p3" style={{ height: 556 }} src={img3} alt="Terceiro Slide" />
						</div>
					</div>
					<a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Anterior</span>
					</a>
					<a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Próximo</span>
					</a>
				</div>
			</div>
		</>
	);
}