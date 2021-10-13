import styled from 'styled-components';

export const Wrapper = styled.div`
	animation: animateBeerInfo 1s;

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
	}
`;

export const Text = styled.div`
	width: 40%;
	margin: 0 auto;
	padding: 20px 60px;
	color: var(--white);
	max-width: fit-content;
	overflow: hidden;

	h1 {
		@media screen and (max-width: 768px) {
			font-size: var(--fontBig);
		}
	}
`;
export const Image = styled.img`
	width: 100%;
	max-width: 150px;
	max-height: 500px;
	margin: 10px auto;
	transition: all 0.3s;
	/* object-fit: cover; */
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
