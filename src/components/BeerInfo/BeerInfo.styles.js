import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: var(--darkGrey);
	background-size: cover 100%;
	animation: animateBeerInfo 1s;
	padding: 20px;

	@keyframes animateBeerInfo {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Content = styled.div`
	display: flex;
	max-width: var(--maxWidth);
	margin: 0 auto;
	background: rgba(0, 0, 0, 0.7);
	border-radius: 20px;

	@media screen and (max-width: 768px) {
		display: block;
		max-height: none;
		text-align: center;
	}
`;

export const Text = styled.div`
	width: 75%;
	margin: 0 auto;
	padding: 20px 60px;
	color: var(--white);
	max-width: fit-content;
	overflow: hidden;

	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 20px 0%;
	}

	h1 {
		@media screen and (max-width: 768px) {
			font-size: var(--fontBig);
		}
	}
	p {
		margin-left: 20px;
		@media screen and (max-width: 768px) {
			margin-left: 0;
		}
	}
`;
export const Image = styled.img`
	width: 100%;
	max-width: 150px;
	max-height: 500px;
	margin: 10px auto;
	transition: all 0.3s;
	object-fit: contain;
	border-radius: 20px;
	animation: animateImage 0.5s;

	@keyframes animateImage {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
