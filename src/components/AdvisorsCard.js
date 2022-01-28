import React, { useState } from "react";

import styled from "styled-components";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { Item, ItemH, Button, Span } from "components/SharedStyling";

function AdvisorsCard({
	name,
	title,
	subtitle = "",
	imgSrc,
	desc,
	width,
	more = "",
}) {
	const [readMore, setReadMore] = useState(false);
	// let boxWidth = width;
	// if (window.innerWidth <= "600") {
	// 	boxWidth *= 0.8;
	// }
	// boxWidth += "px";
	return (
		<Item
			justify="stretch"
			align="stretch"
			minWidth="280px"
			margin="30px 20px 40px 20px"
			maxWidth="340px"
		>
			<Converse
				style={{
					background: "rgba(249, 251, 251, 0.5)",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					alignItems: "flex-start",
				}}
			>
				<ConverseInner>
					<Item
						justify="flex-start"
						height="auto"
						direction="column"
						padding="0px 10px 10px 10px"
						radius="5px"
					>
						<PersonImg src={imgSrc} height={220} />
						<Text
							color="#000"
							fontWeight={900}
							padding="5px 0px 0px"
							textTransform="capitalize"
							fontSize={23}
						>
							{name}
						</Text>
						<Text
							color="#D01C85"
							fontWeight={900}
							padding="0px 5px 5px"
							textTransform="capitalize"
							lineHeight="25px"
							fontSize={15}
						>
							{title}
						</Text>
						{/* {subtitle !== "" && (
							<Text
								color="#000"
								padding="0px 5px 10px 5px"
								margin="-6px 0px 0px 0px"
								textTransform="capitalize"
								lineHeight="19px"
								fontSize={12}
							>
								{subtitle}
							</Text>
						)} */}
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
								margin="0px 0px 10px"
								textTransform="capitalize"
								lineHeight="18px"
								fontSize={14}
								letterSpacing="0.05em"
							>
								{desc}
								{readMore && more}
							</Text>
							<Item style={{ alignSelf: "flex-end" }}>
								<PersonImg src="/presskit/inverted_comma_left.png" />
							</Item>
						</Item>
						<Item
							style={{ alignSelf: "flex-end" }}
							margin="5px 25px 5px 0px"
						>
							{!readMore && more !== "" && (
								<Button
									onClick={() => setReadMore(true)}
									bg="none"
									padding="5px 7px"
									radius="4px"
								>
									<Span
										margin="0px 5px 0px 0px"
										color="#D01C85"
										weight={900}
										size="0.8rem"
									>
										Read More
									</Span>
									<BsChevronDoubleRight
										size={11}
										margin="0px 5px"
										color="#D01C85"
									/>
								</Button>
							)}
							{readMore && more !== "" && (
								<Button
									onClick={() => setReadMore(false)}
									bg="none"
									padding="5px 7px"
									radius="4px"
								>
									<Span
										margin="0px 5px 0px 0px"
										color="#D01C85"
										weight={900}
										size="0.8rem"
									>
										Read Less
									</Span>
									<BsChevronDoubleLeft
										size={11}
										margin="0px 5px"
										color="#D01C85"
									/>
								</Button>
							)}
						</Item>
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
		border-top: 22px solid #eeeeee;
		bottom: -22px;
		left: 14px;
		z-index: 1;
	}
	&:after {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		border-left: 18px solid transparent;
		border-right: 18px solid transparent;
		border-top: 18px solid #fff;
		bottom: -18px;
		left: 16px;
		z-index: 2;
	}
`;

const ConverseInner = styled(ItemH)`
	align-items: center;
	column-gap: inherit;
	border-radius: 20px;
	overflow: hidden;
`;

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
		margin: auto;
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
	margin: ${(props) => props.margin || "0px"};
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
