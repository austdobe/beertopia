import styled from 'styled-components';

export const Wrapper = styled.div`
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.25) 41%,
			rgba(0, 0, 0, 0.85) 100%
		),
		url(${({ image }) => image}), var(--darkGrey);
	background-size: 100%;
	object-fit: contain;
	background-position: center;
	height: 100vh;
	position: relative;
	animation: animateWelcomeImage 2s;

	@keyframes animateWelcomeImage {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Content = styled.div`
	padding: 0 10px;
	max-width: var(--maxWidth);
	text-align: center;
`;

export const Text = styled.div`
	z-index: 100;
	max-width: 600px;
	border-radius: 25%;
	padding: 10px 10px;
	min-height: 100px;
	color: var(--white);

	h1 {
		font-size: var(--fontSuperBig);

		@media screen and (max-width: 720px) {
			font-size: var(--fontBig);
		}
	}
	p {
		font-size: var(--fontMed);

		@media screen and (max-width: 720px) {
			font-size: var(--fontSmall);
		}
	}
	@media screen and (max-width: 720px) {
		max-width: 100%;
	}
`;
