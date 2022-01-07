import React from "react";

import styled from "styled-components";
import { Item } from "components/SharedStyling";

function AdvisorsCard({ name, title, subtitle = "", imgSrc, desc, width }) {
	return (
		<Item margin="20px">
			<Item align="flex-start">
				<Item
					justify="flex-start"
					height="auto"
					minWidth={width}
					maxWidth={width}
					direction="column"
					padding="20px"
					border="10px solid #F9FBFB"
					radius="5px"
					style={{
						background: "rgba(249, 251, 251, 0.5)",
						boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					}}
				>
					<PersonImg src={imgSrc} height={250} />
					<Text
						color="#000"
						fontWeight="600"
						padding="5px"
						textTransform="capitalize"
					>
						{name}
					</Text>
					<Text
						color="#D01C85"
						fontWeight="600"
						padding="5px"
						textTransform="capitalize"
						lineHeight="25px"
						fontSize={20}
					>
						{title}
					</Text>
					{subtitle !== "" && (
						<Text
							color="#000"
							padding="5px"
							textTransform="capitalize"
							lineHeight="19px"
							fontSize={15}
						>
							{subtitle}
						</Text>
					)}
					<Item
						align="flex-start"
						style={{ flexFlow: "row-reverse" }}
					>
						<Item style={{ alignSelf: "flex-start" }}>
							<PersonImg src="/presskit/inverted_comma_right.png" />
						</Item>
						<Text
							color="#000"
							padding="5px"
							textTransform="capitalize"
							lineHeight="18px"
							textAlign="justify"
							fontSize={14}
							letterSpacing="0.05em"
						>
							{desc}
						</Text>
						<Item style={{ alignSelf: "flex-end" }}>
							<PersonImg src="/presskit/inverted_comma_left.png" />
						</Item>
					</Item>
				</Item>
				<Item
					margin="0px 0px 0px 20px"
					style={{
						boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
						minHeight: "0px",
						maxHeight: "0px",
						borderLeft: "20px solid transparent",
						borderRight: "20px solid transparent",
						borderTop: "25px solid #DBD6D3",
					}}
				></Item>
			</Item>
		</Item>
	);
}

const PersonImg = styled.img`
	height: ${(props) => props.height + "px" || "auto"};
	width: ${(props) => props.width + "px" || "auto"};
	margin: 10px 0px 0px 0px;
	@media (max-width: 1200px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.95 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.95 + "px" : "auto"};
	}
	@media (max-width: 1040px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.9 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.9 + "px" : "auto"};
	}
	@media (max-width: 768px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.85 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.85 + "px" : "auto"};
	}
	@media (max-width: 600px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.8 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.8 + "px" : "auto"};
	}
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

// Export Default
export default AdvisorsCard;
