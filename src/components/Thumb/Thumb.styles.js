import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 300px;
	height: 550px;
	margin: 10px 20px;
	background: var(--medGrey);
	padding: 20px;
	border-radius: 25px;
	text-align: center;
	align-content: center;
	justify-content: center;
	overflow-x: hidden;

	::-webkit-scrollbar {
		width: 10px;
		display: none;
	}
	/* Track */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px var(--medGrey);
		border-radius: 25px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--darkGrey);
		border-radius: 25px;
	}

	:hover {
		opacity: 0.8;
	}

	@media screen and (max-width: 760px) {
		margin: 0 auto;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 300px;
	max-width: 100px;
	max-height: 300px;
	transition: all 0.3s;
	object-fit: contain;
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
export const Text = styled.div`
	color: white;
	width: 100%;
	margin: auto;
`;

export const Title = styled.div`
	color: white;
	text-align: center;
	font-size: 26px;
	width: 100%;
	margin: 20px auto;
`;
export const About = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	margin: 20px auto;
	justify-content: space-evenly;
	justify-items: center;
	align-items: center;
	align-content: space-around;
`;
