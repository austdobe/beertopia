import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	text-align: center;
	background: rgb(0, 0, 0);
	background-size: 100%;
	overflow: hidden;

	h1 {
		@media screen and (max-width: 768px) {
			font-size: var(--fontBig);
		}
	}
	p {
		color: black;
		@media screen and (max-width: 768px) {
			font-size: var(--fontBig);
		}
	}
`;

export const Content = styled.div`
	display: block;
	max-width: var(--maxWidth);
	margin: 10px auto;
	padding: 10px 20px;

	.profileCard {
		width: 100%;
		margin: 10px auto;
		padding: 10px 20px;
		background-color: var(--medGrey);
		display: block;
		border-radius: 60px;
		@media screen and (max-width: 768px) {
			width: 100%;
		}
		ul {
			justify-items: center;
			justify-content: center;
			align-items: center;
			align-content: center;
			margin: 20px 20px;
			padding-bottom: 20px;
		}

		li {
			list-style: none;
			display: inline-flex;
			border-radius: 10px;
			cursor: pointer;
			margin-right: 5px;
		}
		li:hover {
			background-color: var(--darkGrey);
			opacity: 0.6;
		}
		a {
			text-decoration: none;
			color: black;
			margin-left: 10px;
			padding: 5px 10px;
		}
	}
`;
export const Section = styled.div`
	background-color: var(--medGrey);
	width: 100%;
	display: inline-block;
	text-align: center;
`;

export const Image = styled.img`
	display: inline-block;
	width: 50%;
	max-height: 400px;
	object-fit: contain;
	border-radius: 15px;
`;
