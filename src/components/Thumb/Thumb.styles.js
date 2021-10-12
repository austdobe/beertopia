import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 300px;
	height: 500px;
	margin: 10px 20px;
	background: var(--medGrey);
	padding: 20px;
	border-radius: 25px;
	align-content: center;
	justify-content: center;

	:hover {
		opacity: 0.8;
	}
`;

export const Image = styled.img`
	/* width: 100%; */
	height: 300px;
	max-width: 100px;
	max-height: 300px;
	transition: all 0.3s;
	object-fit: cover;
	border-radius: 20px;
	animation: animateThumb 0.5s;

	@keyframes animateThumb {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
export const Text = styled.p`
	color: white;
`;

export const Title = styled.h3`
	color: white;
	width: 100%;
	margin: 20px auto;
`;
export const About = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-gap: 2rem;
`;
