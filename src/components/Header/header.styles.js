import styled from 'styled-components';

export const Wrapper = styled.div`
	background: var(--darkGrey);
	padding: 0 20px;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: var(--maxWidth);
	padding: 20px 0;
	margin: 0 auto;

	h1 {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		color: whitesmoke;
		:hover {
			opacity: 0.8;
		}
		@media screen and (max-width: 768px) {
			font-size: var(--fontSmall);
			text-align: center;
			max-width: 150px;
		}
	}

	h2 {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		color: whitesmoke;
		@media screen and (max-width: 768px) {
			font-size: var(--fontSmall);
			text-align: center;
			max-width: 150px;
		}
	}
`;
