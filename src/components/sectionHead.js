export const SectionHead = (props) => {
	return (
		<div className="section-head-wrapper">
			<div className="white-line"></div>
			<h3>{props.sectionTitle}</h3>
		</div>
	);
};
export const SectionHead2 = (props) => {
	return (
		<div className="section-head-wrapper">
			<div className="black-line"></div>
			<h3 className="black-text">{props.sectionTitle}</h3>
		</div>
	);
};
