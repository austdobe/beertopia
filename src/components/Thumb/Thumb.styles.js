import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 300px;
	margin: 20px;
	background: rgb(0, 0, 0);
	padding: 20px;
	border-radius: 25px;
`;

export const Image = styled.img`
	width: 100%;
	max-width: 720px;
	max-height: 500px;
	transition: all 0.3s;
	object-fit: cover;
	border-radius: 20px;
	animation: animateThumb 0.5s;

	:hover {
		opacity: 0.8;
	}

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
`;
