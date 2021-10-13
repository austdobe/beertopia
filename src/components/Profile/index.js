import React from 'react';
//Styles
import { Wrapper, Content, Section, Image } from './Profile.styles';
//images
import Headshot from '../../images/Headshot.jpg';

const Profile = () => (
	<Wrapper>
		<Content>
			<Section className='profileCard'>
				<h2>Under The Hood</h2>
				<h4>Technologies used</h4>
				<ul>
					<li>React | </li>
					<li>React Hooks | </li>
					<li>React Router Dom V6 (Currently in Beta) | </li>
					<li>Styled Components | </li>
					<li>Custom CSS | </li>
					<li>Javascript / JSX | </li>
				</ul>

				<h2>Meet the Developer</h2>
				<div>
					<Image src={Headshot} alt='personal-head-shot' />
					<h3>Austin Dober</h3>
					<p>
						Merging years of customer service and healthcare experience with
						Full Stack Development. I help bring clarity and quality to
						technical problems and their users.
					</p>
					<p>
						Recent Graduate of the University of North Carolina Full Stack Boot
						Camp. I have deployed and coded over 20 different web applications.
					</p>
					<ul>
						<li>
							<a
								href='https://austdobe.github.io'
								target='_blank'
								rel='noreferrer'>
								My Portfolio
							</a>
						</li>
						<li>
							<a
								href='https://www.github.com/austdobe'
								target='_blank'
								rel='noreferrer'>
								My GitHub Profile
							</a>
						</li>
						<li>
							<a
								href='https://docs.google.com/document/d/1_xVJg0XkSRHm0WnBOPPfeAEx8eOQtpS4RPgH-AxphxQ/edit?usp=sharing'
								target='_blank'
								rel='noreferrer'>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</Section>
		</Content>
	</Wrapper>
);

export default Profile;
