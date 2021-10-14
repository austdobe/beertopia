import styled from 'styled-components';

export const Wrapper = styled.div`
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.25) 41%,
			rgba(0, 0, 0, 0.85) 100%
		),
		url(${({ image }) => image}), var(--darkGrey);
	background-size: 100%, cover;
	background-position: top;
	object-fit: contain;
	background-repeat: no-repeat;
	height: 100vh;
	text-align: center;
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
	width: 100%;
	position: absolute;
	top: 50%;
	bottom: 50%;
`;

export const Text = styled.div`
	z-index: 100;
	width: 50%;
	border-radius: 25px;
	padding: 10px 20px;
	margin: 0 auto;
	color: var(--white);
	background-color: var(--darkGrey);
	opacity: 0.8;

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
