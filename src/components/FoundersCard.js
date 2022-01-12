import React from "react";

import styled from "styled-components";
import { Item, ItemH, Anchor } from "components/SharedStyling";

function FoundersCard({
	name,
	title,
	imgSrc,
	desc,
	twitterUrl,
	mailId,
	linkedinUrl,
}) {
	return (
		<Item
			height="auto"
			align="center"
			padding="20px 25px"
			margin="10px 0px 20px 0px"
			style={{ placeSelf: "stretch" }}
		>
			<PersonImg src={imgSrc} height={340} width={340} />
			<Text color="#fff" fontWeight="600">
				{name}
			</Text>
			<Text
				color="#fff"
				fontWeight="600"
				padding="5px 0px"
				textTransform="uppercase"
				lineHeight="19px"
				fontSize={15}
			>
				{title}
			</Text>
			<Converse
				margin="0px"
				style={{
					background: "#fff",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					alignItems: "flex-start",
				}}
			>
				<ConverseInner style={{ alignSelf: "stretch" }}>
					<Text
						color="#635C5C"
						fontWeight="600"
						padding="15px"
						lineHeight="18px"
						fontSize={14}
					>
						{desc}
					</Text>
					<Item direction="row">
						<Anchor href={twitterUrl} target="_blank">
							<img
								src="/presskit/twitter_logo.png"
								alt="Twitter"
							/>
						</Anchor>
						<Anchor href={linkedinUrl} target="_blank">
							<img
								src="/presskit/linkedin_logo.png"
								alt="LinkedIn"
							/>
						</Anchor>
						<Anchor href={`mailto://${mailId}`} target="_blank">
							<img src="/presskit/mail_logo.png" alt="Mail Id" />
						</Anchor>
					</Item>
				</ConverseInner>
			</Converse>
		</Item>
	);
}

const Converse = styled(ItemH)`
	justify-content: center;
	align-items: center;
	column-gap: inherit;
	border: 1px solid #eee;
	border-radius: 6px;
	z-index: 1;

	&:before {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		border-left: 22px solid transparent;
		border-right: 22px solid transparent;
		border-top: 22px solid ##a9427e;
		bottom: -22px;
		left: 25px;
		z-index: 1;
	}
	&:after {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		border-top: 20px solid #fff;
		bottom: -20px;
		left: 24px;
		z-index: 2;
	}
`;

const ConverseInner = styled(ItemH)`
	align-items: center;
	column-gap: inherit;
	border-radius: 20px;
	overflow: hidden;
`;

const Text = styled.div`
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
				? props.fontSize * 0.8 + "px"
				: "16px"};
	}
`;

const PersonImg = styled.img`
	height: ${(props) => props.height + "px" || "auto"};
	width: ${(props) => props.width + "px" || "auto"};
	@media (max-width: 1200px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.9 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.9 + "px" : "auto"};
	}
	@media (max-width: 1040px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.8 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.8 + "px" : "auto"};
	}
	@media (max-width: 768px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.7 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.7 + "px" : "auto"};
	}
	@media (max-width: 600px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.6 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.6 + "px" : "auto"};
	}
`;

// Export Default
export default FoundersCard;
