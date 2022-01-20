import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
	Section,
	SectionHero,
	Content,
	Item,
	H1,
	Image,
	ItemH,
	Span,
	Anchor,
	WaveInner,
	WaveOuter,
} from "components/SharedStyling";
import Wave from "react-wavify";
import AdvisorsCard from "components/AdvisorsCard";
import FoundersCard from "components/FoundersCard";
import NewsCard from "components/NewsCard";
import ScrollTrigger from "react-scroll-trigger";

// Import lists
import speakerEventsList from "config/speakerEventsList";

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
		// console.log(scrollTop, "classShow");
		//console.log(scrollTop );  //1,2,...100,...200...etc (in px)

		if (scrollTop >= 5100) {
			setClassShow("");
		} else setClassShow("Show");
	});

	const [animateHero, setAnimateHero] = React.useState(true);

	const news = [
		{
			title: "Ethereum Foundation",
			thumbnail: "/news/news_thumbnail_1.png",
			link: "https://blog.ethereum.org/2020/08/19/esp-beyond-grants/",
			desc: "ESP: BEYOND GRANTS",
			logo: "/news/news_logo_1.png",
			key: "news_1",
		},
		{
			title: "CNBC TV18",
			thumbnail: "/news/news_thumbnail_2.png",
			link: "https://www.youtube.com/watch?v=kde-wmgNm-o",
			desc: "Cryptocurrency Trends In India With Harsh Rajat | Crypto: Digital Assets Of The Future | CNBC-TV18",
			logo: "/news/news_logo_2.png",
			key: "news_2",
		},
		{
			title: "COINtelegraph",
			thumbnail: "/news/news_thumbnail_3.png",
			link: "https://www.youtube.com/watch?v=kde-wmgNm-o",
			desc: "DApps can now send push notifications to Ethereum wallet users",
			logo: "/news/news_logo_3.png",
			key: "news_3",
		},
		{
			title: "",
			thumbnail: "/news/news_thumbnail_4.png",
			link: "https://yourstory.com/2020/11/husband-wife-duo-need-blockchain-push-notifications/amp",
			desc: "Why this husband-wife duo felt the need for blockchain-  based push notifications",
			logo: "/news/news_logo_4.png",
			key: "news_4",
		},
		{
			title: "",
			thumbnail: "/news/news_thumbnail_5.png",
			link: "https://yourstory.com/2021/06/here-are-6-blockchain-startups-watch-out-2021/amp",
			desc: "Here are 6 blockchain startups to watch out for in 2021",
			logo: "/news/news_logo_5.png",
			key: "news_5",
		},
		{
			title: "",
			thumbnail: "/news/news_thumbnail_6.png",
			link: "https://inc42.com/startups/how-indias-epns-is-building-decentralised-push-notifications-for-web3-0/",
			desc: "How India’s EPNS Is Building Decentralised Push Notifications For Web 3.0",
			logo: "/news/news_logo_6.png",
			key: "news_6",
		},
	];

	let picWidth = window.innerWidth;
	console.log(picWidth);

	// const videoRef = useRef(null);
	// useEffect(() => {
	// 	let options = {
	// 		rootMargin: "0px",
	// 		threshold: [0.25, 0.75],
	// 	};

	// 	let handlePlay = (entries, observer) => {
	// 		entries.forEach((entry) => {
	// 			if (entry.isIntersecting) {
	// 				videoRef.current.play();
	// 			} else {
	// 				videoRef.current.pause();
	// 			}
	// 		});
	// 	};

	// 	let observer = new IntersectionObserver(handlePlay, options);

	// 	observer.observe(videoRef.current);
	// });

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll, false);
		};
	}, [handleScroll]);
	return (
		<>
			{/* <ScrollTrigger
				onEnter={() => {
					setAnimateHero(true);
				}}
				onExit={() => {
					setAnimateHero(false);
				}}
			>
				<SectionHero padding="50px 0px 80px 0px">
					<Content className="contentBox">
						<Item margin="0px 20px">
							<H1>Press Kit</H1>
						</Item>
					</Content>
					<WaveOuter>
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
						<WaveInner>
							<Wave
								fill="#D01C85"
								paused={!animateHero}
								options={{
									height: 20,
									amplitude: 35,
									speed: 0.25,
									points: 3,
								}}
							/>
						</WaveInner>
					</WaveOuter>
				</SectionHero>
			</ScrollTrigger> */}

			{/* Start EPNS Press Kit -- Completed*/}
			<Section
				id="presskit"
				gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), linear-gradient(90deg, #35C5F3 0%, #E20880 100%);"
				padding="40px 0px 90px 0px"
			>
				<Content className="contentBox">
					<CustomItem
						direction="row"
						margin="0px 20px"
						align="flex-start"
						tabletDirection="column"
					>
						<Item align="flex-start">
							<Item
								align="flex-start"
								padding="40px 0px 30px 0px"
							>
								<PressKitText
									color="#fff"
									fontWeight="normal"
									fontSize={40}
									lineHeight="50px"
								>
									EPNS PRESS KIT
								</PressKitText>
							</Item>
							<Item padding="15px 0px">
								<PressKitText
									textTransform="uppercase"
									padding="10px 0px"
									color="white"
									fontWeight="600px"
									textAlign="left"
								>
									<span style={{ fontWeight: 700 }}>
										EPNS
									</span>{" "}
									is an Ethereum-based decentralized protocol
									that enables any and every Web3 app,
									irrespective of what blockchain they’re
									based on, to send push notifications to its
									users.
								</PressKitText>
								<PressKitText
									textTransform="uppercase"
									padding="10px 0px"
									color="white"
									fontWeight="600px"
									textAlign="left"
								>
									On EPNS, not the apps but the users control
									what notifications they receive. Besides,
									they earn regular incentives for subscribing
									to notifications. Win-win!
								</PressKitText>
							</Item>
						</Item>
						<Item self="center" align="flex-end">
							<Img src="/presskit/bell.png" alt="Bell Image" />
						</Item>
					</CustomItem>
				</Content>
				<WaveOuter>
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
					<WaveInner>
						<Wave
							fill="#D01C85"
							paused={!animateHero}
							options={{
								height: 20,
								amplitude: 35,
								speed: 0.25,
								points: 3,
							}}
						/>
					</WaveInner>
				</WaveOuter>
			</Section>

			{/* Meet Founders Section -- Completed*/}
			<Section
				id="meetfounders"
				padding="40px 0px 120px 0px"
				gradient="linear-gradient(180.71deg, #D01C85 0.62%, rgba(28, 46, 208, 0) 330.2%);"
			>
				<Content className="contentBox">
					<CustomItem
						direction="row"
						margin="0px 20px"
						align="flex-start"
						tabletDirection="column"
					>
						<Item align="flex-start">
							<Item
								align="flex-start"
								padding="40px 0px 30px 0px"
							>
								<PressKitText
									color="#fff"
									fontWeight="normal"
									fontSize={40}
									lineHeight="50px"
								>
									MEET OUR{" "}
									<span
										style={{
											background: "#000",
											fontWeight: 600,
											padding: "0px 8px",
										}}
									>
										FOUNDERS
									</span>
								</PressKitText>
							</Item>
							<CustomItem
								justify="space-between"
								direction="row"
								wrap="wrap"
								align="flex-start"
								tabletDirection="column"
							>
								<FoundersCard
									name="Harsh Rajat"
									title="Founder"
									imgSrc="/presskit/founder_harsh.png"
									twitterUrl="https://twitter.com/harshrajat"
									mailId="harsh@epns.io"
									linkedinUrl="https://www.linkedin.com/in/harshrajat/"
									desc="Harsh Rajat is the founder of
											Ethereum Push Notification Service
											(EPNS), a decentralized DeFi
											notifications protocol that enables
											users (wallet addresses) to receive
											notifications. With 11 years of
											entrepreneurial experience in
											various spectrum of tech; including
											architecting, development and design
											in different tech fields (Mobile,
											Web Services, SaaS, Blockchain), he
											realised the gap in the blockchain
											space and founded EPNS!"
								/>
								<FoundersCard
									name="Richa Joshi"
									title="Co-Founder"
									imgSrc="/presskit/founder_richa.png"
									twitterUrl="https://twitter.com/riijo"
									mailId="richa@epns.io"
									linkedinUrl="https://in.linkedin.com/in/richa-joshi-90b04126"
									desc="Richa, the co-founder of Ethereum
											Push Notification Service (EPNS). An
											alumini of K.J. Somaiya Institute of
											engineering and Information
											Technology, Richa began her career
											with Wipro Limited and has 12 years
											of techno-functional experience in
											product management and development
											across multiple facets of the
											product lifecycle. She has
											previously worked with Deloitte,
											contributing and leading teams
											before foraying into the blockchain
											space."
								/>
							</CustomItem>
						</Item>
					</CustomItem>
				</Content>
				<WaveOuter>
					<WaveInner>
						<Wave
							fill="#F3F7F8"
							paused={true}
							options={{
								height: 20,
								amplitude: 30,
								speed: 0.35,
								points: 3,
							}}
						/>
					</WaveInner>
				</WaveOuter>
			</Section>

			{/* Web3 Section -- Completed*/}
			<Section
				id="missingweb3"
				padding="40px 0px 120px 0px"
				gradient="#F3F7F8"
			>
				<Content className="contentBox">
					<CustomItem
						direction="column"
						margin="0px 20px"
						justify="space-between"
						align="flex-start"
						tabletDirection="column"
					>
						<CustomItem
							direction="row"
							tabletDirection="column"
							align="flex-start"
							padding="20px 0px 80px 0px"
							style={{ alignSelf: "stretch" }}
						>
							<Item align="flex-start">
								<Item
									align="flex-start"
									padding="40px 0px 60px 0px"
								>
									<PressKitText
										color="#000"
										fontWeight="400"
										fontSize={40}
										lineHeight="50px"
										textAlign="left"
									>
										<span
											style={{
												background: "#583D98",
												color: "#fff",
												fontWeight: 600,
												padding: "0px 8px",
											}}
										>
											MISSING PIECES
										</span>{" "}
										OF WEB3
									</PressKitText>
								</Item>
								<PressKitText
									color="#252323"
									fontWeight="300"
									fontSize={20}
									lineHeight="25px"
									padding="10px 0px"
									textAlign="left"
								>
									<span style={{ fontWeight: 400 }}>
										Communication is like stone age.
									</span>
									Protocols expects users to check their
									actions and results repeatedly.
								</PressKitText>
								<PressKitText
									color="#252323"
									fontWeight="300"
									fontSize={20}
									lineHeight="25px"
									padding="10px 0px"
									textAlign="left"
								>
									Wallet addresses{" "}
									<span style={{ fontWeight: 400 }}>
										are not notified of any Web3{" "}
									</span>
									activity related to them.
								</PressKitText>
								<PressKitText
									color="#252323"
									fontWeight="300"
									fontSize={20}
									lineHeight="25px"
									padding="10px 0px"
									textAlign="left"
								>
									There is a{" "}
									<span style={{ fontWeight: 400 }}>
										high risk of vital information loss.
									</span>
								</PressKitText>
							</Item>
							<MissingPieceImg1 src="/presskit/missing1.png" />
						</CustomItem>
						<CustomItem
							direction="row"
							align="flex-start"
							padding="80px 0px 40px 0px"
							tabletDirection="column"
							tabletAlign="flex-end"
							style={{ alignSelf: "stretch" }}
						>
							<MissingPieceImg2 src="/presskit/missing2.png" />
							<Item align="flex-end">
								<Item
									align="flex-end"
									padding="40px 0px 60px 0px"
								>
									<PressKitText
										color="#000"
										fontWeight="400"
										fontSize={40}
										lineHeight="50px"
									>
										THE{" "}
										<span
											style={{
												background: "#583D98",
												color: "#fff",
												fontWeight: 600,
												padding: "0px 8px",
											}}
										>
											SOLUTION
										</span>
									</PressKitText>
								</Item>
								<PressKitText
									color="#252323"
									fontWeight="300"
									fontSize={20}
									lineHeight="25px"
									padding="10px 0px"
									textAlign="right"
								>
									With our notification protocol, you won't
									have to check as frequently because{" "}
									<span style={{ fontWeight: 400 }}>
										EPNS will notify the user wallet
										addresses tied to the service.
									</span>
								</PressKitText>
								<PressKitText
									color="#252323"
									fontWeight="300"
									fontSize={20}
									lineHeight="25px"
									padding="10px 0px"
									textAlign="right"
								>
									By{" "}
									<span style={{ fontWeight: 400 }}>
										subscribing
									</span>
									, you can also{" "}
									<span style={{ fontWeight: 400 }}>
										earn incentives.
									</span>
								</PressKitText>
								<PressKitText
									color="#252323"
									fontWeight="300"
									fontSize={20}
									lineHeight="25px"
									padding="10px 0px"
									textAlign="right"
								>
									We provide{" "}
									<span style={{ fontWeight: 400 }}>
										platform agnostic delivery.
									</span>
								</PressKitText>
							</Item>
						</CustomItem>
					</CustomItem>
				</Content>
				<WaveOuter>
					<WaveInner>
						<Wave
							fill="#583D98"
							paused={true}
							options={{
								height: 20,
								amplitude: 30,
								speed: 0.35,
								points: 3,
							}}
						/>
					</WaveInner>
				</WaveOuter>
			</Section>

			{/* Product Section */}
			<Section
				id="epnsproduct"
				gradient="linear-gradient(#583D98 50%, #fff 50%)"
				padding="0 0 50px 0"
			>
				<Content className="contentBox">
					<CustomItem
						direction="column"
						margin="0px 20px"
						align="flex-end"
						tabletDirection="column"
					>
						<Item align="flex-end" padding="40px 0px 60px 0px">
							<PressKitText
								color="#fff"
								fontWeight="400"
								fontSize={40}
								lineHeight="50px"
							>
								THE EPNS{" "}
								<span
									style={{
										background: "#1FE3EF",
										fontWeight: 600,
										padding: "0px 8px",
									}}
								>
									PRODUCT
								</span>
							</PressKitText>
						</Item>

						<Item padding="0 10%">
							<Item>
								<ExternalLink href="https://youtu.be/kwwnlmUpRsk">
									<LinkImg src="/presskit/yt1.png" />
								</ExternalLink>
								<video
									// resizeMode="cover"
									autoPlay
									loop
									style={{
										boxSizing: "border-box",
										background:
											"url(/presskit/laptop.png) center center no-repeat",
										backgroundSize: "contain",
										padding: "10% 10.5% 10%",
										// position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
									}}
									// ref={videoRef}
									src="/presskit/epns.mp4"
									muted
									disablePictureInPicture
									controls
									controlslist="nofullscreen nodownload noremoteplayback noplaybackrate"
								/>
							</Item>
						</Item>
					</CustomItem>
				</Content>
				<WaveOuter>
					<WaveInner>
						<Wave
							fill="#D01C85"
							paused={true}
							options={{
								height: 20,
								amplitude: 30,
								speed: 0.35,
								points: 3,
							}}
						/>
					</WaveInner>
				</WaveOuter>
			</Section>

			{/* Speaker Events Section */}
			<Section
				id="meetfounders"
				padding="40px 0px 120px 0px"
				gradient="linear-gradient(180deg, #D01C85 0%, #73459C 116.65%)"
			>
				<Content className="contentBox">
					<Item margin="20px 0px 20px 0px">
						<SpeakerEvents>
							<SpeakerEvent disabled={true} bg="#2f1a37">
								<Item minWidth="auto">
									<Span
										color="#fff"
										weight="400"
										size="1rem"
										spacing="0.1em"
									>
										Speaker Events
									</Span>
								</Item>
							</SpeakerEvent>
							{Object.keys(speakerEventsList.events).map(
								function (key) {
									const item = speakerEventsList.events[key];

									return (
										<SpeakerEvent
											key={item.src}
											title={`${item.title}`}
											href={`${item.href}`}
											bg={item.bg ? `${item.bg}` : null}
											item={`${item.src}`}
											target="_blank"
										>
											<Item minWidth="auto">
												<SpeakerEventImage
													src={`/speaker/${item.src}/${item.src}1x.png`}
													srcSet={`/speaker/${item.src}/${item.src}2x.png 2x, /speaker/${item.src}/${item.src}3x.png 3x`}
													alt={`${item.alt}`}
												/>
											</Item>
										</SpeakerEvent>
									);
								}
							)}
						</SpeakerEvents>
					</Item>
				</Content>
				<WaveOuter>
					<WaveInner>
						<Wave
							fill="#F3F7F8"
							paused={true}
							options={{
								height: 20,
								amplitude: 30,
								speed: 0.35,
								points: 3,
							}}
						/>
					</WaveInner>
				</WaveOuter>
			</Section>

			{/* History Section */}
			<Section
				id="history"
				padding="40px 0px 120px 0px"
				gradient="#F3F7F8"
			>
				<Content className="contentBox">
					<CustomItem
						direction="column"
						align="flex-end"
						margin="0px 20px"
						tabletDirection="column"
					>
						<Item align="flex-end" padding="40px 0px 30px 0px">
							<PressKitText
								color="#000"
								fontWeight="400"
								fontSize={40}
								lineHeight="50px"
							>
								OUR{" "}
								<span
									style={{
										background: "#D01C85",
										color: "#fff",
										fontWeight: 600,
										padding: "0px 8px",
									}}
								>
									HISTORY
								</span>
							</PressKitText>
						</Item>
					</CustomItem>
				</Content>
				<Content
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<OurHistoryImg src="/presskit/ourHistory.png" />
				</Content>
				<WaveOuter>
					<WaveInner>
						<Wave
							fill="#D01C85"
							paused={true}
							options={{
								height: 20,
								amplitude: 30,
								speed: 0.35,
								points: 3,
							}}
						/>
					</WaveInner>
				</WaveOuter>
			</Section>

			{/* EPNS News Section */}
			<Section id="news" gradient="#D01C85" padding="40px 0px 120px 0px">
				<Content className="contentBox">
					<CustomItem
						direction="row"
						margin="0px 20px"
						align="flex-start"
						tabletDirection="column"
					>
						<Item align="flex-start">
							<Item
								align="flex-start"
								padding="40px 0px 60px 0px"
							>
								<PressKitText
									color="#fff"
									fontWeight="normal"
									fontSize={40}
									lineHeight="50px"
								>
									EPNS{" "}
									<span
										style={{
											background: "#000",
											fontWeight: 600,
											padding: "0px 8px",
										}}
									>
										in the News
									</span>
								</PressKitText>
							</Item>
							<ItemH
								align="stretch"
								columnGap="40px"
								rowGap="40px"
								margin="-20px"
								style={{
									fontSize: "15px",
									// height : "200px"
								}}
							>
								{news.map((obj) => (
									<NewsCard {...obj} />
								))}
							</ItemH>
						</Item>
					</CustomItem>
				</Content>
				<WaveOuter>
					<WaveInner>
						<Wave
							fill="#fff"
							paused={true}
							options={{
								height: 20,
								amplitude: 30,
								speed: 0.35,
								points: 3,
							}}
						/>
					</WaveInner>
				</WaveOuter>
			</Section>

			{/* Meet Advisors Section */}
			<Section id="meetadvisors" padding="40px 0px 120px 0px">
				<Content className="contentBox">
					<CustomItem
						direction="column"
						margin="0px 20px"
						align="flex-end"
						tabletDirection="column"
					>
						<Item align="flex-end" padding="40px 0px 60px 0px">
							<PressKitText
								color="#000"
								fontWeight="400"
								fontSize={40}
								lineHeight="50px"
							>
								MEET OUR{" "}
								<span
									style={{
										background: "#583D98",
										color: "#fff",
										fontWeight: 600,
										padding: "0px 8px",
									}}
								>
									ADVISORS
								</span>
							</PressKitText>
						</Item>
						<ItemH
							align="stretch"
							columnGap="40px"
							rowGap="40px"
							self="center"
							margin="0px -20px"
						>
							<AdvisorsCard
								name="Nischal Shetty"
								imgSrc="/presskit/advisor_nishal_shetty.png"
								title="Founder, CEO | WazirX"
								height="500px"
								width={320}
								subtitle="(India’s Largest Exchange, acquired by Binance)"
								desc="The Crypto and DeFi ecosystem is missing some key infrastructure pieces. Notification is one such key infrastructure piece that is currently missing and I’m glad that the EPNS team is solving this problem."
							/>
							<AdvisorsCard
								name="DeFi Dad"
								imgSrc="/presskit/advisor_defi_dad.png"
								height="500px"
								width={320}
								title="ALL THINGS DEFI"
								desc="EPNS was a oh-shit light bulb moment for me. DeFi and crypto communications are a mess at the moment. The ability to share product updates, notifications related to invested assets (ie real-time CDP liquidation warnings), urgent messages about bugs, new liquidity mining opportunities, or simply engage with your users based on wallets actually holding exposure to the native asset of your protocol… is a huge step forward. We needed EPNS yesterday and that’s why I’m excited to be invested and working with this team."
							/>
							<AdvisorsCard
								name="Vivek Singh"
								imgSrc="/presskit/advisor_vivek_singh.png"
								height="500px"
								width={320}
								title="CO-FOUNDER, GITCOIN"
								desc="EPNS is building critical infrastructure for Web 3. Tinkering with the incentives around notifications has huge downstream potential as we look to build an internet which serves users, not corporations. Excited to see how Harsh and Richa’s vision unfolds."
							/>
							<AdvisorsCard
								name="Sandeep Nailwal"
								imgSrc="/presskit/advisor_sandeep_nailwal.png"
								height="500px"
								width={320}
								title="CO-FOUNDER, POLYGON"
								desc="The lack of notifications and communication of key information to users of Web3 protocols and services has been one of the greatest user experience barriers in Web3. I’m excited to be a part of this journey and to see Harsh and Richa pull this amazing feat off."
							/>
							<AdvisorsCard
								name="Kernel"
								imgSrc="/presskit/advisor_kernel.png"
								height="500px"
								width={320}
								title="A GITCOIN COLLECTIVE"
								desc="EPNS (Harsh and Richa, specifically) are shining stars who we are grateful to have in KERNEL.They are a thoughtful leadership team suited to explore how internet communication protocols (starting with notifications) can be implemented in more harmonious and humane ways."
							/>
						</ItemH>
					</CustomItem>
				</Content>
			</Section>
		</>
	);
};

const MissingPieceImg1 = styled.img`
	height: 320px;
	width: 320px;
	padding: 0px 0px 0px 200px;

	@media (max-width: 1140px) {
		padding: 0px 0px 0px 140px;
	}

	@media (max-width: 940px) {
		height: 220px;
		width: 220px;
		padding: 0px 0px 0px 70px;
	}

	@media (max-width: 768px) {
		padding: 0px;
	}
`;

const MissingPieceImg2 = styled.img`
	height: 400px;
	width: 400px;
	padding: 0px 200px 0px 0px;

	@media (max-width: 1140px) {
		padding: 0px 140px 0px 0px;
	}

	@media (max-width: 940px) {
		height: 300px;
		width: 300px;
		padding: 0px 70px 0px 0px;
	}

	@media (max-width: 768px) {
		padding: 0px;
		align-items: flex-end;
	}
`;

const OurHistoryImg = styled.img`
	height: auto;
	width: 98.6vw;
	max-width: 1600px;
	@media (max-width: 1200px) {
		width: 97.6vw;
	}
	@media (max-width: 900px) {
		width: 96.6vw;
	}
	@media (max-width: 600px) {
		width: 96.2vw;
	}
`;

const Img = styled.img`
	width: 30rem;
	@media (max-width: 1200px) {
		width: 28rem;
	}
	@media (max-width: 1040px) {
		width: 24rem;
	}
	@media (max-width: 768px) {
		width: 22rem;
	}
	@media (max-width: 600px) {
		width: 20rem;
	}
`;

const LinkImg = styled.img`
	height: 2em;
`;
const ExternalLink = styled.a`
	position: absolute;
	left: 11.5%;
	top: 17%;
	z-index: 5;
`;

const PressKitText = styled.div`
	color: ${(props) => props.color || "inherit"};
	font-style: ${(props) => props.fontStyle || "normal"};
	font-family: ${(props) => props.fontFamily || "Source sans pro"};
	text-transform: ${(props) => props.textTransform || "none"};
	text-align: ${(props) => props.textAlign || "center"};
	font-weight: ${(props) => props.fontWeight || "400"};
	font-size: ${(props) =>
		props.fontSize !== undefined ? props.fontSize + "px" : "24px"};
	line-height: ${(props) => props.lineHeight || "30px"};
	padding: ${(props) => props.padding || "0px"};
	letter-spacing: ${(props) => props.letterSpacing || "0.1em"};
	@media (max-width: 1200px) {
		font-size: ${(props) =>
			props.fontSize !== undefined
				? props.fontSize * 0.95 + "px"
				: "22px"};
	}
	@media (max-width: 1040px) {
		font-size: ${(props) =>
			props.fontSize !== undefined
				? props.fontSize * 0.9 + "px"
				: "20px"};
	}
	@media (max-width: 768px) {
		font-size: ${(props) =>
			props.fontSize !== undefined
				? props.fontSize * 0.85 + "px"
				: "18px"};
	}
	@media (max-width: 600px) {
		font-size: ${(props) =>
			props.fontSize !== undefined
				? props.fontSize * 0.75 + "px"
				: "16px"};
	}
`;

const SpeakerEvents = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	justify-content: center;
	flex-wrap: wrap;
`;

const SpeakerEvent = styled.a`
	display: flex;
	flex: 1;
	position: relative;
	margin: 20px;
	min-width: 220px;
	max-width: 340px;
	padding: 10px;
	background: #2f1a37;
	border-radius: 14px;
	box-shadow: 0px 0px 10px #00000085;
	text-decoration: none;

	&:hover {
		background: ${(props) => props.bg || "#fff"};
	}

	&:nth-child(3n + 1):before {
		content: "";
		display: block;
		position: absolute;
		top: -14px;
		left: 10px;
		right: -7px;
		height: 100%;
		background: url(snow/snowbig.svg);
		background-size: 120px auto;
		background-repeat: no-repeat;
	}

	&:nth-child(3n + 2):before {
		content: "";
		display: block;
		position: absolute;
		bottom: -24px;
		left: 6px;
		right: -6px;
		height: 40px;
		background: url(snow/snowmid.svg);
		background-size: 110px auto;
		background-repeat: no-repeat;
	}

	&:nth-child(3n + 3):before {
		content: "";
		display: block;
		position: absolute;
		bottom: -29px;
		left: calc(100% - 75px);
		right: 0px;
		height: 50px;
		background: url(snow/snowsmall.svg);
		background-size: 70px auto;
		background-repeat: no-repeat;
	}
`;

const SpeakerEventTabletOptional = styled(SpeakerEvent)`
	@media (max-width: 768px) {
		display: none;
	}
`;

const SpeakerEventDesktopOptional = styled(SpeakerEvent)`
	@media (min-width: 768px) {
		display: none;
	}
`;

const SpeakerEventImage = styled(Image)`
	filter: saturate(0) brightness(0) invert(1);

	${SpeakerEvent}:hover & {
		filter: saturate(1) brightness(1) invert(0);
	}
`;

export default PressKit;

export const CustomItem = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: ${(props) => props.wrap || "wrap"};
	position: relative;
	justify-content: center;
	background: ${(props) => props.bg || "transparent"};
	flex: ${(props) => props.flex || "1"};
	flex-direction: ${(props) => props.direction || "column"};
	align-self: ${(props) => props.self || "auto"};
	align-items: ${(props) => props.align || "center"};
	justify-content: ${(props) => props.justify || "center"};
	padding: ${(props) => props.padding || "0px"};
	margin: ${(props) => props.margin || "0px"};
	min-width: ${(props) => props.minWidth || "auto"};
	max-width: ${(props) => props.maxWidth || "initial"};
	font-size: ${(props) => props.size || "inherit"};
	text-align: ${(props) => props.textAlign || "inherit"};
	filter: ${(props) => props.filter || "none"};

	width: ${(props) => props.width || "auto"};
	height: ${(props) => props.height || "auto"};

	border: ${(props) => props.border || "none"};
	border-radius: ${(props) => props.radius || "0px"};
	overflow: ${(props) => props.overflow || "initial"};

	&:hover & {
		filter: ${(props) =>
			(props.filterHover
				? props.filterHover
				: props.hover
				? props.hover
				: "none") || "none"};
	}

	@media (max-width: 768px) {
		flex-direction: ${(props) =>
			(props.tabletDirection
				? props.tabletDirection
				: props.direction
				? props.direction
				: "initial") || "initial"};
		align-items: ${(props) =>
			(props.tabletAlign
				? props.tabletAlign
				: props.align
				? props.align
				: "center") || "center"};
		text-align: ${(props) =>
			(props.tabletTextAlign
				? props.tabletTextAlign
				: props.textAlign
				? props.textAlign
				: "inherit") || "inherit"};
	}
`;
