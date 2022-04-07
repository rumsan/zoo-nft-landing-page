import React from 'react';

function Counter() {
	return (
		<section>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="counter-item">
							<h2 className="count">
								<span className="odometer">75</span>
							</h2>
							<p>Animal Adopted</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="counter-item">
							<h2 className="count">
								$ <span className="odometer">259</span>+
							</h2>
							<p>Total Donations</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Counter;
