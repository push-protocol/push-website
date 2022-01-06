import React, { useState } from "react";
import styled from "styled-components";
import {
	Section,
	SectionHero,
	Content,
	Item,
	H1,
	Image,
} from "components/SharedStyling";
import Medium from "components/Medium";
import AdvisorsCard from "components/AdvisorsCard";
import ScrollTrigger from "react-scroll-trigger";

const PressKit = () => {
	// for checking2

	const [width, setWidth] = useState(window.screen.availWidth);
	console.log(width);
	React.useEffect(() => {
		setWidth(window.screen.availWidth);
		console.log(width);
	}, [width]);

	const [classShow, setClassShow] = React.useState("Show");

	const handleScroll = React.useCallback((event) => {
		let scrollTop = window.scrollY;
		console.log(scrollTop, "classShow");
		//console.log(scrollTop );  //1,2,...100,...200...etc (in px)

		if (scrollTop >= 5100) {
			setClassShow("");
		} else setClassShow("Show");
	});

	const [animateHero, setAnimateHero] = React.useState(true);

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll, false);
		};
	}, [classShow]);
	return (
		<>
			<ScrollTrigger
				onEnter={() => {
					setAnimateHero(true);
				}}
				onExit={() => {
					setAnimateHero(false);
				}}
			>
				<SectionHero padding="50px 0px 80px 0px">
					{/* <SectionFSHero id="hero" padding="15px 0px 0px 0px"> */}
					<Content className="contentBox">
						<Item margin="0px 20px">
							<H1>Press Kit</H1>
						</Item>
					</Content>
					{/* <WaveOuter>
						<WaveInner>
							<Wave
								fill="#e20880"
								paused={!animateHero}
								options={{
									height: 20,
									amplitude: 35,
									speed: 0.25,
									points: 3,
								}}
							/>
						</WaveInner>
						<WaveInner>
							<Wave
								fill="#35c5f3"
								paused={!animateHero}
								options={{
									height: 40,
									amplitude: 30,
									speed: 0.35,
									points: 3,
								}}
							/>
						</WaveInner>
					</WaveOuter> */}
					{/* </SectionFSHero> */}
				</SectionHero>
			</ScrollTrigger>

			{/* Start EPNS Press Kit */}
			<Section
				id="presskit"
				gradient="linear-gradient(180.71deg, #D01C85 0.62%, rgba(28, 46, 208, 0) 330.2%);"
				padding="20px 0px 80px 30px"
			>
				<PressKitSection
					id="presskit"
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div>
						<PressKitHeading>
							<Item style={{ margin: "0" }}>
								<h4 style={{ color: "#000" }}>
									EPNS
									<PressKitSpan
										style={{ background: "black" }}
									>
										PRESS KIT{" "}
									</PressKitSpan>
								</h4>
							</Item>
						</PressKitHeading>
						<Content
							style={{
								padding: "15px",
							}}
						>
							<PressKitText
								textTransform="uppercase"
								padding="10px"
								color="white"
							>
								<span style={{ fontWeight: 700 }}>EPNS</span> is
								an Ethereum-based decentralized protocol that
								enables any and every Web3 app, irrespective of
								what blockchain they’re based on, to send push
								notifications to its users.
							</PressKitText>
							<PressKitText
								textTransform="uppercase"
								padding="10px"
								color="white"
							>
								On EPNS, not the apps but the users control what
								notifications they receive. Besides, they earn
								regular incentives for subscribing to
								notifications. Win-win!
							</PressKitText>
						</Content>
					</div>
					<div>
						<Img src="/presskit/bell.png" alt="Bell Image" />
					</div>
				</PressKitSection>
			</Section>

			{/* Meet Founders Section */}
			<Section id="meetfounders" padding="30px 0px 50px 0px">
				<PressKitSection id="meetfounders">
					<PressKitHeading>
						<Item style={{ margin: "0" }}>
							<h4 style={{ color: "#000" }}>
								MEET OUR
								<PressKitSpan style={{ background: "#D01C85" }}>
									FOUNDERS{" "}
								</PressKitSpan>
							</h4>
						</Item>
					</PressKitHeading>
					<Content
						style={{
							display: "flex",
							justifyContent: "space-between",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Item padding="0px 50px" margin="0px 50px">
							<PeopleImg src="/presskit/founder_harsh.png" />
							<PressKitText
								color="#000"
								fontWeight="600"
								padding="5px"
							>
								Harsh Rajat
							</PressKitText>
							<PressKitText
								color="#D01C85"
								fontWeight="600"
								padding="5px"
								textTransform="uppercase"
								lineHeight="19px"
								fontSize="15px"
							>
								Founder
							</PressKitText>
							<PressKitText
								color="#635C5C"
								fontWeight="600"
								padding="5px"
								lineHeight="18px"
								textAlign="justify"
								fontSize="14px"
							>
								Harsh Rajat is the founder of Ethereum Push
								Notification Service (EPNS), a decentralized
								DeFi notifications protocol that enables users
								(wallet addresses) to receive notifications.
								With 11 years of entrepreneurial experience in
								various spectrum of tech; including
								architecting, development and design in
								different tech fields (Mobile, Web Services,
								SaaS, Blockchain), he realised the gap in the
								blockchain space and founded EPNS!
							</PressKitText>
						</Item>
						<Item padding="0px 50px" margin="0px 50px">
							<PeopleImg src="/presskit/founder_richa.png" />
							<PressKitText
								color="#000"
								fontWeight="600"
								padding="5px"
							>
								Richa Joshi
							</PressKitText>
							<PressKitText
								color="#D01C85"
								fontWeight="600"
								padding="5px"
								textTransform="uppercase"
								lineHeight="19px"
								fontSize="15px"
							>
								Co-Founder
							</PressKitText>
							<PressKitText
								color="#635C5C"
								fontWeight="600"
								padding="5px"
								lineHeight="18px"
								textAlign="justify"
								fontSize="14px"
							>
								Richa, the co-founder of Ethereum Push
								Notification Service (EPNS). An alumini of K.J.
								Somaiya Institute of engineering and Information
								Technology, Richa began her career with Wipro
								Limited and has 12 years of techno-functional
								experience in product management and development
								across multiple facets of the product lifecycle.
								She has previously worked with Deloitte,
								contributing and leading teams before foraying
								into the blockchain space.
							</PressKitText>
						</Item>
					</Content>
				</PressKitSection>
			</Section>

			{/* Web3 Section */}
			<Section
				id="missingweb3"
				padding="20px 0px 0px 0px"
				gradient="#F3F7F8"
			>
				<PressKitSection id="missingweb3">
					<PressKitHeading
						style={{ display: "flex", flexDirection: "row" }}
					>
						<Item style={{ margin: "0" }} align="flex-start">
							<h4 style={{ color: "#000", marginBottom: "60px" }}>
								<PressKitSpan style={{ background: "#583D98" }}>
									MISSING PIECES{" "}
								</PressKitSpan>
								OF WEB3
							</h4>
							<p>
								Communication in StoneAge <br />
								Web3 can not notify users <br />
								Critical Info drop <br />
							</p>
						</Item>
						<MissingPieceImg src="/presskit/missing1.png" />
					</PressKitHeading>
					<Content
						className="contentBox"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					></Content>
					<PressKitHeading flex="flex-end" flexDirection="row">
						<MissingPieceImg src="/presskit/missing2.png" />

						<Item
							style={{
								alignItems: "flex-end",
								textAlign: "right",
							}}
						>
							<h4 style={{ color: "#000", marginBottom: "60px" }}>
								THE
								<PressKitSpan style={{ background: "#583D98" }}>
									SOLUTION{" "}
								</PressKitSpan>
							</h4>
							<p>
								Notification Protocol <br />
								Incentivized Notifications <br />
								Platform Agnostic Delivery <br />
							</p>
						</Item>
					</PressKitHeading>
					<Content
						className="contentBox"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					></Content>
				</PressKitSection>
			</Section>

			{/* Product Section */}
			<Section
				id="epnsproduct"
				padding="20px 0px 0px 0px"
				gradient="#583D98"
			>
				<PressKitSection id="epnsproduct">
					<PressKitHeading flex="flex-end" alignItems="flex-end">
						<Item style={{ margin: "0" }}>
							<h4 style={{ color: "#000" }}>
								THE EPNS
								<PressKitSpan style={{ background: "#1FE3EF" }}>
									PRODUCT{" "}
								</PressKitSpan>
							</h4>
						</Item>
					</PressKitHeading>
					<Content
						className="contentBox"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					></Content>
				</PressKitSection>
			</Section>

			{/* History Section */}
			<Section id="history" padding="20px 0px 0px 0px" gradient="#F3F7F8">
				<PressKitSection id="history">
					<PressKitHeading flex="flex-end" alignItems="flex-end">
						<Item style={{ margin: "0" }}>
							<h4 style={{ color: "#000" }}>
								OUR
								<PressKitSpan style={{ background: "#D01C85" }}>
									HISTORY{" "}
								</PressKitSpan>
							</h4>
						</Item>
					</PressKitHeading>
					<Content
						className="contentBox"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					></Content>
				</PressKitSection>
			</Section>

			{/* EPNS News Section */}
			<Section id="news" gradient="#D01C85" padding="20px 0px 0px 0px">
				<PressKitSection id="news">
					<PressKitHeading>
						<Item style={{ margin: "0" }}>
							<h4 style={{ color: "#fff" }}>
								EPNS
								<PressKitSpan style={{ background: "black" }}>
									in the News{" "}
								</PressKitSpan>
							</h4>
						</Item>
					</PressKitHeading>
					<Content
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						{/* <Item padding="20px" width="85%">
							<Medium numberOfPosts={6} />
						</Item> */}
					</Content>
				</PressKitSection>
			</Section>

			{/* Meet Advisors Section */}
			<Section id="meetadvisors" padding="20px 0px 0px 0px">
				<PressKitSection id="meetadvisors">
					<PressKitHeading flex="flex-end" alignItems="flex-end">
						<Item style={{ margin: "0" }}>
							<h4 style={{ color: "#000" }}>
								MEET OUR
								<PressKitSpan style={{ background: "#583D98" }}>
									ADVISORS{" "}
								</PressKitSpan>
							</h4>
						</Item>
					</PressKitHeading>
					<Content
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							flexDirection: "row",
							flexFlow: "wrap",
						}}
					>
						{/* Using Harsh's image till getting real images from UI team */}
						<AdvisorsCard
							name="Nischal Shetty"
							imgSrc="/presskit/founder_harsh.png"
							title="Founder, CEO | WazirX"
							height="500px"
							width="350px"
							subtitle="(India’s Largest Exchange, acquired by Binance)"
							desc="The Crypto and DeFi ecosystem is missing some key infrastructure pieces. Notification is one such key infrastructure piece that is currently missing and I’m glad that the EPNS team is solving this problem."
						/>
						<AdvisorsCard
							name="DeFi Dad"
							imgSrc="/presskit/founder_harsh.png"
							height="500px"
							width="350px"
							title="ALL THINGS DEFI"
							desc="EPNS was a oh-shit light bulb moment for me. DeFi and crypto communications are a mess at the moment. The ability to share product updates, notifications related to invested assets (ie real-time CDP liquidation warnings), urgent messages about bugs, new liquidity mining opportunities, or simply engage with your users based on wallets actually holding exposure to the native asset of your protocol… is a huge step forward. We needed EPNS yesterday and that’s why I’m excited to be invested and working with this team."
						/>
						<AdvisorsCard
							name="Vivek Singh"
							imgSrc="/presskit/founder_harsh.png"
							height="500px"
							width="350px"
							title="CO-FOUNDER, GITCOIN"
							desc="EPNS is building critical infrastructure for Web 3. Tinkering with the incentives around notifications has huge downstream potential as we look to build an internet which serves users, not corporations. Excited to see how Harsh and Richa’s vision unfolds."
						/>
						<AdvisorsCard
							name="Sandeep Nailwal"
							imgSrc="/presskit/founder_harsh.png"
							height="500px"
							width="350px"
							title="CO-FOUNDER, POLYGON"
							desc="The lack of notifications and communication of key information to users of Web3 protocols and services has been one of the greatest user experience barriers in Web3. I’m excited to be a part of this journey and to see Harsh and Richa pull this amazing feat off."
						/>
						<AdvisorsCard
							name="Kernel"
							imgSrc="/presskit/founder_harsh.png"
							height="500px"
							width="350px"
							title="A GITCOIN COLLECTIVE"
							desc="EPNS (Harsh and Richa, specifically) are shining stars who we are grateful to have in KERNEL.They are a thoughtful leadership team suited to explore how internet communication protocols (starting with notifications) can be implemented in more harmonious and humane ways."
						/>
					</Content>
				</PressKitSection>
			</Section>
		</>
	);
};

const MissingPieceImg = styled.img`
	height: 400px;
	width: 400px;
`;

const PeopleImg = styled.img`
	height: 340px;
	width: 340px;
	margin: 20px 0px 10px 0px;
	border-radius: 50%;
`;

const PressKitHeading = styled.div`
	display: flex;
	padding: 2rem;
	justify-content: ${(props) => props.flex || "flex-start"};
	align-items: ${(props) => props.alignItems || "flex-start"};
	flex-direction: ${(props) => props.flexDirection || "column"};
	p {
		font-size: 25px !important;
		color: #252323 !important;
		line-height: 55px;
	}
	h4 {
		color: black;
		font-size: 40px;
		line-height: 50px;
		letter-spacing: 0.1em;
		font-family: Source sans pro;
		font-weight: normal;
		margin: 15px 0px 15px 0;
		@media (max-width: 1200px) {
			font-size: 2rem;
		}
		@media (max-width: 600px) {
			font-size: 1.2rem;
		}
	}
	h5 {
		color: white;
		font-size: 24px;
		font-family: Source sans pro;
		line-height: 30px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: bold;
		margin: 15px 0px 15px 0;
		@media (max-width: 600px) {
			font-size: 0.8rem;
		}
	}
	p {
		color: gray;
		font-size: 1.5rem;
		margin: 0;
		font-family: Source sans pro;
		@media (max-width: 600px) {
			font-size: 1.2rem;
		}
	}
`;

const PressKitSection = styled.div`
	display: flex;
	justify-content: ${(props) => props.justifyContent || "space-between"};
	flex-direction: column;
	padding: ${(props) => props.padding || "2rem 2rem"};
`;

const PressKitSpan = styled.span`
	background: ${(props) => props.backgroundColor || "#E20880"};
	padding: 10px;
	font-family: Source sans pro;
	color: white;
	margin: 0 1rem 0 0.21rem;
	font-weight: 450px;

	@media (max-width: 600px) {
		font-size: 1.2rem;
	}
`;

const Img = styled.img`
	width: 40rem;
	@media (max-width: 1200px) {
		width: 32rem;
	}
	@media (max-width: 1040px) {
		width: 28rem;
	}
	@media (max-width: 768px) {
		width: 24rem;
	}
	@media (max-width: 600px) {
		width: 20rem;
	}
`;

const PressKitText = styled.div`
	color: ${(props) => props.color || "inherit"};
	font-style: ${(props) => props.fontStyle || "normal"};
	font-family: ${(props) => props.fontFamily || "Source sans pro"};
	text-transform: ${(props) => props.textTransform || "none"};
	text-align: ${(props) => props.textAlign || "center"};
	font-weight: ${(props) => props.fontWeight || "400"};
	font-size: ${(props) => props.fontSize || "24px"};
	line-height: ${(props) => props.lineHeight || "30px"};
	padding: ${(props) => props.padding || "0px"};
	letter-spacing: ${(props) => props.letterSpacing || "0.1em"};
	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;

export default PressKit;
